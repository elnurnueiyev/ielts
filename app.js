// ============================================================
// IELTS Practice Hub — Application Logic
// ============================================================

// ============ State Management ============
let currentPage = 'home';
let currentTest = null;
let currentTestType = null; // 'reading' or 'listening'
let userAnswers = {};
let timerInterval = null;
let timeRemaining = 0;
let testStartTime = null;
let audioUtterance = null;
let isPlaying = false;
let currentResults = null;

// ============ Local Storage ============
const STORAGE_KEY = 'ielts_practice_history';

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveToHistory(record) {
  const history = getHistory();
  history.unshift(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

// ============ Page Navigation ============
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  currentPage = pageId;

  if (pageId === 'home') renderHomeStats();
  if (pageId === 'reading') renderTestList('reading');
  if (pageId === 'listening') renderTestList('listening');
  if (pageId === 'history') renderHistory();

  stopAudio();
  clearInterval(timerInterval);
  window.scrollTo(0, 0);
}

// ============ Home Page ============
function renderHomeStats() {
  const history = getHistory();
  const readingScores = history.filter(h => h.type === 'reading');
  const listeningScores = history.filter(h => h.type === 'listening');

  document.getElementById('stat-tests').textContent = history.length;
  document.getElementById('stat-reading').textContent = readingScores.length > 0
    ? (readingScores.reduce((a, b) => a + b.band, 0) / readingScores.length).toFixed(1)
    : '—';
  document.getElementById('stat-listening').textContent = listeningScores.length > 0
    ? (listeningScores.reduce((a, b) => a + b.band, 0) / listeningScores.length).toFixed(1)
    : '—';

  // Calculate streak
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const dates = [...new Set(history.map(h => new Date(h.date).toDateString()))];
  let streak = 0;
  if (dates.includes(today) || dates.includes(yesterday)) {
    streak = 1;
    let checkDate = dates.includes(today) ? new Date() : new Date(Date.now() - 86400000);
    for (let i = 1; i < 365; i++) {
      checkDate = new Date(checkDate.getTime() - 86400000);
      if (dates.includes(checkDate.toDateString())) {
        streak++;
      } else {
        break;
      }
    }
  }
  document.getElementById('stat-streak').textContent = streak;
}

// ============ Test List ============
function renderTestList(type) {
  const container = document.getElementById(type + '-test-list');
  const tests = type === 'reading' ? READING_TESTS : LISTENING_TESTS;
  const history = getHistory();

  container.innerHTML = tests.map(test => {
    const completed = history.find(h => h.testId === test.id);
    return `
      <div class="test-card" onclick="startTest('${type}', '${test.id}')">
        <h3>${test.title}</h3>
        <div class="test-type">${test.type}</div>
        <div class="test-details">
          <span>⏱ ${Math.round(test.timeLimit / 60)} min</span>
          <span>📝 ${countQuestions(test)} questions</span>
        </div>
        ${completed ? `<span class="completed-badge">Best: Band ${completed.band.toFixed(1)}</span>` : ''}
      </div>
    `;
  }).join('');
}

function countQuestions(test) {
  let count = 0;
  test.questions.forEach(q => {
    if (q.items) count += q.items.length;
    else count += 1;
  });
  return count;
}

// ============ Start Test ============
function startTest(type, testId) {
  currentTestType = type;
  currentTest = (type === 'reading' ? READING_TESTS : LISTENING_TESTS).find(t => t.id === testId);
  userAnswers = {};
  timeRemaining = currentTest.timeLimit;
  testStartTime = Date.now();

  if (type === 'reading') {
    showReadingTest();
  } else {
    showListeningTest();
  }
}

// ============ Reading Test ============
function showReadingTest() {
  showPage('reading-test');
  document.getElementById('reading-test-title').textContent = currentTest.title;
  document.getElementById('reading-test-type').textContent = currentTest.type;
  document.getElementById('reading-passage').innerHTML = currentTest.passage
    .split('\n\n')
    .map(p => `<p>${p}</p>`)
    .join('');

  renderReadingQuestions();
  startTimer('reading-timer', timeRemaining);
}

function renderReadingQuestions() {
  const container = document.getElementById('reading-questions');
  let html = '';
  let qNum = 1;

  currentTest.questions.forEach(q => {
    html += `<div class="question-block" id="q-${q.id}">`;
    html += `<div class="question-text"><span class="question-number">${qNum}</span><span class="q-text">${q.question}</span></div>`;

    if (q.type === 'mcq') {
      html += '<ul class="options-list">';
      q.options.forEach((opt, i) => {
        html += `<li onclick="selectMCQ('${q.id}', ${i})" id="opt-${q.id}-${i}">${String.fromCharCode(65 + i)}. ${opt}</li>`;
      });
      html += '</ul>';
    } else if (q.type === 'tfng') {
      html += '<div class="tfng-buttons">';
      ['True', 'False', 'Not Given'].forEach(val => {
        html += `<button class="tfng-btn" onclick="selectTFNG('${q.id}', '${val}')" id="tfng-${q.id}-${val}">${val}</button>`;
      });
      html += '</div>';
    } else if (q.type === 'summary') {
      html += '<div class="summary-text">';
      const parts = q.summary.split(/(\(\d+\) ________)/);
      parts.forEach(part => {
        if (part.match(/\(\d+\)/)) {
          const num = part.match(/\d+/)[0];
          html += `<span class="summary-blank" id="summary-${q.id}-${num}" onclick="focusSummaryBlank('${q.id}', ${num})">(${num}) ________</span>`;
        } else {
          html += part;
        }
      });
      html += '</div>';
      q.answers.forEach((_, i) => {
        html += `<input type="text" class="blank-input" id="summary-input-${q.id}-${i}" placeholder="Answer ${i + 1}" onchange="fillSummaryBlank('${q.id}', ${i}, this.value)" style="display:none;">`;
      });
    } else if (q.type === 'matching') {
      const allAnswers = [...new Set(q.items.map(item => item.answer))];
      q.items.forEach((item, i) => {
        html += `<div class="matching-item">`;
        html += `<span class="match-text">${item.text}</span>`;
        html += `<select class="match-select" id="match-${q.id}-${i}" onchange="selectMatching('${q.id}', ${i}, this.value)">`;
        html += `<option value="">Select...</option>`;
        allAnswers.forEach(ans => {
          html += `<option value="${ans}">${ans}</option>`;
        });
        html += `</select></div>`;
      });
    } else if (q.type === 'short-answer') {
      q.items.forEach((item, i) => {
        html += `<div class="short-answer-item">`;
        html += `<div class="sa-question">${item.question}</div>`;
        html += `<input type="text" class="blank-input" id="sa-${q.id}-${i}" placeholder="Your answer" style="width:100%;">`;
        html += `</div>`;
      });
    }

    html += `<div class="explanation-box" id="exp-${q.id}" style="display:none;"></div>`;
    html += '</div>';
    qNum++;
  });

  container.innerHTML = html;
  updateProgress('reading');
}

// ============ Listening Test ============
function showListeningTest() {
  showPage('listening-test');
  document.getElementById('listening-test-title').textContent = currentTest.title;
  document.getElementById('listening-test-type').textContent = currentTest.type;
  document.getElementById('transcript-panel').style.display = 'none';
  document.getElementById('audio-status').textContent = 'Click Play to start the audio';
  document.getElementById('btn-play').textContent = '▶ Play';

  renderListeningQuestions();
  startTimer('listening-timer', timeRemaining);
}

function renderListeningQuestions() {
  const container = document.getElementById('listening-questions');
  let html = '';
  let qNum = 1;

  currentTest.questions.forEach(q => {
    html += `<div class="question-block" id="q-${q.id}">`;
    html += `<div class="question-text"><span class="question-number">${qNum}</span><span class="q-text">${q.question}</span></div>`;

    if (q.type === 'mcq') {
      html += '<ul class="options-list">';
      q.options.forEach((opt, i) => {
        html += `<li onclick="selectMCQ('${q.id}', ${i})" id="opt-${q.id}-${i}">${String.fromCharCode(65 + i)}. ${opt}</li>`;
      });
      html += '</ul>';
    } else if (q.type === 'fill-blank') {
      q.items.forEach((item, i) => {
        html += `<div class="fill-blank-item">`;
        html += `<div class="blank-label">${item.before}</div>`;
        html += `<input type="text" class="blank-input" id="fb-${q.id}-${i}" placeholder="Your answer">`;
        html += `</div>`;
      });
    }

    html += `<div class="explanation-box" id="exp-${q.id}" style="display:none;"></div>`;
    html += '</div>';
    qNum++;
  });

  container.innerHTML = html;
  updateProgress('listening');
}

// ============ Audio Playback (Web Speech API) ============
function toggleAudio() {
  if (isPlaying) {
    stopAudio();
  } else {
    playAudio();
  }
}

function playAudio() {
  if (!('speechSynthesis' in window)) {
    document.getElementById('audio-status').textContent = 'Sorry, your browser does not support audio playback.';
    return;
  }

  window.speechSynthesis.cancel();

  const speed = parseFloat(document.getElementById('audio-speed').value);
  audioUtterance = new SpeechSynthesisUtterance(currentTest.audioText);
  audioUtterance.rate = speed;
  audioUtterance.pitch = 1;
  audioUtterance.volume = 1;

  // Try to use a good English voice
  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) ||
                       voices.find(v => v.lang.startsWith('en'));
  if (englishVoice) audioUtterance.voice = englishVoice;

  audioUtterance.onend = () => {
    isPlaying = false;
    document.getElementById('btn-play').textContent = '▶ Play';
    document.getElementById('audio-status').textContent = 'Audio finished. You can replay or submit your answers.';
  };

  audioUtterance.onerror = () => {
    isPlaying = false;
    document.getElementById('btn-play').textContent = '▶ Play';
    document.getElementById('audio-status').textContent = 'Audio playback encountered an error.';
  };

  window.speechSynthesis.speak(audioUtterance);
  isPlaying = true;
  document.getElementById('btn-play').textContent = '⏸ Pause';
  document.getElementById('audio-status').textContent = 'Playing...';
}

function stopAudio() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isPlaying = false;
  const btn = document.getElementById('btn-play');
  if (btn) btn.textContent = '▶ Play';
  const status = document.getElementById('audio-status');
  if (status && !currentResults) status.textContent = 'Audio stopped.';
}

function replayAudio() {
  stopAudio();
  setTimeout(playAudio, 200);
}

function setAudioSpeed() {
  if (isPlaying) {
    const speed = parseFloat(document.getElementById('audio-speed').value);
    window.speechSynthesis.cancel();
    audioUtterance = new SpeechSynthesisUtterance(currentTest.audioText);
    audioUtterance.rate = speed;
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) ||
                         voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) audioUtterance.voice = englishVoice;
    audioUtterance.onend = () => {
      isPlaying = false;
      document.getElementById('btn-play').textContent = '▶ Play';
      document.getElementById('audio-status').textContent = 'Audio finished.';
    };
    window.speechSynthesis.speak(audioUtterance);
    isPlaying = true;
    document.getElementById('btn-play').textContent = '⏸ Pause';
  }
}

// ============ Timer ============
function startTimer(timerId, seconds) {
  clearInterval(timerInterval);
  timeRemaining = seconds;
  updateTimerDisplay(timerId);

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay(timerId);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      if (currentTestType === 'reading') {
        submitReadingTest();
      } else {
        submitListeningTest();
      }
    }
  }, 1000);
}

function updateTimerDisplay(timerId) {
  const el = document.getElementById(timerId);
  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  el.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

  el.classList.remove('warning', 'danger');
  if (timeRemaining <= 60) {
    el.classList.add('danger');
  } else if (timeRemaining <= 180) {
    el.classList.add('warning');
  }
}

// ============ Answer Selection ============
function selectMCQ(qId, optionIndex) {
  userAnswers[qId] = optionIndex;
  const q = currentTest.questions.find(q => q.id === qId);
  q.options.forEach((_, i) => {
    document.getElementById(`opt-${qId}-${i}`).classList.remove('selected');
  });
  document.getElementById(`opt-${qId}-${optionIndex}`).classList.add('selected');
  updateProgress(currentTestType);
}

function selectTFNG(qId, value) {
  userAnswers[qId] = value;
  ['True', 'False', 'Not Given'].forEach(v => {
    document.getElementById(`tfng-${qId}-${v}`).classList.remove('selected');
  });
  document.getElementById(`tfng-${qId}-${value}`).classList.add('selected');
  updateProgress(currentTestType);
}

function selectMatching(qId, itemIndex, value) {
  if (!userAnswers[qId]) userAnswers[qId] = {};
  userAnswers[qId][itemIndex] = value;
  updateProgress(currentTestType);
}

function fillSummaryBlank(qId, index, value) {
  if (!userAnswers[qId]) userAnswers[qId] = {};
  userAnswers[qId][index] = value.trim();
  const blank = document.getElementById(`summary-${qId}-${index + 1}`);
  if (blank) {
    blank.textContent = value.trim() || `(${index + 1}) ________`;
    blank.classList.add('filled');
  }
  updateProgress(currentTestType);
}

function focusSummaryBlank(qId, num) {
  const input = document.getElementById(`summary-input-${qId}-${num - 1}`);
  if (input) {
    input.style.display = 'inline-block';
    input.focus();
  }
}

// ============ Progress ============
function updateProgress(type) {
  const total = countQuestions(currentTest);
  let answered = 0;

  currentTest.questions.forEach(q => {
    if (q.type === 'mcq' || q.type === 'tfng') {
      if (userAnswers[q.id] !== undefined) answered++;
    } else if (q.type === 'summary') {
      if (userAnswers[q.id]) {
        const filled = Object.keys(userAnswers[q.id]).filter(k => userAnswers[q.id][k]).length;
        if (filled >= q.answers.length) answered++;
      }
    } else if (q.type === 'matching') {
      if (userAnswers[q.id]) {
        const filled = Object.keys(userAnswers[q.id]).filter(k => userAnswers[q.id][k]).length;
        if (filled >= q.items.length) answered++;
      }
    } else if (q.type === 'short-answer') {
      if (userAnswers[q.id]) {
        const filled = Object.keys(userAnswers[q.id]).filter(k => userAnswers[q.id][k]).length;
        if (filled >= q.items.length) answered++;
      }
    } else if (q.type === 'fill-blank') {
      if (userAnswers[q.id]) {
        const filled = Object.keys(userAnswers[q.id]).filter(k => userAnswers[q.id][k]).length;
        if (filled >= q.items.length) answered++;
      }
    }
  });

  const progressEl = document.getElementById(type + '-progress');
  if (progressEl) {
    progressEl.textContent = `${answered} / ${total} answered`;
  }
}

// ============ Submit & Grading ============
function submitReadingTest() {
  clearInterval(timerInterval);
  const results = gradeTest();
  showResults(results);
}

function submitListeningTest() {
  clearInterval(timerInterval);
  stopAudio();
  const results = gradeTest();
  showResults(results);
}

function gradeTest() {
  let correct = 0;
  let total = 0;
  const review = [];

  currentTest.questions.forEach(q => {
    if (q.type === 'mcq') {
      total++;
      const userAns = userAnswers[q.id];
      const isCorrect = userAns === q.answer;
      if (isCorrect) correct++;

      // Highlight
      q.options.forEach((_, i) => {
        const el = document.getElementById(`opt-${q.id}-${i}`);
        el.classList.add('disabled');
        if (i === q.answer) el.classList.add('correct');
        if (i === userAns && !isCorrect) el.classList.add('incorrect');
      });

      review.push({
        question: q.question,
        userAnswer: userAns !== undefined ? q.options[userAns] : 'No answer',
        correctAnswer: q.options[q.answer],
        isCorrect,
        explanation: q.explanation
      });

    } else if (q.type === 'tfng') {
      total++;
      const userAns = userAnswers[q.id];
      const isCorrect = userAns === q.answer;
      if (isCorrect) correct++;

      ['True', 'False', 'Not Given'].forEach(v => {
        const el = document.getElementById(`tfng-${q.id}-${v}`);
        el.classList.add('disabled');
        if (v === q.answer) el.classList.add('correct');
        if (v === userAns && !isCorrect) el.classList.add('incorrect');
      });

      review.push({
        question: q.question,
        userAnswer: userAns || 'No answer',
        correctAnswer: q.answer,
        isCorrect,
        explanation: q.explanation
      });

    } else if (q.type === 'summary') {
      q.answers.forEach((ans, i) => {
        total++;
        const userAns = (userAnswers[q.id] && userAnswers[q.id][i]) || '';
        const isCorrect = userAns.toLowerCase().trim() === ans.toLowerCase().trim();
        if (isCorrect) correct++;

        const blank = document.getElementById(`summary-${q.id}-${i + 1}`);
        if (blank) {
          blank.textContent = userAns || '____';
          blank.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        const input = document.getElementById(`summary-input-${q.id}-${i}`);
        if (input) input.style.display = 'none';

        review.push({
          question: `Summary blank ${i + 1}`,
          userAnswer: userAns || 'No answer',
          correctAnswer: ans,
          isCorrect,
          explanation: q.explanation
        });
      });

    } else if (q.type === 'matching') {
      q.items.forEach((item, i) => {
        total++;
        const userAns = (userAnswers[q.id] && userAnswers[q.id][i]) || '';
        const isCorrect = userAns === item.answer;
        if (isCorrect) correct++;

        const select = document.getElementById(`match-${q.id}-${i}`);
        if (select) {
          select.classList.add('disabled');
          select.classList.add(isCorrect ? 'correct' : 'incorrect');
        }

        review.push({
          question: item.text,
          userAnswer: userAns || 'No answer',
          correctAnswer: item.answer,
          isCorrect,
          explanation: q.explanation
        });
      });

    } else if (q.type === 'short-answer') {
      q.items.forEach((item, i) => {
        total++;
        const userAns = (userAnswers[q.id] && userAnswers[q.id][i]) || '';
        const isCorrect = userAns.toLowerCase().trim() === item.answer.toLowerCase().trim();
        if (isCorrect) correct++;

        const input = document.getElementById(`sa-${q.id}-${i}`);
        if (input) {
          input.classList.add('disabled');
          input.classList.add(isCorrect ? 'correct' : 'incorrect');
        }

        review.push({
          question: item.question,
          userAnswer: userAns || 'No answer',
          correctAnswer: item.answer,
          isCorrect,
          explanation: q.explanation
        });
      });

    } else if (q.type === 'fill-blank') {
      q.items.forEach((item, i) => {
        total++;
        const userAns = (userAnswers[q.id] && userAnswers[q.id][i]) || '';
        const isCorrect = userAns.toLowerCase().trim() === item.answer.toLowerCase().trim();
        if (isCorrect) correct++;

        const input = document.getElementById(`fb-${q.id}-${i}`);
        if (input) {
          input.classList.add('disabled');
          input.classList.add(isCorrect ? 'correct' : 'incorrect');
        }

        review.push({
          question: item.before,
          userAnswer: userAns || 'No answer',
          correctAnswer: item.answer,
          isCorrect,
          explanation: q.explanation
        });
      });
    }
  });

  // Show explanations
  currentTest.questions.forEach(q => {
    const expEl = document.getElementById(`exp-${q.id}`);
    if (expEl) {
      expEl.style.display = 'block';
      expEl.textContent = '💡 ' + q.explanation;
    }
  });

  // Show transcript for listening
  if (currentTestType === 'listening') {
    document.getElementById('transcript-panel').style.display = 'block';
    document.getElementById('transcript-content').textContent = currentTest.audioText;
  }

  // Calculate band score
  const bandTable = currentTestType === 'reading' ? READING_BAND_TABLE : LISTENING_BAND_TABLE;
  const band = bandTable[correct] || 4.0;

  // Save to history
  const timeTaken = Math.round((Date.now() - testStartTime) / 1000);
  saveToHistory({
    testId: currentTest.id,
    title: currentTest.title,
    type: currentTestType,
    score: correct,
    total,
    band,
    date: new Date().toISOString(),
    timeTaken
  });

  return { correct, total, band, review };
}

// ============ Results Page ============
function showResults(results) {
  currentResults = results;
  showPage('results');

  document.getElementById('score-value').textContent = `${results.correct}/${results.total}`;
  document.getElementById('score-band').textContent = `Band ${results.band.toFixed(1)}`;

  const percentage = Math.round((results.correct / results.total) * 100);
  const timeTaken = Math.round((Date.now() - testStartTime) / 1000);
  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;

  document.getElementById('results-summary').innerHTML = `
    <div class="summary-card">
      <div class="summary-value" style="color: var(--secondary)">${percentage}%</div>
      <div class="summary-label">Accuracy</div>
    </div>
    <div class="summary-card">
      <div class="summary-value">${mins}:${secs.toString().padStart(2, '0')}</div>
      <div class="summary-label">Time Taken</div>
    </div>
    <div class="summary-card">
      <div class="summary-value" style="color: var(--primary)">${results.band.toFixed(1)}</div>
      <div class="summary-label">Est. Band Score</div>
    </div>
  `;

  document.getElementById('results-review').innerHTML = `
    <h3 style="margin-bottom: 16px;">Answer Review</h3>
    ${results.review.map((r, i) => `
      <div class="review-item">
        <div class="review-question">${i + 1}. ${r.question}</div>
        <div class="review-answer ${r.isCorrect ? 'correct' : 'incorrect'}">
          ${r.isCorrect ? '✓' : '✗'} Your answer: <strong>${r.userAnswer}</strong>
        </div>
        ${!r.isCorrect ? `<div class="review-answer correct">Correct answer: <strong>${r.correctAnswer}</strong></div>` : ''}
        <div class="review-explanation">${r.explanation}</div>
      </div>
    `).join('')}
  `;
}

function retakeTest() {
  if (currentTestType && currentTest) {
    startTest(currentTestType, currentTest.id);
  }
}

// ============ History Page ============
function renderHistory() {
  const history = getHistory();
  const container = document.getElementById('history-content');

  if (history.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <h3>No tests completed yet</h3>
        <p>Take your first practice test to start tracking your progress!</p>
      </div>
    `;
    return;
  }

  const bandClass = band => {
    if (band >= 7.0) return 'band-high';
    if (band >= 5.5) return 'band-mid';
    return 'band-low';
  };

  container.innerHTML = `
    <table class="history-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Test</th>
          <th>Type</th>
          <th>Score</th>
          <th>Band</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        ${history.map(h => {
          const date = new Date(h.date);
          const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const mins = Math.floor(h.timeTaken / 60);
          const secs = h.timeTaken % 60;
          return `
            <tr>
              <td>${dateStr}</td>
              <td>${h.title}</td>
              <td>${h.type === 'reading' ? '📖 Reading' : '🎧 Listening'}</td>
              <td>${h.score}/${h.total}</td>
              <td><span class="band-badge ${bandClass(h.band)}">${h.band.toFixed(1)}</span></td>
              <td>${mins}:${secs.toString().padStart(2, '0')}</td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}

// ============ Initialize ============
document.addEventListener('DOMContentLoaded', () => {
  // Preload voices for speech synthesis
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  showPage('home');
});

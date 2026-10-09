// ============================================================
// IELTS Practice Site — Test Data
// Reading passages, listening transcripts, and questions
// ============================================================

const READING_TESTS = [
  {
    id: "reading-1",
    title: "The History of Coffee",
    type: "Academic Reading — Passage 1",
    timeLimit: 1200, // 20 minutes
    passage: `Coffee is one of the world's most popular beverages, with an estimated two billion cups consumed every day. Its history, however, begins not in a laboratory or a factory, but in the highlands of Ethiopia, where legend has it that a goat herder named Kaldi first discovered the plant's stimulating properties.

According to the legend, Kaldi noticed that his goats became unusually energetic after eating the berries of a certain bush. Curious, he tried the berries himself and felt a similar surge of energy. He brought the berries to a local monastery, but the monks, disapproving of the berries' effects, threw them into a fire. The aroma of the roasting beans was so enticing that the monks quickly pulled them from the flames, crushed them, and dissolved them in hot water — creating the first cup of coffee.

From Ethiopia, coffee spread to the Arabian Peninsula, where it was cultivated on a large scale for the first time. By the fifteenth century, coffee was being grown in Yemen, and the port city of Mocha became the centre of the coffee trade. The Arabs closely guarded their monopoly on coffee production, and it was forbidden to export fertile beans. Nevertheless, in the early seventeenth century, a Muslim pilgrim named Baba Budan smuggled coffee seeds out of Yemen by strapping them to his chest, and cultivation soon spread to India and later to Java in Indonesia.

Coffee arrived in Europe in the seventeenth century, carried by Venetian traders. Initially met with suspicion — some called it "the bitter invention of Satan" — coffee quickly gained popularity. Coffee houses sprang up across London, Paris, and Vienna, becoming centres of intellectual exchange. In London, coffee houses charged a penny for entry and were nicknamed "penny universities" because, for the price of a cup of coffee, a person could engage in stimulating conversation and learn the latest news.

The beverage's journey to the Americas began in the early eighteenth century. A French naval officer, Gabriel de Clieu, obtained a coffee seedling from the royal gardens in Paris and transported it to the Caribbean island of Martinique, despite a difficult voyage that included storms and a pirate attack. The seedling thrived, and within fifty years, coffee plantations had spread throughout Central and South America. Today, Brazil is the world's largest coffee producer, accounting for roughly one-third of global production.

The modern coffee industry is vast and complex. Coffee is grown in more than seventy countries, primarily in the "Bean Belt" between the Tropics of Cancer and Capricorn. The two main species cultivated are Arabica, which accounts for about sixty percent of production and is prized for its smoother flavour, and Robusta, which contains more caffeine and is often used in instant coffee and espresso blends. The industry employs an estimated 125 million people worldwide, from smallholder farmers to baristas in urban cafés.

In recent years, the coffee industry has faced significant challenges. Climate change is altering the conditions under which coffee can be grown, with rising temperatures threatening yields in traditional growing regions. At the same time, consumer demand for ethically sourced and sustainably produced coffee has grown, leading to the rise of fair-trade certification and direct-trade relationships between farmers and roasters. As the industry adapts to these pressures, one thing remains certain: coffee's remarkable journey from an Ethiopian goat herder's discovery to a global obsession shows no sign of slowing.`,
    questions: [
      {
        id: "r1-q1",
        type: "mcq",
        question: "According to the legend, how did Kaldi discover the effects of coffee?",
        options: [
          "He read about the berries in an ancient text.",
          "He observed his goats eating the berries and becoming energetic.",
          "A monk gave him the berries to try.",
          "He found the berries growing near a monastery."
        ],
        answer: 1,
        explanation: "The passage states that Kaldi noticed his goats became unusually energetic after eating the berries of a certain bush."
      },
      {
        id: "r1-q2",
        type: "mcq",
        question: "What did the monks do with the coffee berries after Kaldi brought them to the monastery?",
        options: [
          "They planted them in the monastery garden.",
          "They sold them to Venetian traders.",
          "They threw them into a fire.",
          "They dissolved them in hot water immediately."
        ],
        answer: 2,
        explanation: "The monks threw the berries into a fire, but the aroma of the roasting beans enticed them to pull them out and make the first cup of coffee."
      },
      {
        id: "r1-q3",
        type: "tfng",
        question: "The Arabs allowed coffee seeds to be freely exported from Yemen.",
        answer: false,
        explanation: "The passage states that the Arabs closely guarded their monopoly and it was forbidden to export fertile beans."
      },
      {
        id: "r1-q4",
        type: "tfng",
        question: "Baba Budan smuggled coffee seeds out of Yemen by hiding them in his clothing.",
        answer: true,
        explanation: "The passage says Baba Budan strapped the seeds to his chest to smuggle them out."
      },
      {
        id: "r1-q5",
        type: "tfng",
        question: "Coffee was immediately accepted by everyone in Europe when it first arrived.",
        answer: false,
        explanation: "The passage says coffee was initially met with suspicion, with some calling it 'the bitter invention of Satan.'"
      },
      {
        id: "r1-q6",
        type: "tfng",
        question: "Gabriel de Clieu transported a coffee seedling from Paris to Martinique.",
        answer: true,
        explanation: "The passage states that Gabriel de Clieu obtained a seedling from the royal gardens in Paris and transported it to Martinique."
      },
      {
        id: "r1-q7",
        type: "tfng",
        question: "Robusta coffee is known for its smoother flavour compared to Arabica.",
        answer: false,
        explanation: "The passage states that Arabica is prized for its smoother flavour, while Robusta contains more caffeine."
      },
      {
        id: "r1-q8",
        type: "summary",
        question: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        summary: "Coffee was first discovered in Ethiopia. From there, it spread to the Arabian Peninsula, where Yemen became the centre of the coffee trade. The port city of (1) ________ became famous for coffee. Coffee reached Europe in the seventeenth century through (2) ________ traders. In London, coffee houses were called 'penny universities' because for the price of a coffee, customers could enjoy (3) ________ and learn the news. Today, the two main coffee species are Arabica and (4) ________. The coffee industry faces challenges from (5) ________ change and the need for sustainable production.",
        answers: ["Mocha", "Venetian", "conversation", "Robusta", "climate"],
        explanation: "All answers are found in the passage: Mocha (paragraph 2), Venetian (paragraph 3), conversation (paragraph 3), Robusta (paragraph 4), climate (paragraph 5)."
      },
      {
        id: "r1-q9",
        type: "matching",
        question: "Which paragraph contains the following information?",
        items: [
          { text: "The role of coffee houses in European intellectual life", answer: "Paragraph C" },
          { text: "The two main species of coffee plant", answer: "Paragraph E" },
          { text: "The spread of coffee cultivation to the Americas", answer: "Paragraph D" },
          { text: "The legend of coffee's discovery", answer: "Paragraph A" }
        ],
        explanation: "Paragraph A covers the legend, Paragraph C covers coffee houses, Paragraph D covers the Americas, and Paragraph E covers Arabica and Robusta."
      },
      {
        id: "r1-q10",
        type: "short-answer",
        question: "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
        items: [
          { question: "How many cups of coffee are consumed worldwide every day?", answer: "two billion" },
          { question: "What is the name of the region where coffee is primarily grown?", answer: "Bean Belt" },
          { question: "How many people does the coffee industry employ worldwide?", answer: "125 million" }
        ],
        explanation: "Two billion cups (paragraph 1), Bean Belt (paragraph 4), 125 million people (paragraph 4)."
      }
    ]
  },
  {
    id: "reading-2",
    title: "Urban Green Spaces",
    type: "Academic Reading — Passage 2",
    timeLimit: 1200,
    passage: `In an era of rapid urbanisation, the value of green spaces within cities has never been more apparent. Parks, gardens, tree-lined streets, and urban forests provide a wide range of benefits to city dwellers, from improving mental health to mitigating the effects of climate change. As cities around the world continue to grow, urban planners and policymakers are increasingly recognising the need to integrate nature into the urban fabric.

The health benefits of urban green spaces are well documented. Numerous studies have shown that access to parks and natural environments reduces stress, lowers blood pressure, and improves overall mental wellbeing. A landmark study conducted in Japan found that spending time in forests — a practice known as "shinrin-yoku" or "forest bathing" — significantly reduces levels of cortisol, the hormone associated with stress. Similarly, research from the University of Exeter in the United Kingdom found that people who live within 300 metres of a green space report lower levels of mental distress, even after controlling for income, education, and employment status.

Green spaces also play a crucial role in addressing environmental challenges in cities. Urban trees and vegetation help to reduce the "urban heat island" effect, a phenomenon in which cities experience significantly higher temperatures than surrounding rural areas. Through the process of evapotranspiration, trees release water vapour into the air, which cools the surrounding environment. A study by the University of Manchester found that increasing tree canopy cover in a city by just ten percent could reduce surface temperatures by up to four degrees Celsius.

In addition to cooling cities, green spaces help manage stormwater runoff, which is a growing concern as climate change leads to more frequent and intense rainfall events. Traditional urban drainage systems are often overwhelmed by heavy rain, leading to flooding. Green infrastructure — such as rain gardens, green roofs, and permeable pavements — absorbs and filters rainwater, reducing the burden on drainage systems and improving water quality. Cities like Singapore have embraced this approach, integrating extensive green infrastructure into their urban planning and earning a reputation as a "City in a Garden."

The social benefits of green spaces are equally significant. Parks and public gardens serve as communal spaces where people from diverse backgrounds can interact, fostering social cohesion and a sense of community. Research has shown that neighbourhoods with well-maintained green spaces experience lower rates of crime and stronger social ties among residents. In Medellín, Colombia, the creation of public parks and green corridors in formerly violent neighbourhoods has been credited with contributing to a dramatic reduction in crime rates.

Despite these benefits, many cities are losing green spaces to development. The World Health Organization recommends that urban residents have access to at least 0.5 hectares of green space within 300 metres of their homes, but many cities fall short of this standard. In some rapidly growing cities in Asia and Africa, green space per capita has declined by more than fifty percent in just two decades. Urban planners face the difficult challenge of balancing the demand for housing and infrastructure with the need to preserve and expand green areas.

Innovative solutions are emerging to address this challenge. Cities like New York and Melbourne have adopted "green infrastructure" plans that require new developments to include green roofs, rain gardens, or other natural features. Singapore's "Park Connector Network" links parks and green spaces across the city with a network of walking and cycling paths, making nature accessible to all residents. In Paris, the city government has committed to planting 170,000 trees by 2026 and has transformed former car parks into "urban forests."

The evidence is clear: urban green spaces are not a luxury but a necessity. As cities continue to grow and the impacts of climate change intensify, the integration of nature into urban planning will be essential for creating liveable, resilient, and healthy cities for future generations.`,
    questions: [
      {
        id: "r2-q1",
        type: "mcq",
        question: "According to the passage, what is the 'urban heat island' effect?",
        options: [
          "The tendency of cities to have more parks than rural areas.",
          "The phenomenon where cities are significantly warmer than surrounding rural areas.",
          "The concentration of heat in industrial zones within cities.",
          "The effect of heat on urban wildlife populations."
        ],
        answer: 1,
        explanation: "The passage defines the urban heat island effect as a phenomenon in which cities experience significantly higher temperatures than surrounding rural areas."
      },
      {
        id: "r2-q2",
        type: "mcq",
        question: "What did the University of Exeter study find about people living near green spaces?",
        options: [
          "They had higher incomes than those living further away.",
          "They reported lower levels of mental distress.",
          "They spent more time exercising outdoors.",
          "They were more likely to own property."
        ],
        answer: 1,
        explanation: "The study found that people living within 300 metres of a green space reported lower levels of mental distress, even after controlling for socioeconomic factors."
      },
      {
        id: "r2-q3",
        type: "tfng",
        question: "The practice of 'shinrin-yoku' originated in the United Kingdom.",
        answer: false,
        explanation: "The passage states that shinrin-yoku, or 'forest bathing,' is a practice from Japan."
      },
      {
        id: "r2-q4",
        type: "tfng",
        question: "Green infrastructure can help reduce the burden on urban drainage systems.",
        answer: true,
        explanation: "The passage states that green infrastructure absorbs and filters rainwater, reducing the burden on drainage systems."
      },
      {
        id: "r2-q5",
        type: "tfng",
        question: "The World Health Organization recommends at least one hectare of green space per urban resident.",
        answer: false,
        explanation: "The WHO recommends at least 0.5 hectares of green space within 300 metres of homes, not one hectare."
      },
      {
        id: "r2-q6",
        type: "tfng",
        question: "In Medellín, Colombia, the creation of public parks has been linked to a reduction in crime.",
        answer: true,
        explanation: "The passage states that the creation of public parks and green corridors in formerly violent neighbourhoods has been credited with contributing to a dramatic reduction in crime rates."
      },
      {
        id: "r2-q7",
        type: "matching",
        question: "Which paragraph contains the following information?",
        items: [
          { text: "The role of green spaces in bringing communities together", answer: "Paragraph D" },
          { text: "Examples of cities implementing innovative green solutions", answer: "Paragraph F" },
          { text: "The process by which trees cool the urban environment", answer: "Paragraph C" },
          { text: "The decline of green space in some rapidly growing cities", answer: "Paragraph E" }
        ],
        explanation: "Paragraph D covers social benefits, Paragraph C covers evapotranspiration, Paragraph E covers declining green space, and Paragraph F covers innovative solutions."
      },
      {
        id: "r2-q8",
        type: "summary",
        question: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        summary: "Urban green spaces provide significant health benefits, including reduced stress and improved mental wellbeing. They also help cities address environmental challenges. Trees cool cities through (1) ________, which releases water vapour into the air. Green infrastructure, such as rain gardens and green roofs, helps manage (2) ________ runoff and reduces flooding. Socially, green spaces foster (3) ________ and community interaction. However, many cities are losing green spaces to development. The WHO recommends 0.5 hectares of green space within (4) ________ metres of homes. Cities like Singapore and Paris are leading the way with innovative (5) ________ solutions.",
        answers: ["evapotranspiration", "stormwater", "cohesion", "300", "green infrastructure"],
        explanation: "Evapotranspiration (paragraph 3), stormwater (paragraph 3), cohesion (paragraph 4), 300 (paragraph 5), green infrastructure (paragraph 6)."
      },
      {
        id: "r2-q9",
        type: "short-answer",
        question: "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
        items: [
          { question: "What is the Japanese practice of spending time in forests called?", answer: "shinrin-yoku" },
          { question: "By how much could increasing tree canopy cover reduce surface temperatures?", answer: "four degrees Celsius" },
          { question: "How many trees has Paris committed to planting by 2026?", answer: "170,000" }
        ],
        explanation: "Shinrin-yoku (paragraph 2), four degrees Celsius (paragraph 3), 170,000 trees (paragraph 6)."
      },
      {
        id: "r2-q10",
        type: "mcq",
        question: "What is the main purpose of the passage?",
        options: [
          "To argue that cities should stop building new housing.",
          "To highlight the importance of urban green spaces and the need to preserve them.",
          "To compare green space policies in different countries.",
          "To explain the science behind how trees cool the environment."
        ],
        answer: 1,
        explanation: "The passage discusses the multiple benefits of urban green spaces and argues for their preservation and expansion in urban planning."
      }
    ]
  },
  {
    id: "reading-3",
    title: "The Science of Sleep",
    type: "Academic Reading — Passage 3",
    timeLimit: 1200,
    passage: `Sleep is a fundamental biological necessity, yet it remains one of the most misunderstood aspects of human health. Despite decades of research, scientists continue to uncover new insights into why we sleep, what happens in the brain during sleep, and how sleep deprivation affects our physical and mental wellbeing. What is clear is that sleep is not a passive state of unconsciousness but an active and complex process that is essential for memory consolidation, emotional regulation, and cellular repair.

The sleep cycle consists of several stages that repeat throughout the night in cycles of approximately ninety minutes. These stages are broadly divided into non-rapid eye movement (NREM) sleep and rapid eye movement (REM) sleep. NREM sleep itself comprises three stages, ranging from light sleep (Stage 1) to deep sleep (Stage 3). During deep NREM sleep, the body performs critical restorative functions, including tissue repair, muscle growth, and the strengthening of the immune system. REM sleep, which is characterised by rapid eye movements and vivid dreaming, is thought to play a key role in memory consolidation and emotional processing. It is during REM sleep that the brain processes and stores information gathered during the day, transferring it from short-term to long-term memory.

The importance of sleep for cognitive function cannot be overstated. Research has consistently shown that sleep deprivation impairs attention, decision-making, and problem-solving abilities. A study published in the journal Nature Neuroscience found that even a single night of sleep deprivation significantly reduced participants' ability to form new memories. Chronic sleep deprivation has also been linked to an increased risk of neurodegenerative diseases, including Alzheimer's disease. During deep sleep, the brain's glymphatic system becomes highly active, clearing away metabolic waste products, including beta-amyloid plaques, which are associated with Alzheimer's disease.

Emotional regulation is another critical function of sleep. Studies have shown that people who are sleep-deprived are more likely to experience negative emotions such as anger, anxiety, and sadness, and are less able to regulate their emotional responses. REM sleep, in particular, appears to play a crucial role in processing emotional memories and reducing the emotional intensity of distressing experiences. This may explain why people who suffer from chronic insomnia are at a higher risk of developing mood disorders such as depression.

The modern world poses significant challenges to healthy sleep. The proliferation of artificial light, particularly the blue light emitted by smartphones, tablets, and computers, disrupts the body's natural circadian rhythm. The circadian rhythm is the internal clock that regulates the sleep-wake cycle, and it is primarily influenced by light exposure. When the brain detects blue light in the evening, it suppresses the production of melatonin, the hormone that signals to the body that it is time to sleep. This suppression can delay sleep onset and reduce sleep quality.

Shift work, long working hours, and the constant connectivity of modern life further exacerbate sleep problems. The World Health Organization has classified shift work that involves circadian disruption as a probable carcinogen, highlighting the serious health consequences of chronic sleep disruption. Despite growing awareness of the importance of sleep, many people continue to sacrifice sleep in favour of work, entertainment, or social media.

Fortunately, there are evidence-based strategies for improving sleep quality. Maintaining a consistent sleep schedule, even on weekends, helps to regulate the circadian rhythm. Creating a sleep-conducive environment — cool, dark, and quiet — can also improve sleep quality. Limiting exposure to screens in the hour before bedtime, practising relaxation techniques such as meditation or deep breathing, and avoiding caffeine and heavy meals in the evening are all recommended by sleep specialists. For those with chronic sleep problems, cognitive behavioural therapy for insomnia (CBT-I) has been shown to be more effective than medication in the long term.

As our understanding of sleep science continues to evolve, one message is clear: sleep is not a luxury but a biological necessity. Prioritising sleep is one of the most important steps individuals can take to protect their physical health, cognitive function, and emotional wellbeing.`,
    questions: [
      {
        id: "r3-q1",
        type: "mcq",
        question: "According to the passage, what is the glymphatic system responsible for during deep sleep?",
        options: [
          "Producing melatonin to induce sleep.",
          "Clearing away metabolic waste products from the brain.",
          "Regulating the body's circadian rhythm.",
          "Consolidating emotional memories."
        ],
        answer: 1,
        explanation: "The passage states that during deep sleep, the brain's glymphatic system clears away metabolic waste products, including beta-amyloid plaques."
      },
      {
        id: "r3-q2",
        type: "mcq",
        question: "What effect does blue light have on the body?",
        options: [
          "It stimulates the production of melatonin.",
          "It suppresses the production of melatonin.",
          "It increases the depth of NREM sleep.",
          "It enhances memory consolidation."
        ],
        answer: 1,
        explanation: "The passage states that blue light suppresses the production of melatonin, the hormone that signals to the body that it is time to sleep."
      },
      {
        id: "r3-q3",
        type: "tfng",
        question: "REM sleep is the only stage of sleep during which dreaming occurs.",
        answer: "not given",
        explanation: "The passage mentions that REM sleep is characterised by vivid dreaming, but it does not state that dreaming occurs only during REM sleep."
      },
      {
        id: "r3-q4",
        type: "tfng",
        question: "Chronic sleep deprivation increases the risk of developing Alzheimer's disease.",
        answer: true,
        explanation: "The passage states that chronic sleep deprivation has been linked to an increased risk of neurodegenerative diseases, including Alzheimer's disease."
      },
      {
        id: "r3-q5",
        type: "tfng",
        question: "Cognitive behavioural therapy for insomnia is less effective than medication.",
        answer: false,
        explanation: "The passage states that CBT-I has been shown to be more effective than medication in the long term."
      },
      {
        id: "r3-q6",
        type: "tfng",
        question: "The World Health Organization has classified all shift work as a probable carcinogen.",
        answer: false,
        explanation: "The WHO has classified shift work that involves circadian disruption as a probable carcinogen, not all shift work."
      },
      {
        id: "r3-q7",
        type: "matching",
        question: "Match each sleep stage with its correct description.",
        items: [
          { text: "Stage 1 NREM", answer: "Light sleep" },
          { text: "Stage 3 NREM", answer: "Deep sleep with tissue repair" },
          { text: "REM sleep", answer: "Vivid dreaming and memory consolidation" }
        ],
        explanation: "Stage 1 is light sleep, Stage 3 is deep sleep where tissue repair occurs, and REM sleep involves vivid dreaming and memory consolidation."
      },
      {
        id: "r3-q8",
        type: "summary",
        question: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        summary: "Sleep is an active process essential for memory consolidation, emotional regulation, and (1) ________ repair. The sleep cycle includes NREM and REM stages. During deep NREM sleep, the body performs restorative functions such as tissue repair and (2) ________ growth. REM sleep is important for processing (3) ________ memories. Sleep deprivation impairs cognitive function and increases the risk of (4) ________ diseases. Modern life disrupts sleep through artificial light and constant connectivity. To improve sleep, experts recommend maintaining a consistent (5) ________ and limiting screen time before bed.",
        answers: ["cellular", "muscle", "emotional", "neurodegenerative", "sleep schedule"],
        explanation: "Cellular repair (paragraph 1), muscle growth (paragraph 2), emotional memories (paragraph 3), neurodegenerative diseases (paragraph 2), sleep schedule (paragraph 6)."
      },
      {
        id: "r3-q9",
        type: "short-answer",
        question: "Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
        items: [
          { question: "How long does each sleep cycle last approximately?", answer: "ninety minutes" },
          { question: "What hormone signals to the body that it is time to sleep?", answer: "melatonin" },
          { question: "What therapy is recommended for chronic sleep problems?", answer: "cognitive behavioural therapy" }
        ],
        explanation: "Ninety minutes (paragraph 2), melatonin (paragraph 4), cognitive behavioural therapy (paragraph 6)."
      },
      {
        id: "r3-q10",
        type: "mcq",
        question: "What is the main purpose of the passage?",
        options: [
          "To argue that people should sleep for at least ten hours per night.",
          "To explain the science of sleep and emphasise its importance for health.",
          "To criticise modern technology for causing sleep problems.",
          "To compare different treatments for insomnia."
        ],
        answer: 1,
        explanation: "The passage explains the science of sleep, its functions, and its importance for physical and mental health."
      }
    ]
  }
];

// ============================================================
// LISTENING TESTS
// Uses Web Speech API (speechSynthesis) to read transcripts aloud
// ============================================================

const LISTENING_TESTS = [
  {
    id: "listening-1",
    title: "Hotel Booking Conversation",
    type: "Listening — Section 1",
    timeLimit: 600,
    audioText: `Receptionist: Good morning, Grand City Hotel. How can I help you?
Caller: Hello, I'd like to book a room for three nights, from the fifteenth to the eighteenth of March.
Receptionist: Let me check availability for you. We have a standard double room at ninety pounds per night, or a deluxe room with a city view at one hundred and twenty pounds per night.
Caller: I'll take the deluxe room, please.
Receptionist: Excellent choice. Could I have your name, please?
Caller: It's Sarah Mitchell.
Receptionist: Thank you, Ms. Mitchell. And would you like breakfast included? That's an additional twelve pounds per person per day.
Caller: Yes, please — breakfast for two people.
Receptionist: Of course. We also offer airport shuttle service for twenty-five pounds each way. Would you like me to arrange that?
Caller: Yes, please. My flight arrives at ten thirty in the morning on the fifteenth.
Receptionist: Noted. And how would you like to pay?
Caller: By credit card.
Receptionist: Perfect. Your booking is confirmed. Check-in time is from two o'clock in the afternoon, and check-out is at eleven o'clock. We look forward to welcoming you to the Grand City Hotel.`,
    questions: [
      {
        id: "l1-q1",
        type: "mcq",
        question: "What type of room does the caller book?",
        options: [
          "A standard double room",
          "A deluxe room with a city view",
          "A single room",
          "A family suite"
        ],
        answer: 1,
        explanation: "The caller says 'I'll take the deluxe room, please.'"
      },
      {
        id: "l1-q2",
        type: "mcq",
        question: "How much does the deluxe room cost per night?",
        options: [
          "£90",
          "£100",
          "£120",
          "£150"
        ],
        answer: 2,
        explanation: "The receptionist says the deluxe room is one hundred and twenty pounds per night."
      },
      {
        id: "l1-q3",
        type: "fill-blank",
        question: "Complete the form below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        items: [
          { before: "Guest name: Sarah", answer: "Mitchell" },
          { before: "Check-in date: 15th", answer: "March" },
          { before: "Number of nights:", answer: "3" },
          { before: "Breakfast included for", answer: "2" },
          { before: "Airport shuttle cost: £", answer: "25" }
        ],
        explanation: "All answers are found in the conversation: Mitchell, March, three nights, two people, twenty-five pounds."
      },
      {
        id: "l1-q4",
        type: "mcq",
        question: "What time does the caller's flight arrive?",
        options: [
          "9:30 AM",
          "10:00 AM",
          "10:30 AM",
          "11:00 AM"
        ],
        answer: 2,
        explanation: "The caller says 'My flight arrives at ten thirty in the morning.'"
      },
      {
        id: "l1-q5",
        type: "mcq",
        question: "What is the check-out time at the hotel?",
        options: [
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "2:00 PM"
        ],
        answer: 1,
        explanation: "The receptionist says 'check-out is at eleven o'clock.'"
      }
    ]
  },
  {
    id: "listening-2",
    title: "University Library Orientation",
    type: "Listening — Section 2",
    timeLimit: 600,
    audioText: `Librarian: Welcome, everyone, to the university library orientation. My name is Dr. Patel, and I'll be showing you around today. The library is open from eight a.m. to ten p.m. on weekdays, and from nine a.m. to six p.m. on weekends. During exam periods, we extend our opening hours until midnight.

Let me explain the borrowing system. Undergraduate students can borrow up to ten books at a time for a period of three weeks. Postgraduate students can borrow fifteen books for six weeks. If you need a book for longer, you can renew it online through the library website, provided no one else has reserved it. Late returns incur a fine of fifty pence per day per book.

The library has four floors. The ground floor contains the reception desk, the café, and the newspaper reading area. The first floor houses the science and engineering collections. The second floor is dedicated to humanities and social sciences. The third floor contains the special collections and rare books, which can only be accessed by appointment.

For group study, we have twelve study rooms that can be booked online. Each room accommodates between four and eight people. You can book a room for a maximum of two hours per day. Please note that food is not permitted in the study rooms, but drinks in sealed containers are allowed.

Finally, I'd like to mention our new digital resources. All students now have access to over two hundred online journals and databases, which you can access from anywhere using your student login. If you need help with research or finding resources, the help desk on the ground floor is staffed from nine a.m. to five p.m., Monday to Friday. Are there any questions?`,
    questions: [
      {
        id: "l2-q1",
        type: "mcq",
        question: "What are the library's opening hours on weekdays?",
        options: [
          "8:00 AM – 6:00 PM",
          "8:00 AM – 10:00 PM",
          "9:00 AM – 6:00 PM",
          "9:00 AM – 10:00 PM"
        ],
        answer: 1,
        explanation: "The librarian says the library is open from eight a.m. to ten p.m. on weekdays."
      },
      {
        id: "l2-q2",
        type: "mcq",
        question: "How many books can postgraduate students borrow?",
        options: [
          "10",
          "12",
          "15",
          "20"
        ],
        answer: 2,
        explanation: "The librarian says postgraduate students can borrow fifteen books."
      },
      {
        id: "l2-q3",
        type: "fill-blank",
        question: "Complete the notes below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        items: [
          { before: "Undergraduate borrowing limit:", answer: "10" },
          { before: "Undergraduate loan period:", answer: "3 weeks" },
          { before: "Late return fine: 50p per", answer: "day" },
          { before: "Science collection is on floor:", answer: "1" },
          { before: "Study room booking limit:", answer: "2 hours" }
        ],
        explanation: "All answers are found in the orientation talk: ten books, three weeks, fifty pence per day, first floor, two hours."
      },
      {
        id: "l2-q4",
        type: "mcq",
        question: "What is required to access the special collections on the third floor?",
        options: [
          "A student ID card",
          "A library membership card",
          "An appointment",
          "A letter of recommendation"
        ],
        answer: 2,
        explanation: "The librarian says the special collections can only be accessed by appointment."
      },
      {
        id: "l2-q5",
        type: "mcq",
        question: "What is the policy on food in the study rooms?",
        options: [
          "Food is allowed in all study rooms.",
          "Food is not permitted, but sealed drinks are allowed.",
          "Food is only allowed on the ground floor.",
          "Food is allowed with prior permission."
        ],
        answer: 1,
        explanation: "The librarian says food is not permitted in the study rooms, but drinks in sealed containers are allowed."
      }
    ]
  },
  {
    id: "listening-3",
    title: "Student Project Discussion",
    type: "Listening — Section 3",
    timeLimit: 600,
    audioText: `Tutor: So, James and Priya, let's discuss your group project on renewable energy. How's it going?
James: Well, we've done a lot of research, but we're having trouble narrowing down our topic. We were thinking of focusing on solar power, but there's so much information out there.
Tutor: That's a good start. Have you considered focusing on a specific aspect, like the economic feasibility of solar power in developing countries?
Priya: That's a great idea. We could compare the cost of solar installations in different regions.
Tutor: Exactly. And you should also look at the social impact — how access to solar power affects education and healthcare in rural communities.
James: That makes sense. We could include case studies from sub-Saharan Africa and South Asia.
Tutor: Good. Now, regarding your methodology, are you planning to use qualitative or quantitative data?
Priya: We were thinking of a mixed-methods approach. We'll analyse cost data from government reports and also conduct interviews with families who have installed solar panels.
Tutor: That sounds comprehensive. Just make sure your sample size is large enough to draw meaningful conclusions. I'd recommend at least thirty interviews.
James: Thirty interviews might be difficult in the time we have. Would twenty be acceptable?
Tutor: Twenty would be the minimum, but aim for thirty if possible. Also, don't forget to include a section on the limitations of your research.
Priya: Of course. We should also discuss the environmental impact of manufacturing solar panels, not just their benefits.
Tutor: Excellent point. A balanced analysis will strengthen your argument. Let's meet again next Friday to review your progress.`,
    questions: [
      {
        id: "l3-q1",
        type: "mcq",
        question: "What topic are James and Priya discussing for their project?",
        options: [
          "Wind energy in Europe",
          "Solar power in developing countries",
          "Hydroelectric dams in Asia",
          "Geothermal energy in Africa"
        ],
        answer: 1,
        explanation: "The tutor suggests focusing on the economic feasibility of solar power in developing countries, and the students agree."
      },
      {
        id: "l3-q2",
        type: "mcq",
        question: "What research method do the students plan to use?",
        options: [
          "Quantitative only",
          "Qualitative only",
          "A mixed-methods approach",
          "A literature review only"
        ],
        answer: 2,
        explanation: "Priya says they were thinking of a mixed-methods approach, combining data analysis with interviews."
      },
      {
        id: "l3-q3",
        type: "fill-blank",
        question: "Complete the summary below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        items: [
          { before: "Project topic: solar power in", answer: "developing countries" },
          { before: "Case studies from sub-Saharan Africa and", answer: "South Asia" },
          { before: "Minimum number of interviews:", answer: "20" },
          { before: "Students should discuss the", answer: "limitations" },
          { before: "Next meeting:", answer: "Friday" }
        ],
        explanation: "All answers are found in the discussion: developing countries, South Asia, twenty interviews, limitations, next Friday."
      },
      {
        id: "l3-q4",
        type: "mcq",
        question: "What additional aspect does the tutor suggest the students include?",
        options: [
          "The history of solar technology",
          "The environmental impact of manufacturing solar panels",
          "The political challenges of renewable energy",
          "The future of solar technology"
        ],
        answer: 1,
        explanation: "Priya mentions discussing the environmental impact of manufacturing solar panels, and the tutor calls it an excellent point."
      },
      {
        id: "l3-q5",
        type: "mcq",
        question: "When is the next meeting scheduled?",
        options: [
          "This Friday",
          "Next Friday",
          "Next month",
          "In two weeks"
        ],
        answer: 1,
        explanation: "The tutor says 'Let's meet again next Friday to review your progress.'"
      }
    ]
  },
  {
    id: "listening-4",
    title: "Marine Biology Lecture",
    type: "Listening — Section 4",
    timeLimit: 600,
    audioText: `Lecturer: Good morning, everyone. Today's lecture will focus on coral reef ecosystems and the threats they face. Coral reefs are among the most diverse and valuable ecosystems on Earth. Although they cover less than one percent of the ocean floor, they support approximately twenty-five percent of all marine species.

Corals are not plants but animals — specifically, they are cnidarians, related to jellyfish and sea anemones. What makes reefs possible is a symbiotic relationship between coral polyps and microscopic algae called zooxanthellae. The algae live inside the coral's tissues and perform photosynthesis, providing the coral with up to ninety percent of its energy needs. In return, the coral provides the algae with a protected environment and the compounds they need for photosynthesis.

This relationship is highly sensitive to environmental changes. When water temperatures rise even one or two degrees above the normal maximum, corals become stressed and expel the zooxanthellae. This is known as coral bleaching. Without the algae, the coral loses its primary food source and its colour, turning white. If temperatures return to normal quickly, corals can recover. However, if the stress persists, the coral will die.

Mass bleaching events have become increasingly frequent and severe. The Great Barrier Reef has experienced four mass bleaching events since 2016, with the most severe occurring in 2020, when approximately twenty-three percent of the reef was severely affected. Scientists estimate that if global temperatures rise by 1.5 degrees Celsius above pre-industrial levels, seventy to ninety percent of coral reefs will be lost. At two degrees of warming, that figure rises to more than ninety-nine percent.

Beyond climate change, coral reefs face numerous other threats. Ocean acidification, caused by the absorption of excess carbon dioxide by seawater, reduces the availability of carbonate ions that corals need to build their skeletons. Overfishing disrupts the ecological balance of reef systems, while coastal development and pollution introduce sediments and nutrients that smother corals and promote the growth of harmful algae.

Despite these challenges, there is reason for optimism. Marine protected areas have proven effective in allowing reef populations to recover. Restoration projects, such as coral gardening — in which fragments of coral are grown in nurseries and then transplanted onto damaged reefs — have shown promising results. Scientists are also developing "super corals" that are more resistant to heat stress through selective breeding and genetic research.

In conclusion, coral reefs are invaluable ecosystems that are under severe threat. Addressing these threats will require global cooperation to reduce carbon emissions, as well as local efforts to protect and restore reef systems. The future of coral reefs — and the millions of species and people that depend on them — depends on the actions we take today.`,
    questions: [
      {
        id: "l4-q1",
        type: "mcq",
        question: "What percentage of marine species do coral reefs support?",
        options: [
          "1%",
          "10%",
          "25%",
          "50%"
        ],
        answer: 2,
        explanation: "The lecturer says coral reefs support approximately twenty-five percent of all marine species."
      },
      {
        id: "l4-q2",
        type: "mcq",
        question: "What is the relationship between coral polyps and zooxanthellae?",
        options: [
          "Parasitic",
          "Competitive",
          "Symbiotic",
          "Predatory"
        ],
        answer: 2,
        explanation: "The lecturer describes the relationship as symbiotic — the algae provide energy through photosynthesis, and the coral provides a protected environment."
      },
      {
        id: "l4-q3",
        type: "fill-blank",
        question: "Complete the notes below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        items: [
          { before: "Corals are animals, specifically", answer: "cnidarians" },
          { before: "Algae provide coral with up to", answer: "90%" },
          { before: "Coral bleaching occurs when water temperatures rise by", answer: "1-2 degrees" },
          { before: "Great Barrier Reef bleaching events since:", answer: "2016" },
          { before: "At 2°C warming, over", answer: "99%" }
        ],
        explanation: "All answers are found in the lecture: cnidarians, ninety percent, one or two degrees, 2016, ninety-nine percent."
      },
      {
        id: "l4-q4",
        type: "mcq",
        question: "What is ocean acidification caused by?",
        options: [
          "The absorption of excess oxygen by seawater",
          "The absorption of excess carbon dioxide by seawater",
          "The increase in ocean temperatures",
          "The release of industrial waste into the ocean"
        ],
        answer: 1,
        explanation: "The lecturer says ocean acidification is caused by the absorption of excess carbon dioxide by seawater."
      },
      {
        id: "l4-q5",
        type: "mcq",
        question: "What is 'coral gardening'?",
        options: [
          "A method of farming coral for food",
          "A restoration technique involving growing coral in nurseries and transplanting it",
          "A type of tourism activity on coral reefs",
          "A scientific method of studying coral genetics"
        ],
        answer: 1,
        explanation: "The lecturer describes coral gardening as a restoration project in which fragments of coral are grown in nurseries and then transplanted onto damaged reefs."
      }
    ]
  }
];

// ============================================================
// BAND SCORE CONVERSION TABLES
// ============================================================

const READING_BAND_TABLE = {
  // Correct answers out of 10 (per test) → estimated band score
  10: 9.0, 9: 8.5, 8: 8.0, 7: 7.5, 6: 7.0, 5: 6.5, 4: 6.0, 3: 5.5, 2: 5.0, 1: 4.5, 0: 4.0
};

const LISTENING_BAND_TABLE = {
  10: 9.0, 9: 8.5, 8: 8.0, 7: 7.5, 6: 7.0, 5: 6.5, 4: 6.0, 3: 5.5, 2: 5.0, 1: 4.5, 0: 4.0
};

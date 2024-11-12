const cards = document.querySelectorAll(".card");
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const optionsList = document.getElementById("options");
const result = document.getElementById("result");
const message = document.getElementById("message");

const questions = [
  // Add your 60 questions here, each with options and the correct answer.
  {
    question: "What organization initiated the Lodhi Art District project?",
    options: ["UNESCO", "St+Art India Foundation", "Delhi Tourism Board", "National Gallery of Art"],
    answer: "St+Art India Foundation",
  },
  {
    question: "In which city is the Lodhi Art District located?",
    options: ["Mumbai", "Bangalore", "New Delhi", "Kolkata"],
    answer: "New Delhi",
  },
  {
    question: "What theme does the mural 'I am here' in the Lodhi Art District address?",
    options: ["Air Pollution", "Water Pollution", "Noise Pollution", "Land Pollution"],
    answer: "Water Pollution",
  },
  {
    question: "The Nepalese script is featured on which mural at the Lodhi Art District?",
    options: ["My Life Matters", "Terracotta", "I am Here", "Unity"],
    answer: "I am Here",
  },
  {
    question: "Who is the artist behind the mural 'My Life Matters' in the Lodhi Art District?",
    options: ["Shilo Shiv Suleman", "Hi1235", "Tellas", "The Fearless Collective (Shilo Shiv Suleman)"],
    answer: "The Fearless Collective (Shilo Shiv Suleman)",
  },
  {
    question: "What does the mural 'Terracotta' in the Lodhi Art District incorporate from Italian history?",
    options: ["Frescoes", "Terracotta elements", "Roman architecture", "Ancient manuscripts"],
    answer: "Terracotta elements",
  },
  {
    question: "The mural 'Saath Saath (Community Wall)' encourages visitors to take selfies with which word?",
    options: ["Hello", "Whichever word they resonate with", "Art", "Love"],
    answer: "Whichever word they resonate with",
  },
  {
    question: "What does artist Nespoon typically name her paintings after?",
    options: ["Animals", "Cities", "Famous People", "Ancient Civilizations"],
    answer: "Cities",
  },
  {
    question: "What concept is depicted in the mural 'Belly Dance - The Reincarnation of R, G, and B'?",
    options: ["Growth of Trees", "Cyclic Movement of Life", "Geometric Shapes", "Surrealism"],
    answer: "Cyclic Movement of Life",
  },
  {
    question:
      "What do the girls of Dharavi start working as at a young age, as depicted in the mural 'Flowers of Dharavi'?",
    options: ["Farmers", "Teachers", "Housemaids", "Doctors"],
    answer: "Housemaids",
  },
  {
    question: "Which mural at the Lodhi Art District features a woman with an antenna/satellite dish around her neck?",
    options: ["Amma", "Order in Chaos", "Don't Let This Symbolism Kill Your Heart", "Mere Rang Mein"],
    answer: "Don't Let This Symbolism Kill Your Heart",
  },
  {
    question:
      "What is the inspiration behind the name 'Nafir', of the artist behind the mural 'Don't Let This Symbolism Kill Your Heart'?",
    options: ["An Indian Epic", "A Mythical Creature", "An Iranian Poem", "A Famous Artist"],
    answer: "An Iranian Poem",
  },
  {
    question: "What does the mural 'Order in Chaos' represent in terms of competition and success?",
    options: [
      "The struggle of competition in the modern world",
      "The struggle of competition in the beginning",
      "The randomness of competition",
      "The irrelevance of competition",
    ],
    answer: "The struggle of competition in the modern world",
  },
  {
    question: "What issue does the mural 'Untitled' by David Leitner address?",
    options: ["Air Quality", "Noise Pollution", "Plastic Waste", "Deforestation"],
    answer: "Plastic Waste",
  },
  {
    question:
      "In the mural 'From Your Strength, I Weave Beauty,' what is the dialogue between the mother and daughter about?",
    options: ["Cooking Recipes", "Dreams and Ambitions", "Homework", "Family Vacation"],
    answer: "Dreams and Ambitions",
  },
  {
    question: "What is the significance of the mural 'Padma' by Chifumi?",
    options: [
      "It represents Cambodian culture",
      "It portrays the artist's European heritage",
      "It depicts the Buddha mudra Padma",
      "It showcases Indian mythology",
    ],
    answer: "It depicts the Buddha mudra Padma",
  },
  {
    question:
      "The mural 'About Dreams and Reality' features a vase covering the face of the maker of the art. What does this symbolize?",
    options: ["Aesthetic Enhancement", "Dehumanization of Art", "A New Art Style", "The Artist's Identity"],
    answer: "Dehumanization of Art",
  },
  {
    question: "'Shakti' by Sajid Wajid Shaikh is dedicated to what group of women?",
    options: ["Housewives", "Working Women", "Students", "Elders"],
    answer: "Working Women",
  },
  {
    question: "What important message do the murals 'Trans Lives Matter' and 'Shakti' convey to children?",
    options: [
      "The Importance of Studying",
      "Lessons on Diversity and Inclusivity",
      "The Significance of Physical Fitness",
      "Historical Facts",
    ],
    answer: "Lessons on Diversity and Inclusivity",
  },
  {
    question: "What inspired the mural 'Jungle Lockdown' by Zero India?",
    options: ["A Local Myth", "A Famous Novel", "The COVID-19 Pandemic", "A Wildlife Documentary"],
    answer: "The COVID-19 Pandemic",
  },
  {
    question: "What is the primary theme of the mural 'Unity' by Priyesh Trivedi?",
    options: ["Wildlife Conservation", "Celebrating Festivals", "Satire and Social Issues", "Historical Figures"],
    answer: "Satire and Social Issues",
  },
  {
    question: "In the mural 'Mere Rang Mein' by Bond Truluv, what is needed to view the artwork better?",
    options: ["3D Glasses", "A Smartphone App", "A Telescope", "A Magnifying Glass"],
    answer: "A Smartphone App",
  },
  {
    question: "What does the mural 'Jungle Lockdown' by Zero India compare and contrast?",
    options: [
      "Urban and Rural Lifestyles",
      "Human and Animal Habitats",
      "The Rich and the Poor",
      "The City and the Jungle",
    ],
    answer: "The City and the Jungle",
  },
  {
    question:
      "Which mural highlights the impact of COVID-19 and the different experiences of city and jungle residents?",
    options: [
      "Delhi by Nespoon",
      "Flowers of Dharavi by Alaviz",
      "Unity by Priyesh Trivedi",
      "Jungle Lockdown by Zero India",
    ],
    answer: "Jungle Lockdown by Zero India",
  },
  {
    question: "Which mural features a mother wearing a locket and holding a bowl?",
    options: ["Unity by Priyesh Trivedi", "Amma by Blaise", "Mere Rang Mein by Bond Truluv", "Padma by Chifumi"],
    answer: "Amma by Blaise",
  },
  {
    question: "In the mural 'Don't Let This Symbolism Kill Your Heart,' what does the artist's name 'Nafir' mean?",
    options: ["Scream", "Harmony", "Peace", "Tranquility"],
    answer: "Scream",
  },
  {
    question:
      "Which mural at the Lodhi Art District addresses the dehumanization of art and the hidden artists behind products?",
    options: [
      "About Dreams and Reality by Manolo Mesa",
      "Mere Rang Mein by Bond Truluv",
      "Unity by Priyesh Trivedi",
      "Delhi by Nespoon",
    ],
    answer: "About Dreams and Reality by Manolo Mesa",
  },
  {
    question: "The mural 'Trans Lives Matter' is created by which art project?",
    options: ["Fearless Collective", "The Aravani Art Project", "St+Art India Foundation", "Zero India"],
    answer: "The Aravani Art Project",
  },
  {
    question:
      "What is the significance of the location of 'Trans Lives Matter' and 'Shakti' murals in front of a school?",
    options: [
      "To promote art galleries",
      "To educate children about art",
      "To impart lessons on diversity and inclusivity",
      "To encourage school enrollment",
    ],
    answer: "To impart lessons on diversity and inclusivity",
  },
  {
    question: "Which mural features a representation of a city person wearing a fox mask?",
    options: [
      "My Life Matters by The Fearless Collective",
      "Jungle Lockdown by Zero India",
      "From Your Strength, I Weave Beauty by Shilo Shiv Suleman's Fearless Collective",
      "Amma by Blaise",
    ],
    answer: "Jungle Lockdown by Zero India",
  },
  {
    question: "What environmental contrast is depicted in 'Jungle Lockdown'?",
    options: [
      "The impact of deforestation",
      "The difference between day and night",
      "The contrast between city and jungle during lockdown",
      "The changing seasons in the jungle",
    ],
    answer: "The contrast between city and jungle during lockdown",
  },
  {
    question: "How does the mural 'Shakti' by Sajid Wajid Shaikh pay tribute to powerful women?",
    options: [
      "By featuring images of famous actresses",
      "By highlighting their leadership hairstyles",
      "By showcasing their achievements in sports",
      "By depicting scenes from their childhood",
    ],
    answer: "By highlighting their leadership hairstyles",
  },
  {
    question: "In 'My Life Matters' by The Fearless Collective, who are the individuals depicted in the mural?",
    options: ["Politicians", "Ragpickers", "Celebrities", "Artists"],
    answer: "Ragpickers",
  },
  {
    question:
      "What is the primary focus of the mural 'From Your Strength, I Weave Beauty' by Shilo Shiv Suleman's Fearless Collective?",
    options: [
      "The beauty of nature",
      "The strength of animals",
      "The empowerment of women",
      "The celebration of diversity",
    ],
    answer: "The empowerment of women",
  },
  {
    question: "Which mural reflects the concept of 'constant transformation' and the growth of individuals?",
    options: [
      "Mere Rang Mein by Bond Truluv",
      "Belly Dance - The Reincarnation of R, G, and B by Daan Botlek",
      "Terracotta by Tellas",
      "Delhi by Nespoon",
    ],
    answer: "Belly Dance - The Reincarnation of R, G, and B by Daan Botlek",
  },
  {
    question:
      "The mural 'Order in Chaos' by Daleast uses the metaphor of becoming a machine mind and heart. What does the mural show individuals turning into?",
    options: ["Springs and Wires", "Birds and Trees", "Clouds and Mountains", "Fish and Coral"],
    answer: "Springs and Wires",
  },
  {
    question: "What guiding light is thrown at the side in the mural 'Order in Chaos'?",
    options: ["A Flashlight", "A Torch", "A Spotlight", "A Lantern"],
    answer: "A Torch",
  },
  {
    question:
      "In the mural 'From your strength, I weave beauty' by Shilo Shiv Suleman's Fearless Collective, what is the dialogue about?",
    options: ["Cooking Recipes", "Dreams and Ambitions", "Historical Events", "Mythical Creatures"],
    answer: "Dreams and Ambitions",
  },
  {
    question:
      "The mural 'Don't let this symbolism kill your heart' by Nafir features a woman with what around her neck?",
    options: ["A Necklace", "An Antenna/Satellite Dish", "A Scarf", "A Crown"],
    answer: "An Antenna/Satellite Dish",
  },

  {
    question: "What is the name of the artist who created 'Untitled' mural?",
    options: ["David Leitner", "Manolo Mesa", "Sajid Wajid Shaikh", "Chifumi"],
    answer: "David Leitner",
  },
  {
    question: "What message does 'Untitled' by David Leitner convey about tribal communities?",
    options: [
      "They have lost their traditional ways of life",
      "They have abandoned their heritage",
      "They continue to practice traditional, zero carbon lifestyles",
      "They have embraced modern lifestyles",
    ],
    answer: "They continue to practice traditional, zero carbon lifestyles",
  },
  {
    question: "Which mural is inspired by the Buddha mudra 'Padma' and includes Cambodian green cloud elements?",
    options: [
      "'Jungle Lockdown' by Zero India",
      "'Padma' by Chifumi",
      "'Terracotta' by Tellas",
      "'Mere Rang Mein' by Bond Truluv",
    ],
    answer: "'Padma' by Chifumi",
  },
  {
    question:
      "In 'Shakti' by Sajid Wajid Shaikh, which world leaders' hairstyles are highlighted to represent powerful modern working women?",
    options: ["Artists", "Sports Icons", "Political Leaders", "Religious Figures"],
    answer: "Political Leaders",
  },
  {
    question: "The mural 'Amma' by Blaise features a mother wearing a locket. What does the mother hold in her hand?",
    options: ["A Flower", "A Book", "A Bowl", "A Flag"],
    answer: "A Bowl",
  },
  {
    question: "In which mural is the burden of civilization placed on women?",
    options: [
      "'Mere Rang Mein' by Bond Truluv",
      "'Flowers of Dharavi' by Alaviz",
      "'My Life Matters' by The Fearless Collective",
      "'Padma' by Chifumi",
    ],
    answer: "'Mere Rang Mein' by Bond Truluv",
  },
  {
    question:
      "The mural 'Amma' by Blaise depicts the idea of leaving one's roots when moving to urban environments. What does the locket symbolize?",
    options: ["Family heritage", "Religious belief", "Memories of the past", "Concern for the child's well-being"],
    answer: "Concern for the child's well-being",
  },
  {
    question:
      "Which mural is dedicated to the powerful modern working woman and showcases various hairstyles of these women?",
    options: [
      "'Order in Chaos' by Daleast",
      "'Shakti' by Sajid Wajid Shaikh",
      "'My Life Matters' by The Fearless Collective",
      "'From Your Strength, I Weave Beauty' by Shilo Shiv Suleman's Fearless Collective",
    ],
    answer: "'Shakti' by Sajid Wajid Shaikh",
  },
  {
    question: "What art style is used in the mural 'Flowers of Dharavi'?",
    options: ["Surrealism", "Minimalistic", "Impressionism", "Cubism"],
    answer: "Minimalistic",
  },
  {
    question:
      "In 'Belly Dance - The Reincarnation of R, G, and B,' the mural represents constant transformation. What does the large, outside personality carry?",
    options: ["A hidden treasure", "A small childlike personality", "A bag of groceries", "A musical instrument"],
    answer: "A small childlike personality",
  },
  {
    question: "How is the impact of COVID-19 depicted in 'Jungle Lockdown' by Zero India?",
    options: [
      "The jungle thrives with life",
      "The city becomes more colorful",
      "The jungle becomes deserted",
      "The city hosts outdoor events",
    ],
    answer: "The jungle thrives with life",
  },
  {
    question:
      "Which mural incorporates elements of Augmented Reality (AR) and encourages visitors to use a mobile app for a better viewing experience?",
    options: [
      "'Order in Chaos' by Daleast",
      "'Flowers of Dharavi' by Alaviz",
      "'Mere Rang Mein' by Bond Truluv",
      "'Jungle Lockdown' by Zero India",
    ],
    answer: "'Mere Rang Mein' by Bond Truluv",
  },
  {
    question: "What is the central concept of 'I am Here' by Hi1235?",
    options: [
      "Celebrating cultural diversity",
      "Addressing air pollution",
      "Discussing urbanization",
      "Confronting plastic pollution in water bodies",
    ],
    answer: "Confronting plastic pollution in water bodies",
  },
  {
    question: "In 'Saath Saath (Community Wall),' what are visitors encouraged to do to interact with the mural?",
    options: [
      "Take a selfie with their favorite word",
      "Write their names on the wall",
      "Add their own paintings",
      "Contribute money to the community",
    ],
    answer: "Take a selfie with their favorite word",
  },
  {
    question: "'Trans Lives Matter' by the Aravani Art Project features drawings of which group of individuals?",
    options: ["Children", "Transgender People", "Elderly", "Animals"],
    answer: "Transgender People",
  },

  // Add more questions...
];

const penalties = [
  "Go back 3 steps!",
  "Next chance skipped!",
  "Go back 2 steps!",
  "Bring wheel above 4 to play next chance!",
  "Lucky day! No penalty!",
];

let currentCard = null;

// Shuffle questions to randomize them
shuffleArray(questions);

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    currentCard = card;
    showQuestion(questions[index]);
  });
});

function showQuestion(questionObj) {
  questionContainer.classList.remove("hidden");
  result.classList.add("hidden");

  question.innerText = questionObj.question;

  optionsList.innerHTML = "";
  questionObj.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => checkAnswer(questionObj, option));
    optionsList.appendChild(li);
  });
}

function checkAnswer(questionObj, selectedOption) {
  if (selectedOption === questionObj.answer) {
    showMessage("CORRECT!", "green");
    const lineBreak1 = document.createElement("br");
    const lineBreak2 = document.createElement("br");
    message.appendChild(lineBreak1);
    message.appendChild(lineBreak2);

    message.appendChild(document.createTextNode("Good play, Keep it Up!"));
  } else {
    const penalty = getRandomPenalty();
    const message = document.getElementById("message");
    showMessage("INCORRECT!", "red");

    // Create and append two <br> elements
    const lineBreak1 = document.createElement("br");
    const lineBreak2 = document.createElement("br");
    message.appendChild(lineBreak1);
    message.appendChild(lineBreak2);
    message.appendChild(document.createTextNode("Your penalty is: "));

    // Append the penalty text
    message.appendChild(document.createTextNode(penalty));
  }
}

function showMessage(text, color) {
  message.style.color = color;
  message.innerText = text;
  result.classList.remove("hidden");
  questionContainer.classList.add("hidden");
}

function getRandomPenalty() {
  const randomIndex = Math.floor(Math.random() * penalties.length);
  return penalties[randomIndex];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// JavaScript for the "Reset" button
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  // Reload the page to reset the game
  location.reload();
});

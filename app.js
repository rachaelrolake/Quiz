const questions = [
  {
    question: 'Which of these is a protective style?',
    options: ['a) Silk press',
      'b) Cornrows',
      'c) Loose afro',
      'd) Ponytail'],
    correct: 'b) Cornrows'
  },
  {
    question: 'What is the purpose of sleeping with a silk or satin bonnet?',
    options: ['a) To make hair grow faster',
      'b) To keep hair soft and reduce breakage',
      'c) To make hair shinier',
      'd) To prevent dandruff'],
    correct: 'b) To keep hair soft and reduce breakage'
  },
  {
    question: 'What heat styling tool is least damaging to natural hair?',
    options: ['a) Flat iron',
      'b) Blow dryer with diffuser',
      'c) Curling wand',
      'd) Crimping iron'],
    correct: 'b) Blow dryer with diffuser'
  },
  {
    question: 'Which of these oils is best for scalp massages to promote hair growth?',
    options: ['a) Coconut oil',
      'b) Jamaican black castor oil',
      'c) Petroleum jelly',
      'd) Baby oil'],
    correct: 'b) Jamaican black castor oil'
  },
  {
    question: 'What is the biggest sign of protein overload in hair?',
    options: ['a) Hair feels mushy and over-moisturized',
      'b) Hair feels dry, brittle, and snaps easily',
      'c) Hair looks shinier than usual',
      'd) Hair grows faster'],
    correct: 'b) Hair feels dry, brittle, and snaps easily'
  },
  {
    question: 'Which hair type is most prone to dryness?',
    options: ['a) Straight hair',
      'b) Wavy hair',
      'c) Curly hair',
      'd) Coily/kinky hair'],
    correct: 'd) Coily/kinky hair'
  },
  {
    question: 'What is the best way to keep your scalp healthy?',
    options: ['a) Wash with shampoo frequently',
      'b) Apply heavy oils daily',
      'c) Exfoliate, cleanse, and moisturize when needed',
      'd) Avoid touching it'],
    correct: 'c) Exfoliate, cleanse, and moisturize when needed'
  },
  {
    question: 'Which ingredient is a natural humectant that draws moisture into the hair?',
    options: ['a) Shea butter',
      'b) Aloe vera',
      'c) Beeswax',
      'd) Jojoba oil'],
    correct: 'b) Aloe vera'
  },
  {
    question: 'Which hair porosity type absorbs moisture quickly but loses it fast?',
    options: ['a) Low porosity',
      'b) Medium porosity',
      'c) High porosity',
      'd) All hair types'],
    correct: 'c) High porosity'
  },
  {
    question: 'What is a sign that your hair is over-moisturized (hygral fatigue)?',
    options: ['a) Feels mushy and limp',
      'b) Breaks easily and feels dry',
      'c) Looks dull but feels soft',
      'd) Shrinks more than usual'],
    correct: 'a) Feels mushy and limp'
  },
  {
    question: 'Which technique helps define curls the most?',
    options: ['a) Rubbing hair with a towel',
      'b) Using a wide-tooth comb on dry hair',
      'c) Applying gel or curl cream on wet hair using raking or shingling',
      'd) Blow-drying on high heat'],
    correct: 'c) Applying gel or curl cream on wet hair using raking or shingling'
  },
  {
    question: 'Why do protective styles help with hair growth?',
    options: ['a) They add length instantly',
      'b) They reduce manipulation and breakage',
      'c) They make hair grow faster',
      'd) They stop shrinkage'],
    correct: 'b) They reduce manipulation and breakage'
  },
  {
    question: 'What’s the best way to keep moisture in braids or twists?',
    options: ['a) Apply heavy grease every day',
      'b) Spray a water-based moisturizer and seal with oil',
      'c) Avoid washing the style',
      'd) Only oil the scalp'],
    correct: 'b) Spray a water-based moisturizer and seal with oil'
  },
  {
    question: 'How much does hair grow on average per month?',
    options: ['a) ¼ inch (0.6 cm)',
      'b) ½ inch (1.2 cm)',
      'c) 1 inch (2.5 cm)',
      'd) 2 inches (5 cm)'],
    correct: 'b) ½ inch (1.2 cm)'
  },
  {
    question: 'What percentage of hair is made up of keratin protein?',
    options: ['a) 30%',
      'b) 50%',
      'c) 80%',
      'd) 95%'],
    correct: 'd) 95%'
  },
  {
    question: 'Which vitamin is often linked to hair loss prevention?',
    options: ['a) Vitamin A',
      'b) Vitamin B7 (Biotin)',
      'c) Vitamin C',
      'd) Vitamin D'],
    correct: 'b) Vitamin B7 (Biotin)'
  },
  {
    question: 'Which DIY ingredient can strengthen hair and promote shine?',
    options: ['a) Yogurt',
      'b) Lemon juice',
      'c) Baking soda',
      'd) Petroleum jelly'],
    correct: 'a) Yogurt'
  },
  {
    question: 'True or False: Drinking more water can help with hair hydration.',
    options: ['a) True ',
      'b) False'],
    correct: 'b) False'
  },
  {
    question: 'True or False: Hair grows back thicker after shaving.',
    options: ['a) True ',
      'b) False'],
    correct: 'a) True'
  },
  {
    question: 'True or False: Trimming your hair makes it grow faster.',
    options: ['a) True ',
      'b) False'],
    correct: 'b) False'
  },
  {
    question: 'What is the LCO method for moisturizing hair?',
    options: ['a) Liquid → Curl cream → Oil',
      'b) Leave-in → Conditioner → Oil',
      'c) Liquid → Cream → Oil',
      'd) Lotion → Castor oil → Olive oil'],
    correct: 'c) Liquid → Cream → Oil'
  },
  {
    question: 'Which part of the hair is responsible for growth?',
    options: ['a) Hair cuticle',
      'b) Hair shaft',
      'c) Hair follicle',
      'd) Hair cortex'],
    correct: 'c) Hair follicle'
  },
  {
    question: 'How often should you clarify your hair to remove product buildup?',
    options: ['a) Every wash day',
      'b) Once a month',
      'c) Every 2-4 weeks',
      'd) Never'],
    correct: 'c) Every 2-4 weeks'
  },
  {
    question: 'What is the best way to detangle curly hair?',
    options: ['a) Dry with a fine-tooth comb',
      'b) Wet with conditioner and a wide-tooth comb',
      'c) Brushing when damp with a boar bristle brush',
      'd) Raking fingers through dry hair'],
    correct: 'b) Wet with conditioner and a wide-tooth comb'
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").textContent = questions[currentQuestionIndex].question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  questions[currentQuestionIndex].options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(btn, option);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("prev").disabled = currentQuestionIndex === 0;
  const nextBtn = document.getElementById("next");
  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.innerHTML = `<img src="images/right.png" alt="right arrow">`;
  }

}

function checkAnswer(btn, option) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  document.querySelectorAll(".option").forEach(button => button.disabled = true);
  if (option === correctAnswer) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
  }
}

document.getElementById("next").onclick = () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `<h2 class="quiz-status">Quiz Completed!</h2><p class="score-paragraph">You scored ${score} out of ${questions.length}</p>`;
  }
};

document.getElementById("prev").onclick = () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
};

loadQuestion();
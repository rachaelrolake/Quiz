const questions = [
  {
    question: 'What is the purpose of sleeping with a silk/satin bonnet?',
    options: ['a) To make hair grow faster',
      'b) To reduce matting, tangling & breakage',
      'c) To make hair shinier',
      'd) To prevent dandruff'],
    correct: 'b) To reduce matting, tangling & breakage',
    imageLeft: 'images/messy bun-cuate.png',
    imageRight: 'images/Hair spray-bro.png'
  },
  {
    question: 'What heat styling tool is least damaging to natural hair?',
    options: ['a) Flat iron',
      'b) Blow dryer with diffuser',
      'c) Curling wand',
      'd) Crimping iron'],
    correct: 'b) Blow dryer with diffuser',
    imageLeft: 'images/hairdresser team-cuate.png',
    imageRight: 'images/hairdresser team-amico.png'
  },
  {
    question: 'Which of these oils is best for scalp massages for hair growth?',
    options: ['a) Coconut oil',
      'b) Jamaican black castor oil',
      'c) Petroleum jelly',
      'd) Baby oil'],
    correct: 'b) Jamaican black castor oil',
    imageLeft: 'images/messy bun-pana.png',
    imageRight: 'images/messy bun-rafiki.png'
  },
  {
    question: 'Which of these is a protective style?',
    options: ['a) Silk press',
      'b) Cornrows',
      'c) Loose afro',
      'd) Ponytail'],
    correct: 'b) Cornrows',
    imageLeft: 'images/Curly hair-pana1.png',
    imageRight: 'images/Curly hair-bro.png'
  },
  {
    question: 'What is the biggest sign of protein overload in hair?',
    options: ['a) Hair feels mushy and over-moisturized',
      'b) Hair feels dry, brittle, and snaps easily',
      'c) Hair looks shinier than usual',
      'd) Hair grows faster'],
    correct: 'b) Hair feels dry, brittle, and snaps easily',
    imageLeft: 'images/Hair-pulling disorder-bro.png',
    imageRight: 'images/Hair-pulling disorder-amico.png'
  },
  {
    question: 'What is the best way to keep your scalp healthy?',
    options: ['a) Wash with shampoo frequently',
      'b) Apply heavy oils daily',
      'c) Exfoliate, cleanse, and moisturize when needed',
      'd) Avoid touching it'],
    correct: 'c) Exfoliate, cleanse, and moisturize when needed',
    imageLeft: 'images/Curly hair-rafiki.png',
    imageRight: 'images/Curly hair-pana.png'
  },
  {
    question: 'Which ingredient is a natural humectant that draws moisture into the hair?',
    options: ['a) Shea butter',
      'b) Aloe vera',
      'c) Beeswax',
      'd) Jojoba oil'],
    correct: 'b) Aloe vera',
    imageLeft: 'images/messy bun-bro.png',
    imageRight: 'images/aloe vera-bro.png'
  },
  {
    question: 'Trimming your hair makes it grow faster.',
    options: ['a) True ',
      'b) False'],
    correct: 'b) False',
    imageLeft: 'images/Hairdresser-pana.png',
    imageRight: 'images/hairdresser team-broq.png'
  },
  {
    question: 'Which hair porosity absorbs moisture quickly but loses it fast?',
    options: ['a) Low porosity',
      'b) Medium porosity',
      'c) High porosity',
      'd) All hair types'],
    correct: 'c) High porosity',
    imageLeft: 'images/messy bun-rafiki.png',
    imageRight: 'images/hairdresser team-pana.png'
  },
  {
    question: 'What is a sign that your hair is over-moisturized (hygral fatigue)?',
    options: ['a) Feels mushy and limp',
      'b) Breaks easily and feels dry',
      'c) Looks dull but feels soft',
      'd) Shrinks more than usual'],
    correct: 'a) Feels mushy and limp',
    imageLeft: 'images/Hairdresser-cuate.png',
    imageRight: 'images/Hair-pulling disorder-cuate.png'
  },
  {
    question: 'Which technique helps define curls the most?',
    options: ['a) Rubbing hair with a towel',
      'b) Using a wide-tooth comb on dry hair',
      'c) Applying gel or curl cream on wet hair using raking or shingling',
      'd) Blow-drying on high heat'],
    correct: 'c) Applying gel or curl cream on wet hair using raking or shingling',
    imageLeft: 'images/Hair spray-pana.png',
    imageRight: 'images/women in hair salon-cuate.png'
  },
  {
    question: 'Why do protective styles help with hair growth?',
    options: ['a) They add length instantly',
      'b) They reduce manipulation and breakage',
      'c) They make hair grow faster',
      'd) They stop shrinkage'],
    correct: 'b) They reduce manipulation and breakage',
    imageLeft: 'images/Hairdresser-pana.png',
    imageRight: 'images/Hair-pulling disorder-bro.png'
  },
  {
    question: 'What’s the best way to keep moisture in braids or twists?',
    options: ['a) Apply heavy grease every day',
      'b) Spray a water-based moisturizer and seal with oil',
      'c) Avoid washing the style',
      'd) Only oil the scalp'],
    correct: 'b) Spray a water-based moisturizer and seal with oil',
    imageLeft: 'images/Hair spray-pana.png',
    imageRight: 'images/Hair spray-amico.png'
  },
  {
    question: 'How much does hair grow on average per month?',
    options: ['a) ¼ inch (0.6 cm)',
      'b) ½ inch (1.2 cm)',
      'c) 1 inch (2.5 cm)',
      'd) 2 inches (5 cm)'],
    correct: 'b) ½ inch (1.2 cm)',
    imageLeft: 'images/Barber-bro.png',
    imageRight: 'images/Depilation-bro.png'
  },
  {
    question: 'Which vitamin is often linked to hair loss prevention?',
    options: ['a) Vitamin A',
      'b) Vitamin B7 (Biotin)',
      'c) Vitamin C',
      'd) Vitamin D'],
    correct: 'b) Vitamin B7 (Biotin)',
    imageLeft: 'images/women in hair salon-bro.png',
    imageRight: 'images/women in hair salon-rafiki.png'
  },
  {
    question: 'Drinking more water can help with hair hydration.',
    options: ['a) True ',
      'b) False'],
    correct: 'b) False',
    imageLeft: 'images/messy bun-amico.png',
    imageRight: 'images/Curly hair-rafiki.png'
  },
  {
    question: 'What is the LCO method for moisturizing hair?',
    options: ['a) Liquid → Curl cream → Oil',
      'b) Leave-in → Conditioner → Oil',
      'c) Liquid → Cream → Oil',
      'd) Lotion → Castor oil → Olive oil'],
    correct: 'c) Liquid → Cream → Oil',
    imageLeft: 'images/women in hair salon-rafiki.png',
    imageRight: 'images/women in hair salon-pana.png'
  },
  {
    question: 'How often should you clarify your hair to remove product buildup?',
    options: ['a) Every wash day',
      'b) Once a month',
      'c) Every 2-4 weeks',
      'd) Never'],
    correct: 'c) Every 2-4 weeks',
    imageLeft: 'images/Curly hair-pana1.png',
    imageRight: 'images/Hair spray-bro.png'
  },

];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = new Array(questions.length).fill(null);

function loadQuestion() {
  document.getElementById("question").textContent = questions[currentQuestionIndex].question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  document.querySelector(".left-side").src = questions[currentQuestionIndex].imageLeft;
  document.querySelector(".right-side").src = questions[currentQuestionIndex].imageRight;

  questions[currentQuestionIndex].options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");

    if (selectedAnswers[currentQuestionIndex]) {
      btn.disabled = true;
      if (option === selectedAnswers[currentQuestionIndex].option) {
        btn.classList.add(selectedAnswers[currentQuestionIndex].isCorrect ? "correct" : "wrong");
      }
    }

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


  const isCorrect = option === correctAnswer;
  btn.classList.add(isCorrect ? "correct" : "wrong");

  selectedAnswers[currentQuestionIndex] = { option, isCorrect };

  if (isCorrect) score++;
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
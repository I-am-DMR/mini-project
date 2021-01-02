const segment = {
  basic: "basic",
  medium: "medium",
  advanced: "advanced",
};

export const quiz =  {
  "quizTitle": "Covid-19 Awareness Quiz",
  "quizSynopsis": "Take our quiz to see if you have got all the right information about COVID-19 and how to look after your health. ",
  "questions": [
    {
      "question": "How is COVID-19 passed on?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Through droplets that come from your mouth and nose when you cough or breathe out",
        "In sexual fluids, including semen, vaginal fluids or anal mucous",
        "By drinking unclean water",
        "All of the above"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again. When a person with COVID-19 coughs, breathes out or sneezes, droplets come out from their nose and mouth which can contain the virus. These can be breathed in by people who are nearby or land on surfaces which other people can then touch. Regularly washing your hands and keeping your distance from others is the best way to prevent COVID-19. ",
      "explanation": "When a person with COVID-19 coughs, breathes out or sneezes, droplets come out from their nose and mouth which can contain the virus. These can be breathed in by people who are nearby or land on surfaces which other people can then touch. Regularly washing your hands and keeping your distance from others is the best way to prevent COVID-19.",
      "point": "20",
      "segment": segment.basic
    },
    {
      "question": "What are the common symptoms of COVID-19 ?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A new and continuous cough",
        "Fever",
        "Tiredness",
        "All of the above"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.COVID-19 is usually marked by a new and continuous cough, but some people get other symptoms too including tiredness, a fever and flu-like symptoms including headaches, runny nose and a sore throat. If you’re finding it hard to breathe or your symptoms don’t improve after 7 days, call your local health service straight away. ",
      "explanation": "COVID-19 is usually marked by a new and continuous cough, but some people get other symptoms too including tiredness, a fever and flu-like symptoms including headaches, runny nose and a sore throat. If you’re finding it hard to breathe or your symptoms don’t improve after 7 days, call your local health service straight away.",
      "point": "10"
    },
    {
      "question": "Can you always tell if someone has COVID-19?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "No – not everyone with COVID-19 has symptoms",
        "Yes – it will be obvious, a person with COVID-19 coughs a lot",
        "Yes – you can tell just by where a person comes from, their race and ethnicity"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "The virus can be in someone’s body for up to 14 days before they get symptoms, and some people will have such a mild case of COVID-19 that they might not notice anything is wrong. That’s why it’s important that everyone follows their government’s advice even if they feel healthy.",
      "point": "10"
    },
    {
      "question": "Can washing your hands protect you from COVID-19?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Yes – but only if you use a strong bleach",
        "Yes – normal soap and water or hand sanitizer is enough",
        "No – Washing your hands doesn’t stop COVID-19",
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Washing your hands regularly is one of the best way to avoid getting or passing on COVID-19. It’s important to keep washing your hands throughout the day especially before and after going out. To wash your hands properly you need to get every spot. Make sure you wash them for at least 40 seconds if you are using soap and water, and for at least 20 seconds if you’re using hand sanitizer. ",
      "point": "30",
      "segment": segment.medium
    },
    {
      "question": "Which of the following people is COVID-19 more dangerous for? (select all correct responses)",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Children",
        "Older people – especially those aged 70 and above",
        "People with certain underlying health conditions",
        "European people"
      ],
      "correctAnswer": [2, 3],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
  ]
}

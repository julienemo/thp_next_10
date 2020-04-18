const questionsCall = (amount, level) => {
  fetch(apiUrl(amount.value, level.value))
  .then((response) => response.json())
  .then((response) => {
    btn.removeEventListener('click', questionsCall);
    let data = response.results;
    let questionArray = [];
    storeQuestionsInArray(questionArray, data);
    fillSingleQuestion(0, questionArray[0])
    fillAllQuestions(questionArray);
  })
  .catch((error) => {
    console.error(error);
    content.innerHTML = generalError;
  })
}

const apiUrl = (amount, level) => {
  return `${endpoint}&amount=${amount}&difficulty=${level}`;
}


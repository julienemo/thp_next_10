const questionsCall = (amount, level) => {
  fetch(apiUrl(amount.value, level.value))
  .then((response) => response.json())
  .then((response) => {
    console.log('in call')
    btn.removeEventListener('click', questionsCall);
    let data = response.results;
    let questionArray = [];
    storeQuestionsInArray(questionArray, data);
    console.log(questionArray);
    fillSingleQuestion(0, questionArray[0])
    fillAllQuestions(questionArray);
  })
  .catch((error) => {
    console.error(error);
    content.innerHTML = generalError;
  })
}

const apiUrl = (amount, level) => {
  console.log(`${endpoint}&amount=${amount}&difficulty=${level}`);
  return `${endpoint}&amount=${amount}&difficulty=${level}`;
}


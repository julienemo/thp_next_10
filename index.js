// Magic numbers & strings
const generalError = 'An error ocurred. Please contact service provider or retry later.'
const endpoint = "https://opentdb.com/api.php?category=13"
let step = 0;
let correctAnswers = 0;

// DOM targets
const content = document.querySelector('#content_zone');
const btn = document.querySelector('#btn_next');

// page filling
const insertForm = () => {
  content.innerHTML = `
    <div id='user_params_page'>
      <form id='user_params_form' class="container border rounded">
        <div class="container p-5">
          <div class="form-group row">
            <label for="amount">Number of questions</label>
            <select class="form-control" id="amount">
              <option>3</option>
              <option>5</option>
              <option>10</option>
            </select>
          </div>
          <div class="form-group row">
            <label for="level">Challenge level</label>
            <select class="form-control" id="level">
              <option>easy</option>
              <option>medium</option>
              <option>hard</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  `
}

const fillSingleQuestion = (index, question) => {
  droppingCage();
  if (question.type === 'multiple') {
    content.innerHTML = `
      <div id="question_${index + 1}" class="question border rounded row justify-content-center">
        <div class='col col-5 p-5 align-middle'>
          <p>Question ${index + 1}.<br>${question.text}</p> 
          </div> 
          <div class='choices col col-7 p-5'>
            <div class="row justify-content-around">
              <div class='choice col col-4 '>
                <button onclick="checkAnswer(this, '${question.answer}')" class='btn btn_choice btn-outline-info'>${question.choices[0]}</button>
              </div>
              <div class='choice col col-4'>
                <button onclick="checkAnswer(this, '${question.answer}')" class='btn btn_choice btn-outline-dark'>${question.choices[1]}</button>
              </div>
            </div>
            <div class="row justify-content-around">
              <div class='choice col col-4'>
                <button onclick="checkAnswer(this, '${question.answer}')" class='btn btn_choice btn-outline-primary'>${question.choices[2]}</button>
              </div>
              <div class='choice col col-4'>
                <button onclick="checkAnswer(this, '${question.answer}')" class='btn btn_choice btn-outline-success'>${question.choices[3]}</button>
              </div>
            </div>
          </div>
        </div>
    `
  } else if (question.type === 'boolean') {
    content.innerHTML = `
      <div id="question_${index}" class="question border rounded row justify-content-center">
        <div class='col col-5 p-5 align-middle'>
          <p>Question ${index + 1}.<br>${question.text}</p> 
          </div> 
          <div class='choices col col-7 p-5'>
            <div class="row justify-content-around">
              <div class='choice col col-4 '>
                <button onclick="checkAnswer(this, '${question.answer}')" class='btn btn_choice btn-outline-info'>${question.choices[0]}</button>
              </div>
              <div class='choice col col-4'>
                <button onclick="checkAnswer(this, '${question.answer}')" class='btn btn_choice btn-outline-dark'>${question.choices[1]}</button>
              </div>
            </div>
          </div>
        </div>
    `
  }
}

const fillAllQuestions = (questions) => {
  btn.addEventListener('click', () => {
    if ( step < questions.length) {
      flyingCage();
      setTimeout(()=>{
        fillSingleQuestion(step, questions[step]);
      }, 400);
      step ++;
    }
  });
}

const start = () => {
  btn.removeEventListener('click', start);
  console.log('start')
  const amount = document.querySelector('#amount');
  const level = document.querySelector('#level');
  if ((amount.value.length === 0) || (level.value.length === 0)){
  } else {
    questionsCall(amount, level)
  }
}

// page loaded
insertForm();
droppingCage();
btn.addEventListener('click', start);



// questions related
const questionObject= (question) => {
  question.incorrect_answers.push(question.correct_answer);
  let choices = question.incorrect_answers;
  return {
    "type" : question.type,
    "text": question.question,
    "choices": shuffle(choices),
    "answer": question.correct_answer
  }
}

const storeQuestionsInArray = (targetArray, questions) => {
  questions.forEach((question) => {
    targetArray.push(questionObject(question));
  });
  return targetArray;
}

const checkAnswer = (e, correct) => {
  console.log(e);
  console.log((e.innerHTML === correct));
  document.querySelectorAll('.btn_choice').forEach((btn) => {
    btn.removeAttribute('onclick');
    btn.disabled = true;
  })
  if (e.innerHTML === correct) {
    correctAnswers ++;
    e.style.color = 'red';
  } else {

  }
}
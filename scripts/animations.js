const droppingCage = () => {
  window.anime({
    targets: document.querySelector('main'),
    translateY: [-500,0],
    duration: 2500
  });
}

const flyingCage = () => {
  window.anime({
    targets: document.querySelector('main'),
    translateY: [0, -500],
    duration: 2500
  });
}

const answerSelected = () => {
  window.anime({
    targets: document.querySelectorAll(".btn_choice"),
    translateY: [0, -500],
    duration: 2500,
    delay: anime.stagger(100) 
  });
}

const animeRightWrong = () => {
  window.anime({
    targets: document.querySelector("#right_wrong"),
    translateY: {
    value: [-1000,0],
    duration: 800,
    delay: 500
    },
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 2,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    }
  });
}

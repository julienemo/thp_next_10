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

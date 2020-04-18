### Project: Find movie by name

2020/04/17 Julie Kwok

[demo here](https://julienemo.github.io/thp_next_10/)


* * *

This project uses [Open Trivia DB](https://opentdb.com/) to generate a selected number of questions on theater and musical, to practice using [animejs](https://animejs.com/) for page animation.

**Page behaviour**

1. On page load, a formula is js-inserted to ask for the number of questions and the level. (animation: formula dropping from high)
2. On pressing the "next" btn, the formula takes the two above mentioned input, add them to the request url, sends the request to the API. A first question is js-inserted at the original place of the formula. (animation, question car dropping from high).
3. If any answer is chosen, the other choices disappear.User will see whether chosen answer is correct. (animation: unselected elements disappearing one by one, correctness indication dropping, rotating)
4. When next clicked, card of the already answered question flies up high, next question card drops. (animation: cards flying and dropping effect).
5. 

* * *
  
**Difficulties**

* When animation with translationY or X, scroll bar is triggered. Scaling effect triggers scroll as well.

* * *

**Takeaways**

* `element.innerHTML` returns html (obviously) instead of normal string. Ex, a btn that says `Romeo & Juliet` actually has the `innerHTML` as `Romeo &amp; Juliet`. To retrieve the "human string", use  `innerText`.

* To remove and event added to an element with the html `onclick` (and cie) attribute, use `element.removeAttribute('onclick')`.


_test files contain test on javascript and ruby type vs. class studies_
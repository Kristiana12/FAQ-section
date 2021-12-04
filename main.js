'use strict';

const questionBoxes = document.querySelectorAll('.question');

//For Each box that is being clicked adds .active
questionBoxes.forEach((question) => {
  question.addEventListener('click', () => {
    if (question.classList.contains('active')) {
      question.classList.remove('active');
    } else {
      //Removes the active class from the element that had it, before applying it to the new one
      removeClass();
      question.classList.add('active');
    }
  });
});

function removeClass() {
  questionBoxes.forEach((question) => {
    question.classList.remove('active');
  });
}

'use strict';

const btnDecrease = document.querySelector('.btn-decrease');
const btnIncrease = document.querySelector('.btn-increase');
const btnReset = document.querySelector('.btn-reset');
let value = document.querySelector('.value');
let count = 0;

/// first way

/*  
btnIncrease.addEventListener('click', function () {
  count++;
  value.textContent = count;
});

btnDecrease.addEventListener('click', function () {
  count--;
  value.textContent = count;
});

btnReset.addEventListener('click', function () {
  count = 0;
  value.textContent = count;
});
*/

/// second way

const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('btn-increase')) {
      // console.log(styles);
      count++;
    } else if (styles.contains('btn-decrease')) {
      count--;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});

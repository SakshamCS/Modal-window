'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden'); //. is only used in case of class selectors here we aren't selecting anything so all we need is the string with the class name
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//up until now we didn't need to look into an event we just listened to it and reacted to it but this time we need to look at the event Object in order to figure out which key was pressed

//whenever an event occurs we gonna have access to that even information(object) in the event handler function

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); //here we need to call the function because when it reaches the if condition something needs to happen so that is calling that piece of code i.e function
  }
});

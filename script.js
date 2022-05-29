'use strict';

//Mobile menu
var burger = document.querySelector('i');
var responsiveNav = document.querySelector('.responsive-nav');
var anchor = document.getElementsByTagName('a');

burger.addEventListener('click', function () {
  this.classList.toggle('rotateZ');
  responsiveNav.classList.toggle('translateY');
});

anchor.addEventListener('click', function () {
  this.classList.toggle('rotateZ');
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 900) {
    burger.classList.remove('rotateZ');
    responsiveNav.classList.remove('translateY');
  }
  console.log(window.innerWidth);
});

//Tabs (neveikia)

var tabs = document.getElementsByClassName('tab');
var buttons = document.getElementsByClassName('tab-button');
for (var x of tabs) {
  x.style.display = 'none';
}

function changeHeader(event, id) {
  //Paslepia ir nuima animacija tabams
  for (var x of tabs) {
    x.style.display = 'none';
    x.classList.remove('tabAnimation');
  }

  //Parodo konkretu tab pagal id
  document.getElementById(id).style.display = 'block';
  //Prideda animacija po 100ms
  setTimeout(function () {
    document.getElementById(id).classList.add('tabAnimation');
  }, 100);

  //Pasalina mygtukams klase
  for (var x of buttons) {
    x.classList.remove('selected');
  }
  //Prideda konkreciam mygtukui klase
  event.currentTarget.classList.add('selected');
}

//Checking if all data enetered in the forms

function addData() {
  var firstName = document.getElementById('firstName').value;
  var surname = document.getElementById('surname').value;
  var number = document.getElementById('number').value;
  if (firstName == 0 || surname == 0 || number <= 0) {
    event.preventDefault();
    alert('Please enter all required information!');
  } else {
    event.preventDefault();
    alert('Thank you for subscribing!');
    console.log(firstName, surname, number);
    document.getElementById('myForm').reset();
  }
}

function addData2() {
  var firstName = document.getElementById('firstName2').value;
  var surname = document.getElementById('surname2').value;
  var number = document.getElementById('number2').value;
  if (firstName == 0 || surname == 0 || number <= 0) {
    event.preventDefault();
    alert('Please enter all required information!');
  } else {
    event.preventDefault();
    alert('We will contact you in 2-3 business days!');
    console.log(firstName, surname, number);
    document.getElementById('myForm').reset();
  }
}

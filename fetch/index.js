'use strict';

function getDogImage(number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson=> displayDogs(responseJson.message));
    // .catch ((err) =>
    // console.log(err))
}

function displayDogs(arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++){
    string = + $('.results-img').replaceWith(`<img src="${arr[i]}" class="results - img">`);
  }
  return string;
}

function watchForm() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let number = document.getElementById('number').value;
    getDogImage(number);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
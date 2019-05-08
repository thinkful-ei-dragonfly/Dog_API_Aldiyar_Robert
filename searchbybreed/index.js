'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson.message));
}

function displayDogs(value) {
  $('.results-img').replaceWith(`<img src="${value}" class="results - img">`);
}

function watchForm() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let breed = document.getElementById('breed').value;
    getDogImage(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
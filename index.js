'use strict';

// https://dog.ceo/api/breed/hound/images/random/3 

function getDogImages(number, breed) {
  console.log(number);
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${number})`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } 
    })
    .then(response => {
      console.log(response.message);
      let message = response.message;
      let allImages = '';

      // put in all src images with for loop
      for (let i = 0; i < message.length; i++) {
        allImages += `<img src="${message[i]}" class="individual-image" />`;
      }

      $('.js-all-the-dogs').html(allImages);
      console.log(allImages);
    })
    .catch(response => {
      // Couldn't find end point on API docs for invalid case...
      // but fail case does enter correctly. not sure how to set new endpoint
      console.log('fail');
      console.log(response);
    });
  
}

const store = {};


function collectNumberDogs() {

  // get number of dogs desired from user
  $('#js-number-of-dogs').on('submit', function(event) {
    event.preventDefault();
    let number = event.target.number.value;
    let breed = event.target.breed.value;
    getDogImages(number, breed);
  });

  console.log(store);

  // getDogImages(store.number, store.breed);
     
}



$(collectNumberDogs());
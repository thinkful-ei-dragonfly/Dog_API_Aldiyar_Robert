'use strict';


function getDogImages(number) {
  console.log(number);
  fetch(`https://dog.ceo/api/breeds/image/random/${number})`)
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
      console.log(response);
    });
  
}


function collectNumberDogs() {

  // get number of dogs desired from user
  $('#js-number-of-dogs').on('submit', function(event) {
    event.preventDefault();
    let number = event.target.number.value;
    getDogImages(number);
  });

 

  // ^ also replaced 'click' with 'submit' right??????

  // INCLUDE CHECK TO CONFIRM THAT NUMBER IS BETWEEN 1 AND 50


  
}

$(collectNumberDogs());
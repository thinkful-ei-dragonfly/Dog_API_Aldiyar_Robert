'use strict';


function getDogImages() {
  let message = fetch( `https://dog.ceo/api/breeds/image/random/${collectNumberDogs()}`)
    .then(response => JSON.response())
    .then(response => response.message);
    
    console.log(message);

  // ^^ catch invalid?? after
  let allImages = ''

  // put in all src images with for loop
  for (let i = 0; i < message.length; i++) {
    allImages += `<img src=${message[i]}" class="individual-image">`;
  }

  $('.js-all-the-dogs').html(allImages);
}




function collectNumberDogs() {

  // get number of dogs desired from user
  let numberDogs = $('#js-user-input').on('submit', function(event) {
    return $(event.target).val(); 
  });

  // console.log(numberDogs);

  // ^ also replaced 'click' with 'submit' right??????

  // INCLUDE CHECK TO CONFIRM THAT NUMBER IS BETWEEN 1 AND 50

  
  if (!numberDogs) {
    return numberDogs;
  } else {
    return 3;
  }
  
}
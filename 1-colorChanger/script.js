const buttons = document.querySelectorAll('.button');
// selecting all the "buttons" using querySelectorAll
const body = document.querySelector('body');
// selecting body using tagName

// applying forEach on the nodelist we got from querySelectorAll 
// Using EventListener to change colour using the targetid 
 
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


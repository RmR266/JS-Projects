const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
//  so if we use this here and get the values then  usecase will give us empty values bcuz we are getting values when the page is loading and not when we are clicking so when the page is loaded the values in the form are empty and we would get empty so we want to get values when we have click on submit form 


// Preventing the defauly form actions of POST and GET
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // getting the height and weight values from form
  // getting the height value using Id of height div and we get the result in string so converting it into number 
  const height = parseInt(document.querySelector('#height').value);
  // following the same process with weight 
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // here instead of using height != NaN we use isNaN(height) and its like a method to check if the variable value is NaN or not and its the most accepted syntax now 
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // setting 2 decimal values
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


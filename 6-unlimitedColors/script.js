//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';  // elements in a hex color code
    let color = '#'; // hex code starts with # and then using loop to take values from hex variable and insterting it into our color variable 
    // using i<6 as there are only 6 elements in hex code excluding #
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)]; // using math.floor to get rounded value and not using +1 as we need 0 as well and using that position from genrated random values 
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor); // selecting start button 
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor); // selection stop button 
  
  
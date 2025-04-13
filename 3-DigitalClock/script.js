const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock') this works too

// to run it everytime in a interval
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


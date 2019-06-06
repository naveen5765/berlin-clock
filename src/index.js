const BerlinClock = require('./BerlinClock');
const Constants = require('./utils/constants');

var lights = document.querySelectorAll('.light');

(function updateClock() {
  var date = new Date();

  var hour = addZero(date.getHours());
  var minute = addZero(date.getMinutes());
  var second = addZero(date.getSeconds());
  var time = hour + ":" + minute + ":" + second;

  setDigitalTime(time);
  setBerlinClockTime(time);

  window.requestAnimationFrame(updateClock);
})();

function setDigitalTime(time) {
  document.getElementById("digitalClock").innerText = time;
  document.getElementById("digitalClock").textContent = time;
}

function setBerlinClockTime(time) {
  var berlinClockTime = BerlinClock(time);

  for (var berlinClockIndex = 0; berlinClockIndex < berlinClockTime.length && berlinClockIndex < lights.length; berlinClockIndex += 1) {
    if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_YELLOW || berlinClockTime[berlinClockIndex] === Constants.LIGHT_RED) {
      turnOn(lights[berlinClockIndex]);
    } else if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_OFF) {
      turnOff(lights[berlinClockIndex]);
    }
  }
}

function turnOn(light) {
  if (light.className.includes('off')) 
    light.className = light.className.replace('off', 'on');
  else if (!light.className.includes('on')) 
    light.className += ' on';
}

function turnOff(light) {
  if (light.className.includes('on')) 
    light.className = light.className.replace('on', 'off');
  else if (!light.className.includes('off')) 
    light.className += ' off';
}

function addZero(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}
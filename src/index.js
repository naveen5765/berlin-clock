import BerlinClock from './BerlinClock';
import * as Constants from './utils/constants';

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

  for (var i = 0; i < berlinClockTime.length && i < lights.length; i += 1) {
    if (berlinClockTime[i] === Constants.LIGHT_YELLOW || berlinClockTime[i] === Constants.LIGHT_RED) {
      turnOn(lights[i]);
    } else if (berlinClockTime[i] === Constants.LIGHT_OFF) {
      turnOff(lights[i]);
    }
  }
}

function turnOn(light) {
  if (light.className.includes('off')) {
    light.className = light.className.replace('off', 'on');
  } else if (!light.className.includes('on')) {
    light.className = light.className += ' on';
  }
}

function turnOff(light) {
  if (light.className.includes('on')) {
    light.className = light.className.replace('on', 'off');
  } else if (!light.className.includes('off')) {
    light.className = light.className += ' off';
  }
}

function addZero(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}
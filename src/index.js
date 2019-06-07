import BerlinClock from './BerlinClock';
import Constants from './utils/constants';

let lights = document.querySelectorAll('.light');
let updateClock;

const setDigitalTime = (time) => {
  document.getElementById("digitalClock").innerText = time;
  document.getElementById("digitalClock").textContent = time;
};

const setBerlinClockTime = (time) => {
  const berlinClockTime = BerlinClock(time);

  for (let berlinClockIndex = 0; berlinClockIndex < berlinClockTime.length && berlinClockIndex < lights.length; berlinClockIndex += 1) {
    if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_YELLOW || berlinClockTime[berlinClockIndex] === Constants.LIGHT_RED) {
      turnOnLight(lights[berlinClockIndex]);
    } else if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_OFF) {
      turnOffLight(lights[berlinClockIndex]);
    }
  }
};

const turnOnLight = (light) => {
  if (light.className.includes('off')) 
    light.className = light.className.replace('off', 'on');
  else if (!light.className.includes('on')) 
    light.className += ' on';
};

const turnOffLight = (light) => {
  if (light.className.includes('on')) 
    light.className = light.className.replace('on', 'off');
  else if (!light.className.includes('off')) 
    light.className += ' off';
};

const addZero = (number) => {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
};

(updateClock = () => {
  const date = new Date();

  const hour = addZero(date.getHours());
  const minute = addZero(date.getMinutes());
  const second = addZero(date.getSeconds());
  const time = hour + ":" + minute + ":" + second;

  setDigitalTime(time);
  setBerlinClockTime(time);

  window.requestAnimationFrame(updateClock);
})();
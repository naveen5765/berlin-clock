const Constants = require('./utils/constants');

function lights(numberOfLightsOn, totalNumberOfLights, color) {
  let lights = "";
  for (let lightIndex = 0; lightIndex < totalNumberOfLights; lightIndex++) {
    lights += lightIndex < numberOfLightsOn ? color(lightIndex) : Constants.LIGHT_OFF;
  }
  return lights;
}

function secondsLight(seconds) {
  return seconds % 2 === 0 ? Constants.LIGHT_YELLOW : Constants.LIGHT_OFF;
}

function fiveHoursLLights(hours) {
  let fiveHoursCount = Math.floor(hours / 5);
  return lights(fiveHoursCount, 4, () => Constants.LIGHT_RED);
}

function oneHourLights(hours) {
  let oneHoursCount = hours % 5;
  return lights(oneHoursCount, 4, () => Constants.LIGHT_RED);
}

function fiveMinutesLights(minutes) {
  let fiveMinutesCount = Math.floor(minutes / 5);
  return lights(fiveMinutesCount, 11, (lightIndex) => (lightIndex + 1) % 3 === 0 ? Constants.LIGHT_RED : Constants.LIGHT_YELLOW);
}

function oneMinuteLights(minutes) {
  let minutesCount = minutes % 5;
  return lights(minutesCount, 4, () => Constants.LIGHT_YELLOW);
}

const berlinClock = function(time) {
  let timeParts = time.split(":");
  let hours = timeParts[0];
  let minutes = timeParts[1];
  let seconds = timeParts[2];

  return secondsLight(seconds) +
      fiveHoursLLights(hours) +
      oneHourLights(hours) +
      fiveMinutesLights(minutes) +
      oneMinuteLights(minutes);
};

module.exports = berlinClock;
  
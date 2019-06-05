import * as Constants from './utils/constants';

function lamps(numberOfLightsOn, totalNumberOfLights, color) {
  let lamp = "";
  for (let lightIndex = 0; lightIndex < totalNumberOfLights; lightIndex++) {
    lamp += lightIndex < numberOfLightsOn ? color(lightIndex) : Constants.LIGHT_OFF;
  }
  return lamp;
}

function secondsLamp(seconds) {
  return seconds % 2 === 0 ? Constants.LIGHT_YELLOW : Constants.LIGHT_OFF;
}

function fiveHoursLamps(hours) {
  let fiveFullHours = Math.floor(hours / 5);
  return lamps(fiveFullHours, 4, () => Constants.LIGHT_RED);
}

function oneHourLamps(hours) {
  let fullHours = hours % 5;
  return lamps(fullHours, 4, () => Constants.LIGHT_RED);
}

function fiveMinutesLamps(minutes) {
  let fiveFullMinutes = Math.floor(minutes / 5);
  return lamps(fiveFullMinutes, 11, (lightIndex) => (lightIndex + 1) % 3 === 0 ? Constants.LIGHT_RED : Constants.LIGHT_YELLOW);
}

function oneMinuteLamps(minutes) {
  let fullMinutes = minutes % 5;
  return lamps(fullMinutes, 4, () => Constants.LIGHT_YELLOW);
}

export default function berlinClock(time) {
  let timeParts = time.split(":");
  let hours = timeParts[0];
  let minutes = timeParts[1];
  let seconds = timeParts[2];

  return secondsLamp(seconds) +
      fiveHoursLamps(hours) +
      oneHourLamps(hours) +
      fiveMinutesLamps(minutes) +
      oneMinuteLamps(minutes);
}
  
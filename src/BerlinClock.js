import Constants from './utils/constants';
import { isValidTime, isEvenNumber, modulo5, modulo3 } from './utils/helpers';

const lights = (numberOfLightsOn, totalNumberOfLights, color) => {
  let lights = "";
  for (let lightIndex = 0; lightIndex < totalNumberOfLights; lightIndex++) {
    lights += lightIndex < numberOfLightsOn ? color(lightIndex) : Constants.LIGHT_OFF;
  }
  return lights;
};

export const secondsLight = (seconds) => {
  return isEvenNumber(seconds) ? Constants.LIGHT_YELLOW : Constants.LIGHT_OFF;
};

export const fiveHoursLights = (hours) => {
  let fiveHoursCount = Math.floor(hours / 5);
  return lights(
    fiveHoursCount, 
    Constants.TOTAL_FIVE_HOURS_LIGHTS, 
    () => Constants.LIGHT_RED);
};

export const singleHoursLights = (hours) => {
  let oneHoursCount = modulo5(hours);
  return lights(
    oneHoursCount, 
    Constants.TOTAL_SINGLE_HOURS_LIGHTS, 
    () => Constants.LIGHT_RED);
};

export const fiveMinutesLights = (minutes) => {
  let fiveMinutesCount = Math.floor(minutes / 5);
  return lights(
      fiveMinutesCount, 
      Constants.TOTAL_FIVE_MINUTES_LIGHTS, 
      (lightIndex) => modulo3(lightIndex + 1) === 0 ? Constants.LIGHT_RED : Constants.LIGHT_YELLOW);
};

export const singleMinutesLights = (minutes) => {
  let minutesCount = modulo5(minutes);
  return lights(
    minutesCount, 
    Constants.TOTAL_SINGLE_MINUTES_LIGHTS, 
    () => Constants.LIGHT_YELLOW);
};

const berlinClock = (time) => {
  if(isValidTime(time)){
    let timeParts = time.split(":");
    let hours = timeParts[0];
    let minutes = timeParts[1];
    let seconds = timeParts[2];

    return secondsLight(seconds) +
        fiveHoursLights(hours) +
        singleHoursLights(hours) +
        fiveMinutesLights(minutes) +
        singleMinutesLights(minutes);
  }else{
    throw "Entered Time is Invalid. Please check and try again";
  }
};

export default berlinClock;
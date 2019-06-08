import Constants from '../utils/constants';
import { isInValidTime, isEven, modulo5, isMultipleOf3, splitDigitalTime } from '../utils/helpers';

const ClockPresenter = (_view) => {
 
    let clockView = _view;

    const isLightTurnedOn = (currentLightIndex, totalLightsTurnedOn) => {
        return currentLightIndex <= totalLightsTurnedOn;
    };
    
    const lights = (numberOfLightsOn, totalNumberOfLights, color) => {
        let lights = "";
        for (let lightIndex = 1; lightIndex <= totalNumberOfLights; lightIndex++) {
            lights += isLightTurnedOn(lightIndex, numberOfLightsOn) ? color(lightIndex) : Constants.LIGHT_OFF;
        }
        return lights;
    };

    const secondsLight = (seconds) => {
        return isEven(seconds) ? Constants.LIGHT_YELLOW : Constants.LIGHT_OFF;
    };

    const fiveHoursLights = (hours) => {
        let fiveHoursCount = Math.floor(hours / 5);
        return lights(
            fiveHoursCount, 
            Constants.TOTAL_FIVE_HOURS_LIGHTS, 
            () => Constants.LIGHT_RED);
    };

    const singleHoursLights = (hours) => {
        let oneHoursCount = modulo5(hours);
        return lights(
            oneHoursCount, 
            Constants.TOTAL_SINGLE_HOURS_LIGHTS, 
            () => Constants.LIGHT_RED);
    };

    const fiveMinutesLights = (minutes) => {
        let fiveMinutesCount = Math.floor(minutes / 5);
        return lights(
            fiveMinutesCount, 
            Constants.TOTAL_FIVE_MINUTES_LIGHTS, 
            (lightIndex) => isMultipleOf3(lightIndex) ? Constants.LIGHT_RED : Constants.LIGHT_YELLOW);
    };

    const singleMinutesLights = (minutes) => {
        let minutesCount = modulo5(minutes);
        return lights(
            minutesCount, 
            Constants.TOTAL_SINGLE_MINUTES_LIGHTS, 
            () => Constants.LIGHT_YELLOW);
    };

    const getBerlinClockTime = (time) => {
        if(isInValidTime(time))
            throw "Entered Time is Invalid. Please check and try again";

        const { hours, minutes, seconds } =  splitDigitalTime(time);

        return secondsLight(seconds) +
            fiveHoursLights(hours) +
            singleHoursLights(hours) +
            fiveMinutesLights(minutes) +
            singleMinutesLights(minutes);
    };

    return {
        getView: function(){
            return clockView;
        },
        
        setTime: function(digitalTime){
            const berlinClockTime = getBerlinClockTime(digitalTime);

            clockView.setBerlinTime(berlinClockTime);
            clockView.setDigitalTime(digitalTime);
        }
    };
};

export default ClockPresenter;
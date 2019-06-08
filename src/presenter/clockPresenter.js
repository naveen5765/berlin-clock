import Constants from '../utils/constants';
import { isValidTime, isEvenNumber, modulo5, modulo3 } from '../utils/helpers';

export default class ClockPresenter {

    constructor(_view){
        this.clockView = _view;
    }

    getView() {
        return this.clockView;
    }
    
    lights(numberOfLightsOn, totalNumberOfLights, color) {
        let lights = "";
        for (let lightIndex = 0; lightIndex < totalNumberOfLights; lightIndex++) {
            lights += lightIndex < numberOfLightsOn ? color(lightIndex) : Constants.LIGHT_OFF;
        }
        return lights;
    }

    secondsLight(seconds) {
        return isEvenNumber(seconds) ? Constants.LIGHT_YELLOW : Constants.LIGHT_OFF;
    }

    fiveHoursLights(hours) {
        let fiveHoursCount = Math.floor(hours / 5);
        return this.lights(
            fiveHoursCount, 
            Constants.TOTAL_FIVE_HOURS_LIGHTS, 
            () => Constants.LIGHT_RED);
    }

    singleHoursLights(hours) {
        let oneHoursCount = modulo5(hours);
        return this.lights(
            oneHoursCount, 
            Constants.TOTAL_SINGLE_HOURS_LIGHTS, 
            () => Constants.LIGHT_RED);
    }

    fiveMinutesLights(minutes) {
        let fiveMinutesCount = Math.floor(minutes / 5);
        return this.lights(
            fiveMinutesCount, 
            Constants.TOTAL_FIVE_MINUTES_LIGHTS, 
            (lightIndex) => modulo3(lightIndex + 1) === 0 ? Constants.LIGHT_RED : Constants.LIGHT_YELLOW);
    }

    singleMinutesLights(minutes) {
        let minutesCount = modulo5(minutes);
        return this.lights(
            minutesCount, 
            Constants.TOTAL_SINGLE_MINUTES_LIGHTS, 
            () => Constants.LIGHT_YELLOW);
    }

    getBerlinClockTime(time) {
        if(isValidTime(time)){
            let timeParts = time.split(":");
            let hours = timeParts[0];
            let minutes = timeParts[1];
            let seconds = timeParts[2];

            return this.secondsLight(seconds) +
                this.fiveHoursLights(hours) +
                this.singleHoursLights(hours) +
                this.fiveMinutesLights(minutes) +
                this.singleMinutesLights(minutes);
        }else{
            throw "Entered Time is Invalid. Please check and try again";
        }
    }

    setTime(digitalTime) {
        const berlinClockTime = this.getBerlinClockTime(digitalTime);

        this.clockView.setBerlinTime(berlinClockTime);
        this.clockView.setDigitalTime(digitalTime);
    }
}
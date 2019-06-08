import template from '../templates/clock_template';
import Constants from '../utils/constants';

export default class ClockView {

    turnOnLight(light) {
        if (light.className.includes('off')) 
            light.className = light.className.replace('off', 'on');
        else if (!light.className.includes('on')) 
            light.className += ' on';
    }
    
    turnOffLight(light) {
        if (light.className.includes('on')) 
            light.className = light.className.replace('on', 'off');
        else if (!light.className.includes('off')) 
            light.className += ' off';
    }

    getHtml() {
        return template();
    }

    setBerlinTime(berlinClockTime) {
        let lights = document.querySelectorAll('.light');

        for (let berlinClockIndex = 0; berlinClockIndex < berlinClockTime.length && berlinClockIndex < lights.length; berlinClockIndex += 1) {
            if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_YELLOW || berlinClockTime[berlinClockIndex] === Constants.LIGHT_RED) {
                this.turnOnLight(lights[berlinClockIndex]);
            } else if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_OFF) {
                this.turnOffLight(lights[berlinClockIndex]);
            }
        }
    }

    setDigitalTime(digitalTime) {
        document.getElementById("digitalClock").innerText = digitalTime;
    }
}
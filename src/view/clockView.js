import template from '../templates/clock_template';
import Constants from '../utils/constants';
import { addClass, removeClass } from '../utils/helpers';

const ClockView = () => {

    const toggleLight = (light, lightSwitch) => {
        if(lightSwitch === 'on'){
            removeClass(light, 'off');
            addClass(light, 'on');
        }else{
            removeClass(light, 'on');
            addClass(light, 'off');
        }
    };

    return {
        getHtml: () => {
            return template();
        },
    
        setBerlinTime: (berlinClockTime) => {
            let lights = document.querySelectorAll('.light');
    
            for (let berlinClockIndex = 0; berlinClockIndex < berlinClockTime.length && berlinClockIndex < lights.length; berlinClockIndex += 1) {
                if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_YELLOW || berlinClockTime[berlinClockIndex] === Constants.LIGHT_RED) {
                    toggleLight(lights[berlinClockIndex], 'on');
                } else if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_OFF) {
                    toggleLight(lights[berlinClockIndex], 'off');
                }
            }
        },
    
        setDigitalTime: (digitalTime) => {
            document.getElementById("digitalClock").innerText = digitalTime;
        }
    };
};

export default ClockView;
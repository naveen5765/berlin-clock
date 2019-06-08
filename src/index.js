import DigitalTime from './model/digitalTime';
import ClockPresenter from './presenter/clockPresenter';
import ClockView from './view/clockView';

let updateClock;
const clock = ClockPresenter(ClockView());

document.getElementById('container').innerHTML = clock.getView().getHtml();
 
(updateClock = () => {
    const digitalTime = new DigitalTime().getTime();

    clock.setTime(digitalTime);

    window.requestAnimationFrame(updateClock);
})();
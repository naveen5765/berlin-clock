import { prependZero } from '../utils/helpers';

const DigitalTime = (date = new Date()) => {
    
    const hour = prependZero(date.getHours());
    const minute = prependZero(date.getMinutes());
    const second = prependZero(date.getSeconds());
    const time = hour + ":" + minute + ":" + second;

    return {
        getTime: () => {
            return time;
        }
    };
};

export default DigitalTime;
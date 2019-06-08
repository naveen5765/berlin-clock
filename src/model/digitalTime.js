import { prependZero } from '../utils/helpers';

export default class DigitalTime{

    constructor(date = new Date()){
        const hour = prependZero(date.getHours());
        const minute = prependZero(date.getMinutes());
        const second = prependZero(date.getSeconds());
        this.time = hour + ":" + minute + ":" + second;
    }

    getTime() {
        return this.time;
    }
}
export const isValidTime = (time) => {
    const isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
    if (isValid) {
        return true;
    } else {
        return false;
    }
};

export const isEvenNumber = (number) => {
    return number % 2 === 0;
};

export const modulo5 = (number) => {
    return number % 5; 
};

export const modulo3 = (number) => {
    return number % 3; 
};

export const prependZero = (number) => {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
};
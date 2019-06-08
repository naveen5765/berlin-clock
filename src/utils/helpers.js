export const isInValidTime = (time) => {
    const isInValid = !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
    if (isInValid) {
        return true;
    } else {
        return false;
    }
};

export const isEven = (number) => {
    return number % 2 === 0;
};

export const modulo5 = (number) => {
    return number % 5; 
};

export const isMultipleOf3 = (number) => {
    return number % 3 === 0;
};

export const prependZero = (number) => {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
};

export const splitDigitalTime = (time) => {
    let timeParts = time.split(":");
    let hours = timeParts[0];
    let minutes = timeParts[1];
    let seconds = timeParts[2];

    return {hours, minutes, seconds};
};

export const hasClass = (el, className) => {
    if (el.classList)
        return el.classList.contains(className);
    return el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

export const addClass = (el, className) => {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className))
        el.className += " " + className;
};

export const removeClass = (el, className) => {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
};
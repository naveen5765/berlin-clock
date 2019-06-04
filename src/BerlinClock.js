function lamps(lit, count, color) {
  let result = "";
  for (let i = 0; i < count; i++) {
      result += i < lit ? color(i) : "O";
  }
  return result;
}

function secondsLamp(seconds) {
  return seconds % 2 === 0 ? "Y" : "O";
}

function fiveFullHoursLamps(hours) {
  let fiveFullHours = Math.floor(hours / 5);
  return lamps(fiveFullHours, 4, () => "R");
}

function fullHoursLamps(hours) {
  let fullHours = hours % 5;
  return lamps(fullHours, 4, () => "R");
}

function fiveFullMinutesLamps(minutes) {
  let fiveFullMinutes = Math.floor(minutes / 5);
  return lamps(fiveFullMinutes, 11, (i) => (i + 1) % 3 === 0 ? "R" : "Y");
}

function fullMinutesLamps(minutes) {
  let fullMinutes = minutes % 5;
  return lamps(fullMinutes, 4, () => "Y");
}

function berlinClock(time) {
  let timeParts = time.split(":");
  let hours = timeParts[0];
  let minutes = timeParts[1];
  let seconds = timeParts[2];

  return secondsLamp(seconds) +
      fiveFullHoursLamps(hours) +
      fullHoursLamps(hours) +
      fiveFullMinutesLamps(minutes) +
      fullMinutesLamps(minutes);
}

module.exports = berlinClock;

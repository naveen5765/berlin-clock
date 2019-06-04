describe("Player", function() {
  var berlinClock = require('../src/BerlinClock');

  it("Should return the berlin clock pattern as ORRRRRROOYYRYYROOOOOYYOO for digital clock input 22:32:45", function() {
    expect(berlinClock("22:32:45")).toBe("ORRRRRROOYYRYYROOOOOYYOO")
  });

  it("Should check for the correct berlin clock pattern for random digital clock input", function() {
    //random testing 50 times
    for (var i = 0; i < 50; i++) {
      let time = randomTime();
      console.log("random input was " + time);
      // Compare user's function with a working solution:
      expect(berlinClock(time)).toBe(berlinClockTest(time));
    }
  });

});

function randomTime() {
  let hoursRand = Math.floor(Math.random()*23).toString(),
      minRand = Math.floor(Math.random()*59).toString(),
      secRand = Math.floor(Math.random()*59).toString();
  
  hoursRand = hoursRand < 10 ? "0"+hoursRand : hoursRand;
  minRand = minRand < 10 ? "0"+minRand : minRand;
  secRand = secRand < 10 ? "0"+secRand : secRand;
  
  return hoursRand+":"+minRand+":"+secRand;
}

function berlinClockTest(time) {
  var arr = time.split(':'),
      hour = arr[0], min = arr[1], sec = arr[2],
      seconds = sec%2==0 ? "Y":"O",
      topHours = 'R'.repeat(Math.floor(hour/5)) + 'O'.repeat(4-Math.floor(hour/5)).trim(),
      bottomHours = 'R'.repeat(Math.floor(hour%5)) + 'O'.repeat(4-Math.floor(hour%5)).trim(),
      topMinutes = Array(Math.floor(min/5)).fill('Y').concat(Array(11-Math.floor(min/5)).fill('O')).join('').replace(/YYY/g,"YYR"),
      bottomMinutes = 'Y'.repeat(Math.floor(min%5)) + 'O'.repeat(4-Math.floor(min%5)).trim();
  
  return seconds + topHours + bottomHours + topMinutes + bottomMinutes;
}

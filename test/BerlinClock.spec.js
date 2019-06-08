import { expect } from 'chai';
import berlinClock, 
  { secondsLight,   
    fiveHoursLights, 
    singleHoursLights, 
    fiveMinutesLights, 
    singleMinutesLights } from '../src/presenter/clockPresenter';

describe("Berlin CLock", () => {

  describe("Single Minutes Row", () => {

    it("Should return 'OOOO' for '00' minute", function() {
      expect(singleMinutesLights('00')).to.equal('OOOO');
    });

    it("Should return 'YYYY' for '59' minutes", function() {
      expect(singleMinutesLights('59')).to.equal('YYYY');
    });

    it("Should return 'YYOO' for '32' minutes", function() {
      expect(singleMinutesLights('32')).to.equal('YYOO');
    });

    it("Should return 'YYYY' for '34' minutes", function() {
      expect(singleMinutesLights('34')).to.equal('YYYY');
    });

    it("Should return 'OOOO' for '35' minutes", function() {
      expect(singleMinutesLights('35')).to.equal('OOOO');
    });

  });

  describe("Five Minutes Row", () => {

    it("Should return 'OOOOOOOOOOO' for '00' minute", function() {
      expect(fiveMinutesLights('00')).to.equal('OOOOOOOOOOO');
    });

    it("Should return 'YYRYYRYYRYY' for '59' minutes", function() {
      expect(fiveMinutesLights('59')).to.equal('YYRYYRYYRYY');
    });

    it("Should return 'OOOOOOOOOOO' for '04' minutes", function() {
      expect(fiveMinutesLights('04')).to.equal('OOOOOOOOOOO');
    });

    it("Should return 'YYRYOOOOOOO' for '23' minutes", function() {
      expect(fiveMinutesLights('23')).to.equal('YYRYOOOOOOO');
    });

    it("Should return 'YYRYYRYOOOO' for '35' minutes", function() {
      expect(fiveMinutesLights('35')).to.equal('YYRYYRYOOOO');
    });

  });

  describe("Single Hours Row", () => {

    it("Should return 'OOOO' for '00' hour", function() {
      expect(singleHoursLights('00')).to.equal('OOOO');
    });

    it("Should return 'RRRO' for '23' hours", function() {
      expect(singleHoursLights('23')).to.equal('RRRO');
    });

    it("Should return 'RROO' for '02' hours", function() {
      expect(singleHoursLights('02')).to.equal('RROO');
    });

    it("Should return 'RRRO' for '08' hours", function() {
      expect(singleHoursLights('08')).to.equal('RRRO');
    });

    it("Should return 'RRRR' for '14' hours", function() {
      expect(singleHoursLights('14')).to.equal('RRRR');
    });

  });
  
  describe("Five Hours Row", () => {

    it("Should return 'OOOO' for '00' hour", function() {
      expect(fiveHoursLights('00')).to.equal('OOOO');
    });

    it("Should return 'RRRR' for '23' hours", function() {
      expect(fiveHoursLights('23')).to.equal('RRRR');
    });

    it("Should return 'OOOO' for '02' hours", function() {
      expect(fiveHoursLights('02')).to.equal('OOOO');
    });

    it("Should return 'ROOO' for '08' hours", function() {
      expect(fiveHoursLights('08')).to.equal('ROOO');
    });

    it("Should return 'RRRO' for '16' hours", function() {
      expect(fiveHoursLights('16')).to.equal('RRRO');
    });

  });

  describe("Seconds lamp", () => {

    it("Should return 'Y' for '00' second", function() {
      expect(secondsLight('00')).to.equal('Y');
    });

    it("Should return 'O' for '59' seconds", function() {
      expect(secondsLight('59')).to.equal('O');
    });

  });

  describe("Entire Berlin Clock", () => {

    it("Should return 'YOOOOOOOOOOOOOOOOOOOOOOO' for '00:00:00' digital time", function() {
      expect(berlinClock('00:00:00')).to.equal('YOOOOOOOOOOOOOOOOOOOOOOO');
    });

    it("Should return 'ORRRRRRROYYRYYRYYRYYYYYY' for '23:59:59' digital time", function() {
      expect(berlinClock('23:59:59')).to.equal('ORRRRRRROYYRYYRYYRYYYYYY');
    });

    it("Should return 'YRRROROOOYYRYYRYYRYOOOOO' for '16:50:06' digital time", function() {
      expect(berlinClock('16:50:06')).to.equal('YRRROROOOYYRYYRYYRYOOOOO');
    });

    it("Should return 'ORROOROOOYYRYYRYOOOOYYOO' for '11:37:01' digital time", function() {
      expect(berlinClock('11:37:01')).to.equal('ORROOROOOYYRYYRYOOOOYYOO');
    });

  });

  describe("Error Handling for Invalid Time", () => {

    it("Should throw and error for '25:00:00' digital time", function() {
      let exceptionThrown = false;
      try{
        berlinClock('25:00:00');
      }catch(exception){
        exceptionThrown = true;
      }
      expect(exceptionThrown).to.be.true;
    });

    it("Should throw and error for '24:70:00' digital time", function() {
      let exceptionThrown = false;
      try{
        berlinClock('24:70:00');
      }catch(exception){
        exceptionThrown = true;
      }
      expect(exceptionThrown).to.be.true;
    });

    it("Should throw and error for '24:23:90' digital time", function() {
      let exceptionThrown = false;
      try{
        berlinClock('24:23:90');
      }catch(exception){
        exceptionThrown = true;
      }
      expect(exceptionThrown).to.be.true;
    });

  });

});
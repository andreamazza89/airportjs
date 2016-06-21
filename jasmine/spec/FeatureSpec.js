'use strict';

describe('Feature Test:', function() {

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('Weather is not stormy', function() {

    beforeEach(function(){
      Math.random = function() { return 0; }
    });

    it('planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    })

    it('planes can be instructed to take off from an airport', function(){
      plane.land(airport);
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane);
    })

  });

  describe('Weather is stormy', function() {

    beforeEach(function(){
      Math.random = function() { return 3; }
    });

    it('planes cannot land if weather is stormy', function(){
      expect(function() { plane.land(airport) }).toThrow(new Error('Too stormy to land'));
    })

    xit('planes cannot takeoff if weather is stormy', function(){
      plane.land(airport);
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane);
    })

  });

})


'use strict';

describe('Plane',function(){

  beforeEach(function(){
    var plane;
    var weather;
    var airport;
    var weather = new Weather;
    spyOn(weather, 'isStormy').and.returnValue(false)
    var plane = new Plane(weather);
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
  });

  it('can land at an airport', function(){

    var plane;
    var weather;
    var airport;
    var weather = new Weather;
    spyOn(weather, 'isStormy').and.returnValue(false)
    var plane = new Plane(weather);
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);

    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function(){

    var plane;
    var weather;
    var airport;
    var weather = new Weather;
    spyOn(weather, 'isStormy').and.returnValue(false)
    var plane = new Plane(weather);
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);

    plane.land(airport);
    plane.takeOff();
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  })

  it('cannot land at an airport if Weather is stormy', function(){
    var plane;
    var weather;
    var airport;
    var weather = new Weather;
    spyOn(weather, 'isStormy').and.returnValue(true)
    var plane = new Plane(weather);
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);

    expect(function() { plane.land(airport) }).toThrow(new Error('Too stormy to land'));
  });
});

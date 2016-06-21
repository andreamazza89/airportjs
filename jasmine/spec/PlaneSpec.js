'use strict';

describe('Plane',function(){
    var plane;
    var weather;
    var airport;

  beforeEach(function(){
    weather = new Weather;
    spyOn(weather, 'isStormy').and.returnValue(false)
    plane = new Plane(weather);
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function(){
    plane.land(airport);
    plane.takeOff();
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  })

  it('cannot land at an airport if Weather is stormy', function(){
    weather.isStormy = jasmine.createSpy().and.returnValue(true);
    expect(function() { plane.land(airport) }).toThrow(new Error('Too stormy to land'));
  });

  it('cannot takeoff from an airport if Weather is stormy', function(){
    weather.isStormy = jasmine.createSpy().and.returnValue(true);
    expect(function() { plane.takeOff() }).toThrow(new Error('Too stormy to take off'));
  });
});

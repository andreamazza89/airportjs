'use strict';

function Plane(weather = new Weather) {
  this._airport = null;
  this._weather = weather;
}

Plane.prototype.land = function(airport){
  if (this._weather.isStormy()) {
    //throw(new Error('Too stormy to land'));
    throw(new Error('Too stormy to land'));
  } else { 
    airport.clearForLanding(this);
    this._airport = airport;
  }
}

Plane.prototype.takeOff = function(){
  this._airport.clearForTakeOff(this);
  this._airport = null;
}

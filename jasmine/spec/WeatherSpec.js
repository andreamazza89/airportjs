'use strict';

describe('Weather', function(){
  it('#isStormy returns a boolean', function() {
    var weather = new Weather();
    expect(weather.isStormy()).toMatch(/true|false/)
  });
})

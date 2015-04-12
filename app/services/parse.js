'use strict';

angular.module('parseServices', [])
.factory('ParseSDK', function() {
  // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  Parse.initialize("PdAqXwg7LfLBV5X0eR3H7sXeiLruJga2CVLEYTjf", "zRIqG95CEy8xrlOvBqSwFhAtoCWxaJP5HR6z9QWK");
});

'use strict';

angular.module('parseServices', [])
.factory('ParseSDK', function() {
  // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  Parse.initialize(pda.parseCredentials.applicationID, pda.parseCredentials.javascriptKey);
});

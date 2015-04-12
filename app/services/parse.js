'use strict';

angular.module('myApp.parseServices', [])
.factory('ParseSDK', function() {
  // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  Parse.initialize("**REPLACE_WITH_PROD_KEY**", "**REPLACE_WITH_PROD_KEY**");
});

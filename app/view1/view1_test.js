'use strict';

describe('myApp.view1 module', function() {


	beforeEach(function(){
		module('myApp.view1');
	});

	describe('view1 controller', function(){


		xit('should ....', inject(function($rootScope, $controller) {
			var $scope = $rootScope.new();

			//spec body
			var view1Ctrl = $controller('View1Ctrl', { $scope: $scope });
			expect(view1Ctrl).toBeDefined();
		}));

	});
});
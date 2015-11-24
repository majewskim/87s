describe('MainController', function() {

	var $controller,
	$rootScope,
	$document;

	beforeEach(function() {
		module('87');
	});

	beforeEach(inject(function($injector) {
		$controller = $injector.get('$controller');
		$rootScope = $injector.get('$rootScope');
		$document = $injector.get('$document');

		createController = function() {
			return $controller('MainController', {'$scope' : $rootScope});
		}
	}));

	describe('invert', function() {
		it('should invert the color and store it in the local storage', function() {
			createController();

			$rootScope.invert($rootScope.whiteColour);

			expect(window.localStorage.getItem('colour')).toEqual($rootScope.whiteColour);
		});

		it('should set inverted class on the body element when the colour is changed to white', function() {
			createController();
			$rootScope.invert($rootScope.whiteColour);
			expect($document.find('body').hasClass('inverted')).toBeTruthy();
		});

		it('should remove inverted class from the body element when the colour is set to black', function() {
			createController();
			$rootScope.invert($rootScope.blackColour);
			expect($document.find('body').hasClass('inverted')).toBeFalsy();			
		});
	});
});
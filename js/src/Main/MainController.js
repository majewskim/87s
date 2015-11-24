/*global app, angular,mainModule*/
mainModule.controller('MainController', ['$scope', '$document', '$window', 'imageInvertFactory', function ($scope, $document, $window, imageInvertFactory) {
    'use strict';

    $scope.whiteColour = "#fff";
    $scope.blackColour = "#000";


    $scope.invert = function (colour) {
        if (colour === $scope.whiteColour) {
            $document.find('body').addClass('inverted');
            imageInvertFactory.invertImages(true);
        } else {
            $document.find('body').removeClass('inverted');
            imageInvertFactory.invertImages(false);
        }
        $window.localStorage.setItem('colour', colour);
        return true;
    };

    $scope.invert($window.localStorage.getItem('colour'));
}]);
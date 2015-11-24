/*global app,angular,services */
services.service('imageInvertFactory', function () {
    'use strict';

    return {
        invertImages: function (invert) {
            var footerImages = document.getElementsByClassName('footer-image'),
                footerImagesArray = Array.prototype.slice.call(footerImages);

            footerImagesArray.forEach(function (image) {
                var el = angular.element(image);
                if (invert) {
                    el.attr('src', 'img/' + el.attr('id') + '_black.png');
                } else {
                    el.attr('src', 'img/' + el.attr('id') + '.png');
                }
            });
        }
    };
});
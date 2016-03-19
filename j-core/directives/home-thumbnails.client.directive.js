'use strict';

angular.module('ngfireApp').directive('publisherThumbnail', [
    function () {
        return {
            templateUrl: 'j-core/views/template-thumbnail.html',
            restrict: 'E',
            controller: 'HomeController',
            scope: {
                publisher: "="
            }
        };
    }
]);

/**
 * Created by Julius Hernandez on 3/23/2016.
 */

angular.module('core').controller('HireController', [
    '$scope', '$firebaseArray',
    function ($scope, $firebaseArray) {
        var jdb_ref = new Firebase('https://julius.firebaseio.com/offers/');
        $scope.jdb = $firebaseArray(jdb_ref);
        $scope.show = false;

        $scope.offer = function () {
            //{prop1: "hello", prop2: "world"}
            $scope.show = true;
        }
    }
]);

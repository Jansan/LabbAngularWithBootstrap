angular.module("newsBlogModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        function ($scope, $location, $route) {
            $scope.$oute = $route;

            $scope.news = []; // data

            $scope.go = function (url) { // routing location url
                $location.path(url);
            }
        }
    ]);
angular.module("newsBlogModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        function ($scope, $location, $route) {
            $scope.$route = $route;
            $scope.news = []; // data

            $scope.loadNews = function () {
                var dataString = localStorage.getItem("news");

                if (dataString)
                    $scope.news = JSON.parse(dataString);
            }

            $scope.saveNews = function () {
                var jsonString = JSON.stringify($scope.news);
                localStorage.setItem("news", jsonString);
            }

            $scope.loadNews();


            $scope.go = function (url) { // routing location url
                $location.path(url);
            }
        }
    ]);
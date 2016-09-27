angular.module("newsBlogModule")
    .controller("NewsController", [
        "$scope",
        function ($scope) {
            $scope.title = "News";
            $scope.newNews = {};

            $scope.addNews = function () {
                $scope.news.push($scope.newNews);
                $scope.newNews = {};
                $scope.saveNews();
            }
            $scope.removeNews = function ($index) {
                $scope.news.splice($index, 1);
                alert("News will be deleted");
                $scope.saveNews();
            }
        }
    ]);


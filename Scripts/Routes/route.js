angular.module("newsBlogModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider

            .when("/", {

                templateUrl: "Views/Home.html",
                controller: "HomeController",
                caseInsensitiveMatch: true,
                activeTab: "Home"

            })
            .when("/News", {

                templateUrl: "Views/News.html",
                controller: "NewsController",
                caseInsensitiveMatch: true,
                activeTab: "News"

            })
            .when("/News/:id", {

                templateUrl: "Views/NewsDetail.html",
                controller: "NewsDetailController",
                caseInsensitiveMatch: true,
                activeTab: "News"

            });
        }
    ]);
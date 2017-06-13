var app = angular.module("app", ['ui.bootstrap']);


app.controller("mainController", function ($http, $scope) {
    $scope.totalItems = 64;
    $scope.currentPage = 1;
    $scope.limit = 1;
    $scope.maxSize = 5;

    $scope.currentUserName = "octocat";
    getUser($scope.currentUserName);
    getData($scope.currentUserName);

    $scope.$watch("currentUserName", function () {
        getUser();
        getData();
    });

    function getUser() {
        $http.get("https://api.github.com/users/" + $scope.currentUserName)
            .then(function (response) {
                $scope.user = response.data;
            });
    }

    function getData() {
        $http.get("https://api.github.com/users/" + $scope.currentUserName + "/followers?page=" + ($scope.currentPage) * $scope.limit + "&per_page=50")
          .then(function (response) {
              $scope.followers = response.data;
          });
    }

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        getData();
    };

    $scope.setCurrentUser = function (userName) {
        $scope.currentUserName = userName;
    };

});

app.controller("navbar", function ($scope) {
    
    $scope.search = function () {
        $scope.$parent.currentUserName = $scope.searchTerm;

        $scope.$parent.getUser();
        $scope.$parent.getData();
    }

});

app.directive("followers", function () {

    return {
        restrict: 'E',
        templateUrl: "followers.html"
    };

});

app.directive("user", function () {

    return {
        restrict: 'E',
        templateUrl: "user.html"
    };

});

app.directive("navbar", function () {

    return {
        restrict: 'E',
        templateUrl: "navbar.html",
        controller: 'navbar'
    };

});

app.directive("pagination", function () {

    return {
        restrict: 'E',
        templateUrl: "pagination.html"
    };

});

app.filter('followerfilter', function () {

    return function (follower) {

        if (follower.id < 1555350) {
        }
        return follower;

    }

});
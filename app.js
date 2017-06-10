var app = angular.module("app", ['ui.bootstrap']);


app.controller("mainController", function ($http, $scope) {

    $http.get("https://api.github.com/users/octocat")
        .then(function (response) {
            $scope.user = response.data;
        });

    $scope.totalItems = 64;
    $scope.currentPage = 1;
    $scope.limit = 1;
    $scope.maxSize = 5;
    getData();

    function getData() {
        $http.get("https://api.github.com/users/octocat/followers?page=" + ($scope.currentPage - 1) * $scope.limit + "&per_page=50")
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

});


app.directive("follower", function () {

    return {
        restrict: 'E',
        templateUrl: "follower.html"
    };

});

app.directive("user", function () {

    return {
        restrict: 'E',
        templateUrl: "user.html"
    };

});
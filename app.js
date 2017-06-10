var app = angular.module("app", []);


app.controller("mainController", function ($http, $scope) {

    //$http.get("followers.json")
    //.then(function (response) {
    //    $scope.followers = response.data;
    //});

    $http.get("https://api.github.com/users/octocat")
        .then(function (response) {
            $scope.user = response.data;
        });

    $http.get("https://api.github.com/users/octocat/followers")
        .then(function (response) {
            $scope.followers = response.data;
        });



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
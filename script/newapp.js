var myApp = angular.module("myApp", []);

myApp.controller("HelloWorldCtrl", function ($scope){
    $scope.person = {
        name : "Johnny Depp",
        age : "54",
        mobile : "4545455858",
        emails : [
            {discription:'official',email:'johnyn@scet.ac.in'},
            {discription:'personal1',email:'pirates@yahoo.com'},
            {discription:'personal2',email:'carrabian@gmail.com'}
        ]
    };
});


 angular.module("loginController",[]).controller('loginController', ['$scope','$location', function ($scope,$location) {
        $scope.records = {
            userName: "",
            password: ""
        };
        $scope.login = function () {
        	 $location.path('/mainpage');
            $scope.isShow = true;
            $scope.name = $scope.records.userName;

            $scope.records = {
                userName: "",
                password: ""
            }
        };
    }]);
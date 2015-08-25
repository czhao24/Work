angular.module("task1",[])
    .controller("firstctrl",function($scope){
        $scope.emails=[];
        $scope.submit=function(email){
            $scope.emails.push(email);
        }

});
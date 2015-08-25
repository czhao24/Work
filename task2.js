/**
 * Created by czhao on 2015/8/25.
 */
angular.module("task2",[])
    .controller("secondctrl",function($scope){

        $scope.score = [
            {group:"group1",info:[{name:"group1P1",score:80},
                                  {name:"group1P2",score:77},
                                  {name:"group1P3",score:89},
                                  {name:"group1P4",score:82},
                                  {name:"group1P5",score:78}]},

            {group:"group2",info:[{name:"group2P1",score:80},
                                  {name:"group2P2",score:77},
                                  {name:"group2P3",score:89},
                                  {name:"group2P4",score:88},
                                  {name:"group2P5",score:78}]},

            {group:"group3",info:[{name:"group3P1",score:70},
                                  {name:"group3P2",score:77},
                                  {name:"group3P3",score:89},
                                  {name:"group3P4",score:82},
                                  {name:"group3P5",score:78}]}
        ]

        $scope.selectchange=function(){
            $scope.x=$scope.second.score;
        }

    });
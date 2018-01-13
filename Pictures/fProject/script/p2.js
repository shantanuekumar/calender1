var newApp = angular
                    .module("newModule",[])
                    .controller("newController",function($scope){
                       var emp = [{name:"shantanu",age:23,designation:"student"},
                           {name:"nagendra",age:57,designation:"teacher"},
                           {name:"rishabh",age:23,designation:"developer"},
                           {name:"shanu",age:23,designation:"designer"},
                                    ];
                        $scope.emp = emp;
                    });
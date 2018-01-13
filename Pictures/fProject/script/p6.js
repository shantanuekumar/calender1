var myApp = angular
                  .module("myModule",[])
                  .controller("myController",function($scope){
                       var employees = [{name:"shane",age:23,gender:"m",caste:"bhumihar"},
                           {name:"shanu",age:23,gender:"m",caste:"rajput"},
                           {name:"sharad",age:24,gender:"m",caste:"nepali"},
                           {name:"rishabh",age:23,gender:"m",caste:"bhumihar"}
                           ];
                       $scope.employees = employees;
                       $scope.onSelect = "name";
                    });
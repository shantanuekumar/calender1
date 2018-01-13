var myTable = angular
                    .module("myModule",[])
                    .controller("myController",function($scope){
                       var myData = [{name:"shantanu",dateOfBirth:new Date("December 04, 1994"),gender:"male",salary:25000},
                           {name:"sharad",dateOfBirth: new Date("January 31, 1994"),gender:"male",salary:22000},
                           {name:"anita",dateOfBirth: new Date("January 12, 1994"),gender:"female",salary:12000},
                           {name:"kavya",dateOfBirth: new Date("July 19, 1992"),gender:"female",salary:37000},
                           {name:"shanu",dateOfBirth: new Date("october 31, 1996"),gender:"male",salary:52000}
                       ];
                       $scope.myData = myData;
                        $scope.rowLimit = 3;
                    });
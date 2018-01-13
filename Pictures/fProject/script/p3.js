var fApp = angular
                .module("fModule",[])
                .controller("fController",function ($scope) {
                    var countries = [{
                        name: "India",
                        cities:[
                            {name:"delhi"},
                            {name:"chennai"},
                            {name:"mumbai"}
                            ]
                        },
                        {
                            name: "USA",
                            cities:[
                                {name:"new york"},
                                {name:"burmingham"},
                                {name:"wesley"}
                            ]
                        },
                        {
                            name: "England",
                            cities:[
                                {name:"london"},
                                {name:"wales"},
                                {name:"Vermont"}
                            ]
                        }


                    ];
                    $scope.countries = countries;
                });
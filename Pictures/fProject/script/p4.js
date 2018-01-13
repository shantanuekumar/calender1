var likeApp = angular
                    .module("likeModule",[])
                    .controller("likeController",function($scope){
                        var language = [{name:"c#",likes:0,dislikes:0},
                            {name:"swift",likes:0,dislikes:0},
                            {name:"rust",likes:0,dislikes:0}];
                        $scope.language = language;

                        $scope.incrementLike = function(lang){
                            lang.likes++;
                        }
                        $scope.incrementDislike = function(lang){
                            lang.dislikes++;
                        }
                    });

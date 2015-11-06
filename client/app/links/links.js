angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.links
  $scope.addLink = function(link){
    $scope.links.push({url: url}); //need to work on
  };
});

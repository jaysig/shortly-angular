angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = function(link){
    $scope.links.push({url: url}); //need to work on
    $scope.newLink = '';
  };
});

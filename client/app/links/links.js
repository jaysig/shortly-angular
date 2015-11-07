angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  angular.extend($scope, Links); //puts everything on the scope object
})
// .factory('Links',function(){
//
// })

  //call get links

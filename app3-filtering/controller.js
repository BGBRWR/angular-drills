angular.module('myApp').controller('myController', function($scope, myService) {

  $scope.data = myService.getData();

});

angular.module('arrayApp').controller('arrayController', function($scope, myService){

  $scope.data = myService.getData();
});

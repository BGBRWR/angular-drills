angular.module('apiApp').controller('myController', function($scope, myService) {

  $scope.getData = function() {
    var prms = myService.getData();

    prms.then(function(data){
      $scope.data = data;
    });
  };
  $scope.getData();


});

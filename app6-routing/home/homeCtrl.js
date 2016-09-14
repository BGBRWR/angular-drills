angular.module('routingApp').controller('homeCtrl', function($scope, starWarsService){
  $scope.routeName = 'Home!';


    starWarsService.getPeople()
    .then(function(data){
      $scope.people = data.results;
    });
});

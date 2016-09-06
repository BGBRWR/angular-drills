angular.module('apiApp').service('myService', function($http){

  baseUrl = 'http://smurfs.devmounta.in/smurfs/';

  this.getData = function() {
    var promise = $http({
      method: 'GET',
      url: baseUrl
    }).then(function(response){
      if(response.status === 200){
        return response.data;
      }
      else {
        return 'Out of luck. Buy more luck';
      }
    });
    return promise;
  };

});

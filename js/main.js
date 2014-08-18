var app = angular.module('myApp', []);

app.run(function($rootScope){
  $rootScope.name = "Brandon ";
});
app.controller('MyController', function($scope){
  $scope.person = {
    name: "Ari Lerner"
  }
});
app.controller('PlayerController', ['$scope', function($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = '/media/npr.mp4';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop()
    });
  });
}]);
app.controller('RelatedController', ['$scope', function($scope) {

}]);
var app = angular.module('myApp', []);

app.run(function($rootScope){
  $rootScope.name = "Brandon ";
});
app.controller('MyController', function($scope){
  $scope.person = {
    name: "Ari Lerner"
  }
});

var apiKey = 'MDE2MjMzOTUxMDE0MDgzOTk1NzMxZDZiOQ001',
  nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

app.controller('PlayerController', function($scope, $http) {
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
  // construct our http request
  $http({
    method: 'JSON',
    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
  }).success(function(data, status) {
    // Now we have a list of the stories (data.list.story)
    // in the data object that the NPR API
    // returns in JSON that looks like:
    // data: { "list": {
    //   "title": ...
    //   "story": [
    //     { "id": ...
    //       "title": ...
    $scope.programs = data.list.story;
  }).error(function(data, status) {
    // Some error occurred
  });
});

app.controller('RelatedController', ['$scope', function($scope) {

}]);
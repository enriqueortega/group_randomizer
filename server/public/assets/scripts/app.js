var myApp = angular.module('myApp', []);

// BIZZZZZZ
myApp.controller("MyController", ["$scope", "$http", function($scope, $http){
    $scope.getStudents = function(){
        $http.get("/yolo").then(function(response){
          $scope.studentPackage = response.data.students;
          console.log(response.data.students);
          console.log(shuffle(response.data.students));
        });
        console.log('hey')
      };
      $scope.getStudents();
}]);


// Array Shuffle
var arr = ["Biz", "Enrique", "Aaron The Destroyer", "Mike"];
console.log(arr);
shuffle(arr);
console.log(arr);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

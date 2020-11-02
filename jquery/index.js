var titles = {
  t1: "Build Career and have fun",
  t2: "Redifing ourselves through rejection",
  t3: "A question of infinite answers",
  t4: "The golden habits",
  t5: "The life that I choose"
};

// Converting object of blog title names to JSON 
var title = JSON.stringify(titles);
console.log(title);


// parsing JSON
var titles1 = JSON.parse(title);
console.log(titles1);


//Angular code for the author name
var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.firstName = "Siddharth";
  $scope.lastName = "Rai";
});



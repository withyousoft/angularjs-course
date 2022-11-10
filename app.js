(function () {
  "use strict";

  //   x = "hello";
  angular
    .module("myFirstApp", [])
    .controller("MyFirstController", function ($scope) {
      $scope.name = "Quan";
    });
})();

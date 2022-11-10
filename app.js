(function () {
  "use strict";

  angular
    .module("NameCalculator", [])
    .controller("NameCalculatorController", function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0;
      $scope.displayNumeric = function () {
        var totalNumericValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNumericValue;
      };

      function calculateNumericForString(str) {
        var totalStringValue = 0;
        for (let i = 0; i < str.length; i++) {
          totalStringValue += str.charCodeAt(i);
        }
        return totalStringValue;
      }
    });
})();

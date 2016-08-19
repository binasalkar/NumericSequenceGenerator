(function() {
  var app = angular.module('NSG');

  var mainController = function($scope, $location) {

    $scope.submitted = false;

    $scope.OnHelp = function() {
      $location.path("/help");
    };

    $scope.sequences = [{
      name: 'Entire Sequence',
      value: '1'
    }, {
      name: 'Odd Sequence',
      value: '2'
    }, {
      name: 'Even Sequence',
      value: '3'
    }, {
      name: 'Fibonacci Sequence',
      value: '4'
    }, {
      name: 'CEZ Sequence',
      value: '5'
    }]

    $scope.selectedSequence = $scope.sequences[0];

    $scope.OnSubmit = function() {
      if ($scope.lastNumber >= 0) {
        $scope.submitted = true;
      } else {
        alert("Enter a postive whole number");
        $scope.submitted = false;
        $scope.generatedSequence = null;
      }

      if ($scope.submitted === true) {
        var selectedSequence = $scope.selectedSequence.value;

        var end = $scope.lastNumber;

        switch (selectedSequence) {
          case '1':
            {
              0
              $scope.generatedSequence = 0;
              for (var i = 1; i <= end; i++) {
                $scope.generatedSequence = $scope.generatedSequence + " , " + i;
              }
              break;
            }
          case '2':
            {
              if (end === 0) {
                $scope.submitted = false;
                $scope.generatedSequence = null;
                alert("Enter a non zero postive whole number to generate odd sequence!");
              } else {
                $scope.generatedSequence = 1;
                for (var i = 3; i <= end; i = i + 2) {
                  $scope.generatedSequence = $scope.generatedSequence + " , " + i;
                }
              }
              break;
            }
          case '3':
            {
              $scope.generatedSequence = 0;
              for (var i = 2; i <= end; i = i + 2) {
                $scope.generatedSequence = $scope.generatedSequence + " , " + i;
              }
              break;
            }
          case '4':
            {
              $scope.generatedSequence = 0;
              var previous2PreviousNumber = 0;
              var previousNumber = 1;
              for (; previousNumber <= end;) {

                $scope.generatedSequence = $scope.generatedSequence + " , " + previousNumber;
                var backup = previous2PreviousNumber;
                previous2PreviousNumber = previousNumber;
                previousNumber = backup + previousNumber;
              }
              break;
            }
          case '5':
            {
              $scope.generatedSequence = 0;
              for (var i = 1; i <= end; i++) {
                var output = i;
                if (i % 15 === 0) {
                  output = "Z";
                } else if (i % 3 === 0) {
                  output = "C";
                } else if (i % 5 === 0) {
                  output = "E";
                }

                $scope.generatedSequence = $scope.generatedSequence + " , " + output;
              }
              break;
            }
        }
      }
    };
  };


  app.controller("MainController", mainController);
}());

describe('NumericSequenceGenerator', function() {
  beforeEach(function() {

    angular.mock.module('NSG');
    window.alert = function(){return;};
  });

  var $controller;
  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;

  }));

  describe('EntireSequence', function() {

    var $scope = {};

    beforeEach(function() {
      var controller = $controller('MainController', {
        $scope: $scope
      });
      $scope.selectedSequence = {
        name: 'Entire Sequence',
        value: '1'
      };
    });

    it('should generate entire sequence', function() {
      $scope.lastNumber = 5;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBe('0 , 1 , 2 , 3 , 4 , 5');
    });

    it('should generate entire sequence when last number is 0 ', function() {

      $scope.lastNumber = 0;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBe(0);
    });
  });

  describe('OddSequence', function() {
    var $scope = {};

    beforeEach(function() {
      var controller = $controller('MainController', {
        $scope: $scope
      });
      $scope.selectedSequence = {
        name: 'Odd Sequence',
        value: '2'
      };
    });

    it('should generate odd sequence', function() {

      $scope.lastNumber = 8;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBe('1 , 3 , 5 , 7');
    });

    it('should not generate odd sequence when last number is 0', function() {

      $scope.lastNumber = 0;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBeFalsy();
    });
  });

  describe('EvenSequence', function() {
    var $scope = {};

    beforeEach(function() {
      var controller = $controller('MainController', {
        $scope: $scope
      });
      $scope.selectedSequence = {
        name: 'Even Sequence',
        value: '3'
      };
    });

    it('should generate even sequence', function() {

      $scope.lastNumber = 6;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBe('0 , 2 , 4 , 6');
    });
    
    it('should generate even sequence when last number is 0', function() {

      $scope.lastNumber = 0;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBe(0);
    });
  });

  describe('FibonacciSequence', function() {
    var $scope = {};
    beforeEach(function() {
      var controller = $controller('MainController', {
        $scope: $scope
      });
      $scope.selectedSequence = {
        name: 'Fibonacci Sequence',
        value: '4'
      };
    });

    it('should generate fibonacci sequence', function() {

      $scope.lastNumber = 15;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBe('0 , 1 , 1 , 2 , 3 , 5 , 8 , 13');
    });
    
     
    it('should generate fibonacci sequence when last number is 0', function() {

      $scope.lastNumber = 0;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBe(0);
    });
  });

  describe('CEZSequence', function() {
    var $scope = {};
    beforeEach(function() {
      var controller = $controller('MainController', {
        $scope: $scope
      });
      $scope.selectedSequence = {
        name: 'CEZ Sequence',
        value: '5'
      };
    });

    it('should generate CEZ sequence', function() {

      $scope.lastNumber = 15;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBe('0 , 1 , 2 , C , 4 , E , C , 7 , 8 , C , E , 11 , C , 13 , 14 , Z');
    });
    
     
    it('should generate CEZ sequence when last number is 0', function() {

      $scope.lastNumber = 0;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBe(0);
    });
  });
  
   describe('InvalidInput', function() {
    var $scope = {};
    beforeEach(function() {
      var controller = $controller('MainController', {
        $scope: $scope
      });
      $scope.selectedSequence = {
        value: '-5'
      };
    });

    it('should not generate sequence when input is a negative number', function() {

      $scope.lastNumber = 15;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBeFalsy();
    });

    it('should not generate sequence when input is empty', function() {

      $scope.lastNumber = null;
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBeFalsy();
    });
    
    it('should not generate sequence when input is not a number', function() {

      $scope.lastNumber = 'ABC';
      $scope.OnSubmit();

      expect($scope.generatedSequence).toBeFalsy();
    });
  });
});

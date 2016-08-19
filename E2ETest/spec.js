describe('Numeric Sequence Generator', function() {

	beforeEach(function()
	{
 		browser.get('https://run.plnkr.co/JBvBZTiSo3jV1KqV/#/');
	});

	var generateSequence = function(sequenceType, lastNumber)
	{
	element(by.cssContainingText('option', sequenceType)).click();
    element(by.model('lastNumber')).sendKeys(lastNumber);
    element(by.id('generate')).click();
	};

	describe('Generate Sequences', function() {



  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Numeric Sequence Generator');
  });

   it('should create entire sequence', function() {
   
    generateSequence('Entire Sequence', 4);
    expect(element(by.binding('generatedSequence')).getText()).toEqual('0 , 1 , 2 , 3 , 4');
  });

   it('should create odd sequence', function() {
   	generateSequence('Odd Sequence', 5);

    expect(element(by.binding('generatedSequence')).getText()).toEqual('1 , 3 , 5');
  });

   it('should create even sequence', function() {
   	generateSequence('Even Sequence', 6);

    expect(element(by.binding('generatedSequence')).getText()).toEqual('0 , 2 , 4 , 6');
  });

   it('should create fibonacci sequence', function() {
   	generateSequence('Fibonacci Sequence', 10);

    expect(element(by.binding('generatedSequence')).getText()).toEqual('0 , 1 , 1 , 2 , 3 , 5 , 8');
  });

   it('should create CEZ sequence', function() {
   	generateSequence('CEZ Sequence', 8);

    expect(element(by.binding('generatedSequence')).getText()).toEqual('0 , 1 , 2 , C , 4 , E , C , 7 , 8');
  });
});

	describe('Help Instructions', function() {
		beforeEach(function()
	{
 		browser.get('https://run.plnkr.co/JBvBZTiSo3jV1KqV/#/');
	});

		it('should navigate to instructions' , function()
		{
			element(by.id('help')).click();

			expect(browser.getLocationAbsUrl()).toMatch("/help");

		});

		it('should navigate back to home page' , function()
		{
			element(by.id('help')).click();
			element(by.id('home')).click();

			expect(browser.getLocationAbsUrl()).toMatch("/");


		});
});
});

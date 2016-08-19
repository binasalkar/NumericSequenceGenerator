# Numeric Sequence Generator
This is a web based software used to generate different types of numeric sequences.

# Folder Structure
There are 3 folders in the root directory along with this readme file.
#
1. Application: This folder contains the html, css and js files required to run the application
2. UnitTest: This folder contains the html and js files needed to run the unit tests written in Jasmine. 
3. E2ETest: This folder contains the configuration and specification files needed to run the end 2 end tests written in Protractor (and Jasmine)

# Running the Application
This application uses Angular JS and Angular-Route JS libraries
#
1. Download the files from the folder "Application"
2. Use any of the front end development tools to load the html, CSS and JS files. I have used Plunker.
3. Click on refresh to run it, the application opens in the browser.
4. Click on "Instruction Manual" to read the instructions.
5. Click on "Back to Numeric Sequence Generator" to come back to home page.
6. Select the type of sequence, enter the last number for the sequence and click on "Generate Sequence"
7. The generated sequence is displayed below

# Unit Tests
The unit tests are written using Jasmine
#
1. Download the files from the folder "Unit Test" and copy the test.js in the application folder.
2. Replace the index.html from the application folder with the index.html from the Unit Test folder.
3. Click on refresh to run the unit tests and the results are shown in the browser window.
4. All the unit tests should pass

# End to End Tests
End to end tests are written using the Protractor framework which in turn uses the Jasmine test framework for its testing interface
#
Protractor needs the installation of Node.JS
#
If you have not installed node.js, follow the below steps
#
1. In the command prompt , run the below command
    npm install -g protractor
2. Webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. To download the binaries, run the below command
    webdriver-manager update
3. Start the server with the below command
    webdriver-manager start
This will start the Selenium server. The status can be seen at http://localhost:4444/wd/hub


Running the tests:
#
1. Download the files from the folder "E2ETest" and copy them to a new folder "E2ETest".
2. Replace back the index.html from the application folder (take the original one from application folder)
3. Refresh the plunker to view the application.
4. In a seperate command prompt, run the belowcommand (also add the correct path of the conf.js file)
    protractor conf.js
5. The browser opens up and runs all the tests. This is very fast.
6. At the end , the results are displayed in the command prompt.
7. All the tests should pass

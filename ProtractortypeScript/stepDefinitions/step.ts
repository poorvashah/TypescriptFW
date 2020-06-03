import { Given, When, Then } from "cucumber";
import { calculator } from "../pageObject/calculator";
import { browser } from "protractor";
let calc = new calculator();
Given('I will navigate to calc site', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.get('http://juliemr.github.io/protractor-demo/');
  });

  When('I add two numbers {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
   
    await calc.firstEditBox.sendKeys(string);
		await calc.SecondEditiBox.sendKeys(string2);
  });

  Then('the output should be displayed as {string}', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
	await calc.goButton.click();

	await calc.getResult.getText().then(function(text)
			{
		
		console.log(text);
			})
			
  });

  
 
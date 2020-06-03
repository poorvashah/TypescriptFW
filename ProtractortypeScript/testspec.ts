import {browser} from "protractor";//imported the global browser element from protractor
import {element, by} from "protractor";
import { calculator } from "./pageObject/calculator";
describe('Chain locators demo',()=> {  
	
	
	it('Open Angular js website', async ()=> {
		let calc = new calculator();
		await browser.get('http://juliemr.github.io/protractor-demo/');
		//repeater ,  chain locators, And css for identical tags
		await calc.firstEditBox.sendKeys("3");
		await calc.SecondEditiBox.sendKeys("5");
			
	await calc.goButton.click();

	await calc.getResult.getText().then(function(text)
			{
		
		console.log(text);
			})
			
			
		//	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
			
	

	
		
		
		
		
		
		
	})
// This is jasmine spec
	it('Angular home page title validation',async () => 
	{
await browser.get("https://angularjs.org/");
await element (by.linkText("angular.io")).click();
await element (by.css("input[type='search']")).sendKeys("hello");
	})
	
})

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObject/calculator");
const protractor_1 = require("protractor");
let calc = new calculator_1.calculator();
cucumber_1.Given('I will navigate to calc site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.SecondEditiBox.sendKeys(string2);
}));
cucumber_1.Then('the output should be displayed as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.goButton.click();
    yield calc.getResult.getText().then(function (text) {
        console.log(text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLHlEQUFzRDtBQUN0RCwyQ0FBcUM7QUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDNUIsZ0JBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFRLEVBQUU7SUFDNUMsb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ3ZFLG9FQUFvRTtJQUVwRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0Q0FBNEMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ2pFLG9FQUFvRTtJQUN2RSxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFNUIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFHaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQSxDQUFDLENBQUMifQ==
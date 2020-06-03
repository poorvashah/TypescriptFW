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
const protractor_1 = require("protractor"); //imported the global browser element from protractor
const protractor_2 = require("protractor");
const calculator_1 = require("./pageObject/calculator");
describe('Chain locators demo', () => {
    it('Open Angular js website', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        yield calc.firstEditBox.sendKeys("3");
        yield calc.SecondEditiBox.sendKeys("5");
        yield calc.goButton.click();
        yield calc.getResult.getText().then(function (text) {
            console.log(text);
        });
        //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    }));
    // This is jasmine spec
    it('Angular home page title validation', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angularjs.org/");
        yield protractor_2.element(protractor_2.by.linkText("angular.io")).click();
        yield protractor_2.element(protractor_2.by.css("input[type='search']")).sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQyxDQUFBLHFEQUFxRDtBQUN4RiwyQ0FBdUM7QUFDdkMsd0RBQXFEO0FBQ3JELFFBQVEsQ0FBQyxxQkFBcUIsRUFBQyxHQUFFLEVBQUU7SUFHbEMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEdBQVEsRUFBRTtRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUM1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0Qsd0RBQXdEO1FBQ3hELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV6QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFHaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtRQUdILGdGQUFnRjtJQVdqRixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0gsdUJBQXVCO0lBQ3RCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBQyxHQUFTLEVBQUU7UUFFcEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sb0JBQU8sQ0FBRSxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEQsTUFBTSxvQkFBTyxDQUFFLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUgsQ0FBQyxDQUFDLENBQUEifQ==
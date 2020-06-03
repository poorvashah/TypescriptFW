import { ElementFinder, element,by } from "protractor";
 export class calculator
{
firstEditBox:ElementFinder;
SecondEditiBox: ElementFinder;
goButton:ElementFinder;
getResult:ElementFinder;

constructor()
{
    this.firstEditBox=element(by.model("first"));
    this.SecondEditiBox=element(by.model("second"));
    this.goButton = element(by.id("gobutton"));
    this.getResult= element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));

}
}
/*  File:         app.component.ts
*   Author:       Brennan Saul
*   Description:  Where the functionality of the app starts
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Required components and classes
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.greeting = 'Welcome';
        this.message = 'Select a button to inspect from our database!';
        this.buttons = [
            {
                buttonId: 0,
                macAddress: "0.0.0.1",
                buttonDescription: "Empty coffee pot in breakroom."
            },
            { buttonId: 1,
                macAddress: "0.0.0.2",
                buttonDescription: "Light out in the breakroom." }
        ];
    }
    // Function called when a button is clicked on. Button argument passed in
    // and assigned to selectedButton.
    AppComponent.prototype.selectButton = function (button) {
        this.selectedButton = button;
        console.log(this.selectedButton);
    };
    // Function called when a button is created
    AppComponent.prototype.onButtonCreated = function (event) {
        this.buttons.push(event.button);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        // Notice that this is an array and we can add multiple styles
        styleUrls: ['./app/app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
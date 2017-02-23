/*  File:         button-summary.component.ts
*   Author:       Brennan Saul
*   Description:  A component to show the informatino of a button
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var button_1 = require("../shared/models/button");
var ButtonSummaryComponent = (function () {
    function ButtonSummaryComponent() {
    }
    return ButtonSummaryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", button_1.Button)
], ButtonSummaryComponent.prototype, "button", void 0);
ButtonSummaryComponent = __decorate([
    core_1.Component({
        selector: 'button-summary',
        styles: [".jumbotron img{\n    text-align: center;\n    display: block;\n    font-size: 80px;\n  }"],
        template: "\n\n    <!-- If a button exists then display the component -->\n    <div class=\"jumbotron\" *ngIf=\"button\">\n      <!-- user icon -->\n      <img src=\"https://start.flic.io/Get%20Started%20_%20Flic_%20The%20Wireless%20Smart%20Button_files/flic-app-icon-a9cf641d7af179844c60eab0f611336acf2edf96b1a95949f45549bbb107f352.png\">\n\n      <!-- Button information -->\n      <h2>\n        Id #: {{ button.buttonId }}<br>\n        MAC Address: {{ button.macAddress }}<br>\n        Description: {{ button.Description }}\n      </h2>\n\n      <!-- Two way databinding:\n           Edit the description of the button -->\n      <input class=\u201Dform-control\u201D [(ngModel)]=\"button.buttonDescription\">\n    </div>\n  "
    })
], ButtonSummaryComponent);
exports.ButtonSummaryComponent = ButtonSummaryComponent;
//# sourceMappingURL=button-summary.component.js.map
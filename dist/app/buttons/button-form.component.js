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
var ButtonFormComponent = (function () {
    function ButtonFormComponent() {
        // For output
        this.buttonCreated = new core_1.EventEmitter();
        this.newButton = new button_1.Button();
        this.buttonId = 2;
        // boolean used to clear all form values (even touched and invalid fields)
        this.active = true;
    }
    ButtonFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newButton.buttonId = this.buttonId;
        this.buttonId++;
        // show the event that the user was created
        this.buttonCreated.emit({ button: this.newButton });
        // clears the form everytime it is submitted
        this.newButton = new button_1.Button();
        // clears forms and states invaled and touched
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return ButtonFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ButtonFormComponent.prototype, "buttonCreated", void 0);
ButtonFormComponent = __decorate([
    core_1.Component({
        selector: 'button-form',
        styles: ["\n    form {\n      padding: 10px;\n      background: #ECF0F1;\n      border-radius: 3px;\n      margin-bottom: 30px;\n    }\n  "],
        template: "\n    <!-- #form defines a template reference variable: now we can easily\n    reference the form using the form variable. then bind to the ngForm\n    directive-->\n\n    <!-- submit: submits and refreshes the page -->\n    <!-- ngSubmit: does not refresh tht page -->\n    <form #form=ngForm (ngSubmit)=\"onSubmit()\" *ngIf=\"active\">\n\n      <!-- If the form is valid -->\n      {{ form.valid }}\n\n      <!-- firstName field -->\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': macAddress.invalid && macAddress.touched }\">\n        <label for=\"macAddress\">MAC Address</label>\n        <input type=\"text\" class=\"form-control\" name=\"macAddress\" required\n        [(ngModel)]=\"newButton.macAddress\" #macAddress=\"ngModel\" placeholder=\"macAddress\">\n\n        <!-- Shows \"Required\" if first name field is empty & been touched -->\n        <span style=\"color:red\" class=\"help-block\"\n        *ngIf=\"macAddress.invalid && macAddress.touched\"> Required </span>\n      </div>\n\n      <!-- lastName field -->\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': buttonDescription.invalid && buttonDescription.touched }\">\n      <label for=\"buttonDescription\">Description</label>\n        <input type=\"text\" class=\"form-control\" name=\"buttonDescription\" required\n        [(ngModel)]=\"newButton.buttonDescription\" #buttonDescription=\"ngModel\" placeholder=\"Description:\">\n\n        <!-- Shows \"Required\" if first name field is empty -->\n        <span style=\"color:red\" class=\"help-block\"\n        *ngIf=\"buttonDescription.invalid && buttonDescription.touched\"> Required </span>\n      </div>\n\n      <!-- Button is disabled if form=invaild & been touched -->\n      <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\"\n      [disabled]=\"form.invalid\">\n        Create User\n      </button>\n\n  "
    })
], ButtonFormComponent);
exports.ButtonFormComponent = ButtonFormComponent;
//# sourceMappingURL=button-form.component.js.map
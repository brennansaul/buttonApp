import { Component, Output, EventEmitter } from '@angular/core';
import { Button } from '../shared/models/button';

@Component ({
  selector: 'button-form',
  styles: [`
    form {
      padding: 10px;
      background: #ECF0F1;
      border-radius: 3px;
      margin-bottom: 30px;
    }
  `],
  template: `
    <!-- #form defines a template reference variable: now we can easily
    reference the form using the form variable. then bind to the ngForm
    directive-->

    <!-- submit: submits and refreshes the page -->
    <!-- ngSubmit: does not refresh tht page -->
    <form #form=ngForm (ngSubmit)="onSubmit()" *ngIf="active">

      <!-- If the form is valid -->
      {{ form.valid }}

      <!-- firstName field -->
      <div class="form-group" [ngClass]="{ 'has-error': macAddress.invalid && macAddress.touched }">
        <label for="macAddress">MAC Address</label>
        <input type="text" class="form-control" name="macAddress" required
        [(ngModel)]="newButton.macAddress" #macAddress="ngModel" placeholder="macAddress">

        <!-- Shows "Required" if first name field is empty & been touched -->
        <span style="color:red" class="help-block"
        *ngIf="macAddress.invalid && macAddress.touched"> Required </span>
      </div>

      <!-- lastName field -->
      <div class="form-group" [ngClass]="{ 'has-error': buttonDescription.invalid && buttonDescription.touched }">
      <label for="buttonDescription">Description</label>
        <input type="text" class="form-control" name="buttonDescription" required
        [(ngModel)]="newButton.buttonDescription" #buttonDescription="ngModel" placeholder="Description:">

        <!-- Shows "Required" if first name field is empty -->
        <span style="color:red" class="help-block"
        *ngIf="buttonDescription.invalid && buttonDescription.touched"> Required </span>
      </div>

      <!-- Button is disabled if form=invaild & been touched -->
      <button type="submit" class="btn btn-lg btn-block btn-primary"
      [disabled]="form.invalid">
        Create User
      </button>

  `
})

export class ButtonFormComponent {
  // For output
  @Output() buttonCreated = new EventEmitter();

  newButton: Button = new Button();
  buttonId: number = 2;
  // boolean used to clear all form values (even touched and invalid fields)
  active: boolean = true;

  onSubmit(){
    this.newButton.buttonId = this.buttonId;
    this.buttonId++;
    // show the event that the user was created
    this.buttonCreated.emit({ button: this.newButton });

    // clears the form everytime it is submitted
    this.newButton = new Button();

    // clears forms and states invaled and touched
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}

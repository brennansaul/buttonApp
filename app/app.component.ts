/*  File:         app.component.ts
*   Author:       Brennan Saul
*   Description:  Where the functionality of the app starts
*/

// Required components and classes
import { Component } from '@angular/core';
import { Button } from './shared/models/button';


import { User } from './shared/models/user';

@Component({
	selector: 'my-app',
  templateUrl: './app/app.component.html',
  // Notice that this is an array and we can add multiple styles
  styleUrls: ['./app/app.component.css']
})

export class AppComponent  {
  greeting: string = 'Welcome';
  message: string = 'Select a button to inspect from our database!';
  buttons: Button[]= [
    {
			buttonId: 0,
			macAddress: "0.0.0.1",
			buttonDescription: "Empty coffee pot in breakroom."
		},

    { buttonId: 1,
			macAddress: "0.0.0.2",
			buttonDescription: "Light out in the breakroom." }
  ];

  selectedButton: Button;


	// Function called when a button is clicked on. Button argument passed in
	// and assigned to selectedButton.
	selectButton(button){
		this.selectedButton = button;
		console.log(this.selectedButton);
	}

	// Function called when a button is created
	onButtonCreated(event){
		this.buttons.push(event.button);
	}

}

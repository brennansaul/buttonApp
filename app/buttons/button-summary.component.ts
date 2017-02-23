/*  File:         button-summary.component.ts
*   Author:       Brennan Saul
*   Description:  A component to show the informatino of a button
*/

import { Component, Input } from '@angular/core';
import { Button } from '../shared/models/button';

@Component({
  selector: 'button-summary',
  styles: [`.jumbotron img{
    text-align: center;
    display: block;
    font-size: 80px;
  }`],
  template: `

    <!-- If a button exists then display the component -->
    <div class="jumbotron" *ngIf="button">
      <!-- user icon -->
      <img src="https://start.flic.io/Get%20Started%20_%20Flic_%20The%20Wireless%20Smart%20Button_files/flic-app-icon-a9cf641d7af179844c60eab0f611336acf2edf96b1a95949f45549bbb107f352.png">

      <!-- Button information -->
      <h2>
        Id #: {{ button.buttonId }}<br>
        MAC Address: {{ button.macAddress }}<br>
        Description: {{ button.Description }}
      </h2>

      <!-- Two way databinding:
           Edit the description of the button -->
      <input class=”form-control” [(ngModel)]="button.buttonDescription">
    </div>
  `
})

export class ButtonSummaryComponent {
  @Input() button: Button;
}

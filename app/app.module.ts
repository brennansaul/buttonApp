import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ButtonSummaryComponent } from './buttons/button-summary.component';
import { ButtonFormComponent } from './buttons/button-form.component';

@NgModule({
  // Modules that we want to use
  imports:      [
    BrowserModule,
    FormsModule
  ],
  // Directives or components that we want to use
  declarations: [
    AppComponent,
    ButtonSummaryComponent,
    ButtonFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

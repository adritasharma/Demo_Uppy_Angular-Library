import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UppyAngularModule } from 'uppy-angular';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    UppyAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

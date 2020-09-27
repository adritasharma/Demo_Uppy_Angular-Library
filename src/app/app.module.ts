import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UppyAngularModule } from 'uppy-angular';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HumanCasePipe } from './pipes/human-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HumanCasePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    UppyAngularModule,
    NgSelectModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

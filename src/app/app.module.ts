import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxOtpInputModule } from "ngx-otp-input";

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatListModule ,MatIconModule
  ,MatCheckboxModule,MatInputModule,ReactiveFormsModule,BrowserAnimationsModule,NgxOtpInputModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SighInComponent } from './sigh-in/sigh-in.component';
import { SighnUpComponent } from './sighn-up/sighn-up.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPassowrdComponent } from './forgotPassword/forgot-passowrd/forgot-passowrd.component';

@NgModule({
  declarations: [
    AppComponent,
    SighInComponent,
    SighnUpComponent,
    ForgotPassowrdComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SighInComponent } from './sigh-in/sigh-in.component';
import { SighnUpComponent } from './sighn-up/sighn-up.component';
import { ForgotPassowrdComponent } from './forgotPassword/forgot-passowrd/forgot-passowrd.component';

const routes: Routes = [ 
  { path: '',  component: SighInComponent },
  { path: 'signUp', component: SighnUpComponent },
  { path:"ForgotPassowrdComponent", component: ForgotPassowrdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

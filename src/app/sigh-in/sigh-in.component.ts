import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ApiSeriveService } from '../service/api-serive.service';

@Component({
  selector: 'app-sigh-in',
  templateUrl: './sigh-in.component.html',
  styleUrls: ['./sigh-in.component.scss']
})
export class SighInComponent implements OnInit {
  form : any;
  items: any;
  constructor( private user : ApiSeriveService, private fb: FormBuilder) { 


  }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null,[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      confirmPassword: [null, Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
    //  for the first time, the application open gets the data
    this.user.getAccount().subscribe(data => {
      this.items = data
    })
}
get fc(){ 
  return this.form.controls;
}
get f() { 
  return this.form;
}

Submit() { 
  const checkEmail =  this.fc['email'].value;
  const checkPass = this.fc['password'].value;
  // for loop on the items to know if the email of password is here, if got true break out
  for (let i = 0; i < this.items.length; i++) {
    if(checkEmail === this.items[i].email && 
       checkPass === this.items[i].password){
      console.log("true");
      break;
    } else {
      console.log("false");
    }
    
  }
}


}

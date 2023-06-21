import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiSeriveService } from '../service/api-serive.service';


@Component({
  selector: 'app-sighn-up',
  templateUrl: './sighn-up.component.html',
  styleUrls: ['./sighn-up.component.scss']
})
export class SighnUpComponent implements OnInit {
  form : any;
  items : any; 
  // submitted = false;

  constructor(private user:ApiSeriveService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        fullname: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null,[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
        confirmPassword: [null, Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      });


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
  // match(password: string, confirmPassword: string){
  //   return (form:AbstractControl)=>{
  //     const passwordValue = form.get(password)?.value;
  //     const confirmPasswordvalue = form.get(confirmPassword)?.value;

  //     if(passwordValue === confirmPasswordvalue){
  //       return null
  //     }
  //     return {passwordMismatchError: true}

  //   }
  // }
  sinUp(){
    // get the eamil, password , confirmPassowrd
    const password = this.fc['password'].value;
    const passwordConfirm = this.fc['confirmPassword'].value;
    const checkEmail = this.fc['email'].value;
    // if the form valid run the code
    if(this.f['valid']){
      // check forloop the email if data base has that eamil don't run the code
      for (let i = 0; i < this.items.length; i++) {
        if(checkEmail !== this.items[i].email && password === passwordConfirm){
        // sent to data base the form the coustom the rgister
          this.user.postAccount(this.f['value']).subscribe();
          location.reload();
          break;
        }}
    } else{
      return console.log(this.f['valid']);
    }
    // console.log(this.match:true);
}


}// i want to know how to validations for confirm the password

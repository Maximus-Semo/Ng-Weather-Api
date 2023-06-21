import { Component, OnInit } from '@angular/core';
import { ApiSeriveService } from 'src/app/service/api-serive.service';

@Component({
  selector: 'app-forgot-passowrd',
  templateUrl: './forgot-passowrd.component.html',
  styleUrls: ['./forgot-passowrd.component.scss']
})
export class ForgotPassowrdComponent implements OnInit {
  items: any;
  error : boolean = false;

  public form = {
    email: null

  }
  constructor(private user:ApiSeriveService ) { }

  ngOnInit(): void {
    this.user.getAccount().subscribe(data => {
      this.items = data
    })

  }

  onSubmit(){
    // console.log(this.items);
    for(let i = 0; i < this.items.length; i++){
      if(this.items[i].email === this.form.email){
          
        console.log(this.items[i].password);
        this.user.sendPasswordResetLink(this.form.email).subscribe(data=> {
          console.log(data);
        })
      }

    }


    // if(){

    // }

  } 

}

import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUp } from '../../interface/userauth';
import { UserauthService } from '../../services/userauth.service';
import { localStorageToken } from '../../javascriptapis/localstorage.token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {

  loginDetails = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",Validators.required),
  })

  constructor(
      private userAuth: UserauthService,
      @Inject(localStorageToken) private localStorageToken: Storage,
      private route: Router
    ){}

  onSubmit(){

    if(this.loginDetails.valid){

      const userDetails: SignUp = {
        name: this.loginDetails.value.name as string, 
        email: this.loginDetails.value.email as string,
        password: this.loginDetails.value.password as string,
        avatar: 'https://picsum.photos/800',
        role: 'customer'
      }
  
      this.userAuth.userSingup(userDetails).subscribe({
        next: data=>{
          console.log(data)
          // localStorage.setItem("access_token",data.access_token)
          // localStorage.setItem("refresh_token",data.refresh_token)
          this.route.navigate(["login"])
        },
        error: (err)=>console.log(err)
      })
    }
    else {
      alert("fill the details correctly")
    }
  }
}

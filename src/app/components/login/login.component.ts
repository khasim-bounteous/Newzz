import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../interface/userauth';
import { UserauthService } from '../../services/userauth.service';
import { localStorageToken } from '../../javascriptapis/localstorage.token';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginDetails = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",Validators.required)
  })

  constructor(
      private userAuth: UserauthService,
      private snackbarService: SnackbarService,
      private route: Router
    ){}

  onSubmit(){

    if(this.loginDetails.valid){

      const userDetails: Login = {
        email: this.loginDetails.value.email as string,
        password: this.loginDetails.value.password as string
      }
  
      this.userAuth.userLogin(userDetails).subscribe({
        next: data=>{
          localStorage.setItem("access_token",data.access_token)
          localStorage.setItem("refresh_token",data.refresh_token)
          this.snackbarService.showSnackbarBottom("Welcome backk!!!",'top','end',7000)
          this.route.navigate(["newz"])
        },
        error: ()=>this.snackbarService.showSnackbarBottom("Fill the details correctly",'center','top',3000)
      })
    }
    else {
      this.snackbarService.showSnackbarBottom("Wrong password",'top','center',3000)
    }
  }
}

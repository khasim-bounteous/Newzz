import { Component, Inject, OnInit } from '@angular/core';
import { UserauthService } from '../../services/userauth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { localStorageToken } from '../../javascriptapis/localstorage.token';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;

  constructor(
    private authservice: UserauthService,
    private snackbarService: SnackbarService,
    @Inject(localStorageToken) private storage: Storage,
    
  ){}

  userLoggedIn = false;

  ngOnInit(): void {
    if(this.storage.getItem('access_token'))
      this.userLoggedIn = true;
      
  }

  onLogout(){
    this.authservice.userLogout()
    this.snackbarService.showSnackbarBottom('Logged out successfully',"top",'end', 3000);
  }
}

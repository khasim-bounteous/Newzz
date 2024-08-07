import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable, catchError,throwError } from 'rxjs'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private authService: UserauthService,
        private router: Router
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = this.authService.getAccessToken();
        let authReq = req
     

        if (req.url.includes('http://localhost:3000') || req.url.includes('https://api.escuelajs.co/api/v1/users/') || req.url.includes('https://api.escuelajs.co/api/v1/auth/login') || req.url.includes('https://newsapi.org/v2/')) {
            return next.handle(req);
        }

        if(req.url.includes('https://api.escuelajs.co/api')){
            authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                  }
            });
            return next.handle(authReq).pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && !authReq.url.includes('refresh-token')) {
                        console.log(authReq.url.includes("refresh-token"))
                      return this.authService.handle401Error(authReq);
                    }
                    const errorMessage = `Error: ${error.error.message}`; 
                    alert("session expired")
                    // this.authService.userLogout()
                    // this.router.navigate(["/login"])
                    return throwError(() => errorMessage);
                })
            )
        }
        return next.handle(authReq)
    }

}



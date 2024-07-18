import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showSnackbarBottom(message: string,vp:string,hp:string, duration: number = 3000): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      horizontalPosition: hp as MatSnackBarHorizontalPosition,
      verticalPosition: vp as MatSnackBarVerticalPosition,
    });
  }

}

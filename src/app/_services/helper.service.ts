import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  loggedIn = true;
  asClient = false;
  constructor(
    private snackBar: MatSnackBar
  ) { }

   /**
   *
   * @param message The message to show in the snackbar.
   * @param action The label for the snackbar action.
   * @param duration Default: 2000. The length of time in milliseconds to wait before automatically dismissing the snack bar.
   */
  openSnackBar(message: string, duration: number = 10000, action: string = 'OK') {
    const snackBarRef = this.snackBar.open(message, action, {
      duration: duration,
    });
    return snackBarRef.afterDismissed();
  }
}

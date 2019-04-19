import { Component } from '@angular/core';
import { HelperService } from './_services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mock-accountant-app';
  constructor(
    public hs: HelperService,
    private router: Router
  ) {}
  exit() {
    this.router.navigate(['/login']);
    if (this.hs.loggedIn) {
      this.hs.loggedIn = false;
      this.hs.asClient = false;
      this.hs.openSnackBar('Вы успешно вышли из системы')
    }
  }
}

import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../_services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private hs: HelperService,
    private router: Router,
  ) {
    this.hs.loggedIn = false;
    this.loginForm = this._fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  login(asClient = false) {
    this.hs.asClient = asClient;
    this.hs.openSnackBar("Вы успешно вошли в систему");
    this.hs.loggedIn = true;
    if (asClient) {
      this.router.navigate(['/create-application'])
    } else {
      this.router.navigate(['/list-applications'])
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { IUserCredentials } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Login } from 'src/app/shared/enums/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  protected hide: boolean = true;
  private userCredentials: IUserCredentials = {
    login: '',
    password: '',
  };
  protected user: FormGroup = this.form.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  constructor(private authService: AuthService, private form: FormBuilder) { }

  ngOnInit(): void {
  }

  get email(): AbstractControl<string | null> | null {
    return this.user.get(Login.email);
  }

  get password(): AbstractControl<string | null> | null {
    return this.user.get(Login.password);
  }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return 'You must enter a password';
  }

  logIn() {
    this.userCredentials.login = this.getLogin(this.user.value.email);
    this.userCredentials.password = this.user.value.password ?? '';
    this.authService.logIn(this.userCredentials);
  }

  private getLogin(email: string): string {
    const idx: number = email.indexOf('@') === -1 ? 0 : email.indexOf('@');
    return email.slice(0, idx);
  }
}

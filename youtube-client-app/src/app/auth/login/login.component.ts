import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { IUserCredentials } from 'src/app/core/models/user.model';
import { LoginService } from 'src/app/core/services/login/login.service';
import {
  Login, ErrorTypes, EmailErrors, PasswordErrors,
} from 'src/app/shared/enums/enums';
import { regExps } from 'src/app/shared/constants/constants';

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
    password: ['', [Validators.required, Validators.pattern(regExps.password)]],
  });
  constructor(private loginService: LoginService, private form: FormBuilder) { }

  ngOnInit(): void {
  }

  get email(): AbstractControl<string | null> | null {
    return this.user.get(Login.email);
  }

  get password(): AbstractControl<string | null> | null {
    return this.user.get(Login.password);
  }

  getEmailErrorMessage() {
    if (this.email?.hasError(ErrorTypes.required)) {
      return EmailErrors.required;
    }
    return this.email?.hasError(ErrorTypes.email) ? EmailErrors.invalid : '';
  }

  getPasswordErrorMessage() {
    if (this.password?.hasError(ErrorTypes.required)) {
      return PasswordErrors.required;
    }
    return this.password?.hasError(ErrorTypes.pattern) ? PasswordErrors.invalid : '';
  }

  logIn() {
    this.userCredentials.login = this.getLogin(this.user.value.email);
    this.userCredentials.password = this.user.value.password ?? '';
    this.loginService.logIn(this.userCredentials);
  }

  private getLogin(email: string): string {
    const idx: number = email.indexOf('@') === -1 ? 0 : email.indexOf('@');
    return email.slice(0, idx);
  }
}

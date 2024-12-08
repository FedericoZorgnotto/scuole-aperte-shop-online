import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() login = new EventEmitter();

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  async onSubmit() {
    const {username, password} = this.loginForm.value;
    this.login.emit({username, password});
  }
}

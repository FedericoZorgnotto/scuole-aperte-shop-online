import {Component} from '@angular/core';
import {LoginFormComponent} from '../../components/login-form/login-form.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    LoginFormComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(
    private router: Router,
  ) {
  }

  onLogin(credentials: { username: string, password: string }) {
    const {username, password} = credentials;
    // Questa è la funzione dove gestirai il login
    this.performLogin(username, password);
  }

  performLogin(username: string, password: string) {
    // Qui puoi gestire la logica di login vera e propria
    console.log('Attempting to log in with', username, password);
    // Simula un accesso sempre riuscito
    localStorage.setItem('username', username);
    console.log('Login effettuato con successo!', username);

    this.router.navigate(['/shop']);
  }

}

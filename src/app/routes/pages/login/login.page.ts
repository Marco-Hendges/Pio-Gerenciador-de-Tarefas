import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonInput, ReactiveFormsModule]
})
export class LoginPage {
  loginForm: FormGroup;
  userEmail: string = '';
  userPassword: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public onLogin() {
    // if (this.loginForm.valid) {
      // Simulação de login bem-sucedido
      console.log('Login realizado com sucesso:', this.loginForm.value);
      this.router.navigate(['/tabs']);
    // } else {
    //   console.log('Formulário inválido!');
    // }
  }

  public togglePasswordVisibility() {
    const passwordField = document.querySelector('input[type="password"]') as HTMLInputElement;
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  }
}

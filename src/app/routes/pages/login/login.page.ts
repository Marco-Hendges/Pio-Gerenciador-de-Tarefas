import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonInput } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonInput, ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule]
})
export class LoginPage {
  loginForm: FormGroup;
  loading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = null;

      const user = this.loginForm.value;

      this.authService.login(user).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/tabs']); // Redireciona para a tela principal
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = 'Erro ao fazer login. Tente novamente.';
          console.error(error);
        },
      });
    }
  }
}

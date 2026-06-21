import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Data } from '../data';
import { login } from '../entities/login';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private data = inject(Data);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  loginForm = this.fb.group({
    login: new FormControl(''),
    password: new FormControl(''),
  });
  login: login = new login();

  submitLogin() {
    this.data.login(<login>this.loginForm.value).subscribe({
      next: (response: any) => {
        console.log("Logado com sucesso ", isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : '');
        const tokenValue = response.token;
        isPlatformBrowser(this.platformId) ? localStorage.setItem('token', tokenValue) : '';

        this.router.navigate(['/']);
      },
      error: (err) => {
      console.error('Erro ao fazer login:', err);
      alert('Usuário ou senha inválidos!');
      }
  });

    this.login.password = this.loginForm.value.password ?? '';

    this.data.login(this.login);
  }
}

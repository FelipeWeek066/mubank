
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Data } from '../data';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-validate',
  imports: [ReactiveFormsModule],
  templateUrl: './validate.html',
  styleUrl: './validate.css',
})
export class Validate {
  private fb = inject(FormBuilder);
  private data = inject(Data);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  validateForm = this.fb.group({
    code: new FormControl(''),
    password: new FormControl(''),
  });

  validate() {
    this.data.validateCode(this.validateForm.value).subscribe({
      next: (response: any) => {
        console.log(
          'validado com sucesso ',
          isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : '',
        );
        const tokenValue = response.token;

        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('erro ao validar:', err);
        alert('codigo invalido');
      },
    });
  }
}

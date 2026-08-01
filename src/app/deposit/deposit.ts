import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Data } from '../data';
import bootstrap from '../../main.server';

@Component({
  selector: 'app-deposit',
  imports: [ReactiveFormsModule],
  templateUrl: './deposit.html',
  styleUrl: './deposit.css',
})
export class Deposit {
  private fb = inject(FormBuilder);
  private data: Data = inject(Data);

  depositForm: FormGroup;
  isModalOpen: WritableSignal<boolean> = signal(false);
  isLoading: WritableSignal<boolean> = signal(false);
  successMessage: WritableSignal<string> = signal('');
  errorMessage: WritableSignal<string> = signal('');

  constructor() {
    this.depositForm = this.fb.group({
      payee: ['', [Validators.required, Validators.minLength(3)]],
      amount: [
        '',
        [Validators.required, Validators.min(1), Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      description: '',
    });
  }

  openModal(): void {
    this.isModalOpen.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.depositForm.reset();
    this.successMessage.set('');
    this.errorMessage.set('');
  }

  doDeposit(): void {
    if (this.depositForm.invalid) {
      this.errorMessage.set('Por favor, preencha todos os campos corretamente');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    const depositData = {
      payee: this.depositForm.value.payee,
      amount: parseFloat(this.depositForm.value.amount),
      description: this.depositForm.value.description,
    };

    this.data.deposit(depositData).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.successMessage.set('Transferência realizada com sucesso!');
        this.depositForm.reset();
        setTimeout(() => {
          this.closeModal();
        }, 2000);
      },
      error: (error) => {
        this.isLoading.set(false);
        this.errorMessage.set(error.error?.message || 'Erro ao realizar transferência');
      },
    });
  }

  get userNameControl() {
    return this.depositForm.get('payee');
  }

  get amountControl() {
    return this.depositForm.get('amount');
  }
}

import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import deposit from '../../entities/deposit';
import { Data } from '../data';
import currentUser from '../../entities/currentUser';
@Component({
  selector: 'app-deposit-view',
  imports: [],
  templateUrl: './deposit-view.html',
  styleUrl: './deposit-view.css',
})
export class DepositView {
  private data: Data = inject(Data);
  depositSignal: WritableSignal<deposit[]> = signal<deposit[]>([]);

  ngOnInit() {
    this.data.getDeposits().subscribe({
      next: (response: deposit[]) => {
        this.depositSignal.set(response);
      },
      error: (error: any) => console.log(error),
    });
  }

  protected readonly currentUser = currentUser;
}

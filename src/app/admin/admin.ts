import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Data } from '../data';
import user from '../../entities/user';
import deposit from '../../entities/deposit';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  private data: Data = inject(Data);
  userSignal: WritableSignal<user[]> = signal<user[]>([]);
  ngOnInit() {
    this.data.getAllUsers().subscribe({
      next: (response: user[]) => {
        this.userSignal.set(response);
      },
      error: (error: any) => console.log(error),
    });
  }

}

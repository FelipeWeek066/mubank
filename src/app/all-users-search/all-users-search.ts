import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Data } from '../data';
import user from '../../entities/user';

@Component({
  selector: 'app-all-users-search',
  imports: [],
  templateUrl: './all-users-search.html',
  styleUrl: './all-users-search.css',
})
export class AllUsersSearch {
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

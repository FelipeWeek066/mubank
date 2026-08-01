import { Component, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { Data } from '../data';
import currentUser from '../../entities/currentUser';
import { routes } from '../app.routes';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { UtilsService } from '../utils-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  utils = inject(UtilsService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  data: Data = inject(Data);
  ngOnInit() {
    this.data.getCurrentUserData().subscribe({
      next: (response: currentUser) => {
        this.data.signalUserProfile.update(() => response);
      },
      error: (error: any) => this.data.signalUserProfile.update(() => new currentUser()),
    });
  }

}

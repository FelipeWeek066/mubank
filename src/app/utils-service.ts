import { inject, PLATFORM_ID, Service } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from './data';
import { isPlatformBrowser } from '@angular/common';
import currentUser from '../entities/currentUser';
import { resourceChangeTicket } from '@angular/compiler-cli';

@Service()
export class UtilsService {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private data: Data = inject(Data);

  islogged(): boolean {
    if (this.data.signalUserProfile().name != '') {
      return true;
    }
    return false;
  }
  isAdmin(): boolean {
    if(this.data.signalUserProfile().role === 'ADMIN') {
      return true;
    }
    return false;
  }
  logout() {
    isPlatformBrowser(this.platformId) ? localStorage.clear() : '';
    this.data.signalUserProfile.update(() => new currentUser());
  }

  public readonly currentUser = this.data.signalUserProfile();
}

import { Injectable, inject, PLATFORM_ID } from '@angular/core';

import { enviroment } from '../enviroments/enviroment';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {login} from './entities/login';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private apiURL = enviroment.API_BASE_URL;
  private httpClient = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private token = isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : '';

  getHttpOptions() {
    const token = isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : '';
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
  }

  login(obj: login): Observable<any> {
    return this.httpClient.post(this.apiURL + 'auth/login', obj);
  }

}

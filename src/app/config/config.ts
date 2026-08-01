import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-config',
  imports: [],
  templateUrl: './config.html',
  styleUrl: './config.css',
})
export class Config {
   location = inject(Location);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  data: Data = inject(Data);
}

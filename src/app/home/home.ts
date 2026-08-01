import { Component, inject } from '@angular/core';
import { UtilsService } from '../utils-service';
import { Data } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  utils = inject(UtilsService);
  data = inject(Data);
}

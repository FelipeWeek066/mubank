import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Data } from '../data';
import user from '../../entities/user';
import deposit from '../../entities/deposit';
import { AllUsersSearch } from '../all-users-search/all-users-search';
import { GeneralAdminView } from '../general-admin-view/general-admin-view';

@Component({
  selector: 'app-admin',
  imports: [AllUsersSearch, GeneralAdminView],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  currentScreen = currentScreen.geral;
}
export enum currentScreen{
  geral,
  Users
}

import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getProfile(): User {

    let b: User = {email: "backoffice@subocol.com", role: "backofficeadmin", scopes: [], accessToken: "",
      picture: "", expiresAt: 123, username: "Back Office", subsidiaryId: 5, providerId: 5};
    let p: User = {email: "provider@subocol.com", role: "provideradmin", scopes: [], accessToken: "",
      picture: "", expiresAt: 123, username: "Provider", subsidiaryId: 6, providerId: 6};
    let s: User = {email: "subsiadiary@subocol.com", role: "subsidiaryadmin", scopes: [], accessToken: "",
    picture: "", expiresAt: 123, username: "Subsidiary", subsidiaryId: 7, providerId: 7};

    let temp = Math.random();
    //return temp <= 0.33? b: temp <= 0.66? p: s;
    return b;
  }

}

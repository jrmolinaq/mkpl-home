import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getProfile(): User {

    // TODO cambiar para DEV  sub 60 prov 39
    let b: User = {email: "backoffice@subocol.com", role: "backofficeadmin", scopes: [], accessToken: "",
      picture: "", expiresAt: 123, username: "Back Office", subsidiaryId: 60, providerId: 39};
    let p: User = {email: "provider@subocol.com", role: "provideradmin", scopes: [], accessToken: "",
      picture: "", expiresAt: 123, username: "Provider", subsidiaryId: 1, providerId: 1};
    let s: User = {email: "subsiadiary@subocol.com", role: "subsidiaryadmin", scopes: [], accessToken: "",
    picture: "", expiresAt: 123, username: "Subsidiary", subsidiaryId: 60, providerId: 39};

    let temp = Math.random();
    //return temp <= 0.33? b: temp <= 0.66? p: s;
    return b;
  }

}

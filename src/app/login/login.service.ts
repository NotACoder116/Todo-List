import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usersList: string = "https://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { }

  getusersList() {
    return this.http.get(`${this.usersList}`);
  }
}

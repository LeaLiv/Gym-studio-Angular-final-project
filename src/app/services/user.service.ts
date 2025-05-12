import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private jsonUrl='data/users.json';

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.jsonUrl);
  }

  login(username:string,password:string):Observable<User |null>{
    return this.getUsers().pipe(
      map(users=> users.find(user=>user.username===username && user.password===password) || null)
    );
  }
}

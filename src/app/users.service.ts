import { IUser } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  private _url: string = "../assets/data/db.json";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }
 
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this._url}/${id}`);
  }
}
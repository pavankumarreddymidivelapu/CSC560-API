import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL = 'http://localhost:3000/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/getAll`);
  }
  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/post`, data);
}
}

// src/app/players.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private apiUrl = 'your_backend_api_url'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  addPlayer(playerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addPlayer`, playerData);
  }

  updatePlayer(playerId: number, playerData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updatePlayer/${playerId}`, playerData);
  }

  deletePlayer(playerId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deletePlayer/${playerId}`);
  }

  query1(): Observable<any> {
    return this.http.get(`${this.apiUrl}/query1`);
  }

  query2(): Observable<any> {
    return this.http.get(`${this.apiUrl}/query2`);
  }

  // Implement methods for other queries as needed
}

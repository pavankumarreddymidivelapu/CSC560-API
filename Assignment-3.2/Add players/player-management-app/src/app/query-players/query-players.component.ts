// src/app/query-players/query-players.component.ts
import { Component } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-query-players',
  templateUrl: './query-players.component.html',
  //styleUrls: './query-players.component.css'
})
export class QueryPlayersComponent {
  constructor(private playersService: PlayersService) {}

  query1() {
    this.playersService.query1()
      .subscribe(response => {
        console.log('Query 1 result:', response);
      }, error => {
        console.error('Error executing query 1:', error);
      });
  }

  query2() {
    this.playersService.query2()
      .subscribe(response => {
        console.log('Query 2 result:', response);
      }, error => {
        console.error('Error executing query 2:', error);
      });
  }
}

// src/app/add-player/add-player.component.ts
import { Component } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  playerName: string = '';

  constructor(private playersService: PlayersService) {}

  addPlayer() {
    const playerData = {
      name: this.playerName
    };

    this.playersService.addPlayer(playerData)
      .subscribe(response => {
        console.log('Player added successfully:', response);
      }, error => {
        console.error('Error adding player:', error);
      });
  }
}

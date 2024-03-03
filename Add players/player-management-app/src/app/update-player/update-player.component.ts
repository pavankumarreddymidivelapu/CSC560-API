// src/app/update-player/update-player.component.ts
import { Component } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent {
  playerId: number = 0;
  playerName: string = '';

  constructor(private playersService: PlayersService) {}

  updatePlayer() {
    const playerData = {
      name: this.playerName
    };

    this.playersService.updatePlayer(this.playerId, playerData)
      .subscribe(response => {
        console.log('Player updated successfully:', response);
      }, error => {
        console.error('Error updating player:', error);
      });
  }
}

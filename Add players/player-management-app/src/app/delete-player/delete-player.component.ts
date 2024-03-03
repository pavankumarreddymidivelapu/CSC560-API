// src/app/delete-player/delete-player.component.ts
import { Component } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent {
  playerId: number = 0;

  constructor(private playersService: PlayersService) {}

  deletePlayer() {
    this.playersService.deletePlayer(this.playerId)
      .subscribe(response => {
        console.log('Player deleted successfully:', response);
      }, error => {
        console.error('Error deleting player:', error);
      });
  }
}

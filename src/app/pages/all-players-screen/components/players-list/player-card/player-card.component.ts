import { Component, input } from '@angular/core';
import { Player } from '@interfaces/stars.interface';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css',
})
export class PlayerCardComponent {
  player = input<Player>();
}

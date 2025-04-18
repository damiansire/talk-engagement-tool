import { Component, input } from '@angular/core';
import { Player } from '../../../../../../../core/interfaces/github/stars.interface';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {
  player = input<Player>();
}

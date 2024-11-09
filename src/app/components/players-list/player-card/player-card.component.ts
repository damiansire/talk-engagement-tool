import { Component, input } from '@angular/core';
import { User } from '../../../interface/stars.interface';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css',
})
export class PlayerCardComponent {
  user = input<User>();
}

import { Component, inject } from '@angular/core';
import { PlayerCardComponent } from './player-card/player-card.component';
import { GithubService } from '@services/github/github.service';

@Component({
  selector: 'app-players-list',
  imports: [PlayerCardComponent],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})
export class PlayersListComponent {
  githubService = inject(GithubService);
}

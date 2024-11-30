import { Component, inject } from '@angular/core';
import { GithubService } from '@services/github.service';
import { PlayerCardComponent } from './player-card/player-card.component';

@Component({
    selector: 'app-players-list',
    imports: [PlayerCardComponent],
    templateUrl: './players-list.component.html',
    styleUrl: './players-list.component.css'
})
export class PlayersListComponent {
  githubService = inject(GithubService);
}

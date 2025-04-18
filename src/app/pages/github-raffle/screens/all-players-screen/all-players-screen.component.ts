import { Component, inject } from '@angular/core';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PrizeListComponent } from './components/prize-list/prize-list.component';
import { StartRaffleButtonComponent } from './components/start-raffle-button/start-raffle-button.component';
import { GithubService } from '../../../../core/services/github/github.service';

@Component({
  selector: 'app-all-players-screen',
  imports: [
    PlayersListComponent,
    PrizeListComponent,
    StartRaffleButtonComponent,
  ],
  templateUrl: './all-players-screen.component.html',
  styleUrl: './all-players-screen.component.css'
})
export class AllPlayersScreenComponent {
  title = 'github-raffle';
  githubService = inject(GithubService);

  ngOnInit() { }

  refresh() {
    this.githubService.refresh();
  }
}

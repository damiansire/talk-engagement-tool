import { Component, inject } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PrizeListComponent } from './components/prize-list/prize-list.component';
import { RaffleButtonComponent } from '../raffle-screen/components/raffle-button/raffle-button.component';
import { StartRaffleButtonComponent } from './components/start-raffle-button/start-raffle-button.component';

@Component({
  selector: 'app-all-players-screen',
  standalone: true,
  imports: [
    PlayersListComponent,
    PrizeListComponent,
    RaffleButtonComponent,
    StartRaffleButtonComponent,
  ],
  templateUrl: './all-players-screen.component.html',
  styleUrl: './all-players-screen.component.css',
})
export class AllPlayersScreenComponent {
  title = 'github-raffle';
  githubService = inject(GithubService);

  ngOnInit() {}

  refresh() {
    this.githubService.refresh();
  }
}

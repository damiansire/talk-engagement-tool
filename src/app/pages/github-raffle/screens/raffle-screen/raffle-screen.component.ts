import { Component, inject } from '@angular/core';
import { AvalaiblePrizesRaffleScreenComponent } from './components/avalaible-prizes-raffle-screen/avalaible-prizes-raffle-screen.component';
import { RaffleParticipantComponent } from './components/raffle-participant/raffle-participant.component';
import { RaffleButtonComponent } from './components/raffle-button/raffle-button.component';
import { WinnersHistoryComponent } from './components/winners-history/winners-history.component';
import { CurrentPrizeComponent } from './components/current-prize/current-prize.component';
import { CurrentWinnerComponent } from './components/current-winner/current-winner.component';
import { GithubService } from '../../../../core/services/github/github.service';
import { PrizesService } from '../../services/prizes.service';
import { SortPrizeService } from '../../services/sort-prize.service';

interface Participant {
  id: number;
  name: string;
  photo: string;
}

@Component({
  selector: 'app-raffle-screen',
  imports: [
    AvalaiblePrizesRaffleScreenComponent,
    RaffleParticipantComponent,
    RaffleButtonComponent,
    WinnersHistoryComponent,
    CurrentPrizeComponent,
    CurrentWinnerComponent,
  ],
  templateUrl: './raffle-screen.component.html',
  styleUrl: './raffle-screen.component.css'
})
export class RaffleScreenComponent {
  githubService = inject(GithubService);
  prizeService = inject(PrizesService);
  sortService = inject(SortPrizeService);
  constructor() { }
}

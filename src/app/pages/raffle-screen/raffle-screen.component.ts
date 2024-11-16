import { Component, inject } from '@angular/core';
import { Prize } from '../../interface/prizes.interface';
import { GithubService } from '../../services/github.service';
import { PrizesService } from '../../services/prizes.service';
import { SortPrizeService } from '../../services/sort-prize.service';

interface Participant {
  id: number;
  name: string;
  photo: string;
}

@Component({
  selector: 'app-raffle-screen',
  standalone: true,
  imports: [],
  templateUrl: './raffle-screen.component.html',
  styleUrl: './raffle-screen.component.css',
})
export class RaffleScreenComponent {
  githubService = inject(GithubService);
  prizeService = inject(PrizesService);
  sortService = inject(SortPrizeService);
  constructor() {}

  sortPrize() {
    this.sortService.sortPrize();
  }
}

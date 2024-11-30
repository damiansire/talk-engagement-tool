import { Component, inject } from '@angular/core';
import { PrizesService } from '../../../../services/prizes.service';
import { SortPrizeService } from '../../../../services/sort-prize.service';

@Component({
    selector: 'app-avalaible-prizes-raffle-screen',
    imports: [],
    templateUrl: './avalaible-prizes-raffle-screen.component.html',
    styleUrl: './avalaible-prizes-raffle-screen.component.css'
})
export class AvalaiblePrizesRaffleScreenComponent {
  prizeService = inject(PrizesService);
  sortService = inject(SortPrizeService);
}

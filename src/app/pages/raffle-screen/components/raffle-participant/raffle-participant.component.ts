import { Component, inject } from '@angular/core';
import { SortPrizeService } from '@services/sort-prize.service';

@Component({
    selector: 'app-raffle-participant',
    imports: [],
    templateUrl: './raffle-participant.component.html',
    styleUrl: './raffle-participant.component.css'
})
export class RaffleParticipantComponent {
  sortService = inject(SortPrizeService);
}

import { Component, inject } from '@angular/core';
import { SortPrizeService } from '../../../../services/sort-prize.service';

@Component({
    selector: 'app-current-winner',
    imports: [],
    templateUrl: './current-winner.component.html',
    styleUrl: './current-winner.component.css'
})
export class CurrentWinnerComponent {
  sortService = inject(SortPrizeService);
}

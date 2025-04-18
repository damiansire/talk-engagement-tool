import { Component, inject } from '@angular/core';
import { SortPrizeService } from '../../../../services/sort-prize.service';

@Component({
  selector: 'app-winners-history',
  imports: [],
  templateUrl: './winners-history.component.html',
  styleUrl: './winners-history.component.css'
})
export class WinnersHistoryComponent {
  sortService = inject(SortPrizeService);
}

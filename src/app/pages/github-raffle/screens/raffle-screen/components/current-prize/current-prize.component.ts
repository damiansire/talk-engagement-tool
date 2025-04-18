import { Component, inject } from '@angular/core';
import { SortPrizeService } from '../../../../services/sort-prize.service';

@Component({
  selector: 'app-current-prize',
  imports: [],
  templateUrl: './current-prize.component.html',
  styleUrl: './current-prize.component.css'
})
export class CurrentPrizeComponent {
  sortService = inject(SortPrizeService);
}

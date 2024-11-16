import { Component, inject } from '@angular/core';
import { SortPrizeService } from '../../services/sort-prize.service';

@Component({
  selector: 'app-sort-price-list',
  standalone: true,
  imports: [],
  templateUrl: './sort-price-list.component.html',
  styleUrl: './sort-price-list.component.css',
})
export class SortPriceListComponent {
  sortPrizeService = inject(SortPrizeService);

  initSorteo() {
    //this.sortPrizeService.initEnviorement();
  }

  nextPrize() {
    //this.sortPrizeService.setNextPrize();
  }
  sortNewPrize() {
    //this.sortPrizeService.sortPrize();
  }
}

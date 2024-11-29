import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SortPrizeService } from '../../../../services/sort-prize.service';

@Component({
  selector: 'app-raffle-button',
  standalone: true,
  imports: [],
  templateUrl: './raffle-button.component.html',
  styleUrl: './raffle-button.component.css',
})
export class RaffleButtonComponent {
  sortService = inject(SortPrizeService);
  sortPrize() {
    this.sortService.sortPrize();
  }
}

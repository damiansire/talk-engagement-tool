import { Component, inject } from '@angular/core';
import { PrizesService } from '../../../../services/prizes.service';

@Component({
  selector: 'app-prize-list',
  imports: [],
  templateUrl: './prize-list.component.html',
  styleUrl: './prize-list.component.css'
})
export class PrizeListComponent {
  prizesService = inject(PrizesService);
}

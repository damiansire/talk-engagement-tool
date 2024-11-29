import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raffle-button',
  standalone: true,
  imports: [],
  templateUrl: './raffle-button.component.html',
  styleUrl: './raffle-button.component.css',
})
export class RaffleButtonComponent {
  router = inject(Router);

  startRaffleClick() {
    this.router.navigate(['/raffle']);
  }
}

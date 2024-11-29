import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-raffle-button',
  standalone: true,
  imports: [],
  templateUrl: './start-raffle-button.component.html',
  styleUrl: './start-raffle-button.component.css',
})
export class StartRaffleButtonComponent {
  router = inject(Router);

  startRaffleClick() {
    this.router.navigate(['/raffle']);
  }
}

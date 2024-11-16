import { Routes } from '@angular/router';
import { AllPlayersScreenComponent } from './pages/all-players-screen/all-players-screen.component';
import { RaffleScreenComponent } from './pages/raffle-screen/raffle-screen.component';

export const routes: Routes = [
  { path: '', component: AllPlayersScreenComponent },
  { path: 'raffle', component: RaffleScreenComponent },
];

import { Routes } from '@angular/router';
import { RaffleScreenComponent } from './pages/github-raffle/screens/raffle-screen/raffle-screen.component';
import { AllPlayersScreenComponent } from './pages/github-raffle/screens/all-players-screen/all-players-screen.component';

export const routes: Routes = [
  { path: '', component: AllPlayersScreenComponent },
  { path: 'raffle', component: RaffleScreenComponent },
];

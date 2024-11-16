import { inject, Injectable, signal } from '@angular/core';
import { PrizesService } from './prizes.service';
import { GithubService } from './github.service';

interface Winner {
  avatar_url: string;
  login: string;
}

interface SortedPrize {
  prizeName: string;
  usernames: string[];
  amount: number;
  prizeIcon: string;
}

@Injectable({
  providedIn: 'root',
})
export class SortPrizeService {
  githubService = inject(GithubService);
  prizeService = inject(PrizesService);
  sortedPrizes = signal<SortedPrize[]>([]);
  nextPrize = signal<SortedPrize | undefined>(undefined);
  winners = signal<Winner[]>([]);
  constructor() {}
  sortPrize() {
    /*
    const prizesToSort = this.prizeService.prizes();

    const winnerLogins = this.winners().map((winner) => winner.login);

    const participantes = this.githubService
      .stars()
      .map((x) => {
        return { login: x.user.login, avatar_url: x.user.avatar_url };
      })
      .filter((participante) => {
        return !winnerLogins.includes(participante.login);
      });
*/
  }

  setNextPrize() {
    const newNextPrize = this.sortedPrizes().find(
      (x) => x.usernames.length < x.amount
    );
    this.nextPrize.set(newNextPrize);
  }

  initEnviorement() {
    const allPrizes = this.prizeService.prizes().map((x) => {
      return {
        prizeName: x.name,
        usernames: [],
        amount: x.amount,
        prizeIcon: x.iconSrc,
      };
    });
    this.sortedPrizes.set(allPrizes);
  }
}

export interface Prize {
  name: string;
  iconSrc: string;
  amount: number;
}

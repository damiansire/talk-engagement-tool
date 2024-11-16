import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { PrizesService } from './prizes.service';
import { GithubService } from './github.service';
import { Player } from '../interface/stars.interface';
import { Prize } from '../interface/prizes.interface';

interface Winner {
  user: Player;
  prize: Prize;
}

@Injectable({
  providedIn: 'root',
})
export class SortPrizeService {
  githubService = inject(GithubService);
  prizeService = inject(PrizesService);

  players = computed<Player[]>(() => {
    return this.githubService.stars().map((x) => x.user);
  });

  availableParticipants = computed(() => {
    const winnerLogins = this.winners().map((winner) => winner.user.login);

    return this.players().filter(
      (player) => !winnerLogins.includes(player.login)
    );
  });

  winners = signal<Winner[]>([]);

  allPrizes = computed(() => {
    return this.prizeService.prizes();
  });

  availablePrizes = computed(() => {
    const pendingPrizes = [];
    for (const prize of this.allPrizes()) {
      for (let index = 0; index < prize.amount; index++) {
        pendingPrizes.push({ amount: prize.amount, prize: prize });
      }
    }
    return pendingPrizes;
  });

  currentPrizeIndex = signal(0);

  currentPrize = computed<Prize>(() => {
    return this.availablePrizes()[this.currentPrizeIndex()].prize;
  });

  currentWinner = signal<Winner | null>(null);

  constructor() {}

  sortPrize() {
    const playerAmount = this.availableParticipants().length;
    const winnerIndex = Math.floor((Math.random() * 100) % playerAmount);
    this.winners.update((x) => {
      const winners = x;
      winners.push({
        prize: this.currentPrize(),
        user: this.availableParticipants()[winnerIndex],
      });
      return winners;
    });
    this.currentWinner.set({
      user: this.availableParticipants()[winnerIndex],
      prize: this.currentPrize(),
    });
    this.currentPrizeIndex.update((x) => x + 1);
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
  }
}

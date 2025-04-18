import { computed, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Prize } from '../interfaces/prizes.interface';

@Injectable({
  providedIn: 'root',
})
export class PrizesService {
  prizes = signal<Prize[]>([]);
  prizesAmount = computed(() => {
    return this.prizes().reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  });

  constructor(private http: HttpClient) {
    this.getPrizes();
  }

  getPrizes() {
    this.http.get<Prize[]>('/prizes-list.json').subscribe(
      (prizes) => {
        this.prizes.set(prizes);
      },
      (error) => {
        console.error('Error al obtener los premios:', error);
      }
    );
  }
}

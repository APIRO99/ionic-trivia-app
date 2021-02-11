import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Game } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  recentGames: Game[] = [];

  constructor(private storage: Storage) {
    this.updateFromCurrentStorage();
  }

  private updateFromCurrentStorage = async () => {
    if (this.recentGames.length === 0)  
      await this.getRecentGames().then(res => this.recentGames = res || []);
  }

  existsRecentGames = () => this.recentGames.length > 0;

  getRecentGames = () => this.storage.get('games');

  saveNewGame = ( game: Game) => {
    this.recentGames.push(game);
    this.storage.set('games', this.recentGames);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(
    private localstorageService: LocalStorageService,
    private dataService: DataService,
    private router: Router
  ) {  }
  ngOnInit () { }

  displayPlayGamesMessages = () => !this.localstorageService.existsRecentGames();

  goToPreGame = () => this.router.navigate(['/pre-game']);

  goToCategories = () => this.router.navigate(['/categories-modal']);

}

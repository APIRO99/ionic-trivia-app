import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { GameModalPage } from '../game-modal/game-modal.page';

@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.page.html',
  styleUrls: ['./pre-game.page.scss'],
})
export class PreGamePage implements OnInit {
  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }
  async ngOnInit() { 
    await this.dataService.getCategories()
      .then(res => this.categories = res.list );
  }

  categories: any;
  category:number;
  user: string;
  avatar: number;

  selectCategory = (id) => this.category = id;

  selectAvatar = (selected) => this.avatar = selected;
  
  startGame = async () => {
    
    if (! (this.user && this.avatar && this.category ))
      return await this.presentAlert('Missing values!', 'Please enter all values before begin')



    let res = await this.dataService.getQuestions(this.category);

    if (res.response_code === 0) {
      console.log(this.user, this.avatar, this.category);
      await this.presentModal(res.results, this.user, this.avatar, this.findCategory(this.category))
    } else {
      await this.presentAlert('Oppps!', 'Something went wrong, please try again')
    }
  }

  findCategory = (id: number) => this.categories.find(cat => cat.id == id).title;


  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header, message, buttons: ['OK']
    });
    await alert.present();
  }


  async presentModal(questions, user, avatar, category) {
    const modal = await this.modalCtrl.create({
      component: GameModalPage,
      cssClass: 'my-custom-class',
      componentProps: { questions, user, avatar, category }
    });
    return modal.present();
  }
}

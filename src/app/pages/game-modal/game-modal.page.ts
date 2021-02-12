import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Game, Question } from 'src/app/interfaces';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.page.html',
  styleUrls: ['./game-modal.page.scss'],
})
export class GameModalPage implements OnInit {
  constructor( 
    private dataService: DataService,
    private localStorageService: LocalStorageService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.questions.forEach(element => {
      element.question = element.question.replace(/&quot;/g, '"');
      element.question = element.question.replace(/&#039;/g, "'");
      element.incorrect_answers.push(element.correct_answer);
      this.randomizeArray(element.incorrect_answers);
    });

    this.interval = this.intiInterval();
    this.resetVariables();
  }

  @ViewChild(IonSlides) slider: IonSlides;

  @Input() questions: Question[];
  @Input() user: string;
  @Input() avatar: number;
  @Input() category: string;

  currentQuestion = 0;
  correctAnswers = 0;
  totalTime = 0;

  currentAnswer = "";
  countDown = 15;
  interval:any;
  

  slideOpts = {
    allowTouchMove: false
  }


  intiInterval = () => {
    return setInterval(() => {
      if (this.countDown == 1) this.validateNext()
      else this.countDown--;
    }, 1000);
  }

  updateAnswer = ({ detail }) => this.currentAnswer = detail.value;

  resetVariables = () => {
    this.totalTime += 15 - this.countDown;
    this.currentAnswer = "";
    this.countDown = 15;
  }

  validateNext = () => {
    if (this.currentAnswer === this.questions[this.currentQuestion].correct_answer) this.correctAnswers++;
    if (this.questions.length > this.currentQuestion + 1) {
      this.resetVariables();
      this.currentQuestion++;
    } else clearInterval(this.interval);
    this.slider.slideNext();

  }

  closeModal = () => {
    const game: Game = {
      userId: this.user,
      Score: this.correctAnswers,
      time: this.totalTime,
      category: this.category,
      avatar: `./assets/avatars/av${this.avatar}.jpg`,
      id:0,
    }
    this.localStorageService.saveNewGame(game);
    this.modalCtrl.dismiss();
  }


  randomizeArray = (arr:Array<string>) => {
    let aux: Array<string> = [];
    while(arr.length !==0) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      aux.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
    }
    arr.push(...aux);
  }
}
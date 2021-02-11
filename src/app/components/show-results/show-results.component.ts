import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss'],
})
export class ShowResultsComponent implements OnInit {
  constructor() { }
  ngOnInit() {}

  @Input() time: number;
  @Input() correct: number;

  @Output() closeModal = new EventEmitter();

  closeModalevent = () => this.closeModal.emit();

}

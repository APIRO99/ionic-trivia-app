import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-categories-modal',
  templateUrl: './categories-modal.page.html',
  styleUrls: ['./categories-modal.page.scss'],
})
export class CategoriesModalPage implements OnInit {
  categories: any;
  constructor(private dataService: DataService) { }
  async ngOnInit() {
    await this.dataService.getCategories()
      .then(res => this.categories = res.list)
    
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TriviaResponse } from 'src/app/interfaces';

const API = 'https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }


  getQuestions = (category: number) => 
    this.http.get<TriviaResponse>(`${API}&category=${category}`)
      .toPromise();

  getCategories = () => 
    this.http.get<any>('/assets/categories/list.json')
      .toPromise();

  doMockResponse = () =>
    this.http.get<TriviaResponse>('/assets/data/mockResponse.json')
      .toPromise();
}
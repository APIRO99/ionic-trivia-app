import { NumberValueAccessor } from "@angular/forms";

export interface TriviaResponse {
  response_code: number;
  results: Question[];
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Game {
  id: number;
  time: number;
  userId: string;
  Score: number;
  category: string;
  avatar: string;
}
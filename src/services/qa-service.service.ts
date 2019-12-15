import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../models/Config.model';
import { config } from '../configs/config';
import { QuestionAnswerModel } from '../models/QuestionAnswer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QAService {

  config: Config = config;

  constructor(private httpC: HttpClient) {}

  askQuestion(payload){
    return this.httpC.get(`${this.config.api}api/GetAnswer?sentence=${payload}`);
  }
  trainAnswer(payload){
    return this.httpC.post(`${this.config.api}api/TrainAnswer`, payload);
  }

}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../models/Config.model';
import { config } from '../configs/config';

@Injectable({
  providedIn: 'root'
})
export class QAService {

  private config: Config = config;

  constructor(@Inject(HttpClient) private httpC: HttpClient) {}

  askQuestion(payload){
    return this.httpC.get(`${this.config.api}/GetAnswer?question=${payload}`);
  }
  trainAnswer(payload){
    return this.httpC.post(`${this.config.api}/TrainAnswer`, payload);
  }

}

import { Component, OnInit } from '@angular/core';
import { QAService } from 'src/services/qa-service.service';
import { Observable } from 'rxjs';
import { QuestionAnswerModel, ExternalHumanTrainingModel } from 'src/models/QuestionAnswer.model';
import { ExternalHumanTrainingResponseModel } from 'src/models/ExternalHumanTrainingResponse.model';


@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {
  
  qaResponse: QuestionAnswerModel;
  trainingTemplate: ExternalHumanTrainingModel;
  trainingResponse: ExternalHumanTrainingResponseModel;

  needHumanTraining: boolean = false;
  showError: boolean = false;

  showNoAnswer: string;
  answer: string;
  errorMessage: string;

  constructor(private qaService: QAService) {
    // this.qaResponse = new QuestionAnswerModel();
    this.trainingTemplate = new ExternalHumanTrainingModel();
  }
  ngOnInit() {}

  sendQuestion(sentence: string){
    this.qaService.askQuestion(sentence).subscribe((res: QuestionAnswerModel)=>{
      this.qaResponse = res;
      if(this.qaResponse.StatusCode == "SUCCESS"){
        this.answer = this.qaResponse.Answer;
        this.showError = false;
      }
      else if(this.qaResponse.StatusCode == "NO_ANSWER_FOUND"){
        this.showNoAnswer = this.qaResponse.StatusMessage;
        this.showError = false;
      }
      else if(this.qaResponse.StatusCode == "NEEDS_HUMAN_TRAINING"){
        this.needHumanTraining = true;
        this.trainingTemplate = this.qaResponse.TrainingModel;
        this.showError = false;
      }
      else{
        this.showError = true;
        this.errorMessage = this.qaResponse.StatusMessage;
      }
    });
  }
  trainViaHuman(){
    this.qaService.trainAnswer(this.trainingTemplate).subscribe((res: ExternalHumanTrainingResponseModel) =>{
      this.trainingResponse = res;
      if(this.trainingResponse.StatusCode == "SUCCESS"){
        this.sendQuestion(this.trainingResponse.OriginalQuestion);
        this.showError = false;
      }
      else{
        this.showError = true;
        this.errorMessage = this.qaResponse.StatusMessage;
      }
    });
  }
}

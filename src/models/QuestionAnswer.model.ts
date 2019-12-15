import { BaseModel } from './Base.model';

export class QuestionAnswerModel extends BaseModel{
    NeedsHumanTraining: boolean;
    Answer: string;
    WholeAnswer: string;
    FoundAnswerSentence: string;
    Score: number;
    TrainingModel: ExternalHumanTrainingModel;
}

export class ExternalHumanTrainingModel{
    
    QuestionIdentifier: string;
    OriginalQuestion: string;
    Date: boolean;
    Location: boolean;
    Money: boolean;
    Organization: boolean;
    Percentage: boolean;
    Person: boolean;
    Time: boolean;

    constructor(){
        this.QuestionIdentifier = "";
        this.OriginalQuestion = "";
        this.Date =  false;
        this.Location = false;
        this.Money = false;
        this.Organization = false;
        this.Percentage = false;
        this.Person = false;
        this.Time = false;
    }
}
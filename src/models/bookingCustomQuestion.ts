import {AnswerInputType} from './answerInputType';
import {Entity} from './entity';

export interface BookingCustomQuestion extends Entity{
    /** The expected answer type. The possible values are: text, radioButton, unknownFutureValue. */
    answerInputType?:AnswerInputType | undefined;
    /** List of possible answer values. */
    answerOptions?:string[] | undefined;
    /** Display name of this entity. */
    displayName?:string | undefined;
}

import {AnswerInputType} from './answerInputType';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomQuestion extends Entity, Parsable {
    /**
     * The expected answer type. The possible values are: text, radioButton, unknownFutureValue.
     */
    answerInputType?: AnswerInputType | undefined;
    /**
     * List of possible answer values.
     */
    answerOptions?: string[] | undefined;
    /**
     * The question.
     */
    displayName?: string | undefined;
}

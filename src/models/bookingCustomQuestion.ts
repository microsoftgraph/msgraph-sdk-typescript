import {AnswerInputType} from './answerInputType';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomQuestion extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The expected answer type. The possible values are: text, radioButton, unknownFutureValue. */
    answerInputType?: AnswerInputType | undefined;
    /** List of possible answer values. */
    answerOptions?: string[] | undefined;
    /** Display name of this entity. */
    displayName?: string | undefined;
}

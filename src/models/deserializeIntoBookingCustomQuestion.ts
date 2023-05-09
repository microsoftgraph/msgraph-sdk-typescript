import {AnswerInputType} from './answerInputType';
import {BookingCustomQuestion} from './bookingCustomQuestion';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomQuestion(bookingCustomQuestion: BookingCustomQuestion | undefined = {} as BookingCustomQuestion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingCustomQuestion),
        "answerInputType": n => { bookingCustomQuestion.answerInputType = n.getEnumValue<AnswerInputType>(AnswerInputType); },
        "answerOptions": n => { bookingCustomQuestion.answerOptions = n.getCollectionOfPrimitiveValues<string>(); },
        "displayName": n => { bookingCustomQuestion.displayName = n.getStringValue(); },
    }
}

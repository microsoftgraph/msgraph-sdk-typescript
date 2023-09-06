import { AnswerInputType } from './answerInputType';
import { type BookingQuestionAnswer } from './bookingQuestionAnswer';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingQuestionAnswer(bookingQuestionAnswer: BookingQuestionAnswer | undefined = {} as BookingQuestionAnswer) : Record<string, (node: ParseNode) => void> {
    return {
        "answer": n => { bookingQuestionAnswer.answer = n.getStringValue(); },
        "answerInputType": n => { bookingQuestionAnswer.answerInputType = n.getEnumValue<AnswerInputType>(AnswerInputType); },
        "answerOptions": n => { bookingQuestionAnswer.answerOptions = n.getCollectionOfPrimitiveValues<string>(); },
        "isRequired": n => { bookingQuestionAnswer.isRequired = n.getBooleanValue(); },
        "@odata.type": n => { bookingQuestionAnswer.odataType = n.getStringValue(); },
        "question": n => { bookingQuestionAnswer.question = n.getStringValue(); },
        "questionId": n => { bookingQuestionAnswer.questionId = n.getStringValue(); },
        "selectedOptions": n => { bookingQuestionAnswer.selectedOptions = n.getCollectionOfPrimitiveValues<string>(); },
    }
}

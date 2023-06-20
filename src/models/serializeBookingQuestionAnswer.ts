import {AnswerInputType} from './answerInputType';
import {BookingQuestionAnswer} from './bookingQuestionAnswer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingQuestionAnswer(bookingQuestionAnswer: BookingQuestionAnswer | undefined = {} as BookingQuestionAnswer, writer: SerializationWriter) : void {
        writer.writeStringValue("answer", bookingQuestionAnswer.answer);
        writer.writeEnumValue<AnswerInputType>("answerInputType", bookingQuestionAnswer.answerInputType);
        writer.writeCollectionOfPrimitiveValues<string>("answerOptions", bookingQuestionAnswer.answerOptions);
        writer.writeBooleanValue("isRequired", bookingQuestionAnswer.isRequired);
        writer.writeStringValue("@odata.type", bookingQuestionAnswer.odataType);
        writer.writeStringValue("question", bookingQuestionAnswer.question);
        writer.writeStringValue("questionId", bookingQuestionAnswer.questionId);
        writer.writeCollectionOfPrimitiveValues<string>("selectedOptions", bookingQuestionAnswer.selectedOptions);
        writer.writeAdditionalData(bookingQuestionAnswer.additionalData);
}

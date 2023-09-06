import { AnswerInputType } from './answerInputType';
import { type BookingQuestionAnswer } from './bookingQuestionAnswer';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingQuestionAnswer(writer: SerializationWriter, bookingQuestionAnswer: BookingQuestionAnswer | undefined = {} as BookingQuestionAnswer) : void {
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

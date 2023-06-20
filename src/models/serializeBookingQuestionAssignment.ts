import {BookingQuestionAssignment} from './bookingQuestionAssignment';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingQuestionAssignment(bookingQuestionAssignment: BookingQuestionAssignment | undefined = {} as BookingQuestionAssignment, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isRequired", bookingQuestionAssignment.isRequired);
        writer.writeStringValue("@odata.type", bookingQuestionAssignment.odataType);
        writer.writeStringValue("questionId", bookingQuestionAssignment.questionId);
        writer.writeAdditionalData(bookingQuestionAssignment.additionalData);
}

import { type BookingQuestionAssignment } from './bookingQuestionAssignment';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingQuestionAssignment(bookingQuestionAssignment: BookingQuestionAssignment | undefined = {} as BookingQuestionAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        "isRequired": n => { bookingQuestionAssignment.isRequired = n.getBooleanValue(); },
        "@odata.type": n => { bookingQuestionAssignment.odataType = n.getStringValue(); },
        "questionId": n => { bookingQuestionAssignment.questionId = n.getStringValue(); },
    }
}

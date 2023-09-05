import { deserializeIntoBookingQuestionAnswer } from './deserializeIntoBookingQuestionAnswer';
import { type BookingQuestionAnswer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingQuestionAnswerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingQuestionAnswer;
}

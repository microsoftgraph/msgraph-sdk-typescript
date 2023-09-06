import { deserializeIntoBookingCustomQuestion } from './deserializeIntoBookingCustomQuestion';
import { type BookingCustomQuestion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingCustomQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCustomQuestion;
}

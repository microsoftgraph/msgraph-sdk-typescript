import {deserializeIntoBookingCustomQuestion} from './deserializeIntoBookingCustomQuestion';
import {BookingCustomQuestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCustomQuestion;
}

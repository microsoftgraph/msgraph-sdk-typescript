import {deserializeIntoBookingQuestionAnswer} from './deserializeIntoBookingQuestionAnswer';
import {BookingQuestionAnswer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingQuestionAnswerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingQuestionAnswer;
}

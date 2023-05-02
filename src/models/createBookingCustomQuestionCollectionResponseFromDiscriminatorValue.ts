import {deserializeIntoBookingCustomQuestionCollectionResponse} from './deserializeIntoBookingCustomQuestionCollectionResponse';
import {BookingCustomQuestionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomQuestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCustomQuestionCollectionResponse;
}

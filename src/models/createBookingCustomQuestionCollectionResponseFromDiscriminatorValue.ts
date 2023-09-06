import { deserializeIntoBookingCustomQuestionCollectionResponse } from './deserializeIntoBookingCustomQuestionCollectionResponse';
import { type BookingCustomQuestionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingCustomQuestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCustomQuestionCollectionResponse;
}

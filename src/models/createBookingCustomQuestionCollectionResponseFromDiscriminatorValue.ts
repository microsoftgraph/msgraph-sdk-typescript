import {BookingCustomQuestionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomQuestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomQuestionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomQuestionCollectionResponseImpl();
}

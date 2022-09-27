import {BookingWorkTimeSlotCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingWorkTimeSlotCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingWorkTimeSlotCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingWorkTimeSlotCollectionResponse();
}

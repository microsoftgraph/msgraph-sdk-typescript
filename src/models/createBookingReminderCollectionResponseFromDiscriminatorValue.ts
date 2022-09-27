import {BookingReminderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingReminderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingReminderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingReminderCollectionResponse();
}

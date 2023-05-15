import {deserializeIntoBookingService} from './deserializeIntoBookingService';
import {BookingService} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingServiceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingService;
}

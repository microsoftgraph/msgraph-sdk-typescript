import { deserializeIntoBookingService } from './deserializeIntoBookingService';
import { type BookingService } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingServiceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingService;
}

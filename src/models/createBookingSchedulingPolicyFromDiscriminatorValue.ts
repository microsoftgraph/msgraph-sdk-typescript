import { deserializeIntoBookingSchedulingPolicy } from './deserializeIntoBookingSchedulingPolicy';
import { type BookingSchedulingPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingSchedulingPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingSchedulingPolicy;
}

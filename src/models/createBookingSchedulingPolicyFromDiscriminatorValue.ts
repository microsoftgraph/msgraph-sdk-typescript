import {deserializeIntoBookingSchedulingPolicy} from './deserializeIntoBookingSchedulingPolicy';
import {BookingSchedulingPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingSchedulingPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingSchedulingPolicy;
}

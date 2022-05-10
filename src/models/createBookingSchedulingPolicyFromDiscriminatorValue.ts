import {BookingSchedulingPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingSchedulingPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingSchedulingPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingSchedulingPolicyImpl();
}

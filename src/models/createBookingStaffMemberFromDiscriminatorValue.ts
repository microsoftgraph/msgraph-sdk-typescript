import {BookingStaffMemberImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingStaffMemberImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingStaffMemberImpl();
}

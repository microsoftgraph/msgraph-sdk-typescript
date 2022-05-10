import {BookingStaffMemberBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingStaffMemberBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingStaffMemberBaseImpl();
}

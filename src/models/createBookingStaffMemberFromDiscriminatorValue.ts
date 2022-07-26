import {BookingStaffMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingStaffMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingStaffMember();
}

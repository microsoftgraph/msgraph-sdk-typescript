import { deserializeIntoBookingStaffMember } from './deserializeIntoBookingStaffMember';
import { type BookingStaffMember } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingStaffMember;
}

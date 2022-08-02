import {BookingStaffMember, BookingStaffMemberBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingStaffMemberBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.bookingStaffMember":
                    return new BookingStaffMember();
            }
        }
    }
    return new BookingStaffMemberBase();
}

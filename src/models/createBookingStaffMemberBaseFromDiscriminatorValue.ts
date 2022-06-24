import {BookingStaffMemberBaseImpl, BookingStaffMemberImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingStaffMemberBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.bookingStaffMember":
                    return new BookingStaffMemberImpl();
            }
        }
    }
    return new BookingStaffMemberBaseImpl();
}

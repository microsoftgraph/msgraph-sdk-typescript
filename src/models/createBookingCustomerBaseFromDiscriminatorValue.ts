import {BookingCustomerBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.bookingCustomerBase":
                    return new BookingCustomerBase();
            }
        }
    }
    return new BookingCustomerBase();
}

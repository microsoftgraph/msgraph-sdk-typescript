import {deserializeIntoBookingCustomer} from './deserializeIntoBookingCustomer';
import {deserializeIntoBookingCustomerBase} from './deserializeIntoBookingCustomerBase';
import {BookingCustomer, BookingCustomerBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.bookingCustomer":
                    return deserializeIntoBookingCustomer;
            }
        }
    }
    return deserializeIntoBookingCustomerBase;
}

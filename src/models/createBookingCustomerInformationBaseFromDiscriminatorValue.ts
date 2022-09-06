import {BookingCustomerInformation, BookingCustomerInformationBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerInformationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerInformationBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.bookingCustomerInformation":
                    return new BookingCustomerInformation();
            }
        }
    }
    return new BookingCustomerInformationBase();
}

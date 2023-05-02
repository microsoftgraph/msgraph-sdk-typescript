import {BookingCustomerInformationBase} from './bookingCustomerInformationBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerInformationBase(bookingCustomerInformationBase: BookingCustomerInformationBase | undefined = {} as BookingCustomerInformationBase) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { bookingCustomerInformationBase.odataType = n.getStringValue(); },
    }
}

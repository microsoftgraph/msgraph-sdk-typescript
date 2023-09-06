import { type BookingCustomerInformationBase } from './bookingCustomerInformationBase';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerInformationBase(bookingCustomerInformationBase: BookingCustomerInformationBase | undefined = {} as BookingCustomerInformationBase) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { bookingCustomerInformationBase.odataType = n.getStringValue(); },
    }
}

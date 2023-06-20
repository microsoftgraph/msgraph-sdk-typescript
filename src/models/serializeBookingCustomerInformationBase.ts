import {BookingCustomerInformationBase} from './bookingCustomerInformationBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerInformationBase(bookingCustomerInformationBase: BookingCustomerInformationBase | undefined = {} as BookingCustomerInformationBase, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", bookingCustomerInformationBase.odataType);
        writer.writeAdditionalData(bookingCustomerInformationBase.additionalData);
}

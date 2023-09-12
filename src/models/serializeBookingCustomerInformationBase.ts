import { type BookingCustomerInformationBase } from './bookingCustomerInformationBase';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerInformationBase(writer: SerializationWriter, bookingCustomerInformationBase: BookingCustomerInformationBase | undefined = {} as BookingCustomerInformationBase) : void {
        writer.writeStringValue("@odata.type", bookingCustomerInformationBase.odataType);
        writer.writeAdditionalData(bookingCustomerInformationBase.additionalData);
}

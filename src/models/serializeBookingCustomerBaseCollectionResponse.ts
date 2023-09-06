import { type BookingCustomerBase } from './bookingCustomerBase';
import { type BookingCustomerBaseCollectionResponse } from './bookingCustomerBaseCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeBookingCustomerBase } from './serializeBookingCustomerBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerBaseCollectionResponse(writer: SerializationWriter, bookingCustomerBaseCollectionResponse: BookingCustomerBaseCollectionResponse | undefined = {} as BookingCustomerBaseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCustomerBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingCustomerBase>("value", bookingCustomerBaseCollectionResponse.value, serializeBookingCustomerBase);
}

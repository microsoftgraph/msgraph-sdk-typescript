import {BookingCustomerBase} from './bookingCustomerBase';
import {BookingCustomerBaseCollectionResponse} from './bookingCustomerBaseCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCustomerBase} from './serializeBookingCustomerBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerBaseCollectionResponse(bookingCustomerBaseCollectionResponse: BookingCustomerBaseCollectionResponse | undefined = {} as BookingCustomerBaseCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCustomerBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingCustomerBase>("value", bookingCustomerBaseCollectionResponse.value, serializeBookingCustomerBase);
}

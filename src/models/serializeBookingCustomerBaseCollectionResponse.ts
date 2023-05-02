import {BookingCustomerBase} from './bookingCustomerBase';
import {BookingCustomerBaseCollectionResponse} from './bookingCustomerBaseCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCustomerBase} from './serializeBookingCustomerBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerBaseCollectionResponse(writer: SerializationWriter, bookingCustomerBaseCollectionResponse: BookingCustomerBaseCollectionResponse | undefined = {} as BookingCustomerBaseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCustomerBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingCustomerBase>("value", bookingCustomerBaseCollectionResponse.value, serializeBookingCustomerBase);
}

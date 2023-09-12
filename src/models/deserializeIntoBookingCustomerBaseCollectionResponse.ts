import { type BookingCustomerBase } from './bookingCustomerBase';
import { type BookingCustomerBaseCollectionResponse } from './bookingCustomerBaseCollectionResponse';
import { createBookingCustomerBaseFromDiscriminatorValue } from './createBookingCustomerBaseFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeBookingCustomerBase } from './serializeBookingCustomerBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerBaseCollectionResponse(bookingCustomerBaseCollectionResponse: BookingCustomerBaseCollectionResponse | undefined = {} as BookingCustomerBaseCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingCustomerBaseCollectionResponse),
        "value": n => { bookingCustomerBaseCollectionResponse.value = n.getCollectionOfObjectValues<BookingCustomerBase>(createBookingCustomerBaseFromDiscriminatorValue); },
    }
}

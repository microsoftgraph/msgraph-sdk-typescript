import {BookingCustomerBase} from './bookingCustomerBase';
import {BookingCustomerBaseCollectionResponse} from './bookingCustomerBaseCollectionResponse';
import {createBookingCustomerBaseFromDiscriminatorValue} from './createBookingCustomerBaseFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBookingCustomerBase} from './serializeBookingCustomerBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerBaseCollectionResponse(bookingCustomerBaseCollectionResponse: BookingCustomerBaseCollectionResponse | undefined = {} as BookingCustomerBaseCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingCustomerBaseCollectionResponse),
        "value": n => { bookingCustomerBaseCollectionResponse.value = n.getCollectionOfObjectValues<BookingCustomerBase>(createBookingCustomerBaseFromDiscriminatorValue); },
    }
}

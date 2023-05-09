import {BookingService} from './bookingService';
import {BookingServiceCollectionResponse} from './bookingServiceCollectionResponse';
import {createBookingServiceFromDiscriminatorValue} from './createBookingServiceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBookingService} from './serializeBookingService';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingServiceCollectionResponse(bookingServiceCollectionResponse: BookingServiceCollectionResponse | undefined = {} as BookingServiceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingServiceCollectionResponse),
        "value": n => { bookingServiceCollectionResponse.value = n.getCollectionOfObjectValues<BookingService>(createBookingServiceFromDiscriminatorValue); },
    }
}

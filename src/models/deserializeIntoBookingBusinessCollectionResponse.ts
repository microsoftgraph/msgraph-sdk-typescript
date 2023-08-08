import type {BookingBusiness} from './bookingBusiness';
import type {BookingBusinessCollectionResponse} from './bookingBusinessCollectionResponse';
import {createBookingBusinessFromDiscriminatorValue} from './createBookingBusinessFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBookingBusiness} from './serializeBookingBusiness';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingBusinessCollectionResponse(bookingBusinessCollectionResponse: BookingBusinessCollectionResponse | undefined = {} as BookingBusinessCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingBusinessCollectionResponse),
        "value": n => { bookingBusinessCollectionResponse.value = n.getCollectionOfObjectValues<BookingBusiness>(createBookingBusinessFromDiscriminatorValue); },
    }
}

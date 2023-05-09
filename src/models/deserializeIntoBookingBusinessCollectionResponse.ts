import {BookingBusiness} from './bookingBusiness';
import {BookingBusinessCollectionResponse} from './bookingBusinessCollectionResponse';
import {createBookingBusinessFromDiscriminatorValue} from './createBookingBusinessFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBookingBusiness} from './serializeBookingBusiness';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingBusinessCollectionResponse(bookingBusinessCollectionResponse: BookingBusinessCollectionResponse | undefined = {} as BookingBusinessCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingBusinessCollectionResponse),
        "value": n => { bookingBusinessCollectionResponse.value = n.getCollectionOfObjectValues<BookingBusiness>(createBookingBusinessFromDiscriminatorValue); },
    }
}

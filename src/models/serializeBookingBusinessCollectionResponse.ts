import type {BookingBusiness} from './bookingBusiness';
import type {BookingBusinessCollectionResponse} from './bookingBusinessCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingBusiness} from './serializeBookingBusiness';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingBusinessCollectionResponse(writer: SerializationWriter, bookingBusinessCollectionResponse: BookingBusinessCollectionResponse | undefined = {} as BookingBusinessCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingBusinessCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingBusiness>("value", bookingBusinessCollectionResponse.value, serializeBookingBusiness);
}

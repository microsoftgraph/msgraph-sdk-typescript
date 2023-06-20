import {BookingBusiness} from './bookingBusiness';
import {BookingBusinessCollectionResponse} from './bookingBusinessCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingBusiness} from './serializeBookingBusiness';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingBusinessCollectionResponse(bookingBusinessCollectionResponse: BookingBusinessCollectionResponse | undefined = {} as BookingBusinessCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingBusinessCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingBusiness>("value", bookingBusinessCollectionResponse.value, serializeBookingBusiness);
}

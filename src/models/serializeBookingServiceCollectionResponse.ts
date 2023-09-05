import { type BookingService } from './bookingService';
import { type BookingServiceCollectionResponse } from './bookingServiceCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeBookingService } from './serializeBookingService';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingServiceCollectionResponse(writer: SerializationWriter, bookingServiceCollectionResponse: BookingServiceCollectionResponse | undefined = {} as BookingServiceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingServiceCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingService>("value", bookingServiceCollectionResponse.value, serializeBookingService);
}

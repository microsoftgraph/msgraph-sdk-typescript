import {BookingAppointment} from './bookingAppointment';
import {BookingAppointmentCollectionResponse} from './bookingAppointmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingAppointment} from './serializeBookingAppointment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingAppointmentCollectionResponse(bookingAppointmentCollectionResponse: BookingAppointmentCollectionResponse | undefined = {} as BookingAppointmentCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingAppointmentCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingAppointment>("value", bookingAppointmentCollectionResponse.value, serializeBookingAppointment);
}

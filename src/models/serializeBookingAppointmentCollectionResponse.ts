import type {BookingAppointment} from './bookingAppointment';
import type {BookingAppointmentCollectionResponse} from './bookingAppointmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingAppointment} from './serializeBookingAppointment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingAppointmentCollectionResponse(writer: SerializationWriter, bookingAppointmentCollectionResponse: BookingAppointmentCollectionResponse | undefined = {} as BookingAppointmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingAppointmentCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingAppointment>("value", bookingAppointmentCollectionResponse.value, serializeBookingAppointment);
}

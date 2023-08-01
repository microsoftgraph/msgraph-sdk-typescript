import type {BookingAppointment} from './bookingAppointment';
import type {BookingAppointmentCollectionResponse} from './bookingAppointmentCollectionResponse';
import {createBookingAppointmentFromDiscriminatorValue} from './createBookingAppointmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBookingAppointment} from './serializeBookingAppointment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingAppointmentCollectionResponse(bookingAppointmentCollectionResponse: BookingAppointmentCollectionResponse | undefined = {} as BookingAppointmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingAppointmentCollectionResponse),
        "value": n => { bookingAppointmentCollectionResponse.value = n.getCollectionOfObjectValues<BookingAppointment>(createBookingAppointmentFromDiscriminatorValue); },
    }
}

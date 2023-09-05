import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type BookingAppointment } from './bookingAppointment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface BookingAppointmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingAppointment[] | undefined;
}

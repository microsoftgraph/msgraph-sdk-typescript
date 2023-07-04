import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BookingAppointment} from './bookingAppointment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingAppointmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingAppointment[] | undefined;
}

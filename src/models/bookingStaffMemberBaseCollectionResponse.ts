import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingStaffMemberBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingStaffMemberBase[] | undefined;
}

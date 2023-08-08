import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {BookingStaffMemberBase} from './bookingStaffMemberBase';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingStaffMemberBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingStaffMemberBase[] | undefined;
}

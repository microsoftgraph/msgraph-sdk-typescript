import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {StaffAvailabilityItem} from '../../../../models/staffAvailabilityItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetStaffAvailabilityResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: StaffAvailabilityItem[] | undefined;
}

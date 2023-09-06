import { type BaseCollectionPaginationCountResponse } from '../../../../models/baseCollectionPaginationCountResponse';
import { type StaffAvailabilityItem } from '../../../../models/staffAvailabilityItem';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GetStaffAvailabilityResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: StaffAvailabilityItem[] | undefined;
}

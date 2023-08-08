import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceManagementPartner} from './deviceManagementPartner';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceManagementPartner[] | undefined;
}

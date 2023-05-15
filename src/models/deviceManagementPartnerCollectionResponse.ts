import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceManagementPartner} from './deviceManagementPartner';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DeviceManagementPartner[] | undefined;
}

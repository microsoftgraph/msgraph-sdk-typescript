import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceUserStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceComplianceUserStatus[] | undefined;
}

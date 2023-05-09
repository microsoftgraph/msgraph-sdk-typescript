import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DeviceComplianceDeviceStatus[] | undefined;
}

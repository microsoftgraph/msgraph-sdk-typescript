import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DeviceComplianceDeviceStatus } from './deviceComplianceDeviceStatus';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceComplianceDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceComplianceDeviceStatus[] | undefined;
}

import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DeviceConfigurationDeviceStatus } from './deviceConfigurationDeviceStatus';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceConfigurationDeviceStatus[] | undefined;
}

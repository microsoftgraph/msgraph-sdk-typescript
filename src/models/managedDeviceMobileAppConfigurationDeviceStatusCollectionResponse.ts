import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ManagedDeviceMobileAppConfigurationDeviceStatus } from './managedDeviceMobileAppConfigurationDeviceStatus';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined;
}

import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined;
}

import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ManagedDeviceMobileAppConfiguration } from './managedDeviceMobileAppConfiguration';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedDeviceMobileAppConfiguration[] | undefined;
}

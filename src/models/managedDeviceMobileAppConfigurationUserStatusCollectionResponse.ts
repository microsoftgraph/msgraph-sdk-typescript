import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ManagedDeviceMobileAppConfigurationUserStatus} from './managedDeviceMobileAppConfigurationUserStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedDeviceMobileAppConfigurationUserStatus[] | undefined;
}

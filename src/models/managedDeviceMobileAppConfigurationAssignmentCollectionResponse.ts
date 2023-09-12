import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ManagedDeviceMobileAppConfigurationAssignment } from './managedDeviceMobileAppConfigurationAssignment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedDeviceMobileAppConfigurationAssignment[] | undefined;
}

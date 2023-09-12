import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DeviceAndAppManagementRoleAssignment } from './deviceAndAppManagementRoleAssignment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementRoleAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceAndAppManagementRoleAssignment[] | undefined;
}

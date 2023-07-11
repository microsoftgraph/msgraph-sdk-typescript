import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementRoleAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceAndAppManagementRoleAssignment[] | undefined;
}

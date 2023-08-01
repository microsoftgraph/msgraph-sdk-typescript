import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosLobAppProvisioningConfigurationAssignment extends Entity, Parsable {
    /**
     * The target group assignment defined by the admin.
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

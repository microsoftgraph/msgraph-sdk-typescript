import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppPolicyAssignment extends Entity, Parsable {
    /**
     * Identifier for deployment to a group or app
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';

export interface TargetedManagedAppPolicyAssignment extends Entity{
    /** Identifier for deployment to a group or app */
    target?:DeviceAndAppManagementAssignmentTarget | undefined;
}

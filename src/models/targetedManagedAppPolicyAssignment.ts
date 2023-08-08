import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppPolicyAssignment extends Entity, Parsable {
    /**
     * Identifier for deployment to a group or app
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

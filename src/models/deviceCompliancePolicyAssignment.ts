import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';

export interface DeviceCompliancePolicyAssignment extends Entity{
    /** Target for the compliance policy assignment. */
    target?:DeviceAndAppManagementAssignmentTarget | undefined;
}

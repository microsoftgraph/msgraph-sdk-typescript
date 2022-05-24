import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';

export interface EnrollmentConfigurationAssignment extends Entity{
    /** Represents an assignment to managed devices in the tenant */
    target?:DeviceAndAppManagementAssignmentTarget | undefined;
}

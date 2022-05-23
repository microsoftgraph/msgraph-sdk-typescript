import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';

export interface DeviceConfigurationAssignment extends Entity{
    /** The assignment target for the device configuration. */
    target?:DeviceAndAppManagementAssignmentTarget | undefined;
}

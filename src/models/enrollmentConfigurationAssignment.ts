import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EnrollmentConfigurationAssignment extends Entity, Parsable {
    /**
     * Represents an assignment to managed devices in the tenant
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

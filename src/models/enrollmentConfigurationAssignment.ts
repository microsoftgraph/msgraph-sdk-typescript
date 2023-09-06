import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EnrollmentConfigurationAssignment extends Entity, Parsable {
    /**
     * Represents an assignment to managed devices in the tenant
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

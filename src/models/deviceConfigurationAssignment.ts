import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationAssignment extends Entity, Parsable {
    /**
     * The assignment target for the device configuration.
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

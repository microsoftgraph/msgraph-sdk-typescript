import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationAssignment extends Entity, Parsable {
    /**
     * The assignment target for the device configuration.
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyAssignment extends Entity, Partial<Parsable> {
    /** Target for the compliance policy assignment. */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

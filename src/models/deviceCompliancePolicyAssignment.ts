import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyAssignment extends Entity, Parsable {
    /**
     * Target for the compliance policy assignment.
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

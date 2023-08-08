import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAssignment extends Entity, Parsable {
    /**
     * Assignment target that the T&C policy is assigned to.
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

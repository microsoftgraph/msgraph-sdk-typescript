import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAssignment extends Entity, Parsable {
    /**
     * Assignment target that the T&C policy is assigned to.
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}

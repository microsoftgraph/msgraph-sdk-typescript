import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Entity} from './entity';

export interface TermsAndConditionsAssignment extends Entity{
    /** Assignment target that the T&C policy is assigned to. */
    target?:DeviceAndAppManagementAssignmentTarget | undefined;
}

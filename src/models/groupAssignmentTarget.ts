import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupAssignmentTarget extends DeviceAndAppManagementAssignmentTarget, Parsable {
    /**
     * The group Id that is the target of the assignment.
     */
    groupId?: string | undefined;
}

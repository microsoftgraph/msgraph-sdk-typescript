import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupAssignmentTarget extends DeviceAndAppManagementAssignmentTarget, Parsable {
    /**
     * The group Id that is the target of the assignment.
     */
    groupId?: string | undefined;
}

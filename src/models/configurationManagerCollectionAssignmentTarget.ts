import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ConfigurationManagerCollectionAssignmentTarget extends DeviceAndAppManagementAssignmentTarget, Parsable {
    /**
     * The collection Id that is the target of the assignment.
     */
    collectionId?: string | undefined;
}

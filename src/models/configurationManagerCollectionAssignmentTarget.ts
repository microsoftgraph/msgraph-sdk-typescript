import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConfigurationManagerCollectionAssignmentTarget extends DeviceAndAppManagementAssignmentTarget, Parsable {
    /**
     * The collection Id that is the target of the assignment.
     */
    collectionId?: string | undefined;
}

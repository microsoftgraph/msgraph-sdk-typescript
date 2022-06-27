import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConfigurationManagerCollectionAssignmentTarget extends Partial<AdditionalDataHolder>, DeviceAndAppManagementAssignmentTarget, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The collection Id that is the target of the assignment. */
    collectionId?: string | undefined;
}

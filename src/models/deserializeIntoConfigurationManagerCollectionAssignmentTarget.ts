import {ConfigurationManagerCollectionAssignmentTarget} from './configurationManagerCollectionAssignmentTarget';
import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfigurationManagerCollectionAssignmentTarget(configurationManagerCollectionAssignmentTarget: ConfigurationManagerCollectionAssignmentTarget | undefined = {} as ConfigurationManagerCollectionAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(configurationManagerCollectionAssignmentTarget),
        "collectionId": n => { configurationManagerCollectionAssignmentTarget.collectionId = n.getStringValue(); },
    }
}

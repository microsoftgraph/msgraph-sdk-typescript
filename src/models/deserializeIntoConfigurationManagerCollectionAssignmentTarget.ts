import { type ConfigurationManagerCollectionAssignmentTarget } from './configurationManagerCollectionAssignmentTarget';
import { deserializeIntoDeviceAndAppManagementAssignmentTarget } from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConfigurationManagerCollectionAssignmentTarget(configurationManagerCollectionAssignmentTarget: ConfigurationManagerCollectionAssignmentTarget | undefined = {} as ConfigurationManagerCollectionAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(configurationManagerCollectionAssignmentTarget),
        "collectionId": n => { configurationManagerCollectionAssignmentTarget.collectionId = n.getStringValue(); },
    }
}

import { type ConfigurationManagerCollectionAssignmentTarget } from './configurationManagerCollectionAssignmentTarget';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConfigurationManagerCollectionAssignmentTarget(writer: SerializationWriter, configurationManagerCollectionAssignmentTarget: ConfigurationManagerCollectionAssignmentTarget | undefined = {} as ConfigurationManagerCollectionAssignmentTarget) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, configurationManagerCollectionAssignmentTarget)
        writer.writeStringValue("collectionId", configurationManagerCollectionAssignmentTarget.collectionId);
}

import {ConfigurationManagerCollectionAssignmentTarget} from './configurationManagerCollectionAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfigurationManagerCollectionAssignmentTarget(writer: SerializationWriter, configurationManagerCollectionAssignmentTarget: ConfigurationManagerCollectionAssignmentTarget | undefined = {} as ConfigurationManagerCollectionAssignmentTarget) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, configurationManagerCollectionAssignmentTarget)
        writer.writeStringValue("collectionId", configurationManagerCollectionAssignmentTarget.collectionId);
}

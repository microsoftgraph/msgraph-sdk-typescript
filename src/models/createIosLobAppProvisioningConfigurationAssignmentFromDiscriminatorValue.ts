import { deserializeIntoIosLobAppProvisioningConfigurationAssignment } from './deserializeIntoIosLobAppProvisioningConfigurationAssignment';
import { type IosLobAppProvisioningConfigurationAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosLobAppProvisioningConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosLobAppProvisioningConfigurationAssignment;
}

import {deserializeIntoIosLobAppProvisioningConfigurationAssignment} from './deserializeIntoIosLobAppProvisioningConfigurationAssignment';
import {IosLobAppProvisioningConfigurationAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosLobAppProvisioningConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosLobAppProvisioningConfigurationAssignment;
}

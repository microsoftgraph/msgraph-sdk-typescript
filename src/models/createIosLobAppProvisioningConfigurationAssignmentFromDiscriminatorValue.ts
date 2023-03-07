import {IosLobAppProvisioningConfigurationAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosLobAppProvisioningConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosLobAppProvisioningConfigurationAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosLobAppProvisioningConfigurationAssignment();
}

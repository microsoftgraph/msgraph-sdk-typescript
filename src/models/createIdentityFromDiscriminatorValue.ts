import {EmailIdentity, Identity, Initiator, ProvisionedIdentity, ProvisioningServicePrincipal, ProvisioningSystem, ServicePrincipalIdentity, SharePointIdentity, TeamworkApplicationIdentity, TeamworkConversationIdentity, TeamworkTagIdentity, TeamworkUserIdentity, UserIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Identity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailIdentity":
                    return new EmailIdentity();
                case "#microsoft.graph.initiator":
                    return new Initiator();
                case "#microsoft.graph.provisionedIdentity":
                    return new ProvisionedIdentity();
                case "#microsoft.graph.provisioningServicePrincipal":
                    return new ProvisioningServicePrincipal();
                case "#microsoft.graph.provisioningSystem":
                    return new ProvisioningSystem();
                case "#microsoft.graph.servicePrincipalIdentity":
                    return new ServicePrincipalIdentity();
                case "#microsoft.graph.sharePointIdentity":
                    return new SharePointIdentity();
                case "#microsoft.graph.teamworkApplicationIdentity":
                    return new TeamworkApplicationIdentity();
                case "#microsoft.graph.teamworkConversationIdentity":
                    return new TeamworkConversationIdentity();
                case "#microsoft.graph.teamworkTagIdentity":
                    return new TeamworkTagIdentity();
                case "#microsoft.graph.teamworkUserIdentity":
                    return new TeamworkUserIdentity();
                case "#microsoft.graph.userIdentity":
                    return new UserIdentity();
            }
        }
    }
    return new Identity();
}

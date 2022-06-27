import {IdentityImpl, InitiatorImpl, ProvisionedIdentityImpl, ProvisioningServicePrincipalImpl, ProvisioningSystemImpl, ServicePrincipalIdentityImpl, SharePointIdentityImpl, TeamworkApplicationIdentityImpl, TeamworkConversationIdentityImpl, TeamworkTagIdentityImpl, TeamworkUserIdentityImpl, UserIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.initiator":
                    return new InitiatorImpl();
                case "#microsoft.graph.provisionedIdentity":
                    return new ProvisionedIdentityImpl();
                case "#microsoft.graph.provisioningServicePrincipal":
                    return new ProvisioningServicePrincipalImpl();
                case "#microsoft.graph.provisioningSystem":
                    return new ProvisioningSystemImpl();
                case "#microsoft.graph.servicePrincipalIdentity":
                    return new ServicePrincipalIdentityImpl();
                case "#microsoft.graph.sharePointIdentity":
                    return new SharePointIdentityImpl();
                case "#microsoft.graph.teamworkApplicationIdentity":
                    return new TeamworkApplicationIdentityImpl();
                case "#microsoft.graph.teamworkConversationIdentity":
                    return new TeamworkConversationIdentityImpl();
                case "#microsoft.graph.teamworkTagIdentity":
                    return new TeamworkTagIdentityImpl();
                case "#microsoft.graph.teamworkUserIdentity":
                    return new TeamworkUserIdentityImpl();
                case "#microsoft.graph.userIdentity":
                    return new UserIdentityImpl();
            }
        }
    }
    return new IdentityImpl();
}

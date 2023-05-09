import {deserializeIntoEmailIdentity} from './deserializeIntoEmailIdentity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {deserializeIntoInitiator} from './deserializeIntoInitiator';
import {deserializeIntoProvisionedIdentity} from './deserializeIntoProvisionedIdentity';
import {deserializeIntoProvisioningServicePrincipal} from './deserializeIntoProvisioningServicePrincipal';
import {deserializeIntoProvisioningSystem} from './deserializeIntoProvisioningSystem';
import {deserializeIntoServicePrincipalIdentity} from './deserializeIntoServicePrincipalIdentity';
import {deserializeIntoSharePointIdentity} from './deserializeIntoSharePointIdentity';
import {deserializeIntoTeamworkApplicationIdentity} from './deserializeIntoTeamworkApplicationIdentity';
import {deserializeIntoTeamworkConversationIdentity} from './deserializeIntoTeamworkConversationIdentity';
import {deserializeIntoTeamworkTagIdentity} from './deserializeIntoTeamworkTagIdentity';
import {deserializeIntoTeamworkUserIdentity} from './deserializeIntoTeamworkUserIdentity';
import {deserializeIntoUserIdentity} from './deserializeIntoUserIdentity';
import {EmailIdentity, Identity, Initiator, ProvisionedIdentity, ProvisioningServicePrincipal, ProvisioningSystem, ServicePrincipalIdentity, SharePointIdentity, TeamworkApplicationIdentity, TeamworkConversationIdentity, TeamworkTagIdentity, TeamworkUserIdentity, UserIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailIdentity":
                    return deserializeIntoEmailIdentity;
                case "#microsoft.graph.initiator":
                    return deserializeIntoInitiator;
                case "#microsoft.graph.provisionedIdentity":
                    return deserializeIntoProvisionedIdentity;
                case "#microsoft.graph.provisioningServicePrincipal":
                    return deserializeIntoProvisioningServicePrincipal;
                case "#microsoft.graph.provisioningSystem":
                    return deserializeIntoProvisioningSystem;
                case "#microsoft.graph.servicePrincipalIdentity":
                    return deserializeIntoServicePrincipalIdentity;
                case "#microsoft.graph.sharePointIdentity":
                    return deserializeIntoSharePointIdentity;
                case "#microsoft.graph.teamworkApplicationIdentity":
                    return deserializeIntoTeamworkApplicationIdentity;
                case "#microsoft.graph.teamworkConversationIdentity":
                    return deserializeIntoTeamworkConversationIdentity;
                case "#microsoft.graph.teamworkTagIdentity":
                    return deserializeIntoTeamworkTagIdentity;
                case "#microsoft.graph.teamworkUserIdentity":
                    return deserializeIntoTeamworkUserIdentity;
                case "#microsoft.graph.userIdentity":
                    return deserializeIntoUserIdentity;
            }
        }
    }
    return deserializeIntoIdentity;
}

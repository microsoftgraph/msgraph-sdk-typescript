import {AuthorizationPolicyImpl, IdentitySecurityDefaultsEnforcementPolicyImpl, PermissionGrantPolicyImpl, PolicyBaseImpl, StsPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PolicyBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.authorizationPolicy":
                    return new AuthorizationPolicyImpl();
                case "#microsoft.graph.identitySecurityDefaultsEnforcementPolicy":
                    return new IdentitySecurityDefaultsEnforcementPolicyImpl();
                case "#microsoft.graph.permissionGrantPolicy":
                    return new PermissionGrantPolicyImpl();
                case "#microsoft.graph.stsPolicy":
                    return new StsPolicyImpl();
            }
        }
    }
    return new PolicyBaseImpl();
}

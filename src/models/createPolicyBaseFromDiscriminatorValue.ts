import {AuthorizationPolicy, IdentitySecurityDefaultsEnforcementPolicy, PermissionGrantPolicy, PolicyBase, StsPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PolicyBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.authorizationPolicy":
                    return new AuthorizationPolicy();
                case "#microsoft.graph.identitySecurityDefaultsEnforcementPolicy":
                    return new IdentitySecurityDefaultsEnforcementPolicy();
                case "#microsoft.graph.permissionGrantPolicy":
                    return new PermissionGrantPolicy();
                case "#microsoft.graph.stsPolicy":
                    return new StsPolicy();
            }
        }
    }
    return new PolicyBase();
}

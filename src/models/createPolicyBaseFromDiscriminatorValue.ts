import {ActivityBasedTimeoutPolicy, AuthorizationPolicy, ClaimsMappingPolicy, CrossTenantAccessPolicy, HomeRealmDiscoveryPolicy, IdentitySecurityDefaultsEnforcementPolicy, PermissionGrantPolicy, PolicyBase, StsPolicy, TokenIssuancePolicy, TokenLifetimePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PolicyBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.activityBasedTimeoutPolicy":
                    return new ActivityBasedTimeoutPolicy();
                case "#microsoft.graph.authorizationPolicy":
                    return new AuthorizationPolicy();
                case "#microsoft.graph.claimsMappingPolicy":
                    return new ClaimsMappingPolicy();
                case "#microsoft.graph.crossTenantAccessPolicy":
                    return new CrossTenantAccessPolicy();
                case "#microsoft.graph.homeRealmDiscoveryPolicy":
                    return new HomeRealmDiscoveryPolicy();
                case "#microsoft.graph.identitySecurityDefaultsEnforcementPolicy":
                    return new IdentitySecurityDefaultsEnforcementPolicy();
                case "#microsoft.graph.permissionGrantPolicy":
                    return new PermissionGrantPolicy();
                case "#microsoft.graph.stsPolicy":
                    return new StsPolicy();
                case "#microsoft.graph.tokenIssuancePolicy":
                    return new TokenIssuancePolicy();
                case "#microsoft.graph.tokenLifetimePolicy":
                    return new TokenLifetimePolicy();
            }
        }
    }
    return new PolicyBase();
}

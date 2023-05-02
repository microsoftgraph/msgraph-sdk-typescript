import {deserializeIntoActivityBasedTimeoutPolicy} from './deserializeIntoActivityBasedTimeoutPolicy';
import {deserializeIntoAppManagementPolicy} from './deserializeIntoAppManagementPolicy';
import {deserializeIntoAuthorizationPolicy} from './deserializeIntoAuthorizationPolicy';
import {deserializeIntoClaimsMappingPolicy} from './deserializeIntoClaimsMappingPolicy';
import {deserializeIntoCrossTenantAccessPolicy} from './deserializeIntoCrossTenantAccessPolicy';
import {deserializeIntoHomeRealmDiscoveryPolicy} from './deserializeIntoHomeRealmDiscoveryPolicy';
import {deserializeIntoIdentitySecurityDefaultsEnforcementPolicy} from './deserializeIntoIdentitySecurityDefaultsEnforcementPolicy';
import {deserializeIntoPermissionGrantPolicy} from './deserializeIntoPermissionGrantPolicy';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {deserializeIntoTenantAppManagementPolicy} from './deserializeIntoTenantAppManagementPolicy';
import {deserializeIntoTokenIssuancePolicy} from './deserializeIntoTokenIssuancePolicy';
import {deserializeIntoTokenLifetimePolicy} from './deserializeIntoTokenLifetimePolicy';
import {ActivityBasedTimeoutPolicy, AppManagementPolicy, AuthorizationPolicy, ClaimsMappingPolicy, CrossTenantAccessPolicy, HomeRealmDiscoveryPolicy, IdentitySecurityDefaultsEnforcementPolicy, PermissionGrantPolicy, PolicyBase, StsPolicy, TenantAppManagementPolicy, TokenIssuancePolicy, TokenLifetimePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.activityBasedTimeoutPolicy":
                    return deserializeIntoActivityBasedTimeoutPolicy;
                case "#microsoft.graph.appManagementPolicy":
                    return deserializeIntoAppManagementPolicy;
                case "#microsoft.graph.authorizationPolicy":
                    return deserializeIntoAuthorizationPolicy;
                case "#microsoft.graph.claimsMappingPolicy":
                    return deserializeIntoClaimsMappingPolicy;
                case "#microsoft.graph.crossTenantAccessPolicy":
                    return deserializeIntoCrossTenantAccessPolicy;
                case "#microsoft.graph.homeRealmDiscoveryPolicy":
                    return deserializeIntoHomeRealmDiscoveryPolicy;
                case "#microsoft.graph.identitySecurityDefaultsEnforcementPolicy":
                    return deserializeIntoIdentitySecurityDefaultsEnforcementPolicy;
                case "#microsoft.graph.permissionGrantPolicy":
                    return deserializeIntoPermissionGrantPolicy;
                case "#microsoft.graph.stsPolicy":
                    return deserializeIntoStsPolicy;
                case "#microsoft.graph.tenantAppManagementPolicy":
                    return deserializeIntoTenantAppManagementPolicy;
                case "#microsoft.graph.tokenIssuancePolicy":
                    return deserializeIntoTokenIssuancePolicy;
                case "#microsoft.graph.tokenLifetimePolicy":
                    return deserializeIntoTokenLifetimePolicy;
            }
        }
    }
    return deserializeIntoPolicyBase;
}

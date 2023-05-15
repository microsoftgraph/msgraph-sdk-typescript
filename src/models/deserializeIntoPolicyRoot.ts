import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {AdminConsentRequestPolicy} from './adminConsentRequestPolicy';
import {AppManagementPolicy} from './appManagementPolicy';
import {AuthenticationFlowsPolicy} from './authenticationFlowsPolicy';
import {AuthenticationMethodsPolicy} from './authenticationMethodsPolicy';
import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {AuthorizationPolicy} from './authorizationPolicy';
import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {createActivityBasedTimeoutPolicyFromDiscriminatorValue} from './createActivityBasedTimeoutPolicyFromDiscriminatorValue';
import {createAdminConsentRequestPolicyFromDiscriminatorValue} from './createAdminConsentRequestPolicyFromDiscriminatorValue';
import {createAppManagementPolicyFromDiscriminatorValue} from './createAppManagementPolicyFromDiscriminatorValue';
import {createAuthenticationFlowsPolicyFromDiscriminatorValue} from './createAuthenticationFlowsPolicyFromDiscriminatorValue';
import {createAuthenticationMethodsPolicyFromDiscriminatorValue} from './createAuthenticationMethodsPolicyFromDiscriminatorValue';
import {createAuthenticationStrengthPolicyFromDiscriminatorValue} from './createAuthenticationStrengthPolicyFromDiscriminatorValue';
import {createAuthorizationPolicyFromDiscriminatorValue} from './createAuthorizationPolicyFromDiscriminatorValue';
import {createClaimsMappingPolicyFromDiscriminatorValue} from './createClaimsMappingPolicyFromDiscriminatorValue';
import {createConditionalAccessPolicyFromDiscriminatorValue} from './createConditionalAccessPolicyFromDiscriminatorValue';
import {createCrossTenantAccessPolicyFromDiscriminatorValue} from './createCrossTenantAccessPolicyFromDiscriminatorValue';
import {createFeatureRolloutPolicyFromDiscriminatorValue} from './createFeatureRolloutPolicyFromDiscriminatorValue';
import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from './createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue} from './createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue';
import {createPermissionGrantPolicyFromDiscriminatorValue} from './createPermissionGrantPolicyFromDiscriminatorValue';
import {createTenantAppManagementPolicyFromDiscriminatorValue} from './createTenantAppManagementPolicyFromDiscriminatorValue';
import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {CrossTenantAccessPolicy} from './crossTenantAccessPolicy';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {IdentitySecurityDefaultsEnforcementPolicy} from './identitySecurityDefaultsEnforcementPolicy';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {PolicyRoot} from './policyRoot';
import {serializeActivityBasedTimeoutPolicy} from './serializeActivityBasedTimeoutPolicy';
import {serializeAdminConsentRequestPolicy} from './serializeAdminConsentRequestPolicy';
import {serializeAppManagementPolicy} from './serializeAppManagementPolicy';
import {serializeAuthenticationFlowsPolicy} from './serializeAuthenticationFlowsPolicy';
import {serializeAuthenticationMethodsPolicy} from './serializeAuthenticationMethodsPolicy';
import {serializeAuthenticationStrengthPolicy} from './serializeAuthenticationStrengthPolicy';
import {serializeAuthorizationPolicy} from './serializeAuthorizationPolicy';
import {serializeClaimsMappingPolicy} from './serializeClaimsMappingPolicy';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import {serializeCrossTenantAccessPolicy} from './serializeCrossTenantAccessPolicy';
import {serializeFeatureRolloutPolicy} from './serializeFeatureRolloutPolicy';
import {serializeHomeRealmDiscoveryPolicy} from './serializeHomeRealmDiscoveryPolicy';
import {serializeIdentitySecurityDefaultsEnforcementPolicy} from './serializeIdentitySecurityDefaultsEnforcementPolicy';
import {serializePermissionGrantPolicy} from './serializePermissionGrantPolicy';
import {serializeTenantAppManagementPolicy} from './serializeTenantAppManagementPolicy';
import {serializeTokenIssuancePolicy} from './serializeTokenIssuancePolicy';
import {serializeTokenLifetimePolicy} from './serializeTokenLifetimePolicy';
import {serializeUnifiedRoleManagementPolicy} from './serializeUnifiedRoleManagementPolicy';
import {serializeUnifiedRoleManagementPolicyAssignment} from './serializeUnifiedRoleManagementPolicyAssignment';
import {TenantAppManagementPolicy} from './tenantAppManagementPolicy';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyAssignment} from './unifiedRoleManagementPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPolicyRoot(policyRoot: PolicyRoot | undefined = {} as PolicyRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(policyRoot),
        "activityBasedTimeoutPolicies": n => { policyRoot.activityBasedTimeoutPolicies = n.getCollectionOfObjectValues<ActivityBasedTimeoutPolicy>(createActivityBasedTimeoutPolicyFromDiscriminatorValue); },
        "adminConsentRequestPolicy": n => { policyRoot.adminConsentRequestPolicy = n.getObjectValue<AdminConsentRequestPolicy>(createAdminConsentRequestPolicyFromDiscriminatorValue); },
        "appManagementPolicies": n => { policyRoot.appManagementPolicies = n.getCollectionOfObjectValues<AppManagementPolicy>(createAppManagementPolicyFromDiscriminatorValue); },
        "authenticationFlowsPolicy": n => { policyRoot.authenticationFlowsPolicy = n.getObjectValue<AuthenticationFlowsPolicy>(createAuthenticationFlowsPolicyFromDiscriminatorValue); },
        "authenticationMethodsPolicy": n => { policyRoot.authenticationMethodsPolicy = n.getObjectValue<AuthenticationMethodsPolicy>(createAuthenticationMethodsPolicyFromDiscriminatorValue); },
        "authenticationStrengthPolicies": n => { policyRoot.authenticationStrengthPolicies = n.getCollectionOfObjectValues<AuthenticationStrengthPolicy>(createAuthenticationStrengthPolicyFromDiscriminatorValue); },
        "authorizationPolicy": n => { policyRoot.authorizationPolicy = n.getObjectValue<AuthorizationPolicy>(createAuthorizationPolicyFromDiscriminatorValue); },
        "claimsMappingPolicies": n => { policyRoot.claimsMappingPolicies = n.getCollectionOfObjectValues<ClaimsMappingPolicy>(createClaimsMappingPolicyFromDiscriminatorValue); },
        "conditionalAccessPolicies": n => { policyRoot.conditionalAccessPolicies = n.getCollectionOfObjectValues<ConditionalAccessPolicy>(createConditionalAccessPolicyFromDiscriminatorValue); },
        "crossTenantAccessPolicy": n => { policyRoot.crossTenantAccessPolicy = n.getObjectValue<CrossTenantAccessPolicy>(createCrossTenantAccessPolicyFromDiscriminatorValue); },
        "defaultAppManagementPolicy": n => { policyRoot.defaultAppManagementPolicy = n.getObjectValue<TenantAppManagementPolicy>(createTenantAppManagementPolicyFromDiscriminatorValue); },
        "featureRolloutPolicies": n => { policyRoot.featureRolloutPolicies = n.getCollectionOfObjectValues<FeatureRolloutPolicy>(createFeatureRolloutPolicyFromDiscriminatorValue); },
        "homeRealmDiscoveryPolicies": n => { policyRoot.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicy>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
        "identitySecurityDefaultsEnforcementPolicy": n => { policyRoot.identitySecurityDefaultsEnforcementPolicy = n.getObjectValue<IdentitySecurityDefaultsEnforcementPolicy>(createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue); },
        "permissionGrantPolicies": n => { policyRoot.permissionGrantPolicies = n.getCollectionOfObjectValues<PermissionGrantPolicy>(createPermissionGrantPolicyFromDiscriminatorValue); },
        "roleManagementPolicies": n => { policyRoot.roleManagementPolicies = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicy>(createUnifiedRoleManagementPolicyFromDiscriminatorValue); },
        "roleManagementPolicyAssignments": n => { policyRoot.roleManagementPolicyAssignments = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyAssignment>(createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue); },
        "tokenIssuancePolicies": n => { policyRoot.tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicy>(createTokenIssuancePolicyFromDiscriminatorValue); },
        "tokenLifetimePolicies": n => { policyRoot.tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicy>(createTokenLifetimePolicyFromDiscriminatorValue); },
    }
}

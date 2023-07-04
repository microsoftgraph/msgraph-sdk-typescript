import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {AdminConsentRequestPolicy} from './adminConsentRequestPolicy';
import {AppManagementPolicy} from './appManagementPolicy';
import {AuthenticationFlowsPolicy} from './authenticationFlowsPolicy';
import {AuthenticationMethodsPolicy} from './authenticationMethodsPolicy';
import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {AuthorizationPolicy} from './authorizationPolicy';
import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {CrossTenantAccessPolicy} from './crossTenantAccessPolicy';
import {Entity} from './entity';
import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {IdentitySecurityDefaultsEnforcementPolicy} from './identitySecurityDefaultsEnforcementPolicy';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {TenantAppManagementPolicy} from './tenantAppManagementPolicy';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyAssignment} from './unifiedRoleManagementPolicyAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PolicyRoot extends Entity, Parsable {
    /**
     * The policy that controls the idle time out for web sessions for applications.
     */
    activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicy[] | undefined;
    /**
     * The policy by which consent requests are created and managed for the entire tenant.
     */
    adminConsentRequestPolicy?: AdminConsentRequestPolicy | undefined;
    /**
     * The policies that enforce app management restrictions for specific applications and service principals, overriding the defaultAppManagementPolicy.
     */
    appManagementPolicies?: AppManagementPolicy[] | undefined;
    /**
     * The policy configuration of the self-service sign-up experience of external users.
     */
    authenticationFlowsPolicy?: AuthenticationFlowsPolicy | undefined;
    /**
     * The authentication methods and the users that are allowed to use them to sign in and perform multifactor authentication (MFA) in Azure Active Directory (Azure AD).
     */
    authenticationMethodsPolicy?: AuthenticationMethodsPolicy | undefined;
    /**
     * The authentication method combinations that are to be used in scenarios defined by Azure AD Conditional Access.
     */
    authenticationStrengthPolicies?: AuthenticationStrengthPolicy[] | undefined;
    /**
     * The policy that controls Azure AD authorization settings.
     */
    authorizationPolicy?: AuthorizationPolicy | undefined;
    /**
     * The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application.
     */
    claimsMappingPolicies?: ClaimsMappingPolicy[] | undefined;
    /**
     * The custom rules that define an access scenario.
     */
    conditionalAccessPolicies?: ConditionalAccessPolicy[] | undefined;
    /**
     * The custom rules that define an access scenario when interacting with external Azure AD tenants.
     */
    crossTenantAccessPolicy?: CrossTenantAccessPolicy | undefined;
    /**
     * The tenant-wide policy that enforces app management restrictions for all applications and service principals.
     */
    defaultAppManagementPolicy?: TenantAppManagementPolicy | undefined;
    /**
     * The feature rollout policy associated with a directory object.
     */
    featureRolloutPolicies?: FeatureRolloutPolicy[] | undefined;
    /**
     * The policy to control Azure AD authentication behavior for federated users.
     */
    homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /**
     * The policy that represents the security defaults that protect against common attacks.
     */
    identitySecurityDefaultsEnforcementPolicy?: IdentitySecurityDefaultsEnforcementPolicy | undefined;
    /**
     * The policy that specifies the conditions under which consent can be granted.
     */
    permissionGrantPolicies?: PermissionGrantPolicy[] | undefined;
    /**
     * Specifies the various policies associated with scopes and roles.
     */
    roleManagementPolicies?: UnifiedRoleManagementPolicy[] | undefined;
    /**
     * The assignment of a role management policy to a role definition object.
     */
    roleManagementPolicyAssignments?: UnifiedRoleManagementPolicyAssignment[] | undefined;
    /**
     * The policy that specifies the characteristics of SAML tokens issued by Azure AD.
     */
    tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /**
     * The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD.
     */
    tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
}

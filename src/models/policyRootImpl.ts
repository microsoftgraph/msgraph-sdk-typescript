import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {AdminConsentRequestPolicy} from './adminConsentRequestPolicy';
import {AuthenticationFlowsPolicy} from './authenticationFlowsPolicy';
import {AuthenticationMethodsPolicy} from './authenticationMethodsPolicy';
import {AuthorizationPolicy} from './authorizationPolicy';
import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {createActivityBasedTimeoutPolicyFromDiscriminatorValue} from './createActivityBasedTimeoutPolicyFromDiscriminatorValue';
import {createAdminConsentRequestPolicyFromDiscriminatorValue} from './createAdminConsentRequestPolicyFromDiscriminatorValue';
import {createAuthenticationFlowsPolicyFromDiscriminatorValue} from './createAuthenticationFlowsPolicyFromDiscriminatorValue';
import {createAuthenticationMethodsPolicyFromDiscriminatorValue} from './createAuthenticationMethodsPolicyFromDiscriminatorValue';
import {createAuthorizationPolicyFromDiscriminatorValue} from './createAuthorizationPolicyFromDiscriminatorValue';
import {createClaimsMappingPolicyFromDiscriminatorValue} from './createClaimsMappingPolicyFromDiscriminatorValue';
import {createConditionalAccessPolicyFromDiscriminatorValue} from './createConditionalAccessPolicyFromDiscriminatorValue';
import {createFeatureRolloutPolicyFromDiscriminatorValue} from './createFeatureRolloutPolicyFromDiscriminatorValue';
import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from './createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue} from './createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue';
import {createPermissionGrantPolicyFromDiscriminatorValue} from './createPermissionGrantPolicyFromDiscriminatorValue';
import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {IdentitySecurityDefaultsEnforcementPolicy} from './identitySecurityDefaultsEnforcementPolicy';
import {ActivityBasedTimeoutPolicyImpl, AdminConsentRequestPolicyImpl, AuthenticationFlowsPolicyImpl, AuthenticationMethodsPolicyImpl, AuthorizationPolicyImpl, ClaimsMappingPolicyImpl, ConditionalAccessPolicyImpl, EntityImpl, FeatureRolloutPolicyImpl, HomeRealmDiscoveryPolicyImpl, IdentitySecurityDefaultsEnforcementPolicyImpl, PermissionGrantPolicyImpl, TokenIssuancePolicyImpl, TokenLifetimePolicyImpl, UnifiedRoleManagementPolicyAssignmentImpl, UnifiedRoleManagementPolicyImpl} from './index';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {PolicyRoot} from './policyRoot';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyAssignment} from './unifiedRoleManagementPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class PolicyRootImpl extends EntityImpl implements Parsable, PolicyRoot {
    /** The policy that controls the idle time out for web sessions for applications. */
    public activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicy[] | undefined;
    /** The policy by which consent requests are created and managed for the entire tenant. */
    public adminConsentRequestPolicy?: AdminConsentRequestPolicy | undefined;
    /** The policy configuration of the self-service sign-up experience of external users. */
    public authenticationFlowsPolicy?: AuthenticationFlowsPolicy | undefined;
    /** The authentication methods and the users that are allowed to use them to sign in and perform multi-factor authentication (MFA) in Azure Active Directory (Azure AD). */
    public authenticationMethodsPolicy?: AuthenticationMethodsPolicy | undefined;
    /** The policy that controls Azure AD authorization settings. */
    public authorizationPolicy?: AuthorizationPolicy | undefined;
    /** The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application. */
    public claimsMappingPolicies?: ClaimsMappingPolicy[] | undefined;
    /** The custom rules that define an access scenario. */
    public conditionalAccessPolicies?: ConditionalAccessPolicy[] | undefined;
    /** The feature rollout policy associated with a directory object. */
    public featureRolloutPolicies?: FeatureRolloutPolicy[] | undefined;
    /** The policy to control Azure AD authentication behavior for federated users. */
    public homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** The policy that represents the security defaults that protect against common attacks. */
    public identitySecurityDefaultsEnforcementPolicy?: IdentitySecurityDefaultsEnforcementPolicy | undefined;
    /** The policy that specifies the conditions under which consent can be granted. */
    public permissionGrantPolicies?: PermissionGrantPolicy[] | undefined;
    /** Represents the role management policies. */
    public roleManagementPolicies?: UnifiedRoleManagementPolicy[] | undefined;
    /** Represents the role management policy assignments. */
    public roleManagementPolicyAssignments?: UnifiedRoleManagementPolicyAssignment[] | undefined;
    /** The policy that specifies the characteristics of SAML tokens issued by Azure AD. */
    public tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD. */
    public tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /**
     * Instantiates a new policyRoot and sets the default values.
     * @param policyRootParameterValue 
     */
    public constructor(policyRootParameterValue?: PolicyRoot | undefined) {
        super();
        this.activityBasedTimeoutPolicies = policyRootParameterValue?.activityBasedTimeoutPolicies ;
        this.adminConsentRequestPolicy = policyRootParameterValue?.adminConsentRequestPolicy ;
        this.authenticationFlowsPolicy = policyRootParameterValue?.authenticationFlowsPolicy ;
        this.authenticationMethodsPolicy = policyRootParameterValue?.authenticationMethodsPolicy ;
        this.authorizationPolicy = policyRootParameterValue?.authorizationPolicy ;
        this.claimsMappingPolicies = policyRootParameterValue?.claimsMappingPolicies ;
        this.conditionalAccessPolicies = policyRootParameterValue?.conditionalAccessPolicies ;
        this.featureRolloutPolicies = policyRootParameterValue?.featureRolloutPolicies ;
        this.homeRealmDiscoveryPolicies = policyRootParameterValue?.homeRealmDiscoveryPolicies ;
        this.identitySecurityDefaultsEnforcementPolicy = policyRootParameterValue?.identitySecurityDefaultsEnforcementPolicy ;
        this.permissionGrantPolicies = policyRootParameterValue?.permissionGrantPolicies ;
        this.roleManagementPolicies = policyRootParameterValue?.roleManagementPolicies ;
        this.roleManagementPolicyAssignments = policyRootParameterValue?.roleManagementPolicyAssignments ;
        this.tokenIssuancePolicies = policyRootParameterValue?.tokenIssuancePolicies ;
        this.tokenLifetimePolicies = policyRootParameterValue?.tokenLifetimePolicies ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activityBasedTimeoutPolicies": n => { this.activityBasedTimeoutPolicies = n.getCollectionOfObjectValues<ActivityBasedTimeoutPolicyImpl>(createActivityBasedTimeoutPolicyFromDiscriminatorValue); },
            "adminConsentRequestPolicy": n => { this.adminConsentRequestPolicy = n.getObjectValue<AdminConsentRequestPolicyImpl>(createAdminConsentRequestPolicyFromDiscriminatorValue); },
            "authenticationFlowsPolicy": n => { this.authenticationFlowsPolicy = n.getObjectValue<AuthenticationFlowsPolicyImpl>(createAuthenticationFlowsPolicyFromDiscriminatorValue); },
            "authenticationMethodsPolicy": n => { this.authenticationMethodsPolicy = n.getObjectValue<AuthenticationMethodsPolicyImpl>(createAuthenticationMethodsPolicyFromDiscriminatorValue); },
            "authorizationPolicy": n => { this.authorizationPolicy = n.getObjectValue<AuthorizationPolicyImpl>(createAuthorizationPolicyFromDiscriminatorValue); },
            "claimsMappingPolicies": n => { this.claimsMappingPolicies = n.getCollectionOfObjectValues<ClaimsMappingPolicyImpl>(createClaimsMappingPolicyFromDiscriminatorValue); },
            "conditionalAccessPolicies": n => { this.conditionalAccessPolicies = n.getCollectionOfObjectValues<ConditionalAccessPolicyImpl>(createConditionalAccessPolicyFromDiscriminatorValue); },
            "featureRolloutPolicies": n => { this.featureRolloutPolicies = n.getCollectionOfObjectValues<FeatureRolloutPolicyImpl>(createFeatureRolloutPolicyFromDiscriminatorValue); },
            "homeRealmDiscoveryPolicies": n => { this.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
            "identitySecurityDefaultsEnforcementPolicy": n => { this.identitySecurityDefaultsEnforcementPolicy = n.getObjectValue<IdentitySecurityDefaultsEnforcementPolicyImpl>(createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue); },
            "permissionGrantPolicies": n => { this.permissionGrantPolicies = n.getCollectionOfObjectValues<PermissionGrantPolicyImpl>(createPermissionGrantPolicyFromDiscriminatorValue); },
            "roleManagementPolicies": n => { this.roleManagementPolicies = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyImpl>(createUnifiedRoleManagementPolicyFromDiscriminatorValue); },
            "roleManagementPolicyAssignments": n => { this.roleManagementPolicyAssignments = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyAssignmentImpl>(createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue); },
            "tokenIssuancePolicies": n => { this.tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicyImpl>(createTokenIssuancePolicyFromDiscriminatorValue); },
            "tokenLifetimePolicies": n => { this.tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicyImpl>(createTokenLifetimePolicyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activityBasedTimeoutPolicies && this.activityBasedTimeoutPolicies.length != 0){        const activityBasedTimeoutPoliciesArrValue: ActivityBasedTimeoutPolicyImpl[] = []; this.activityBasedTimeoutPolicies?.forEach(element => {activityBasedTimeoutPoliciesArrValue.push(new ActivityBasedTimeoutPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ActivityBasedTimeoutPolicyImpl>("activityBasedTimeoutPolicies", activityBasedTimeoutPoliciesArrValue);
        }
        if(this.adminConsentRequestPolicy){
        writer.writeObjectValue<AdminConsentRequestPolicyImpl>("adminConsentRequestPolicy", new AdminConsentRequestPolicyImpl(this.adminConsentRequestPolicy));
        }
        if(this.authenticationFlowsPolicy){
        writer.writeObjectValue<AuthenticationFlowsPolicyImpl>("authenticationFlowsPolicy", new AuthenticationFlowsPolicyImpl(this.authenticationFlowsPolicy));
        }
        if(this.authenticationMethodsPolicy){
        writer.writeObjectValue<AuthenticationMethodsPolicyImpl>("authenticationMethodsPolicy", new AuthenticationMethodsPolicyImpl(this.authenticationMethodsPolicy));
        }
        if(this.authorizationPolicy){
        writer.writeObjectValue<AuthorizationPolicyImpl>("authorizationPolicy", new AuthorizationPolicyImpl(this.authorizationPolicy));
        }
        if(this.claimsMappingPolicies && this.claimsMappingPolicies.length != 0){        const claimsMappingPoliciesArrValue: ClaimsMappingPolicyImpl[] = []; this.claimsMappingPolicies?.forEach(element => {claimsMappingPoliciesArrValue.push(new ClaimsMappingPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ClaimsMappingPolicyImpl>("claimsMappingPolicies", claimsMappingPoliciesArrValue);
        }
        if(this.conditionalAccessPolicies && this.conditionalAccessPolicies.length != 0){        const conditionalAccessPoliciesArrValue: ConditionalAccessPolicyImpl[] = []; this.conditionalAccessPolicies?.forEach(element => {conditionalAccessPoliciesArrValue.push(new ConditionalAccessPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicyImpl>("conditionalAccessPolicies", conditionalAccessPoliciesArrValue);
        }
        if(this.featureRolloutPolicies && this.featureRolloutPolicies.length != 0){        const featureRolloutPoliciesArrValue: FeatureRolloutPolicyImpl[] = []; this.featureRolloutPolicies?.forEach(element => {featureRolloutPoliciesArrValue.push(new FeatureRolloutPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<FeatureRolloutPolicyImpl>("featureRolloutPolicies", featureRolloutPoliciesArrValue);
        }
        if(this.homeRealmDiscoveryPolicies && this.homeRealmDiscoveryPolicies.length != 0){        const homeRealmDiscoveryPoliciesArrValue: HomeRealmDiscoveryPolicyImpl[] = []; this.homeRealmDiscoveryPolicies?.forEach(element => {homeRealmDiscoveryPoliciesArrValue.push(new HomeRealmDiscoveryPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>("homeRealmDiscoveryPolicies", homeRealmDiscoveryPoliciesArrValue);
        }
        if(this.identitySecurityDefaultsEnforcementPolicy){
        writer.writeObjectValue<IdentitySecurityDefaultsEnforcementPolicyImpl>("identitySecurityDefaultsEnforcementPolicy", new IdentitySecurityDefaultsEnforcementPolicyImpl(this.identitySecurityDefaultsEnforcementPolicy));
        }
        if(this.permissionGrantPolicies && this.permissionGrantPolicies.length != 0){        const permissionGrantPoliciesArrValue: PermissionGrantPolicyImpl[] = []; this.permissionGrantPolicies?.forEach(element => {permissionGrantPoliciesArrValue.push(new PermissionGrantPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<PermissionGrantPolicyImpl>("permissionGrantPolicies", permissionGrantPoliciesArrValue);
        }
        if(this.roleManagementPolicies && this.roleManagementPolicies.length != 0){        const roleManagementPoliciesArrValue: UnifiedRoleManagementPolicyImpl[] = []; this.roleManagementPolicies?.forEach(element => {roleManagementPoliciesArrValue.push(new UnifiedRoleManagementPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyImpl>("roleManagementPolicies", roleManagementPoliciesArrValue);
        }
        if(this.roleManagementPolicyAssignments && this.roleManagementPolicyAssignments.length != 0){        const roleManagementPolicyAssignmentsArrValue: UnifiedRoleManagementPolicyAssignmentImpl[] = []; this.roleManagementPolicyAssignments?.forEach(element => {roleManagementPolicyAssignmentsArrValue.push(new UnifiedRoleManagementPolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyAssignmentImpl>("roleManagementPolicyAssignments", roleManagementPolicyAssignmentsArrValue);
        }
        if(this.tokenIssuancePolicies && this.tokenIssuancePolicies.length != 0){        const tokenIssuancePoliciesArrValue: TokenIssuancePolicyImpl[] = []; this.tokenIssuancePolicies?.forEach(element => {tokenIssuancePoliciesArrValue.push(new TokenIssuancePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<TokenIssuancePolicyImpl>("tokenIssuancePolicies", tokenIssuancePoliciesArrValue);
        }
        if(this.tokenLifetimePolicies && this.tokenLifetimePolicies.length != 0){        const tokenLifetimePoliciesArrValue: TokenLifetimePolicyImpl[] = []; this.tokenLifetimePolicies?.forEach(element => {tokenLifetimePoliciesArrValue.push(new TokenLifetimePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<TokenLifetimePolicyImpl>("tokenLifetimePolicies", tokenLifetimePoliciesArrValue);
        }
    };
}

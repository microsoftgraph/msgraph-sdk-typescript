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
export class PolicyRootImpl extends EntityImpl implements PolicyRoot {
    /** The policy that controls the idle time out for web sessions for applications. */
    private _activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicy[] | undefined;
    /** The policy by which consent requests are created and managed for the entire tenant. */
    private _adminConsentRequestPolicy?: AdminConsentRequestPolicy | undefined;
    /** The policy configuration of the self-service sign-up experience of external users. */
    private _authenticationFlowsPolicy?: AuthenticationFlowsPolicy | undefined;
    /** The authentication methods and the users that are allowed to use them to sign in and perform multi-factor authentication (MFA) in Azure Active Directory (Azure AD). */
    private _authenticationMethodsPolicy?: AuthenticationMethodsPolicy | undefined;
    /** The policy that controls Azure AD authorization settings. */
    private _authorizationPolicy?: AuthorizationPolicy | undefined;
    /** The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application. */
    private _claimsMappingPolicies?: ClaimsMappingPolicy[] | undefined;
    /** The custom rules that define an access scenario. */
    private _conditionalAccessPolicies?: ConditionalAccessPolicy[] | undefined;
    /** The feature rollout policy associated with a directory object. */
    private _featureRolloutPolicies?: FeatureRolloutPolicy[] | undefined;
    /** The policy to control Azure AD authentication behavior for federated users. */
    private _homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** The policy that represents the security defaults that protect against common attacks. */
    private _identitySecurityDefaultsEnforcementPolicy?: IdentitySecurityDefaultsEnforcementPolicy | undefined;
    /** The policy that specifies the conditions under which consent can be granted. */
    private _permissionGrantPolicies?: PermissionGrantPolicy[] | undefined;
    /** Represents the role management policies. */
    private _roleManagementPolicies?: UnifiedRoleManagementPolicy[] | undefined;
    /** Represents the role management policy assignments. */
    private _roleManagementPolicyAssignments?: UnifiedRoleManagementPolicyAssignment[] | undefined;
    /** The policy that specifies the characteristics of SAML tokens issued by Azure AD. */
    private _tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD. */
    private _tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /**
     * Gets the activityBasedTimeoutPolicies property value. The policy that controls the idle time out for web sessions for applications.
     * @returns a ActivityBasedTimeoutPolicyInterface
     */
    public get activityBasedTimeoutPolicies() {
        return this._activityBasedTimeoutPolicies;
    };
    /**
     * Sets the activityBasedTimeoutPolicies property value. The policy that controls the idle time out for web sessions for applications.
     * @param value Value to set for the activityBasedTimeoutPolicies property.
     */
    public set activityBasedTimeoutPolicies(value: ActivityBasedTimeoutPolicy[] | undefined) {
        if(value) {
            const activityBasedTimeoutPoliciesArrValue: ActivityBasedTimeoutPolicyImpl[] = [];
            this.activityBasedTimeoutPolicies?.forEach(element => {
                activityBasedTimeoutPoliciesArrValue.push((element instanceof ActivityBasedTimeoutPolicyImpl? element as ActivityBasedTimeoutPolicyImpl:new ActivityBasedTimeoutPolicyImpl(element)));
            });
            this._activityBasedTimeoutPolicies = activityBasedTimeoutPoliciesArrValue;
        }
    };
    /**
     * Gets the adminConsentRequestPolicy property value. The policy by which consent requests are created and managed for the entire tenant.
     * @returns a AdminConsentRequestPolicyInterface
     */
    public get adminConsentRequestPolicy() {
        return this._adminConsentRequestPolicy;
    };
    /**
     * Sets the adminConsentRequestPolicy property value. The policy by which consent requests are created and managed for the entire tenant.
     * @param value Value to set for the adminConsentRequestPolicy property.
     */
    public set adminConsentRequestPolicy(value: AdminConsentRequestPolicy | undefined) {
        if(value) {
            this._adminConsentRequestPolicy = value instanceof AdminConsentRequestPolicyImpl? value as AdminConsentRequestPolicyImpl: new AdminConsentRequestPolicyImpl(value);
        }
    };
    /**
     * Gets the authenticationFlowsPolicy property value. The policy configuration of the self-service sign-up experience of external users.
     * @returns a AuthenticationFlowsPolicyInterface
     */
    public get authenticationFlowsPolicy() {
        return this._authenticationFlowsPolicy;
    };
    /**
     * Sets the authenticationFlowsPolicy property value. The policy configuration of the self-service sign-up experience of external users.
     * @param value Value to set for the authenticationFlowsPolicy property.
     */
    public set authenticationFlowsPolicy(value: AuthenticationFlowsPolicy | undefined) {
        if(value) {
            this._authenticationFlowsPolicy = value instanceof AuthenticationFlowsPolicyImpl? value as AuthenticationFlowsPolicyImpl: new AuthenticationFlowsPolicyImpl(value);
        }
    };
    /**
     * Gets the authenticationMethodsPolicy property value. The authentication methods and the users that are allowed to use them to sign in and perform multi-factor authentication (MFA) in Azure Active Directory (Azure AD).
     * @returns a AuthenticationMethodsPolicyInterface
     */
    public get authenticationMethodsPolicy() {
        return this._authenticationMethodsPolicy;
    };
    /**
     * Sets the authenticationMethodsPolicy property value. The authentication methods and the users that are allowed to use them to sign in and perform multi-factor authentication (MFA) in Azure Active Directory (Azure AD).
     * @param value Value to set for the authenticationMethodsPolicy property.
     */
    public set authenticationMethodsPolicy(value: AuthenticationMethodsPolicy | undefined) {
        if(value) {
            this._authenticationMethodsPolicy = value instanceof AuthenticationMethodsPolicyImpl? value as AuthenticationMethodsPolicyImpl: new AuthenticationMethodsPolicyImpl(value);
        }
    };
    /**
     * Gets the authorizationPolicy property value. The policy that controls Azure AD authorization settings.
     * @returns a AuthorizationPolicyInterface
     */
    public get authorizationPolicy() {
        return this._authorizationPolicy;
    };
    /**
     * Sets the authorizationPolicy property value. The policy that controls Azure AD authorization settings.
     * @param value Value to set for the authorizationPolicy property.
     */
    public set authorizationPolicy(value: AuthorizationPolicy | undefined) {
        if(value) {
            this._authorizationPolicy = value instanceof AuthorizationPolicyImpl? value as AuthorizationPolicyImpl: new AuthorizationPolicyImpl(value);
        }
    };
    /**
     * Gets the claimsMappingPolicies property value. The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application.
     * @returns a ClaimsMappingPolicyInterface
     */
    public get claimsMappingPolicies() {
        return this._claimsMappingPolicies;
    };
    /**
     * Sets the claimsMappingPolicies property value. The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application.
     * @param value Value to set for the claimsMappingPolicies property.
     */
    public set claimsMappingPolicies(value: ClaimsMappingPolicy[] | undefined) {
        if(value) {
            const claimsMappingPoliciesArrValue: ClaimsMappingPolicyImpl[] = [];
            this.claimsMappingPolicies?.forEach(element => {
                claimsMappingPoliciesArrValue.push((element instanceof ClaimsMappingPolicyImpl? element as ClaimsMappingPolicyImpl:new ClaimsMappingPolicyImpl(element)));
            });
            this._claimsMappingPolicies = claimsMappingPoliciesArrValue;
        }
    };
    /**
     * Gets the conditionalAccessPolicies property value. The custom rules that define an access scenario.
     * @returns a ConditionalAccessPolicyInterface
     */
    public get conditionalAccessPolicies() {
        return this._conditionalAccessPolicies;
    };
    /**
     * Sets the conditionalAccessPolicies property value. The custom rules that define an access scenario.
     * @param value Value to set for the conditionalAccessPolicies property.
     */
    public set conditionalAccessPolicies(value: ConditionalAccessPolicy[] | undefined) {
        if(value) {
            const conditionalAccessPoliciesArrValue: ConditionalAccessPolicyImpl[] = [];
            this.conditionalAccessPolicies?.forEach(element => {
                conditionalAccessPoliciesArrValue.push((element instanceof ConditionalAccessPolicyImpl? element as ConditionalAccessPolicyImpl:new ConditionalAccessPolicyImpl(element)));
            });
            this._conditionalAccessPolicies = conditionalAccessPoliciesArrValue;
        }
    };
    /**
     * Instantiates a new policyRoot and sets the default values.
     * @param policyRootParameterValue 
     */
    public constructor(policyRootParameterValue?: PolicyRoot | undefined) {
        super(policyRootParameterValue);
        this._activityBasedTimeoutPolicies = policyRootParameterValue?.activityBasedTimeoutPolicies;
        this._adminConsentRequestPolicy = policyRootParameterValue?.adminConsentRequestPolicy;
        this._authenticationFlowsPolicy = policyRootParameterValue?.authenticationFlowsPolicy;
        this._authenticationMethodsPolicy = policyRootParameterValue?.authenticationMethodsPolicy;
        this._authorizationPolicy = policyRootParameterValue?.authorizationPolicy;
        this._claimsMappingPolicies = policyRootParameterValue?.claimsMappingPolicies;
        this._conditionalAccessPolicies = policyRootParameterValue?.conditionalAccessPolicies;
        this._featureRolloutPolicies = policyRootParameterValue?.featureRolloutPolicies;
        this._homeRealmDiscoveryPolicies = policyRootParameterValue?.homeRealmDiscoveryPolicies;
        this._identitySecurityDefaultsEnforcementPolicy = policyRootParameterValue?.identitySecurityDefaultsEnforcementPolicy;
        this._permissionGrantPolicies = policyRootParameterValue?.permissionGrantPolicies;
        this._roleManagementPolicies = policyRootParameterValue?.roleManagementPolicies;
        this._roleManagementPolicyAssignments = policyRootParameterValue?.roleManagementPolicyAssignments;
        this._tokenIssuancePolicies = policyRootParameterValue?.tokenIssuancePolicies;
        this._tokenLifetimePolicies = policyRootParameterValue?.tokenLifetimePolicies;
    };
    /**
     * Gets the featureRolloutPolicies property value. The feature rollout policy associated with a directory object.
     * @returns a FeatureRolloutPolicyInterface
     */
    public get featureRolloutPolicies() {
        return this._featureRolloutPolicies;
    };
    /**
     * Sets the featureRolloutPolicies property value. The feature rollout policy associated with a directory object.
     * @param value Value to set for the featureRolloutPolicies property.
     */
    public set featureRolloutPolicies(value: FeatureRolloutPolicy[] | undefined) {
        if(value) {
            const featureRolloutPoliciesArrValue: FeatureRolloutPolicyImpl[] = [];
            this.featureRolloutPolicies?.forEach(element => {
                featureRolloutPoliciesArrValue.push((element instanceof FeatureRolloutPolicyImpl? element as FeatureRolloutPolicyImpl:new FeatureRolloutPolicyImpl(element)));
            });
            this._featureRolloutPolicies = featureRolloutPoliciesArrValue;
        }
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
     * Gets the homeRealmDiscoveryPolicies property value. The policy to control Azure AD authentication behavior for federated users.
     * @returns a HomeRealmDiscoveryPolicyInterface
     */
    public get homeRealmDiscoveryPolicies() {
        return this._homeRealmDiscoveryPolicies;
    };
    /**
     * Sets the homeRealmDiscoveryPolicies property value. The policy to control Azure AD authentication behavior for federated users.
     * @param value Value to set for the homeRealmDiscoveryPolicies property.
     */
    public set homeRealmDiscoveryPolicies(value: HomeRealmDiscoveryPolicy[] | undefined) {
        if(value) {
            const homeRealmDiscoveryPoliciesArrValue: HomeRealmDiscoveryPolicyImpl[] = [];
            this.homeRealmDiscoveryPolicies?.forEach(element => {
                homeRealmDiscoveryPoliciesArrValue.push((element instanceof HomeRealmDiscoveryPolicyImpl? element as HomeRealmDiscoveryPolicyImpl:new HomeRealmDiscoveryPolicyImpl(element)));
            });
            this._homeRealmDiscoveryPolicies = homeRealmDiscoveryPoliciesArrValue;
        }
    };
    /**
     * Gets the identitySecurityDefaultsEnforcementPolicy property value. The policy that represents the security defaults that protect against common attacks.
     * @returns a IdentitySecurityDefaultsEnforcementPolicyInterface
     */
    public get identitySecurityDefaultsEnforcementPolicy() {
        return this._identitySecurityDefaultsEnforcementPolicy;
    };
    /**
     * Sets the identitySecurityDefaultsEnforcementPolicy property value. The policy that represents the security defaults that protect against common attacks.
     * @param value Value to set for the identitySecurityDefaultsEnforcementPolicy property.
     */
    public set identitySecurityDefaultsEnforcementPolicy(value: IdentitySecurityDefaultsEnforcementPolicy | undefined) {
        if(value) {
            this._identitySecurityDefaultsEnforcementPolicy = value instanceof IdentitySecurityDefaultsEnforcementPolicyImpl? value as IdentitySecurityDefaultsEnforcementPolicyImpl: new IdentitySecurityDefaultsEnforcementPolicyImpl(value);
        }
    };
    /**
     * Gets the permissionGrantPolicies property value. The policy that specifies the conditions under which consent can be granted.
     * @returns a PermissionGrantPolicyInterface
     */
    public get permissionGrantPolicies() {
        return this._permissionGrantPolicies;
    };
    /**
     * Sets the permissionGrantPolicies property value. The policy that specifies the conditions under which consent can be granted.
     * @param value Value to set for the permissionGrantPolicies property.
     */
    public set permissionGrantPolicies(value: PermissionGrantPolicy[] | undefined) {
        if(value) {
            const permissionGrantPoliciesArrValue: PermissionGrantPolicyImpl[] = [];
            this.permissionGrantPolicies?.forEach(element => {
                permissionGrantPoliciesArrValue.push((element instanceof PermissionGrantPolicyImpl? element as PermissionGrantPolicyImpl:new PermissionGrantPolicyImpl(element)));
            });
            this._permissionGrantPolicies = permissionGrantPoliciesArrValue;
        }
    };
    /**
     * Gets the roleManagementPolicies property value. Represents the role management policies.
     * @returns a UnifiedRoleManagementPolicyInterface
     */
    public get roleManagementPolicies() {
        return this._roleManagementPolicies;
    };
    /**
     * Sets the roleManagementPolicies property value. Represents the role management policies.
     * @param value Value to set for the roleManagementPolicies property.
     */
    public set roleManagementPolicies(value: UnifiedRoleManagementPolicy[] | undefined) {
        if(value) {
            const roleManagementPoliciesArrValue: UnifiedRoleManagementPolicyImpl[] = [];
            this.roleManagementPolicies?.forEach(element => {
                roleManagementPoliciesArrValue.push((element instanceof UnifiedRoleManagementPolicyImpl? element as UnifiedRoleManagementPolicyImpl:new UnifiedRoleManagementPolicyImpl(element)));
            });
            this._roleManagementPolicies = roleManagementPoliciesArrValue;
        }
    };
    /**
     * Gets the roleManagementPolicyAssignments property value. Represents the role management policy assignments.
     * @returns a UnifiedRoleManagementPolicyAssignmentInterface
     */
    public get roleManagementPolicyAssignments() {
        return this._roleManagementPolicyAssignments;
    };
    /**
     * Sets the roleManagementPolicyAssignments property value. Represents the role management policy assignments.
     * @param value Value to set for the roleManagementPolicyAssignments property.
     */
    public set roleManagementPolicyAssignments(value: UnifiedRoleManagementPolicyAssignment[] | undefined) {
        if(value) {
            const roleManagementPolicyAssignmentsArrValue: UnifiedRoleManagementPolicyAssignmentImpl[] = [];
            this.roleManagementPolicyAssignments?.forEach(element => {
                roleManagementPolicyAssignmentsArrValue.push((element instanceof UnifiedRoleManagementPolicyAssignmentImpl? element as UnifiedRoleManagementPolicyAssignmentImpl:new UnifiedRoleManagementPolicyAssignmentImpl(element)));
            });
            this._roleManagementPolicyAssignments = roleManagementPolicyAssignmentsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activityBasedTimeoutPolicies && this.activityBasedTimeoutPolicies.length != 0){        const activityBasedTimeoutPoliciesArrValue: ActivityBasedTimeoutPolicyImpl[] = [];
        this.activityBasedTimeoutPolicies?.forEach(element => {
            activityBasedTimeoutPoliciesArrValue.push((element instanceof ActivityBasedTimeoutPolicyImpl? element as ActivityBasedTimeoutPolicyImpl:new ActivityBasedTimeoutPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ActivityBasedTimeoutPolicyImpl>("activityBasedTimeoutPolicies", activityBasedTimeoutPoliciesArrValue);
        }
        if(this.adminConsentRequestPolicy){
            writer.writeObjectValue<AdminConsentRequestPolicyImpl>("adminConsentRequestPolicy", (this.adminConsentRequestPolicy instanceof AdminConsentRequestPolicyImpl? this.adminConsentRequestPolicy as AdminConsentRequestPolicyImpl: new AdminConsentRequestPolicyImpl(this.adminConsentRequestPolicy)));
        }
        if(this.authenticationFlowsPolicy){
            writer.writeObjectValue<AuthenticationFlowsPolicyImpl>("authenticationFlowsPolicy", (this.authenticationFlowsPolicy instanceof AuthenticationFlowsPolicyImpl? this.authenticationFlowsPolicy as AuthenticationFlowsPolicyImpl: new AuthenticationFlowsPolicyImpl(this.authenticationFlowsPolicy)));
        }
        if(this.authenticationMethodsPolicy){
            writer.writeObjectValue<AuthenticationMethodsPolicyImpl>("authenticationMethodsPolicy", (this.authenticationMethodsPolicy instanceof AuthenticationMethodsPolicyImpl? this.authenticationMethodsPolicy as AuthenticationMethodsPolicyImpl: new AuthenticationMethodsPolicyImpl(this.authenticationMethodsPolicy)));
        }
        if(this.authorizationPolicy){
            writer.writeObjectValue<AuthorizationPolicyImpl>("authorizationPolicy", (this.authorizationPolicy instanceof AuthorizationPolicyImpl? this.authorizationPolicy as AuthorizationPolicyImpl: new AuthorizationPolicyImpl(this.authorizationPolicy)));
        }
        if(this.claimsMappingPolicies && this.claimsMappingPolicies.length != 0){        const claimsMappingPoliciesArrValue: ClaimsMappingPolicyImpl[] = [];
        this.claimsMappingPolicies?.forEach(element => {
            claimsMappingPoliciesArrValue.push((element instanceof ClaimsMappingPolicyImpl? element as ClaimsMappingPolicyImpl:new ClaimsMappingPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ClaimsMappingPolicyImpl>("claimsMappingPolicies", claimsMappingPoliciesArrValue);
        }
        if(this.conditionalAccessPolicies && this.conditionalAccessPolicies.length != 0){        const conditionalAccessPoliciesArrValue: ConditionalAccessPolicyImpl[] = [];
        this.conditionalAccessPolicies?.forEach(element => {
            conditionalAccessPoliciesArrValue.push((element instanceof ConditionalAccessPolicyImpl? element as ConditionalAccessPolicyImpl:new ConditionalAccessPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConditionalAccessPolicyImpl>("conditionalAccessPolicies", conditionalAccessPoliciesArrValue);
        }
        if(this.featureRolloutPolicies && this.featureRolloutPolicies.length != 0){        const featureRolloutPoliciesArrValue: FeatureRolloutPolicyImpl[] = [];
        this.featureRolloutPolicies?.forEach(element => {
            featureRolloutPoliciesArrValue.push((element instanceof FeatureRolloutPolicyImpl? element as FeatureRolloutPolicyImpl:new FeatureRolloutPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<FeatureRolloutPolicyImpl>("featureRolloutPolicies", featureRolloutPoliciesArrValue);
        }
        if(this.homeRealmDiscoveryPolicies && this.homeRealmDiscoveryPolicies.length != 0){        const homeRealmDiscoveryPoliciesArrValue: HomeRealmDiscoveryPolicyImpl[] = [];
        this.homeRealmDiscoveryPolicies?.forEach(element => {
            homeRealmDiscoveryPoliciesArrValue.push((element instanceof HomeRealmDiscoveryPolicyImpl? element as HomeRealmDiscoveryPolicyImpl:new HomeRealmDiscoveryPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>("homeRealmDiscoveryPolicies", homeRealmDiscoveryPoliciesArrValue);
        }
        if(this.identitySecurityDefaultsEnforcementPolicy){
            writer.writeObjectValue<IdentitySecurityDefaultsEnforcementPolicyImpl>("identitySecurityDefaultsEnforcementPolicy", (this.identitySecurityDefaultsEnforcementPolicy instanceof IdentitySecurityDefaultsEnforcementPolicyImpl? this.identitySecurityDefaultsEnforcementPolicy as IdentitySecurityDefaultsEnforcementPolicyImpl: new IdentitySecurityDefaultsEnforcementPolicyImpl(this.identitySecurityDefaultsEnforcementPolicy)));
        }
        if(this.permissionGrantPolicies && this.permissionGrantPolicies.length != 0){        const permissionGrantPoliciesArrValue: PermissionGrantPolicyImpl[] = [];
        this.permissionGrantPolicies?.forEach(element => {
            permissionGrantPoliciesArrValue.push((element instanceof PermissionGrantPolicyImpl? element as PermissionGrantPolicyImpl:new PermissionGrantPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PermissionGrantPolicyImpl>("permissionGrantPolicies", permissionGrantPoliciesArrValue);
        }
        if(this.roleManagementPolicies && this.roleManagementPolicies.length != 0){        const roleManagementPoliciesArrValue: UnifiedRoleManagementPolicyImpl[] = [];
        this.roleManagementPolicies?.forEach(element => {
            roleManagementPoliciesArrValue.push((element instanceof UnifiedRoleManagementPolicyImpl? element as UnifiedRoleManagementPolicyImpl:new UnifiedRoleManagementPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyImpl>("roleManagementPolicies", roleManagementPoliciesArrValue);
        }
        if(this.roleManagementPolicyAssignments && this.roleManagementPolicyAssignments.length != 0){        const roleManagementPolicyAssignmentsArrValue: UnifiedRoleManagementPolicyAssignmentImpl[] = [];
        this.roleManagementPolicyAssignments?.forEach(element => {
            roleManagementPolicyAssignmentsArrValue.push((element instanceof UnifiedRoleManagementPolicyAssignmentImpl? element as UnifiedRoleManagementPolicyAssignmentImpl:new UnifiedRoleManagementPolicyAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyAssignmentImpl>("roleManagementPolicyAssignments", roleManagementPolicyAssignmentsArrValue);
        }
        if(this.tokenIssuancePolicies && this.tokenIssuancePolicies.length != 0){        const tokenIssuancePoliciesArrValue: TokenIssuancePolicyImpl[] = [];
        this.tokenIssuancePolicies?.forEach(element => {
            tokenIssuancePoliciesArrValue.push((element instanceof TokenIssuancePolicyImpl? element as TokenIssuancePolicyImpl:new TokenIssuancePolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TokenIssuancePolicyImpl>("tokenIssuancePolicies", tokenIssuancePoliciesArrValue);
        }
        if(this.tokenLifetimePolicies && this.tokenLifetimePolicies.length != 0){        const tokenLifetimePoliciesArrValue: TokenLifetimePolicyImpl[] = [];
        this.tokenLifetimePolicies?.forEach(element => {
            tokenLifetimePoliciesArrValue.push((element instanceof TokenLifetimePolicyImpl? element as TokenLifetimePolicyImpl:new TokenLifetimePolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TokenLifetimePolicyImpl>("tokenLifetimePolicies", tokenLifetimePoliciesArrValue);
        }
    };
    /**
     * Gets the tokenIssuancePolicies property value. The policy that specifies the characteristics of SAML tokens issued by Azure AD.
     * @returns a TokenIssuancePolicyInterface
     */
    public get tokenIssuancePolicies() {
        return this._tokenIssuancePolicies;
    };
    /**
     * Sets the tokenIssuancePolicies property value. The policy that specifies the characteristics of SAML tokens issued by Azure AD.
     * @param value Value to set for the tokenIssuancePolicies property.
     */
    public set tokenIssuancePolicies(value: TokenIssuancePolicy[] | undefined) {
        if(value) {
            const tokenIssuancePoliciesArrValue: TokenIssuancePolicyImpl[] = [];
            this.tokenIssuancePolicies?.forEach(element => {
                tokenIssuancePoliciesArrValue.push((element instanceof TokenIssuancePolicyImpl? element as TokenIssuancePolicyImpl:new TokenIssuancePolicyImpl(element)));
            });
            this._tokenIssuancePolicies = tokenIssuancePoliciesArrValue;
        }
    };
    /**
     * Gets the tokenLifetimePolicies property value. The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD.
     * @returns a TokenLifetimePolicyInterface
     */
    public get tokenLifetimePolicies() {
        return this._tokenLifetimePolicies;
    };
    /**
     * Sets the tokenLifetimePolicies property value. The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD.
     * @param value Value to set for the tokenLifetimePolicies property.
     */
    public set tokenLifetimePolicies(value: TokenLifetimePolicy[] | undefined) {
        if(value) {
            const tokenLifetimePoliciesArrValue: TokenLifetimePolicyImpl[] = [];
            this.tokenLifetimePolicies?.forEach(element => {
                tokenLifetimePoliciesArrValue.push((element instanceof TokenLifetimePolicyImpl? element as TokenLifetimePolicyImpl:new TokenLifetimePolicyImpl(element)));
            });
            this._tokenLifetimePolicies = tokenLifetimePoliciesArrValue;
        }
    };
}

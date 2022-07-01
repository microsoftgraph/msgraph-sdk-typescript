import {AddIn} from './addIn';
import {AppRole} from './appRole';
import {AppRoleAssignment} from './appRoleAssignment';
import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {createAddInFromDiscriminatorValue} from './createAddInFromDiscriminatorValue';
import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {createAppRoleFromDiscriminatorValue} from './createAppRoleFromDiscriminatorValue';
import {createClaimsMappingPolicyFromDiscriminatorValue} from './createClaimsMappingPolicyFromDiscriminatorValue';
import {createDelegatedPermissionClassificationFromDiscriminatorValue} from './createDelegatedPermissionClassificationFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from './createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {createInformationalUrlFromDiscriminatorValue} from './createInformationalUrlFromDiscriminatorValue';
import {createKeyCredentialFromDiscriminatorValue} from './createKeyCredentialFromDiscriminatorValue';
import {createOAuth2PermissionGrantFromDiscriminatorValue} from './createOAuth2PermissionGrantFromDiscriminatorValue';
import {createPasswordCredentialFromDiscriminatorValue} from './createPasswordCredentialFromDiscriminatorValue';
import {createPermissionScopeFromDiscriminatorValue} from './createPermissionScopeFromDiscriminatorValue';
import {createResourceSpecificPermissionFromDiscriminatorValue} from './createResourceSpecificPermissionFromDiscriminatorValue';
import {createSamlSingleSignOnSettingsFromDiscriminatorValue} from './createSamlSingleSignOnSettingsFromDiscriminatorValue';
import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {DirectoryObject} from './directoryObject';
import {Endpoint} from './endpoint';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {AddInImpl, AppRoleAssignmentImpl, AppRoleImpl, ClaimsMappingPolicyImpl, DelegatedPermissionClassificationImpl, DirectoryObjectImpl, EndpointImpl, HomeRealmDiscoveryPolicyImpl, InformationalUrlImpl, KeyCredentialImpl, OAuth2PermissionGrantImpl, PasswordCredentialImpl, PermissionScopeImpl, ResourceSpecificPermissionImpl, SamlSingleSignOnSettingsImpl, TokenIssuancePolicyImpl, TokenLifetimePolicyImpl} from './index';
import {InformationalUrl} from './informationalUrl';
import {KeyCredential} from './keyCredential';
import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {PasswordCredential} from './passwordCredential';
import {PermissionScope} from './permissionScope';
import {ResourceSpecificPermission} from './resourceSpecificPermission';
import {SamlSingleSignOnSettings} from './samlSingleSignOnSettings';
import {ServicePrincipal} from './servicePrincipal';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method. */
export class ServicePrincipalImpl extends DirectoryObjectImpl implements ServicePrincipal {
    /** true if the service principal account is enabled; otherwise, false. Supports $filter (eq, ne, not, in). */
    private _accountEnabled?: boolean | undefined;
    /** Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on. */
    private _addIns?: AddIn[] | undefined;
    /** Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith). */
    private _alternativeNames?: string[] | undefined;
    /** The description exposed by the associated application. */
    private _appDescription?: string | undefined;
    /** The display name exposed by the associated application. */
    private _appDisplayName?: string | undefined;
    /** The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith). */
    private _appId?: string | undefined;
    /** Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith). */
    private _applicationTemplateId?: string | undefined;
    /** Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications.Supports $filter (eq, ne, NOT, ge, le). */
    private _appOwnerOrganizationId?: string | undefined;
    /** App role assignments for this app or service, granted to users, groups, and other service principals.Supports $expand. */
    private _appRoleAssignedTo?: AppRoleAssignment[] | undefined;
    /** Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT). */
    private _appRoleAssignmentRequired?: boolean | undefined;
    /** App role assignment for another app or service, granted to this service principal. Supports $expand. */
    private _appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable. */
    private _appRoles?: AppRole[] | undefined;
    /** The claimsMappingPolicies assigned to this service principal. Supports $expand. */
    private _claimsMappingPolicies?: ClaimsMappingPolicy[] | undefined;
    /** Directory objects created by this service principal. Read-only. Nullable. */
    private _createdObjects?: DirectoryObject[] | undefined;
    /** The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand. */
    private _delegatedPermissionClassifications?: DelegatedPermissionClassification[] | undefined;
    /** Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    private _description?: string | undefined;
    /** Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not). */
    private _disabledByMicrosoftStatus?: string | undefined;
    /** The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences. */
    private _endpoints?: Endpoint[] | undefined;
    /** Home page or landing page of the application. */
    private _homepage?: string | undefined;
    /** The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand. */
    private _homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values). */
    private _info?: InformationalUrl | undefined;
    /** The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le). */
    private _keyCredentials?: KeyCredential[] | undefined;
    /** Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL. */
    private _loginUrl?: string | undefined;
    /** Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols. */
    private _logoutUrl?: string | undefined;
    /** Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand. */
    private _memberOf?: DirectoryObject[] | undefined;
    /** Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters. */
    private _notes?: string | undefined;
    /** Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications. */
    private _notificationEmailAddresses?: string[] | undefined;
    /** Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable. */
    private _oauth2PermissionGrants?: OAuth2PermissionGrant[] | undefined;
    /** The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable. */
    private _oauth2PermissionScopes?: PermissionScope[] | undefined;
    /** Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand. */
    private _ownedObjects?: DirectoryObject[] | undefined;
    /** Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable. Supports $expand. */
    private _owners?: DirectoryObject[] | undefined;
    /** The collection of password credentials associated with the service principal. Not nullable. */
    private _passwordCredentials?: PasswordCredential[] | undefined;
    /** Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc. */
    private _preferredSingleSignOnMode?: string | undefined;
    /** Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions. */
    private _preferredTokenSigningKeyThumbprint?: string | undefined;
    /** The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable. */
    private _replyUrls?: string[] | undefined;
    /** The resource-specific application permissions exposed by this application. Currently, resource-specific permissions are only supported for Teams apps accessing to specific chats and teams using Microsoft Graph. Read-only. */
    private _resourceSpecificApplicationPermissions?: ResourceSpecificPermission[] | undefined;
    /** The collection for settings related to saml single sign-on. */
    private _samlSingleSignOnSettings?: SamlSingleSignOnSettings | undefined;
    /** Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith). */
    private _servicePrincipalNames?: string[] | undefined;
    /** Identifies if the service principal represents an application or a managed identity. This is set by Azure AD internally. For a service principal that represents an application this is set as Application. For a service principal that represent a managed identity this is set as ManagedIdentity. The SocialIdp type is for internal use. */
    private _servicePrincipalType?: string | undefined;
    /** Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only. */
    private _signInAudience?: string | undefined;
    /** Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith). */
    private _tags?: string[] | undefined;
    /** Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user. */
    private _tokenEncryptionKeyId?: string | undefined;
    /** The tokenIssuancePolicies assigned to this service principal. Supports $expand. */
    private _tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The tokenLifetimePolicies assigned to this service principal. Supports $expand. */
    private _tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /** The transitiveMemberOf property */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /**
     * Gets the accountEnabled property value. true if the service principal account is enabled; otherwise, false. Supports $filter (eq, ne, not, in).
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Sets the accountEnabled property value. true if the service principal account is enabled; otherwise, false. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        if(value) {
            this._accountEnabled = value;
        }
    };
    /**
     * Gets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.
     * @returns a AddInInterface
     */
    public get addIns() {
        return this._addIns;
    };
    /**
     * Sets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.
     * @param value Value to set for the addIns property.
     */
    public set addIns(value: AddIn[] | undefined) {
        if(value) {
            const addInsArrValue: AddInImpl[] = [];
            this.addIns?.forEach(element => {
                addInsArrValue.push((element instanceof AddInImpl? element as AddInImpl:new AddInImpl(element)));
            });
            this._addIns = addInsArrValue;
        }
    };
    /**
     * Gets the alternativeNames property value. Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get alternativeNames() {
        return this._alternativeNames;
    };
    /**
     * Sets the alternativeNames property value. Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the alternativeNames property.
     */
    public set alternativeNames(value: string[] | undefined) {
        if(value) {
            this._alternativeNames = value;
        }
    };
    /**
     * Gets the appDescription property value. The description exposed by the associated application.
     * @returns a string
     */
    public get appDescription() {
        return this._appDescription;
    };
    /**
     * Sets the appDescription property value. The description exposed by the associated application.
     * @param value Value to set for the appDescription property.
     */
    public set appDescription(value: string | undefined) {
        if(value) {
            this._appDescription = value;
        }
    };
    /**
     * Gets the appDisplayName property value. The display name exposed by the associated application.
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Sets the appDisplayName property value. The display name exposed by the associated application.
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        if(value) {
            this._appDisplayName = value;
        }
    };
    /**
     * Gets the appId property value. The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith).
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith).
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        if(value) {
            this._appId = value;
        }
    };
    /**
     * Gets the applicationTemplateId property value. Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).
     * @returns a string
     */
    public get applicationTemplateId() {
        return this._applicationTemplateId;
    };
    /**
     * Sets the applicationTemplateId property value. Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).
     * @param value Value to set for the applicationTemplateId property.
     */
    public set applicationTemplateId(value: string | undefined) {
        if(value) {
            this._applicationTemplateId = value;
        }
    };
    /**
     * Gets the appOwnerOrganizationId property value. Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications.Supports $filter (eq, ne, NOT, ge, le).
     * @returns a string
     */
    public get appOwnerOrganizationId() {
        return this._appOwnerOrganizationId;
    };
    /**
     * Sets the appOwnerOrganizationId property value. Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications.Supports $filter (eq, ne, NOT, ge, le).
     * @param value Value to set for the appOwnerOrganizationId property.
     */
    public set appOwnerOrganizationId(value: string | undefined) {
        if(value) {
            this._appOwnerOrganizationId = value;
        }
    };
    /**
     * Gets the appRoleAssignedTo property value. App role assignments for this app or service, granted to users, groups, and other service principals.Supports $expand.
     * @returns a AppRoleAssignmentInterface
     */
    public get appRoleAssignedTo() {
        return this._appRoleAssignedTo;
    };
    /**
     * Sets the appRoleAssignedTo property value. App role assignments for this app or service, granted to users, groups, and other service principals.Supports $expand.
     * @param value Value to set for the appRoleAssignedTo property.
     */
    public set appRoleAssignedTo(value: AppRoleAssignment[] | undefined) {
        if(value) {
            const appRoleAssignedToArrValue: AppRoleAssignmentImpl[] = [];
            this.appRoleAssignedTo?.forEach(element => {
                appRoleAssignedToArrValue.push((element instanceof AppRoleAssignmentImpl? element as AppRoleAssignmentImpl:new AppRoleAssignmentImpl(element)));
            });
            this._appRoleAssignedTo = appRoleAssignedToArrValue;
        }
    };
    /**
     * Gets the appRoleAssignmentRequired property value. Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).
     * @returns a boolean
     */
    public get appRoleAssignmentRequired() {
        return this._appRoleAssignmentRequired;
    };
    /**
     * Sets the appRoleAssignmentRequired property value. Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).
     * @param value Value to set for the appRoleAssignmentRequired property.
     */
    public set appRoleAssignmentRequired(value: boolean | undefined) {
        if(value) {
            this._appRoleAssignmentRequired = value;
        }
    };
    /**
     * Gets the appRoleAssignments property value. App role assignment for another app or service, granted to this service principal. Supports $expand.
     * @returns a AppRoleAssignmentInterface
     */
    public get appRoleAssignments() {
        return this._appRoleAssignments;
    };
    /**
     * Sets the appRoleAssignments property value. App role assignment for another app or service, granted to this service principal. Supports $expand.
     * @param value Value to set for the appRoleAssignments property.
     */
    public set appRoleAssignments(value: AppRoleAssignment[] | undefined) {
        if(value) {
            const appRoleAssignmentsArrValue: AppRoleAssignmentImpl[] = [];
            this.appRoleAssignments?.forEach(element => {
                appRoleAssignmentsArrValue.push((element instanceof AppRoleAssignmentImpl? element as AppRoleAssignmentImpl:new AppRoleAssignmentImpl(element)));
            });
            this._appRoleAssignments = appRoleAssignmentsArrValue;
        }
    };
    /**
     * Gets the appRoles property value. The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.
     * @returns a AppRoleInterface
     */
    public get appRoles() {
        return this._appRoles;
    };
    /**
     * Sets the appRoles property value. The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.
     * @param value Value to set for the appRoles property.
     */
    public set appRoles(value: AppRole[] | undefined) {
        if(value) {
            const appRolesArrValue: AppRoleImpl[] = [];
            this.appRoles?.forEach(element => {
                appRolesArrValue.push((element instanceof AppRoleImpl? element as AppRoleImpl:new AppRoleImpl(element)));
            });
            this._appRoles = appRolesArrValue;
        }
    };
    /**
     * Gets the claimsMappingPolicies property value. The claimsMappingPolicies assigned to this service principal. Supports $expand.
     * @returns a ClaimsMappingPolicyInterface
     */
    public get claimsMappingPolicies() {
        return this._claimsMappingPolicies;
    };
    /**
     * Sets the claimsMappingPolicies property value. The claimsMappingPolicies assigned to this service principal. Supports $expand.
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
     * Instantiates a new servicePrincipal and sets the default values.
     * @param servicePrincipalParameterValue 
     */
    public constructor(servicePrincipalParameterValue?: ServicePrincipal | undefined) {
        super(servicePrincipalParameterValue);
        this._accountEnabled = servicePrincipalParameterValue?.accountEnabled;
        this._addIns = servicePrincipalParameterValue?.addIns;
        this._alternativeNames = servicePrincipalParameterValue?.alternativeNames;
        this._appDescription = servicePrincipalParameterValue?.appDescription;
        this._appDisplayName = servicePrincipalParameterValue?.appDisplayName;
        this._appId = servicePrincipalParameterValue?.appId;
        this._applicationTemplateId = servicePrincipalParameterValue?.applicationTemplateId;
        this._appOwnerOrganizationId = servicePrincipalParameterValue?.appOwnerOrganizationId;
        this._appRoleAssignedTo = servicePrincipalParameterValue?.appRoleAssignedTo;
        this._appRoleAssignmentRequired = servicePrincipalParameterValue?.appRoleAssignmentRequired;
        this._appRoleAssignments = servicePrincipalParameterValue?.appRoleAssignments;
        this._appRoles = servicePrincipalParameterValue?.appRoles;
        this._claimsMappingPolicies = servicePrincipalParameterValue?.claimsMappingPolicies;
        this._createdObjects = servicePrincipalParameterValue?.createdObjects;
        this._delegatedPermissionClassifications = servicePrincipalParameterValue?.delegatedPermissionClassifications;
        this._description = servicePrincipalParameterValue?.description;
        this._disabledByMicrosoftStatus = servicePrincipalParameterValue?.disabledByMicrosoftStatus;
        this._displayName = servicePrincipalParameterValue?.displayName;
        this._endpoints = servicePrincipalParameterValue?.endpoints;
        this._homepage = servicePrincipalParameterValue?.homepage;
        this._homeRealmDiscoveryPolicies = servicePrincipalParameterValue?.homeRealmDiscoveryPolicies;
        this._info = servicePrincipalParameterValue?.info;
        this._keyCredentials = servicePrincipalParameterValue?.keyCredentials;
        this._loginUrl = servicePrincipalParameterValue?.loginUrl;
        this._logoutUrl = servicePrincipalParameterValue?.logoutUrl;
        this._memberOf = servicePrincipalParameterValue?.memberOf;
        this._notes = servicePrincipalParameterValue?.notes;
        this._notificationEmailAddresses = servicePrincipalParameterValue?.notificationEmailAddresses;
        this._oauth2PermissionGrants = servicePrincipalParameterValue?.oauth2PermissionGrants;
        this._oauth2PermissionScopes = servicePrincipalParameterValue?.oauth2PermissionScopes;
        this._ownedObjects = servicePrincipalParameterValue?.ownedObjects;
        this._owners = servicePrincipalParameterValue?.owners;
        this._passwordCredentials = servicePrincipalParameterValue?.passwordCredentials;
        this._preferredSingleSignOnMode = servicePrincipalParameterValue?.preferredSingleSignOnMode;
        this._preferredTokenSigningKeyThumbprint = servicePrincipalParameterValue?.preferredTokenSigningKeyThumbprint;
        this._replyUrls = servicePrincipalParameterValue?.replyUrls;
        this._resourceSpecificApplicationPermissions = servicePrincipalParameterValue?.resourceSpecificApplicationPermissions;
        this._samlSingleSignOnSettings = servicePrincipalParameterValue?.samlSingleSignOnSettings;
        this._servicePrincipalNames = servicePrincipalParameterValue?.servicePrincipalNames;
        this._servicePrincipalType = servicePrincipalParameterValue?.servicePrincipalType;
        this._signInAudience = servicePrincipalParameterValue?.signInAudience;
        this._tags = servicePrincipalParameterValue?.tags;
        this._tokenEncryptionKeyId = servicePrincipalParameterValue?.tokenEncryptionKeyId;
        this._tokenIssuancePolicies = servicePrincipalParameterValue?.tokenIssuancePolicies;
        this._tokenLifetimePolicies = servicePrincipalParameterValue?.tokenLifetimePolicies;
        this._transitiveMemberOf = servicePrincipalParameterValue?.transitiveMemberOf;
    };
    /**
     * Gets the createdObjects property value. Directory objects created by this service principal. Read-only. Nullable.
     * @returns a DirectoryObjectInterface
     */
    public get createdObjects() {
        return this._createdObjects;
    };
    /**
     * Sets the createdObjects property value. Directory objects created by this service principal. Read-only. Nullable.
     * @param value Value to set for the createdObjects property.
     */
    public set createdObjects(value: DirectoryObject[] | undefined) {
        if(value) {
            const createdObjectsArrValue: DirectoryObjectImpl[] = [];
            this.createdObjects?.forEach(element => {
                createdObjectsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._createdObjects = createdObjectsArrValue;
        }
    };
    /**
     * Gets the delegatedPermissionClassifications property value. The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.
     * @returns a DelegatedPermissionClassificationInterface
     */
    public get delegatedPermissionClassifications() {
        return this._delegatedPermissionClassifications;
    };
    /**
     * Sets the delegatedPermissionClassifications property value. The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.
     * @param value Value to set for the delegatedPermissionClassifications property.
     */
    public set delegatedPermissionClassifications(value: DelegatedPermissionClassification[] | undefined) {
        if(value) {
            const delegatedPermissionClassificationsArrValue: DelegatedPermissionClassificationImpl[] = [];
            this.delegatedPermissionClassifications?.forEach(element => {
                delegatedPermissionClassificationsArrValue.push((element instanceof DelegatedPermissionClassificationImpl? element as DelegatedPermissionClassificationImpl:new DelegatedPermissionClassificationImpl(element)));
            });
            this._delegatedPermissionClassifications = delegatedPermissionClassificationsArrValue;
        }
    };
    /**
     * Gets the description property value. Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the disabledByMicrosoftStatus property value. Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not).
     * @returns a string
     */
    public get disabledByMicrosoftStatus() {
        return this._disabledByMicrosoftStatus;
    };
    /**
     * Sets the disabledByMicrosoftStatus property value. Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not).
     * @param value Value to set for the disabledByMicrosoftStatus property.
     */
    public set disabledByMicrosoftStatus(value: string | undefined) {
        if(value) {
            this._disabledByMicrosoftStatus = value;
        }
    };
    /**
     * Gets the displayName property value. The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the endpoints property value. Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
     * @returns a EndpointInterface
     */
    public get endpoints() {
        return this._endpoints;
    };
    /**
     * Sets the endpoints property value. Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.
     * @param value Value to set for the endpoints property.
     */
    public set endpoints(value: Endpoint[] | undefined) {
        if(value) {
            const endpointsArrValue: EndpointImpl[] = [];
            this.endpoints?.forEach(element => {
                endpointsArrValue.push((element instanceof EndpointImpl? element as EndpointImpl:new EndpointImpl(element)));
            });
            this._endpoints = endpointsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountEnabled": n => { this.accountEnabled = n.getBooleanValue(); },
            "addIns": n => { this.addIns = n.getCollectionOfObjectValues<AddInImpl>(createAddInFromDiscriminatorValue); },
            "alternativeNames": n => { this.alternativeNames = n.getCollectionOfPrimitiveValues<string>(); },
            "appDescription": n => { this.appDescription = n.getStringValue(); },
            "appDisplayName": n => { this.appDisplayName = n.getStringValue(); },
            "appId": n => { this.appId = n.getStringValue(); },
            "applicationTemplateId": n => { this.applicationTemplateId = n.getStringValue(); },
            "appOwnerOrganizationId": n => { this.appOwnerOrganizationId = n.getStringValue(); },
            "appRoleAssignedTo": n => { this.appRoleAssignedTo = n.getCollectionOfObjectValues<AppRoleAssignmentImpl>(createAppRoleAssignmentFromDiscriminatorValue); },
            "appRoleAssignmentRequired": n => { this.appRoleAssignmentRequired = n.getBooleanValue(); },
            "appRoleAssignments": n => { this.appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignmentImpl>(createAppRoleAssignmentFromDiscriminatorValue); },
            "appRoles": n => { this.appRoles = n.getCollectionOfObjectValues<AppRoleImpl>(createAppRoleFromDiscriminatorValue); },
            "claimsMappingPolicies": n => { this.claimsMappingPolicies = n.getCollectionOfObjectValues<ClaimsMappingPolicyImpl>(createClaimsMappingPolicyFromDiscriminatorValue); },
            "createdObjects": n => { this.createdObjects = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "delegatedPermissionClassifications": n => { this.delegatedPermissionClassifications = n.getCollectionOfObjectValues<DelegatedPermissionClassificationImpl>(createDelegatedPermissionClassificationFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "disabledByMicrosoftStatus": n => { this.disabledByMicrosoftStatus = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endpoints": n => { this.endpoints = n.getCollectionOfObjectValues<EndpointImpl>(createEndpointFromDiscriminatorValue); },
            "homepage": n => { this.homepage = n.getStringValue(); },
            "homeRealmDiscoveryPolicies": n => { this.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
            "info": n => { this.info = n.getObjectValue<InformationalUrlImpl>(createInformationalUrlFromDiscriminatorValue); },
            "keyCredentials": n => { this.keyCredentials = n.getCollectionOfObjectValues<KeyCredentialImpl>(createKeyCredentialFromDiscriminatorValue); },
            "loginUrl": n => { this.loginUrl = n.getStringValue(); },
            "logoutUrl": n => { this.logoutUrl = n.getStringValue(); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "notes": n => { this.notes = n.getStringValue(); },
            "notificationEmailAddresses": n => { this.notificationEmailAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "oauth2PermissionGrants": n => { this.oauth2PermissionGrants = n.getCollectionOfObjectValues<OAuth2PermissionGrantImpl>(createOAuth2PermissionGrantFromDiscriminatorValue); },
            "oauth2PermissionScopes": n => { this.oauth2PermissionScopes = n.getCollectionOfObjectValues<PermissionScopeImpl>(createPermissionScopeFromDiscriminatorValue); },
            "ownedObjects": n => { this.ownedObjects = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "owners": n => { this.owners = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "passwordCredentials": n => { this.passwordCredentials = n.getCollectionOfObjectValues<PasswordCredentialImpl>(createPasswordCredentialFromDiscriminatorValue); },
            "preferredSingleSignOnMode": n => { this.preferredSingleSignOnMode = n.getStringValue(); },
            "preferredTokenSigningKeyThumbprint": n => { this.preferredTokenSigningKeyThumbprint = n.getStringValue(); },
            "replyUrls": n => { this.replyUrls = n.getCollectionOfPrimitiveValues<string>(); },
            "resourceSpecificApplicationPermissions": n => { this.resourceSpecificApplicationPermissions = n.getCollectionOfObjectValues<ResourceSpecificPermissionImpl>(createResourceSpecificPermissionFromDiscriminatorValue); },
            "samlSingleSignOnSettings": n => { this.samlSingleSignOnSettings = n.getObjectValue<SamlSingleSignOnSettingsImpl>(createSamlSingleSignOnSettingsFromDiscriminatorValue); },
            "servicePrincipalNames": n => { this.servicePrincipalNames = n.getCollectionOfPrimitiveValues<string>(); },
            "servicePrincipalType": n => { this.servicePrincipalType = n.getStringValue(); },
            "signInAudience": n => { this.signInAudience = n.getStringValue(); },
            "tags": n => { this.tags = n.getCollectionOfPrimitiveValues<string>(); },
            "tokenEncryptionKeyId": n => { this.tokenEncryptionKeyId = n.getStringValue(); },
            "tokenIssuancePolicies": n => { this.tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicyImpl>(createTokenIssuancePolicyFromDiscriminatorValue); },
            "tokenLifetimePolicies": n => { this.tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicyImpl>(createTokenLifetimePolicyFromDiscriminatorValue); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the homepage property value. Home page or landing page of the application.
     * @returns a string
     */
    public get homepage() {
        return this._homepage;
    };
    /**
     * Sets the homepage property value. Home page or landing page of the application.
     * @param value Value to set for the homepage property.
     */
    public set homepage(value: string | undefined) {
        if(value) {
            this._homepage = value;
        }
    };
    /**
     * Gets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.
     * @returns a HomeRealmDiscoveryPolicyInterface
     */
    public get homeRealmDiscoveryPolicies() {
        return this._homeRealmDiscoveryPolicies;
    };
    /**
     * Sets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.
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
     * Gets the info property value. Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     * @returns a InformationalUrlInterface
     */
    public get info() {
        return this._info;
    };
    /**
     * Sets the info property value. Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     * @param value Value to set for the info property.
     */
    public set info(value: InformationalUrl | undefined) {
        if(value) {
            this._info = value instanceof InformationalUrlImpl? value as InformationalUrlImpl: new InformationalUrlImpl(value);
        }
    };
    /**
     * Gets the keyCredentials property value. The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a KeyCredentialInterface
     */
    public get keyCredentials() {
        return this._keyCredentials;
    };
    /**
     * Sets the keyCredentials property value. The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the keyCredentials property.
     */
    public set keyCredentials(value: KeyCredential[] | undefined) {
        if(value) {
            const keyCredentialsArrValue: KeyCredentialImpl[] = [];
            this.keyCredentials?.forEach(element => {
                keyCredentialsArrValue.push((element instanceof KeyCredentialImpl? element as KeyCredentialImpl:new KeyCredentialImpl(element)));
            });
            this._keyCredentials = keyCredentialsArrValue;
        }
    };
    /**
     * Gets the loginUrl property value. Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.
     * @returns a string
     */
    public get loginUrl() {
        return this._loginUrl;
    };
    /**
     * Sets the loginUrl property value. Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.
     * @param value Value to set for the loginUrl property.
     */
    public set loginUrl(value: string | undefined) {
        if(value) {
            this._loginUrl = value;
        }
    };
    /**
     * Gets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.
     * @returns a string
     */
    public get logoutUrl() {
        return this._logoutUrl;
    };
    /**
     * Sets the logoutUrl property value. Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.
     * @param value Value to set for the logoutUrl property.
     */
    public set logoutUrl(value: string | undefined) {
        if(value) {
            this._logoutUrl = value;
        }
    };
    /**
     * Gets the memberOf property value. Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const memberOfArrValue: DirectoryObjectImpl[] = [];
            this.memberOf?.forEach(element => {
                memberOfArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._memberOf = memberOfArrValue;
        }
    };
    /**
     * Gets the notes property value. Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        if(value) {
            this._notes = value;
        }
    };
    /**
     * Gets the notificationEmailAddresses property value. Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.
     * @returns a string
     */
    public get notificationEmailAddresses() {
        return this._notificationEmailAddresses;
    };
    /**
     * Sets the notificationEmailAddresses property value. Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.
     * @param value Value to set for the notificationEmailAddresses property.
     */
    public set notificationEmailAddresses(value: string[] | undefined) {
        if(value) {
            this._notificationEmailAddresses = value;
        }
    };
    /**
     * Gets the oauth2PermissionGrants property value. Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
     * @returns a OAuth2PermissionGrantInterface
     */
    public get oauth2PermissionGrants() {
        return this._oauth2PermissionGrants;
    };
    /**
     * Sets the oauth2PermissionGrants property value. Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
     * @param value Value to set for the oauth2PermissionGrants property.
     */
    public set oauth2PermissionGrants(value: OAuth2PermissionGrant[] | undefined) {
        if(value) {
            const oauth2PermissionGrantsArrValue: OAuth2PermissionGrantImpl[] = [];
            this.oauth2PermissionGrants?.forEach(element => {
                oauth2PermissionGrantsArrValue.push((element instanceof OAuth2PermissionGrantImpl? element as OAuth2PermissionGrantImpl:new OAuth2PermissionGrantImpl(element)));
            });
            this._oauth2PermissionGrants = oauth2PermissionGrantsArrValue;
        }
    };
    /**
     * Gets the oauth2PermissionScopes property value. The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable.
     * @returns a PermissionScopeInterface
     */
    public get oauth2PermissionScopes() {
        return this._oauth2PermissionScopes;
    };
    /**
     * Sets the oauth2PermissionScopes property value. The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable.
     * @param value Value to set for the oauth2PermissionScopes property.
     */
    public set oauth2PermissionScopes(value: PermissionScope[] | undefined) {
        if(value) {
            const oauth2PermissionScopesArrValue: PermissionScopeImpl[] = [];
            this.oauth2PermissionScopes?.forEach(element => {
                oauth2PermissionScopesArrValue.push((element instanceof PermissionScopeImpl? element as PermissionScopeImpl:new PermissionScopeImpl(element)));
            });
            this._oauth2PermissionScopes = oauth2PermissionScopesArrValue;
        }
    };
    /**
     * Gets the ownedObjects property value. Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get ownedObjects() {
        return this._ownedObjects;
    };
    /**
     * Sets the ownedObjects property value. Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the ownedObjects property.
     */
    public set ownedObjects(value: DirectoryObject[] | undefined) {
        if(value) {
            const ownedObjectsArrValue: DirectoryObjectImpl[] = [];
            this.ownedObjects?.forEach(element => {
                ownedObjectsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._ownedObjects = ownedObjectsArrValue;
        }
    };
    /**
     * Gets the owners property value. Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get owners() {
        return this._owners;
    };
    /**
     * Sets the owners property value. Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the owners property.
     */
    public set owners(value: DirectoryObject[] | undefined) {
        if(value) {
            const ownersArrValue: DirectoryObjectImpl[] = [];
            this.owners?.forEach(element => {
                ownersArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._owners = ownersArrValue;
        }
    };
    /**
     * Gets the passwordCredentials property value. The collection of password credentials associated with the service principal. Not nullable.
     * @returns a PasswordCredentialInterface
     */
    public get passwordCredentials() {
        return this._passwordCredentials;
    };
    /**
     * Sets the passwordCredentials property value. The collection of password credentials associated with the service principal. Not nullable.
     * @param value Value to set for the passwordCredentials property.
     */
    public set passwordCredentials(value: PasswordCredential[] | undefined) {
        if(value) {
            const passwordCredentialsArrValue: PasswordCredentialImpl[] = [];
            this.passwordCredentials?.forEach(element => {
                passwordCredentialsArrValue.push((element instanceof PasswordCredentialImpl? element as PasswordCredentialImpl:new PasswordCredentialImpl(element)));
            });
            this._passwordCredentials = passwordCredentialsArrValue;
        }
    };
    /**
     * Gets the preferredSingleSignOnMode property value. Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.
     * @returns a string
     */
    public get preferredSingleSignOnMode() {
        return this._preferredSingleSignOnMode;
    };
    /**
     * Sets the preferredSingleSignOnMode property value. Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.
     * @param value Value to set for the preferredSingleSignOnMode property.
     */
    public set preferredSingleSignOnMode(value: string | undefined) {
        if(value) {
            this._preferredSingleSignOnMode = value;
        }
    };
    /**
     * Gets the preferredTokenSigningKeyThumbprint property value. Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.
     * @returns a string
     */
    public get preferredTokenSigningKeyThumbprint() {
        return this._preferredTokenSigningKeyThumbprint;
    };
    /**
     * Sets the preferredTokenSigningKeyThumbprint property value. Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.
     * @param value Value to set for the preferredTokenSigningKeyThumbprint property.
     */
    public set preferredTokenSigningKeyThumbprint(value: string | undefined) {
        if(value) {
            this._preferredTokenSigningKeyThumbprint = value;
        }
    };
    /**
     * Gets the replyUrls property value. The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.
     * @returns a string
     */
    public get replyUrls() {
        return this._replyUrls;
    };
    /**
     * Sets the replyUrls property value. The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.
     * @param value Value to set for the replyUrls property.
     */
    public set replyUrls(value: string[] | undefined) {
        if(value) {
            this._replyUrls = value;
        }
    };
    /**
     * Gets the resourceSpecificApplicationPermissions property value. The resource-specific application permissions exposed by this application. Currently, resource-specific permissions are only supported for Teams apps accessing to specific chats and teams using Microsoft Graph. Read-only.
     * @returns a ResourceSpecificPermissionInterface
     */
    public get resourceSpecificApplicationPermissions() {
        return this._resourceSpecificApplicationPermissions;
    };
    /**
     * Sets the resourceSpecificApplicationPermissions property value. The resource-specific application permissions exposed by this application. Currently, resource-specific permissions are only supported for Teams apps accessing to specific chats and teams using Microsoft Graph. Read-only.
     * @param value Value to set for the resourceSpecificApplicationPermissions property.
     */
    public set resourceSpecificApplicationPermissions(value: ResourceSpecificPermission[] | undefined) {
        if(value) {
            const resourceSpecificApplicationPermissionsArrValue: ResourceSpecificPermissionImpl[] = [];
            this.resourceSpecificApplicationPermissions?.forEach(element => {
                resourceSpecificApplicationPermissionsArrValue.push((element instanceof ResourceSpecificPermissionImpl? element as ResourceSpecificPermissionImpl:new ResourceSpecificPermissionImpl(element)));
            });
            this._resourceSpecificApplicationPermissions = resourceSpecificApplicationPermissionsArrValue;
        }
    };
    /**
     * Gets the samlSingleSignOnSettings property value. The collection for settings related to saml single sign-on.
     * @returns a SamlSingleSignOnSettingsInterface
     */
    public get samlSingleSignOnSettings() {
        return this._samlSingleSignOnSettings;
    };
    /**
     * Sets the samlSingleSignOnSettings property value. The collection for settings related to saml single sign-on.
     * @param value Value to set for the samlSingleSignOnSettings property.
     */
    public set samlSingleSignOnSettings(value: SamlSingleSignOnSettings | undefined) {
        if(value) {
            this._samlSingleSignOnSettings = value instanceof SamlSingleSignOnSettingsImpl? value as SamlSingleSignOnSettingsImpl: new SamlSingleSignOnSettingsImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accountEnabled){
            writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        }
        if(this.addIns && this.addIns.length != 0){        const addInsArrValue: AddInImpl[] = [];
        this.addIns?.forEach(element => {
            addInsArrValue.push((element instanceof AddInImpl? element as AddInImpl:new AddInImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AddInImpl>("addIns", addInsArrValue);
        }
        if(this.alternativeNames){
            writer.writeCollectionOfPrimitiveValues<string>("alternativeNames", this.alternativeNames);
        }
        if(this.appDescription){
            writer.writeStringValue("appDescription", this.appDescription);
        }
        if(this.appDisplayName){
            writer.writeStringValue("appDisplayName", this.appDisplayName);
        }
        if(this.appId){
            writer.writeStringValue("appId", this.appId);
        }
        if(this.applicationTemplateId){
            writer.writeStringValue("applicationTemplateId", this.applicationTemplateId);
        }
        if(this.appOwnerOrganizationId){
            writer.writeStringValue("appOwnerOrganizationId", this.appOwnerOrganizationId);
        }
        if(this.appRoleAssignedTo && this.appRoleAssignedTo.length != 0){        const appRoleAssignedToArrValue: AppRoleAssignmentImpl[] = [];
        this.appRoleAssignedTo?.forEach(element => {
            appRoleAssignedToArrValue.push((element instanceof AppRoleAssignmentImpl? element as AppRoleAssignmentImpl:new AppRoleAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AppRoleAssignmentImpl>("appRoleAssignedTo", appRoleAssignedToArrValue);
        }
        if(this.appRoleAssignmentRequired){
            writer.writeBooleanValue("appRoleAssignmentRequired", this.appRoleAssignmentRequired);
        }
        if(this.appRoleAssignments && this.appRoleAssignments.length != 0){        const appRoleAssignmentsArrValue: AppRoleAssignmentImpl[] = [];
        this.appRoleAssignments?.forEach(element => {
            appRoleAssignmentsArrValue.push((element instanceof AppRoleAssignmentImpl? element as AppRoleAssignmentImpl:new AppRoleAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AppRoleAssignmentImpl>("appRoleAssignments", appRoleAssignmentsArrValue);
        }
        if(this.appRoles && this.appRoles.length != 0){        const appRolesArrValue: AppRoleImpl[] = [];
        this.appRoles?.forEach(element => {
            appRolesArrValue.push((element instanceof AppRoleImpl? element as AppRoleImpl:new AppRoleImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AppRoleImpl>("appRoles", appRolesArrValue);
        }
        if(this.claimsMappingPolicies && this.claimsMappingPolicies.length != 0){        const claimsMappingPoliciesArrValue: ClaimsMappingPolicyImpl[] = [];
        this.claimsMappingPolicies?.forEach(element => {
            claimsMappingPoliciesArrValue.push((element instanceof ClaimsMappingPolicyImpl? element as ClaimsMappingPolicyImpl:new ClaimsMappingPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ClaimsMappingPolicyImpl>("claimsMappingPolicies", claimsMappingPoliciesArrValue);
        }
        if(this.createdObjects && this.createdObjects.length != 0){        const createdObjectsArrValue: DirectoryObjectImpl[] = [];
        this.createdObjects?.forEach(element => {
            createdObjectsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("createdObjects", createdObjectsArrValue);
        }
        if(this.delegatedPermissionClassifications && this.delegatedPermissionClassifications.length != 0){        const delegatedPermissionClassificationsArrValue: DelegatedPermissionClassificationImpl[] = [];
        this.delegatedPermissionClassifications?.forEach(element => {
            delegatedPermissionClassificationsArrValue.push((element instanceof DelegatedPermissionClassificationImpl? element as DelegatedPermissionClassificationImpl:new DelegatedPermissionClassificationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DelegatedPermissionClassificationImpl>("delegatedPermissionClassifications", delegatedPermissionClassificationsArrValue);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.disabledByMicrosoftStatus){
            writer.writeStringValue("disabledByMicrosoftStatus", this.disabledByMicrosoftStatus);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.endpoints && this.endpoints.length != 0){        const endpointsArrValue: EndpointImpl[] = [];
        this.endpoints?.forEach(element => {
            endpointsArrValue.push((element instanceof EndpointImpl? element as EndpointImpl:new EndpointImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EndpointImpl>("endpoints", endpointsArrValue);
        }
        if(this.homepage){
            writer.writeStringValue("homepage", this.homepage);
        }
        if(this.homeRealmDiscoveryPolicies && this.homeRealmDiscoveryPolicies.length != 0){        const homeRealmDiscoveryPoliciesArrValue: HomeRealmDiscoveryPolicyImpl[] = [];
        this.homeRealmDiscoveryPolicies?.forEach(element => {
            homeRealmDiscoveryPoliciesArrValue.push((element instanceof HomeRealmDiscoveryPolicyImpl? element as HomeRealmDiscoveryPolicyImpl:new HomeRealmDiscoveryPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>("homeRealmDiscoveryPolicies", homeRealmDiscoveryPoliciesArrValue);
        }
        if(this.info){
            writer.writeObjectValue<InformationalUrlImpl>("info", (this.info instanceof InformationalUrlImpl? this.info as InformationalUrlImpl: new InformationalUrlImpl(this.info)));
        }
        if(this.keyCredentials && this.keyCredentials.length != 0){        const keyCredentialsArrValue: KeyCredentialImpl[] = [];
        this.keyCredentials?.forEach(element => {
            keyCredentialsArrValue.push((element instanceof KeyCredentialImpl? element as KeyCredentialImpl:new KeyCredentialImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyCredentialImpl>("keyCredentials", keyCredentialsArrValue);
        }
        if(this.loginUrl){
            writer.writeStringValue("loginUrl", this.loginUrl);
        }
        if(this.logoutUrl){
            writer.writeStringValue("logoutUrl", this.logoutUrl);
        }
        if(this.memberOf && this.memberOf.length != 0){        const memberOfArrValue: DirectoryObjectImpl[] = [];
        this.memberOf?.forEach(element => {
            memberOfArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("memberOf", memberOfArrValue);
        }
        if(this.notes){
            writer.writeStringValue("notes", this.notes);
        }
        if(this.notificationEmailAddresses){
            writer.writeCollectionOfPrimitiveValues<string>("notificationEmailAddresses", this.notificationEmailAddresses);
        }
        if(this.oauth2PermissionGrants && this.oauth2PermissionGrants.length != 0){        const oauth2PermissionGrantsArrValue: OAuth2PermissionGrantImpl[] = [];
        this.oauth2PermissionGrants?.forEach(element => {
            oauth2PermissionGrantsArrValue.push((element instanceof OAuth2PermissionGrantImpl? element as OAuth2PermissionGrantImpl:new OAuth2PermissionGrantImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OAuth2PermissionGrantImpl>("oauth2PermissionGrants", oauth2PermissionGrantsArrValue);
        }
        if(this.oauth2PermissionScopes && this.oauth2PermissionScopes.length != 0){        const oauth2PermissionScopesArrValue: PermissionScopeImpl[] = [];
        this.oauth2PermissionScopes?.forEach(element => {
            oauth2PermissionScopesArrValue.push((element instanceof PermissionScopeImpl? element as PermissionScopeImpl:new PermissionScopeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PermissionScopeImpl>("oauth2PermissionScopes", oauth2PermissionScopesArrValue);
        }
        if(this.ownedObjects && this.ownedObjects.length != 0){        const ownedObjectsArrValue: DirectoryObjectImpl[] = [];
        this.ownedObjects?.forEach(element => {
            ownedObjectsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("ownedObjects", ownedObjectsArrValue);
        }
        if(this.owners && this.owners.length != 0){        const ownersArrValue: DirectoryObjectImpl[] = [];
        this.owners?.forEach(element => {
            ownersArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("owners", ownersArrValue);
        }
        if(this.passwordCredentials && this.passwordCredentials.length != 0){        const passwordCredentialsArrValue: PasswordCredentialImpl[] = [];
        this.passwordCredentials?.forEach(element => {
            passwordCredentialsArrValue.push((element instanceof PasswordCredentialImpl? element as PasswordCredentialImpl:new PasswordCredentialImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PasswordCredentialImpl>("passwordCredentials", passwordCredentialsArrValue);
        }
        if(this.preferredSingleSignOnMode){
            writer.writeStringValue("preferredSingleSignOnMode", this.preferredSingleSignOnMode);
        }
        if(this.preferredTokenSigningKeyThumbprint){
            writer.writeStringValue("preferredTokenSigningKeyThumbprint", this.preferredTokenSigningKeyThumbprint);
        }
        if(this.replyUrls){
            writer.writeCollectionOfPrimitiveValues<string>("replyUrls", this.replyUrls);
        }
        if(this.resourceSpecificApplicationPermissions && this.resourceSpecificApplicationPermissions.length != 0){        const resourceSpecificApplicationPermissionsArrValue: ResourceSpecificPermissionImpl[] = [];
        this.resourceSpecificApplicationPermissions?.forEach(element => {
            resourceSpecificApplicationPermissionsArrValue.push((element instanceof ResourceSpecificPermissionImpl? element as ResourceSpecificPermissionImpl:new ResourceSpecificPermissionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ResourceSpecificPermissionImpl>("resourceSpecificApplicationPermissions", resourceSpecificApplicationPermissionsArrValue);
        }
        if(this.samlSingleSignOnSettings){
            writer.writeObjectValue<SamlSingleSignOnSettingsImpl>("samlSingleSignOnSettings", (this.samlSingleSignOnSettings instanceof SamlSingleSignOnSettingsImpl? this.samlSingleSignOnSettings as SamlSingleSignOnSettingsImpl: new SamlSingleSignOnSettingsImpl(this.samlSingleSignOnSettings)));
        }
        if(this.servicePrincipalNames){
            writer.writeCollectionOfPrimitiveValues<string>("servicePrincipalNames", this.servicePrincipalNames);
        }
        if(this.servicePrincipalType){
            writer.writeStringValue("servicePrincipalType", this.servicePrincipalType);
        }
        if(this.signInAudience){
            writer.writeStringValue("signInAudience", this.signInAudience);
        }
        if(this.tags){
            writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        }
        if(this.tokenEncryptionKeyId){
            writer.writeStringValue("tokenEncryptionKeyId", this.tokenEncryptionKeyId);
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
        if(this.transitiveMemberOf && this.transitiveMemberOf.length != 0){        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
        this.transitiveMemberOf?.forEach(element => {
            transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMemberOf", transitiveMemberOfArrValue);
        }
    };
    /**
     * Gets the servicePrincipalNames property value. Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get servicePrincipalNames() {
        return this._servicePrincipalNames;
    };
    /**
     * Sets the servicePrincipalNames property value. Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the servicePrincipalNames property.
     */
    public set servicePrincipalNames(value: string[] | undefined) {
        if(value) {
            this._servicePrincipalNames = value;
        }
    };
    /**
     * Gets the servicePrincipalType property value. Identifies if the service principal represents an application or a managed identity. This is set by Azure AD internally. For a service principal that represents an application this is set as Application. For a service principal that represent a managed identity this is set as ManagedIdentity. The SocialIdp type is for internal use.
     * @returns a string
     */
    public get servicePrincipalType() {
        return this._servicePrincipalType;
    };
    /**
     * Sets the servicePrincipalType property value. Identifies if the service principal represents an application or a managed identity. This is set by Azure AD internally. For a service principal that represents an application this is set as Application. For a service principal that represent a managed identity this is set as ManagedIdentity. The SocialIdp type is for internal use.
     * @param value Value to set for the servicePrincipalType property.
     */
    public set servicePrincipalType(value: string | undefined) {
        if(value) {
            this._servicePrincipalType = value;
        }
    };
    /**
     * Gets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
     * @returns a string
     */
    public get signInAudience() {
        return this._signInAudience;
    };
    /**
     * Sets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
     * @param value Value to set for the signInAudience property.
     */
    public set signInAudience(value: string | undefined) {
        if(value) {
            this._signInAudience = value;
        }
    };
    /**
     * Gets the tags property value. Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        if(value) {
            this._tags = value;
        }
    };
    /**
     * Gets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @returns a string
     */
    public get tokenEncryptionKeyId() {
        return this._tokenEncryptionKeyId;
    };
    /**
     * Sets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @param value Value to set for the tokenEncryptionKeyId property.
     */
    public set tokenEncryptionKeyId(value: string | undefined) {
        if(value) {
            this._tokenEncryptionKeyId = value;
        }
    };
    /**
     * Gets the tokenIssuancePolicies property value. The tokenIssuancePolicies assigned to this service principal. Supports $expand.
     * @returns a TokenIssuancePolicyInterface
     */
    public get tokenIssuancePolicies() {
        return this._tokenIssuancePolicies;
    };
    /**
     * Sets the tokenIssuancePolicies property value. The tokenIssuancePolicies assigned to this service principal. Supports $expand.
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
     * Gets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this service principal. Supports $expand.
     * @returns a TokenLifetimePolicyInterface
     */
    public get tokenLifetimePolicies() {
        return this._tokenLifetimePolicies;
    };
    /**
     * Sets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this service principal. Supports $expand.
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
    /**
     * Gets the transitiveMemberOf property value. The transitiveMemberOf property
     * @returns a DirectoryObjectInterface
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. The transitiveMemberOf property
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
            this.transitiveMemberOf?.forEach(element => {
                transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._transitiveMemberOf = transitiveMemberOfArrValue;
        }
    };
}

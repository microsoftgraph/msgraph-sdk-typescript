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

export class ServicePrincipalImpl extends DirectoryObjectImpl implements Parsable, ServicePrincipal {
    /** true if the service principal account is enabled; otherwise, false. Supports $filter (eq, ne, not, in). */
    accountEnabled?: boolean | undefined;
    /** Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on. */
    addIns?: AddIn[] | undefined;
    /** Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith). */
    alternativeNames?: string[] | undefined;
    /** The description exposed by the associated application. */
    appDescription?: string | undefined;
    /** The display name exposed by the associated application. */
    appDisplayName?: string | undefined;
    /** The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith). */
    appId?: string | undefined;
    /** Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith). */
    applicationTemplateId?: string | undefined;
    /** Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications.Supports $filter (eq, ne, NOT, ge, le). */
    appOwnerOrganizationId?: string | undefined;
    /** App role assignments for this app or service, granted to users, groups, and other service principals.Supports $expand. */
    appRoleAssignedTo?: AppRoleAssignment[] | undefined;
    /** Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT). */
    appRoleAssignmentRequired?: boolean | undefined;
    /** App role assignment for another app or service, granted to this service principal. Supports $expand. */
    appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable. */
    appRoles?: AppRole[] | undefined;
    /** The claimsMappingPolicies assigned to this service principal. Supports $expand. */
    claimsMappingPolicies?: ClaimsMappingPolicy[] | undefined;
    /** Directory objects created by this service principal. Read-only. Nullable. */
    createdObjects?: DirectoryObject[] | undefined;
    /** The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand. */
    delegatedPermissionClassifications?: DelegatedPermissionClassification[] | undefined;
    /** Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    description?: string | undefined;
    /** Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not). */
    disabledByMicrosoftStatus?: string | undefined;
    /** The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    displayName?: string | undefined;
    /** Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences. */
    endpoints?: Endpoint[] | undefined;
    /** Home page or landing page of the application. */
    homepage?: string | undefined;
    /** The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand. */
    homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values). */
    info?: InformationalUrl | undefined;
    /** The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le). */
    keyCredentials?: KeyCredential[] | undefined;
    /** Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL. */
    loginUrl?: string | undefined;
    /** Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols. */
    logoutUrl?: string | undefined;
    /** Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand. */
    memberOf?: DirectoryObject[] | undefined;
    /** Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters. */
    notes?: string | undefined;
    /** Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications. */
    notificationEmailAddresses?: string[] | undefined;
    /** Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable. */
    oauth2PermissionGrants?: OAuth2PermissionGrant[] | undefined;
    /** The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable. */
    oauth2PermissionScopes?: PermissionScope[] | undefined;
    /** Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand. */
    ownedObjects?: DirectoryObject[] | undefined;
    /** Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable. Supports $expand. */
    owners?: DirectoryObject[] | undefined;
    /** The collection of password credentials associated with the service principal. Not nullable. */
    passwordCredentials?: PasswordCredential[] | undefined;
    /** Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc. */
    preferredSingleSignOnMode?: string | undefined;
    /** Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions. */
    preferredTokenSigningKeyThumbprint?: string | undefined;
    /** The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable. */
    replyUrls?: string[] | undefined;
    /** The resource-specific application permissions exposed by this application. Currently, resource-specific permissions are only supported for Teams apps accessing to specific chats and teams using Microsoft Graph. Read-only. */
    resourceSpecificApplicationPermissions?: ResourceSpecificPermission[] | undefined;
    /** The collection for settings related to saml single sign-on. */
    samlSingleSignOnSettings?: SamlSingleSignOnSettings | undefined;
    /** Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith). */
    servicePrincipalNames?: string[] | undefined;
    /** Identifies if the service principal represents an application or a managed identity. This is set by Azure AD internally. For a service principal that represents an application this is set as Application. For a service principal that represent a managed identity this is set as ManagedIdentity. The SocialIdp type is for internal use. */
    servicePrincipalType?: string | undefined;
    /** Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only. */
    signInAudience?: string | undefined;
    /** Custom strings that can be used to categorize and identify the service principal. Not nullable. Supports $filter (eq, not, ge, le, startsWith). */
    tags?: string[] | undefined;
    /** Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user. */
    tokenEncryptionKeyId?: string | undefined;
    /** The tokenIssuancePolicies assigned to this service principal. Supports $expand. */
    tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The tokenLifetimePolicies assigned to this service principal. Supports $expand. */
    tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /** The transitiveMemberOf property */
    transitiveMemberOf?: DirectoryObject[] | undefined;
    /**
     * Instantiates a new servicePrincipal and sets the default values.
     * @param servicePrincipalParameterValue 
     */
    public constructor(servicePrincipalParameterValue?: ServicePrincipal | undefined) {
        super();
        this.accountEnabled = servicePrincipalParameterValue?.accountEnabled ;
        this.addIns = servicePrincipalParameterValue?.addIns ;
        this.alternativeNames = servicePrincipalParameterValue?.alternativeNames ;
        this.appDescription = servicePrincipalParameterValue?.appDescription ;
        this.appDisplayName = servicePrincipalParameterValue?.appDisplayName ;
        this.appId = servicePrincipalParameterValue?.appId ;
        this.applicationTemplateId = servicePrincipalParameterValue?.applicationTemplateId ;
        this.appOwnerOrganizationId = servicePrincipalParameterValue?.appOwnerOrganizationId ;
        this.appRoleAssignedTo = servicePrincipalParameterValue?.appRoleAssignedTo ;
        this.appRoleAssignmentRequired = servicePrincipalParameterValue?.appRoleAssignmentRequired ;
        this.appRoleAssignments = servicePrincipalParameterValue?.appRoleAssignments ;
        this.appRoles = servicePrincipalParameterValue?.appRoles ;
        this.claimsMappingPolicies = servicePrincipalParameterValue?.claimsMappingPolicies ;
        this.createdObjects = servicePrincipalParameterValue?.createdObjects ;
        this.delegatedPermissionClassifications = servicePrincipalParameterValue?.delegatedPermissionClassifications ;
        this.description = servicePrincipalParameterValue?.description ;
        this.disabledByMicrosoftStatus = servicePrincipalParameterValue?.disabledByMicrosoftStatus ;
        this.displayName = servicePrincipalParameterValue?.displayName ;
        this.endpoints = servicePrincipalParameterValue?.endpoints ;
        this.homepage = servicePrincipalParameterValue?.homepage ;
        this.homeRealmDiscoveryPolicies = servicePrincipalParameterValue?.homeRealmDiscoveryPolicies ;
        this.info = servicePrincipalParameterValue?.info ;
        this.keyCredentials = servicePrincipalParameterValue?.keyCredentials ;
        this.loginUrl = servicePrincipalParameterValue?.loginUrl ;
        this.logoutUrl = servicePrincipalParameterValue?.logoutUrl ;
        this.memberOf = servicePrincipalParameterValue?.memberOf ;
        this.notes = servicePrincipalParameterValue?.notes ;
        this.notificationEmailAddresses = servicePrincipalParameterValue?.notificationEmailAddresses ;
        this.oauth2PermissionGrants = servicePrincipalParameterValue?.oauth2PermissionGrants ;
        this.oauth2PermissionScopes = servicePrincipalParameterValue?.oauth2PermissionScopes ;
        this.ownedObjects = servicePrincipalParameterValue?.ownedObjects ;
        this.owners = servicePrincipalParameterValue?.owners ;
        this.passwordCredentials = servicePrincipalParameterValue?.passwordCredentials ;
        this.preferredSingleSignOnMode = servicePrincipalParameterValue?.preferredSingleSignOnMode ;
        this.preferredTokenSigningKeyThumbprint = servicePrincipalParameterValue?.preferredTokenSigningKeyThumbprint ;
        this.replyUrls = servicePrincipalParameterValue?.replyUrls ;
        this.resourceSpecificApplicationPermissions = servicePrincipalParameterValue?.resourceSpecificApplicationPermissions ;
        this.samlSingleSignOnSettings = servicePrincipalParameterValue?.samlSingleSignOnSettings ;
        this.servicePrincipalNames = servicePrincipalParameterValue?.servicePrincipalNames ;
        this.servicePrincipalType = servicePrincipalParameterValue?.servicePrincipalType ;
        this.signInAudience = servicePrincipalParameterValue?.signInAudience ;
        this.tags = servicePrincipalParameterValue?.tags ;
        this.tokenEncryptionKeyId = servicePrincipalParameterValue?.tokenEncryptionKeyId ;
        this.tokenIssuancePolicies = servicePrincipalParameterValue?.tokenIssuancePolicies ;
        this.tokenLifetimePolicies = servicePrincipalParameterValue?.tokenLifetimePolicies ;
        this.transitiveMemberOf = servicePrincipalParameterValue?.transitiveMemberOf ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accountEnabled){
        if(this.accountEnabled)
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        }
        if(this.addIns){
        const addInsArrValue: AddInImpl[] = []; this.addIns?.forEach(element => {addInsArrValue.push(new AddInImpl(element));});
        writer.writeCollectionOfObjectValues<AddInImpl>("addIns", addInsArrValue);
        }
        if(this.alternativeNames){
        if(this.alternativeNames)
        writer.writeCollectionOfPrimitiveValues<string>("alternativeNames", this.alternativeNames);
        }
        if(this.appDescription){
        if(this.appDescription)
        writer.writeStringValue("appDescription", this.appDescription);
        }
        if(this.appDisplayName){
        if(this.appDisplayName)
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        }
        if(this.appId){
        if(this.appId)
        writer.writeStringValue("appId", this.appId);
        }
        if(this.applicationTemplateId){
        if(this.applicationTemplateId)
        writer.writeStringValue("applicationTemplateId", this.applicationTemplateId);
        }
        if(this.appOwnerOrganizationId){
        if(this.appOwnerOrganizationId)
        writer.writeStringValue("appOwnerOrganizationId", this.appOwnerOrganizationId);
        }
        if(this.appRoleAssignedTo){
        const appRoleAssignedToArrValue: AppRoleAssignmentImpl[] = []; this.appRoleAssignedTo?.forEach(element => {appRoleAssignedToArrValue.push(new AppRoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<AppRoleAssignmentImpl>("appRoleAssignedTo", appRoleAssignedToArrValue);
        }
        if(this.appRoleAssignmentRequired){
        if(this.appRoleAssignmentRequired)
        writer.writeBooleanValue("appRoleAssignmentRequired", this.appRoleAssignmentRequired);
        }
        if(this.appRoleAssignments){
        const appRoleAssignmentsArrValue: AppRoleAssignmentImpl[] = []; this.appRoleAssignments?.forEach(element => {appRoleAssignmentsArrValue.push(new AppRoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<AppRoleAssignmentImpl>("appRoleAssignments", appRoleAssignmentsArrValue);
        }
        if(this.appRoles){
        const appRolesArrValue: AppRoleImpl[] = []; this.appRoles?.forEach(element => {appRolesArrValue.push(new AppRoleImpl(element));});
        writer.writeCollectionOfObjectValues<AppRoleImpl>("appRoles", appRolesArrValue);
        }
        if(this.claimsMappingPolicies){
        const claimsMappingPoliciesArrValue: ClaimsMappingPolicyImpl[] = []; this.claimsMappingPolicies?.forEach(element => {claimsMappingPoliciesArrValue.push(new ClaimsMappingPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ClaimsMappingPolicyImpl>("claimsMappingPolicies", claimsMappingPoliciesArrValue);
        }
        if(this.createdObjects){
        const createdObjectsArrValue: DirectoryObjectImpl[] = []; this.createdObjects?.forEach(element => {createdObjectsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("createdObjects", createdObjectsArrValue);
        }
        if(this.delegatedPermissionClassifications){
        const delegatedPermissionClassificationsArrValue: DelegatedPermissionClassificationImpl[] = []; this.delegatedPermissionClassifications?.forEach(element => {delegatedPermissionClassificationsArrValue.push(new DelegatedPermissionClassificationImpl(element));});
        writer.writeCollectionOfObjectValues<DelegatedPermissionClassificationImpl>("delegatedPermissionClassifications", delegatedPermissionClassificationsArrValue);
        }
        if(this.description){
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.disabledByMicrosoftStatus){
        if(this.disabledByMicrosoftStatus)
        writer.writeStringValue("disabledByMicrosoftStatus", this.disabledByMicrosoftStatus);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.endpoints){
        const endpointsArrValue: EndpointImpl[] = []; this.endpoints?.forEach(element => {endpointsArrValue.push(new EndpointImpl(element));});
        writer.writeCollectionOfObjectValues<EndpointImpl>("endpoints", endpointsArrValue);
        }
        if(this.homepage){
        if(this.homepage)
        writer.writeStringValue("homepage", this.homepage);
        }
        if(this.homeRealmDiscoveryPolicies){
        const homeRealmDiscoveryPoliciesArrValue: HomeRealmDiscoveryPolicyImpl[] = []; this.homeRealmDiscoveryPolicies?.forEach(element => {homeRealmDiscoveryPoliciesArrValue.push(new HomeRealmDiscoveryPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>("homeRealmDiscoveryPolicies", homeRealmDiscoveryPoliciesArrValue);
        }
        if(this.info){
        if(this.info)
        writer.writeObjectValue<InformationalUrlImpl>("info", new InformationalUrlImpl(this.info));
        }
        if(this.keyCredentials){
        const keyCredentialsArrValue: KeyCredentialImpl[] = []; this.keyCredentials?.forEach(element => {keyCredentialsArrValue.push(new KeyCredentialImpl(element));});
        writer.writeCollectionOfObjectValues<KeyCredentialImpl>("keyCredentials", keyCredentialsArrValue);
        }
        if(this.loginUrl){
        if(this.loginUrl)
        writer.writeStringValue("loginUrl", this.loginUrl);
        }
        if(this.logoutUrl){
        if(this.logoutUrl)
        writer.writeStringValue("logoutUrl", this.logoutUrl);
        }
        if(this.memberOf){
        const memberOfArrValue: DirectoryObjectImpl[] = []; this.memberOf?.forEach(element => {memberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("memberOf", memberOfArrValue);
        }
        if(this.notes){
        if(this.notes)
        writer.writeStringValue("notes", this.notes);
        }
        if(this.notificationEmailAddresses){
        if(this.notificationEmailAddresses)
        writer.writeCollectionOfPrimitiveValues<string>("notificationEmailAddresses", this.notificationEmailAddresses);
        }
        if(this.oauth2PermissionGrants){
        const oauth2PermissionGrantsArrValue: OAuth2PermissionGrantImpl[] = []; this.oauth2PermissionGrants?.forEach(element => {oauth2PermissionGrantsArrValue.push(new OAuth2PermissionGrantImpl(element));});
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrantImpl>("oauth2PermissionGrants", oauth2PermissionGrantsArrValue);
        }
        if(this.oauth2PermissionScopes){
        const oauth2PermissionScopesArrValue: PermissionScopeImpl[] = []; this.oauth2PermissionScopes?.forEach(element => {oauth2PermissionScopesArrValue.push(new PermissionScopeImpl(element));});
        writer.writeCollectionOfObjectValues<PermissionScopeImpl>("oauth2PermissionScopes", oauth2PermissionScopesArrValue);
        }
        if(this.ownedObjects){
        const ownedObjectsArrValue: DirectoryObjectImpl[] = []; this.ownedObjects?.forEach(element => {ownedObjectsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("ownedObjects", ownedObjectsArrValue);
        }
        if(this.owners){
        const ownersArrValue: DirectoryObjectImpl[] = []; this.owners?.forEach(element => {ownersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("owners", ownersArrValue);
        }
        if(this.passwordCredentials){
        const passwordCredentialsArrValue: PasswordCredentialImpl[] = []; this.passwordCredentials?.forEach(element => {passwordCredentialsArrValue.push(new PasswordCredentialImpl(element));});
        writer.writeCollectionOfObjectValues<PasswordCredentialImpl>("passwordCredentials", passwordCredentialsArrValue);
        }
        if(this.preferredSingleSignOnMode){
        if(this.preferredSingleSignOnMode)
        writer.writeStringValue("preferredSingleSignOnMode", this.preferredSingleSignOnMode);
        }
        if(this.preferredTokenSigningKeyThumbprint){
        if(this.preferredTokenSigningKeyThumbprint)
        writer.writeStringValue("preferredTokenSigningKeyThumbprint", this.preferredTokenSigningKeyThumbprint);
        }
        if(this.replyUrls){
        if(this.replyUrls)
        writer.writeCollectionOfPrimitiveValues<string>("replyUrls", this.replyUrls);
        }
        if(this.resourceSpecificApplicationPermissions){
        const resourceSpecificApplicationPermissionsArrValue: ResourceSpecificPermissionImpl[] = []; this.resourceSpecificApplicationPermissions?.forEach(element => {resourceSpecificApplicationPermissionsArrValue.push(new ResourceSpecificPermissionImpl(element));});
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionImpl>("resourceSpecificApplicationPermissions", resourceSpecificApplicationPermissionsArrValue);
        }
        if(this.samlSingleSignOnSettings){
        if(this.samlSingleSignOnSettings)
        writer.writeObjectValue<SamlSingleSignOnSettingsImpl>("samlSingleSignOnSettings", new SamlSingleSignOnSettingsImpl(this.samlSingleSignOnSettings));
        }
        if(this.servicePrincipalNames){
        if(this.servicePrincipalNames)
        writer.writeCollectionOfPrimitiveValues<string>("servicePrincipalNames", this.servicePrincipalNames);
        }
        if(this.servicePrincipalType){
        if(this.servicePrincipalType)
        writer.writeStringValue("servicePrincipalType", this.servicePrincipalType);
        }
        if(this.signInAudience){
        if(this.signInAudience)
        writer.writeStringValue("signInAudience", this.signInAudience);
        }
        if(this.tags){
        if(this.tags)
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        }
        if(this.tokenEncryptionKeyId){
        if(this.tokenEncryptionKeyId)
        writer.writeStringValue("tokenEncryptionKeyId", this.tokenEncryptionKeyId);
        }
        if(this.tokenIssuancePolicies){
        const tokenIssuancePoliciesArrValue: TokenIssuancePolicyImpl[] = []; this.tokenIssuancePolicies?.forEach(element => {tokenIssuancePoliciesArrValue.push(new TokenIssuancePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<TokenIssuancePolicyImpl>("tokenIssuancePolicies", tokenIssuancePoliciesArrValue);
        }
        if(this.tokenLifetimePolicies){
        const tokenLifetimePoliciesArrValue: TokenLifetimePolicyImpl[] = []; this.tokenLifetimePolicies?.forEach(element => {tokenLifetimePoliciesArrValue.push(new TokenLifetimePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<TokenLifetimePolicyImpl>("tokenLifetimePolicies", tokenLifetimePoliciesArrValue);
        }
        if(this.transitiveMemberOf){
        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = []; this.transitiveMemberOf?.forEach(element => {transitiveMemberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMemberOf", transitiveMemberOfArrValue);
        }
    };
}

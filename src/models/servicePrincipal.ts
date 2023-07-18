import {AddIn} from './addIn';
import {AppManagementPolicy} from './appManagementPolicy';
import {AppRole} from './appRole';
import {AppRoleAssignment} from './appRoleAssignment';
import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {DirectoryObject} from './directoryObject';
import {Endpoint} from './endpoint';
import {FederatedIdentityCredential} from './federatedIdentityCredential';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {InformationalUrl} from './informationalUrl';
import {KeyCredential} from './keyCredential';
import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {PasswordCredential} from './passwordCredential';
import {PermissionScope} from './permissionScope';
import {ResourceSpecificPermission} from './resourceSpecificPermission';
import {SamlSingleSignOnSettings} from './samlSingleSignOnSettings';
import {Synchronization} from './synchronization';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {VerifiedPublisher} from './verifiedPublisher';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface ServicePrincipal extends DirectoryObject, Parsable {
    /**
     * true if the service principal account is enabled; otherwise, false. If set to false, then no users will be able to sign in to this app, even if they are assigned to it. Supports $filter (eq, ne, not, in).
     */
    accountEnabled?: boolean | undefined;
    /**
     * Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Microsoft 365 call the application in the context of a document the user is working on.
     */
    addIns?: AddIn[] | undefined;
    /**
     * Used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. Supports $filter (eq, not, ge, le, startsWith).
     */
    alternativeNames?: string[] | undefined;
    /**
     * The description exposed by the associated application.
     */
    appDescription?: string | undefined;
    /**
     * The display name exposed by the associated application.
     */
    appDisplayName?: string | undefined;
    /**
     * The unique identifier for the associated application (its appId property). Supports $filter (eq, ne, not, in, startsWith).
     */
    appId?: string | undefined;
    /**
     * Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only. Supports $filter (eq, ne, NOT, startsWith).
     */
    applicationTemplateId?: string | undefined;
    /**
     * The appManagementPolicy applied to this application.
     */
    appManagementPolicies?: AppManagementPolicy[] | undefined;
    /**
     * Contains the tenant id where the application is registered. This is applicable only to service principals backed by applications. Supports $filter (eq, ne, NOT, ge, le).
     */
    appOwnerOrganizationId?: Guid | undefined;
    /**
     * App role assignments for this app or service, granted to users, groups, and other service principals. Supports $expand.
     */
    appRoleAssignedTo?: AppRoleAssignment[] | undefined;
    /**
     * Specifies whether users or other service principals need to be granted an app role assignment for this service principal before users can sign in or apps can get tokens. The default value is false. Not nullable. Supports $filter (eq, ne, NOT).
     */
    appRoleAssignmentRequired?: boolean | undefined;
    /**
     * App role assignment for another app or service, granted to this service principal. Supports $expand.
     */
    appRoleAssignments?: AppRoleAssignment[] | undefined;
    /**
     * The roles exposed by the application which this service principal represents. For more information see the appRoles property definition on the application entity. Not nullable.
     */
    appRoles?: AppRole[] | undefined;
    /**
     * The claimsMappingPolicies assigned to this service principal. Supports $expand.
     */
    claimsMappingPolicies?: ClaimsMappingPolicy[] | undefined;
    /**
     * Directory objects created by this service principal. Read-only. Nullable.
     */
    createdObjects?: DirectoryObject[] | undefined;
    /**
     * The delegatedPermissionClassifications property
     */
    delegatedPermissionClassifications?: DelegatedPermissionClassification[] | undefined;
    /**
     * Free text field to provide an internal end-user facing description of the service principal. End-user portals such MyApps will display the application description in this field. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     */
    description?: string | undefined;
    /**
     * Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not).
     */
    disabledByMicrosoftStatus?: string | undefined;
    /**
     * The display name for the service principal. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     */
    displayName?: string | undefined;
    /**
     * The endpoints property
     */
    endpoints?: Endpoint[] | undefined;
    /**
     * Federated identities for a specific type of service principal - managed identity. Supports $expand and $filter (/$count eq 0, /$count ne 0).
     */
    federatedIdentityCredentials?: FederatedIdentityCredential[] | undefined;
    /**
     * Home page or landing page of the application.
     */
    homepage?: string | undefined;
    /**
     * The homeRealmDiscoveryPolicies assigned to this service principal. Supports $expand.
     */
    homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /**
     * Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     */
    info?: InformationalUrl | undefined;
    /**
     * The collection of key credentials associated with the service principal. Not nullable. Supports $filter (eq, not, ge, le).
     */
    keyCredentials?: KeyCredential[] | undefined;
    /**
     * Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the Azure AD My Apps, or the Azure AD SSO URL.
     */
    loginUrl?: string | undefined;
    /**
     * Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect front-channel, back-channel or SAML logout protocols.
     */
    logoutUrl?: string | undefined;
    /**
     * Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
     */
    memberOf?: DirectoryObject[] | undefined;
    /**
     * Free text field to capture information about the service principal, typically used for operational purposes. Maximum allowed size is 1024 characters.
     */
    notes?: string | undefined;
    /**
     * Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications.
     */
    notificationEmailAddresses?: string[] | undefined;
    /**
     * Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user. Read-only. Nullable.
     */
    oauth2PermissionGrants?: OAuth2PermissionGrant[] | undefined;
    /**
     * The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on the application entity's api property. Not nullable.
     */
    oauth2PermissionScopes?: PermissionScope[] | undefined;
    /**
     * Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     */
    ownedObjects?: DirectoryObject[] | undefined;
    /**
     * Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or servicePrincipals who are allowed to modify this object. Read-only. Nullable.  Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     */
    owners?: DirectoryObject[] | undefined;
    /**
     * The collection of password credentials associated with the application. Not nullable.
     */
    passwordCredentials?: PasswordCredential[] | undefined;
    /**
     * Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml, notSupported, and oidc.
     */
    preferredSingleSignOnMode?: string | undefined;
    /**
     * This property can be used on SAML applications (apps that have preferredSingleSignOnMode set to saml) to control which certificate is used to sign the SAML responses. For applications that are not SAML, do not write or otherwise rely on this property.
     */
    preferredTokenSigningKeyThumbprint?: string | undefined;
    /**
     * The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to for the associated application. Not nullable.
     */
    replyUrls?: string[] | undefined;
    /**
     * The resource-specific application permissions exposed by this application. Currently, resource-specific permissions are only supported for Teams apps accessing to specific chats and teams using Microsoft Graph. Read-only.
     */
    resourceSpecificApplicationPermissions?: ResourceSpecificPermission[] | undefined;
    /**
     * The collection for settings related to saml single sign-on.
     */
    samlSingleSignOnSettings?: SamlSingleSignOnSettings | undefined;
    /**
     * Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For example,Client apps can specify a resource URI which is based on the values of this property to acquire an access token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued properties. Not nullable.  Supports $filter (eq, not, ge, le, startsWith).
     */
    servicePrincipalNames?: string[] | undefined;
    /**
     * Identifies whether the service principal represents an application, a managed identity, or a legacy application. This is set by Azure AD internally. The servicePrincipalType property can be set to three different values: __Application - A service principal that represents an application or service. The appId property identifies the associated app registration, and matches the appId of an application, possibly from a different tenant. If the associated app registration is missing, tokens are not issued for the service principal.__ManagedIdentity - A service principal that represents a managed identity. Service principals representing managed identities can be granted access and permissions, but cannot be updated or modified directly.__Legacy - A service principal that represents an app created before app registrations, or through legacy experiences. Legacy service principal can have credentials, service principal names, reply URLs, and other properties which are editable by an authorized user, but does not have an associated app registration. The appId value does not associate the service principal with an app registration. The service principal can only be used in the tenant where it was created.__SocialIdp - For internal use.
     */
    servicePrincipalType?: string | undefined;
    /**
     * Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values are:AzureADMyOrg: Users with a Microsoft work or school account in my organization's Azure AD tenant (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization's Azure AD tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school account in any organization's Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
     */
    signInAudience?: string | undefined;
    /**
     * Represents the capability for Azure Active Directory (Azure AD) identity synchronization through the Microsoft Graph API.
     */
    synchronization?: Synchronization | undefined;
    /**
     * Custom strings that can be used to categorize and identify the service principal. Not nullable. The value is the union of strings set here and on the associated application entity's tags property.Supports $filter (eq, not, ge, le, startsWith).
     */
    tags?: string[] | undefined;
    /**
     * Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for this application encrypted using the key specified by this property. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     */
    tokenEncryptionKeyId?: Guid | undefined;
    /**
     * The tokenIssuancePolicies assigned to this service principal.
     */
    tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /**
     * The tokenLifetimePolicies assigned to this service principal.
     */
    tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /**
     * The transitiveMemberOf property
     */
    transitiveMemberOf?: DirectoryObject[] | undefined;
    /**
     * Specifies the verified publisher of the application which this service principal represents.
     */
    verifiedPublisher?: VerifiedPublisher | undefined;
}

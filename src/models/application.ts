import { createAddInFromDiscriminatorValue, serializeAddIn, type AddIn } from './addIn';
import { createApiApplicationFromDiscriminatorValue, serializeApiApplication, type ApiApplication } from './apiApplication';
import { createAppManagementPolicyFromDiscriminatorValue, serializeAppManagementPolicy, type AppManagementPolicy } from './appManagementPolicy';
import { createAppRoleFromDiscriminatorValue, serializeAppRole, type AppRole } from './appRole';
import { createCertificationFromDiscriminatorValue, serializeCertification, type Certification } from './certification';
import { createDirectoryObjectFromDiscriminatorValue, deserializeIntoDirectoryObject, serializeDirectoryObject, type DirectoryObject } from './directoryObject';
import { createExtensionPropertyFromDiscriminatorValue, serializeExtensionProperty, type ExtensionProperty } from './extensionProperty';
import { createFederatedIdentityCredentialFromDiscriminatorValue, serializeFederatedIdentityCredential, type FederatedIdentityCredential } from './federatedIdentityCredential';
import { createHomeRealmDiscoveryPolicyFromDiscriminatorValue, serializeHomeRealmDiscoveryPolicy, type HomeRealmDiscoveryPolicy } from './homeRealmDiscoveryPolicy';
import { createInformationalUrlFromDiscriminatorValue, serializeInformationalUrl, type InformationalUrl } from './informationalUrl';
import { createKeyCredentialFromDiscriminatorValue, serializeKeyCredential, type KeyCredential } from './keyCredential';
import { createOptionalClaimsFromDiscriminatorValue, serializeOptionalClaims, type OptionalClaims } from './optionalClaims';
import { createParentalControlSettingsFromDiscriminatorValue, serializeParentalControlSettings, type ParentalControlSettings } from './parentalControlSettings';
import { createPasswordCredentialFromDiscriminatorValue, serializePasswordCredential, type PasswordCredential } from './passwordCredential';
import { createPublicClientApplicationFromDiscriminatorValue, serializePublicClientApplication, type PublicClientApplication } from './publicClientApplication';
import { createRequestSignatureVerificationFromDiscriminatorValue, serializeRequestSignatureVerification, type RequestSignatureVerification } from './requestSignatureVerification';
import { createRequiredResourceAccessFromDiscriminatorValue, serializeRequiredResourceAccess, type RequiredResourceAccess } from './requiredResourceAccess';
import { createServicePrincipalLockConfigurationFromDiscriminatorValue, serializeServicePrincipalLockConfiguration, type ServicePrincipalLockConfiguration } from './servicePrincipalLockConfiguration';
import { createSpaApplicationFromDiscriminatorValue, serializeSpaApplication, type SpaApplication } from './spaApplication';
import { createSynchronizationFromDiscriminatorValue, serializeSynchronization, type Synchronization } from './synchronization';
import { createTokenIssuancePolicyFromDiscriminatorValue, serializeTokenIssuancePolicy, type TokenIssuancePolicy } from './tokenIssuancePolicy';
import { createTokenLifetimePolicyFromDiscriminatorValue, serializeTokenLifetimePolicy, type TokenLifetimePolicy } from './tokenLifetimePolicy';
import { createVerifiedPublisherFromDiscriminatorValue, serializeVerifiedPublisher, type VerifiedPublisher } from './verifiedPublisher';
import { createWebApplicationFromDiscriminatorValue, serializeWebApplication, type WebApplication } from './webApplication';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export interface Application extends DirectoryObject, Parsable {
    /**
     * Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on.
     */
    addIns?: AddIn[];
    /**
     * Specifies settings for an application that implements a web API.
     */
    api?: ApiApplication;
    /**
     * The unique identifier for the application that is assigned to an application by Azure AD. Not nullable. Read-only. Supports $filter (eq).
     */
    appId?: string;
    /**
     * Unique identifier of the applicationTemplate. Supports $filter (eq, not, ne).
     */
    applicationTemplateId?: string;
    /**
     * The appManagementPolicy applied to this application.
     */
    appManagementPolicies?: AppManagementPolicy[];
    /**
     * The collection of roles defined for the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable.
     */
    appRoles?: AppRole[];
    /**
     * Specifies the certification status of the application.
     */
    certification?: Certification;
    /**
     * The date and time the application was registered. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  Supports $filter (eq, ne, not, ge, le, in, and eq on null values) and $orderby.
     */
    createdDateTime?: Date;
    /**
     * Supports $filter (/$count eq 0, /$count ne 0). Read-only.
     */
    createdOnBehalfOf?: DirectoryObject;
    /**
     * The defaultRedirectUri property
     */
    defaultRedirectUri?: string;
    /**
     * Free text field to provide a description of the application object to end users. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     */
    description?: string;
    /**
     * Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not).
     */
    disabledByMicrosoftStatus?: string;
    /**
     * The display name for the application. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderby.
     */
    displayName?: string;
    /**
     * Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0).
     */
    extensionProperties?: ExtensionProperty[];
    /**
     * Federated identities for applications. Supports $expand and $filter (startsWith, /$count eq 0, /$count ne 0).
     */
    federatedIdentityCredentials?: FederatedIdentityCredential[];
    /**
     * Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following valid string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all of the security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of).
     */
    groupMembershipClaims?: string;
    /**
     * The homeRealmDiscoveryPolicies property
     */
    homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[];
    /**
     * Also known as App ID URI, this value is set when an application is used as a resource app. The identifierUris acts as the prefix for the scopes you'll reference in your API's code, and it must be globally unique. You can use the default value provided, which is in the form api://<application-client-id>, or specify a more readable URI like https://contoso.com/api. For more information on valid identifierUris patterns and best practices, see Azure AD application registration security best practices. Not nullable. Supports $filter (eq, ne, ge, le, startsWith).
     */
    identifierUris?: string[];
    /**
     * Basic profile information of the application such as  app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     */
    info?: InformationalUrl;
    /**
     * Specifies whether this application supports device authentication without a user. The default is false.
     */
    isDeviceOnlyAuthSupported?: boolean;
    /**
     * Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where it is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property.
     */
    isFallbackPublicClient?: boolean;
    /**
     * The collection of key credentials associated with the application. Not nullable. Supports $filter (eq, not, ge, le).
     */
    keyCredentials?: KeyCredential[];
    /**
     * The main logo for the application. Not nullable.
     */
    logo?: string;
    /**
     * Notes relevant for the management of the application.
     */
    notes?: string;
    /**
     * The oauth2RequirePostResponse property
     */
    oauth2RequirePostResponse?: boolean;
    /**
     * Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see How to: Provide optional claims to your app.
     */
    optionalClaims?: OptionalClaims;
    /**
     * Directory objects that are owners of the application. Read-only. Nullable. Supports $expand, $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1), and $select nested in $expand.
     */
    owners?: DirectoryObject[];
    /**
     * Specifies parental control settings for an application.
     */
    parentalControlSettings?: ParentalControlSettings;
    /**
     * The collection of password credentials associated with the application. Not nullable.
     */
    passwordCredentials?: PasswordCredential[];
    /**
     * Specifies settings for installed clients such as desktop or mobile devices.
     */
    publicClient?: PublicClientApplication;
    /**
     * The verified publisher domain for the application. Read-only. For more information, see How to: Configure an application's publisher domain. Supports $filter (eq, ne, ge, le, startsWith).
     */
    publisherDomain?: string;
    /**
     * Specifies whether this application requires Azure AD to verify the signed authentication requests.
     */
    requestSignatureVerification?: RequestSignatureVerification;
    /**
     * Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. No more than 50 resource services (APIs) can be configured. Beginning mid-October 2021, the total number of required permissions must not exceed 400. For more information, see Limits on requested permissions per app. Not nullable. Supports $filter (eq, not, ge, le).
     */
    requiredResourceAccess?: RequiredResourceAccess[];
    /**
     * The URL where the service exposes SAML metadata for federation. This property is valid only for single-tenant applications. Nullable.
     */
    samlMetadataUrl?: string;
    /**
     * References application or service contact information from a Service or Asset Management database. Nullable.
     */
    serviceManagementReference?: string;
    /**
     * Specifies whether sensitive properties of a multi-tenant application should be locked for editing after the application is provisioned in a tenant. Nullable. null by default.
     */
    servicePrincipalLockConfiguration?: ServicePrincipalLockConfiguration;
    /**
     * Specifies the Microsoft accounts that are supported for the current application. The possible values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount (default), and PersonalMicrosoftAccount. See more in the table. The value of this object also limits the number of permissions an app can request. For more information, see Limits on requested permissions per app. The value for this property has implications on other app object properties. As a result, if you change this property, you may need to change other properties first. For more information, see Validation differences for signInAudience.Supports $filter (eq, ne, not).
     */
    signInAudience?: string;
    /**
     * Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens.
     */
    spa?: SpaApplication;
    /**
     * Represents the capability for Azure Active Directory (Azure AD) identity synchronization through the Microsoft Graph API.
     */
    synchronization?: Synchronization;
    /**
     * Custom strings that can be used to categorize and identify the application. Not nullable. Strings added here will also appear in the tags property of any associated service principals.Supports $filter (eq, not, ge, le, startsWith) and $search.
     */
    tags?: string[];
    /**
     * Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     */
    tokenEncryptionKeyId?: Guid;
    /**
     * The tokenIssuancePolicies property
     */
    tokenIssuancePolicies?: TokenIssuancePolicy[];
    /**
     * The tokenLifetimePolicies property
     */
    tokenLifetimePolicies?: TokenLifetimePolicy[];
    /**
     * Specifies the verified publisher of the application. For more information about how publisher verification helps support application security, trustworthiness, and compliance, see Publisher verification.
     */
    verifiedPublisher?: VerifiedPublisher;
    /**
     * Specifies settings for a web application.
     */
    web?: WebApplication;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function createApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplication;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function deserializeIntoApplication(application: Application | undefined = {} as Application) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(application),
        "addIns": n => { application.addIns = n.getCollectionOfObjectValues<AddIn>(createAddInFromDiscriminatorValue); },
        "api": n => { application.api = n.getObjectValue<ApiApplication>(createApiApplicationFromDiscriminatorValue); },
        "appId": n => { application.appId = n.getStringValue(); },
        "applicationTemplateId": n => { application.applicationTemplateId = n.getStringValue(); },
        "appManagementPolicies": n => { application.appManagementPolicies = n.getCollectionOfObjectValues<AppManagementPolicy>(createAppManagementPolicyFromDiscriminatorValue); },
        "appRoles": n => { application.appRoles = n.getCollectionOfObjectValues<AppRole>(createAppRoleFromDiscriminatorValue); },
        "certification": n => { application.certification = n.getObjectValue<Certification>(createCertificationFromDiscriminatorValue); },
        "createdDateTime": n => { application.createdDateTime = n.getDateValue(); },
        "createdOnBehalfOf": n => { application.createdOnBehalfOf = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "defaultRedirectUri": n => { application.defaultRedirectUri = n.getStringValue(); },
        "description": n => { application.description = n.getStringValue(); },
        "disabledByMicrosoftStatus": n => { application.disabledByMicrosoftStatus = n.getStringValue(); },
        "displayName": n => { application.displayName = n.getStringValue(); },
        "extensionProperties": n => { application.extensionProperties = n.getCollectionOfObjectValues<ExtensionProperty>(createExtensionPropertyFromDiscriminatorValue); },
        "federatedIdentityCredentials": n => { application.federatedIdentityCredentials = n.getCollectionOfObjectValues<FederatedIdentityCredential>(createFederatedIdentityCredentialFromDiscriminatorValue); },
        "groupMembershipClaims": n => { application.groupMembershipClaims = n.getStringValue(); },
        "homeRealmDiscoveryPolicies": n => { application.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicy>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
        "identifierUris": n => { application.identifierUris = n.getCollectionOfPrimitiveValues<string>(); },
        "info": n => { application.info = n.getObjectValue<InformationalUrl>(createInformationalUrlFromDiscriminatorValue); },
        "isDeviceOnlyAuthSupported": n => { application.isDeviceOnlyAuthSupported = n.getBooleanValue(); },
        "isFallbackPublicClient": n => { application.isFallbackPublicClient = n.getBooleanValue(); },
        "keyCredentials": n => { application.keyCredentials = n.getCollectionOfObjectValues<KeyCredential>(createKeyCredentialFromDiscriminatorValue); },
        "logo": n => { application.logo = n.getStringValue(); },
        "notes": n => { application.notes = n.getStringValue(); },
        "oauth2RequirePostResponse": n => { application.oauth2RequirePostResponse = n.getBooleanValue(); },
        "optionalClaims": n => { application.optionalClaims = n.getObjectValue<OptionalClaims>(createOptionalClaimsFromDiscriminatorValue); },
        "owners": n => { application.owners = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "parentalControlSettings": n => { application.parentalControlSettings = n.getObjectValue<ParentalControlSettings>(createParentalControlSettingsFromDiscriminatorValue); },
        "passwordCredentials": n => { application.passwordCredentials = n.getCollectionOfObjectValues<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
        "publicClient": n => { application.publicClient = n.getObjectValue<PublicClientApplication>(createPublicClientApplicationFromDiscriminatorValue); },
        "publisherDomain": n => { application.publisherDomain = n.getStringValue(); },
        "requestSignatureVerification": n => { application.requestSignatureVerification = n.getObjectValue<RequestSignatureVerification>(createRequestSignatureVerificationFromDiscriminatorValue); },
        "requiredResourceAccess": n => { application.requiredResourceAccess = n.getCollectionOfObjectValues<RequiredResourceAccess>(createRequiredResourceAccessFromDiscriminatorValue); },
        "samlMetadataUrl": n => { application.samlMetadataUrl = n.getStringValue(); },
        "serviceManagementReference": n => { application.serviceManagementReference = n.getStringValue(); },
        "servicePrincipalLockConfiguration": n => { application.servicePrincipalLockConfiguration = n.getObjectValue<ServicePrincipalLockConfiguration>(createServicePrincipalLockConfigurationFromDiscriminatorValue); },
        "signInAudience": n => { application.signInAudience = n.getStringValue(); },
        "spa": n => { application.spa = n.getObjectValue<SpaApplication>(createSpaApplicationFromDiscriminatorValue); },
        "synchronization": n => { application.synchronization = n.getObjectValue<Synchronization>(createSynchronizationFromDiscriminatorValue); },
        "tags": n => { application.tags = n.getCollectionOfPrimitiveValues<string>(); },
        "tokenEncryptionKeyId": n => { application.tokenEncryptionKeyId = n.getGuidValue(); },
        "tokenIssuancePolicies": n => { application.tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicy>(createTokenIssuancePolicyFromDiscriminatorValue); },
        "tokenLifetimePolicies": n => { application.tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicy>(createTokenLifetimePolicyFromDiscriminatorValue); },
        "verifiedPublisher": n => { application.verifiedPublisher = n.getObjectValue<VerifiedPublisher>(createVerifiedPublisherFromDiscriminatorValue); },
        "web": n => { application.web = n.getObjectValue<WebApplication>(createWebApplicationFromDiscriminatorValue); },
    }
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function serializeApplication(writer: SerializationWriter, application: Application | undefined = {} as Application) : void {
        serializeDirectoryObject(writer, application)
        writer.writeCollectionOfObjectValues<AddIn>("addIns", application.addIns, );
        writer.writeObjectValue<ApiApplication>("api", application.api, );
        writer.writeStringValue("appId", application.appId);
        writer.writeStringValue("applicationTemplateId", application.applicationTemplateId);
        writer.writeCollectionOfObjectValues<AppManagementPolicy>("appManagementPolicies", application.appManagementPolicies, );
        writer.writeCollectionOfObjectValues<AppRole>("appRoles", application.appRoles, );
        writer.writeObjectValue<Certification>("certification", application.certification, );
        writer.writeDateValue("createdDateTime", application.createdDateTime);
        writer.writeObjectValue<DirectoryObject>("createdOnBehalfOf", application.createdOnBehalfOf, );
        writer.writeStringValue("defaultRedirectUri", application.defaultRedirectUri);
        writer.writeStringValue("description", application.description);
        writer.writeStringValue("disabledByMicrosoftStatus", application.disabledByMicrosoftStatus);
        writer.writeStringValue("displayName", application.displayName);
        writer.writeCollectionOfObjectValues<ExtensionProperty>("extensionProperties", application.extensionProperties, );
        writer.writeCollectionOfObjectValues<FederatedIdentityCredential>("federatedIdentityCredentials", application.federatedIdentityCredentials, );
        writer.writeStringValue("groupMembershipClaims", application.groupMembershipClaims);
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicy>("homeRealmDiscoveryPolicies", application.homeRealmDiscoveryPolicies, );
        writer.writeCollectionOfPrimitiveValues<string>("identifierUris", application.identifierUris);
        writer.writeObjectValue<InformationalUrl>("info", application.info, );
        writer.writeBooleanValue("isDeviceOnlyAuthSupported", application.isDeviceOnlyAuthSupported);
        writer.writeBooleanValue("isFallbackPublicClient", application.isFallbackPublicClient);
        writer.writeCollectionOfObjectValues<KeyCredential>("keyCredentials", application.keyCredentials, );
        writer.writeStringValue("logo", application.logo);
        writer.writeStringValue("notes", application.notes);
        writer.writeBooleanValue("oauth2RequirePostResponse", application.oauth2RequirePostResponse);
        writer.writeObjectValue<OptionalClaims>("optionalClaims", application.optionalClaims, );
        writer.writeCollectionOfObjectValues<DirectoryObject>("owners", application.owners, );
        writer.writeObjectValue<ParentalControlSettings>("parentalControlSettings", application.parentalControlSettings, );
        writer.writeCollectionOfObjectValues<PasswordCredential>("passwordCredentials", application.passwordCredentials, );
        writer.writeObjectValue<PublicClientApplication>("publicClient", application.publicClient, );
        writer.writeStringValue("publisherDomain", application.publisherDomain);
        writer.writeObjectValue<RequestSignatureVerification>("requestSignatureVerification", application.requestSignatureVerification, );
        writer.writeCollectionOfObjectValues<RequiredResourceAccess>("requiredResourceAccess", application.requiredResourceAccess, );
        writer.writeStringValue("samlMetadataUrl", application.samlMetadataUrl);
        writer.writeStringValue("serviceManagementReference", application.serviceManagementReference);
        writer.writeObjectValue<ServicePrincipalLockConfiguration>("servicePrincipalLockConfiguration", application.servicePrincipalLockConfiguration, );
        writer.writeStringValue("signInAudience", application.signInAudience);
        writer.writeObjectValue<SpaApplication>("spa", application.spa, );
        writer.writeObjectValue<Synchronization>("synchronization", application.synchronization, );
        writer.writeCollectionOfPrimitiveValues<string>("tags", application.tags);
        writer.writeGuidValue("tokenEncryptionKeyId", application.tokenEncryptionKeyId);
        writer.writeCollectionOfObjectValues<TokenIssuancePolicy>("tokenIssuancePolicies", application.tokenIssuancePolicies, );
        writer.writeCollectionOfObjectValues<TokenLifetimePolicy>("tokenLifetimePolicies", application.tokenLifetimePolicies, );
        writer.writeObjectValue<VerifiedPublisher>("verifiedPublisher", application.verifiedPublisher, );
        writer.writeObjectValue<WebApplication>("web", application.web, );
}

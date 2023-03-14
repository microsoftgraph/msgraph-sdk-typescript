import {createAddInFromDiscriminatorValue} from './createAddInFromDiscriminatorValue';
import {createApiApplicationFromDiscriminatorValue} from './createApiApplicationFromDiscriminatorValue';
import {createAppManagementPolicyFromDiscriminatorValue} from './createAppManagementPolicyFromDiscriminatorValue';
import {createAppRoleFromDiscriminatorValue} from './createAppRoleFromDiscriminatorValue';
import {createCertificationFromDiscriminatorValue} from './createCertificationFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createExtensionPropertyFromDiscriminatorValue} from './createExtensionPropertyFromDiscriminatorValue';
import {createFederatedIdentityCredentialFromDiscriminatorValue} from './createFederatedIdentityCredentialFromDiscriminatorValue';
import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from './createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {createInformationalUrlFromDiscriminatorValue} from './createInformationalUrlFromDiscriminatorValue';
import {createKeyCredentialFromDiscriminatorValue} from './createKeyCredentialFromDiscriminatorValue';
import {createOptionalClaimsFromDiscriminatorValue} from './createOptionalClaimsFromDiscriminatorValue';
import {createParentalControlSettingsFromDiscriminatorValue} from './createParentalControlSettingsFromDiscriminatorValue';
import {createPasswordCredentialFromDiscriminatorValue} from './createPasswordCredentialFromDiscriminatorValue';
import {createPublicClientApplicationFromDiscriminatorValue} from './createPublicClientApplicationFromDiscriminatorValue';
import {createRequestSignatureVerificationFromDiscriminatorValue} from './createRequestSignatureVerificationFromDiscriminatorValue';
import {createRequiredResourceAccessFromDiscriminatorValue} from './createRequiredResourceAccessFromDiscriminatorValue';
import {createSpaApplicationFromDiscriminatorValue} from './createSpaApplicationFromDiscriminatorValue';
import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {createVerifiedPublisherFromDiscriminatorValue} from './createVerifiedPublisherFromDiscriminatorValue';
import {createWebApplicationFromDiscriminatorValue} from './createWebApplicationFromDiscriminatorValue';
import {AddIn, ApiApplication, AppManagementPolicy, AppRole, Certification, DirectoryObject, ExtensionProperty, FederatedIdentityCredential, HomeRealmDiscoveryPolicy, InformationalUrl, KeyCredential, OptionalClaims, ParentalControlSettings, PasswordCredential, PublicClientApplication, RequestSignatureVerification, RequiredResourceAccess, SpaApplication, TokenIssuancePolicy, TokenLifetimePolicy, VerifiedPublisher, WebApplication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Application extends DirectoryObject implements Parsable {
    /** Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on. */
    private _addIns?: AddIn[] | undefined;
    /** Specifies settings for an application that implements a web API. */
    private _api?: ApiApplication | undefined;
    /** The unique identifier for the application that is assigned to an application by Azure AD. Not nullable. Read-only. Supports $filter (eq). */
    private _appId?: string | undefined;
    /** Unique identifier of the applicationTemplate. Supports $filter (eq, not, ne). */
    private _applicationTemplateId?: string | undefined;
    /** The appManagementPolicies property */
    private _appManagementPolicies?: AppManagementPolicy[] | undefined;
    /** The collection of roles defined for the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable. */
    private _appRoles?: AppRole[] | undefined;
    /** Specifies the certification status of the application. */
    private _certification?: Certification | undefined;
    /** The date and time the application was registered. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  Supports $filter (eq, ne, not, ge, le, in, and eq on null values) and $orderBy. */
    private _createdDateTime?: Date | undefined;
    /** Supports $filter (/$count eq 0, /$count ne 0). Read-only. */
    private _createdOnBehalfOf?: DirectoryObject | undefined;
    /** The defaultRedirectUri property */
    private _defaultRedirectUri?: string | undefined;
    /** Free text field to provide a description of the application object to end users. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    private _description?: string | undefined;
    /** Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not). */
    private _disabledByMicrosoftStatus?: string | undefined;
    /** The display name for the application. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0). */
    private _extensionProperties?: ExtensionProperty[] | undefined;
    /** Federated identities for applications. Supports $expand and $filter (startsWith, /$count eq 0, /$count ne 0). */
    private _federatedIdentityCredentials?: FederatedIdentityCredential[] | undefined;
    /** Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following valid string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all of the security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of). */
    private _groupMembershipClaims?: string | undefined;
    /** The homeRealmDiscoveryPolicies property */
    private _homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** Also known as App ID URI, this value is set when an application is used as a resource app. The identifierUris acts as the prefix for the scopes you'll reference in your API's code, and it must be globally unique. You can use the default value provided, which is in the form api://<application-client-id>, or specify a more readable URI like https://contoso.com/api. For more information on valid identifierUris patterns and best practices, see Azure AD application registration security best practices. Not nullable. Supports $filter (eq, ne, ge, le, startsWith). */
    private _identifierUris?: string[] | undefined;
    /** Basic profile information of the application such as  app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values). */
    private _info?: InformationalUrl | undefined;
    /** Specifies whether this application supports device authentication without a user. The default is false. */
    private _isDeviceOnlyAuthSupported?: boolean | undefined;
    /** Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where it is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property. */
    private _isFallbackPublicClient?: boolean | undefined;
    /** The collection of key credentials associated with the application. Not nullable. Supports $filter (eq, not, ge, le). */
    private _keyCredentials?: KeyCredential[] | undefined;
    /** The main logo for the application. Not nullable. */
    private _logo?: string | undefined;
    /** Notes relevant for the management of the application. */
    private _notes?: string | undefined;
    /** The oauth2RequirePostResponse property */
    private _oauth2RequirePostResponse?: boolean | undefined;
    /** Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see How to: Provide optional claims to your app. */
    private _optionalClaims?: OptionalClaims | undefined;
    /** Directory objects that are owners of the application. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1). */
    private _owners?: DirectoryObject[] | undefined;
    /** Specifies parental control settings for an application. */
    private _parentalControlSettings?: ParentalControlSettings | undefined;
    /** The collection of password credentials associated with the application. Not nullable. */
    private _passwordCredentials?: PasswordCredential[] | undefined;
    /** Specifies settings for installed clients such as desktop or mobile devices. */
    private _publicClient?: PublicClientApplication | undefined;
    /** The verified publisher domain for the application. Read-only. For more information, see How to: Configure an application's publisher domain. Supports $filter (eq, ne, ge, le, startsWith). */
    private _publisherDomain?: string | undefined;
    /** The requestSignatureVerification property */
    private _requestSignatureVerification?: RequestSignatureVerification | undefined;
    /** Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. No more than 50 resource services (APIs) can be configured. Beginning mid-October 2021, the total number of required permissions must not exceed 400. For more information, see Limits on requested permissions per app. Not nullable. Supports $filter (eq, not, ge, le). */
    private _requiredResourceAccess?: RequiredResourceAccess[] | undefined;
    /** The URL where the service exposes SAML metadata for federation. This property is valid only for single-tenant applications. Nullable. */
    private _samlMetadataUrl?: string | undefined;
    /** References application or service contact information from a Service or Asset Management database. Nullable. */
    private _serviceManagementReference?: string | undefined;
    /** Specifies the Microsoft accounts that are supported for the current application. The possible values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount (default), and PersonalMicrosoftAccount. See more in the table. The value of this object also limits the number of permissions an app can request. For more information, see Limits on requested permissions per app. The value for this property has implications on other app object properties. As a result, if you change this property, you may need to change other properties first. For more information, see Validation differences for signInAudience.Supports $filter (eq, ne, not). */
    private _signInAudience?: string | undefined;
    /** Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens. */
    private _spa?: SpaApplication | undefined;
    /** Custom strings that can be used to categorize and identify the application. Not nullable. Supports $filter (eq, not, ge, le, startsWith). */
    private _tags?: string[] | undefined;
    /** Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user. */
    private _tokenEncryptionKeyId?: string | undefined;
    /** The tokenIssuancePolicies property */
    private _tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The tokenLifetimePolicies property */
    private _tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /** Specifies the verified publisher of the application. For more information about how publisher verification helps support application security, trustworthiness, and compliance, see Publisher verification. */
    private _verifiedPublisher?: VerifiedPublisher | undefined;
    /** Specifies settings for a web application. */
    private _web?: WebApplication | undefined;
    /**
     * Gets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on.
     * @returns a addIn
     */
    public get addIns() {
        return this._addIns;
    };
    /**
     * Sets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on.
     * @param value Value to set for the addIns property.
     */
    public set addIns(value: AddIn[] | undefined) {
        this._addIns = value;
    };
    /**
     * Gets the api property value. Specifies settings for an application that implements a web API.
     * @returns a apiApplication
     */
    public get api() {
        return this._api;
    };
    /**
     * Sets the api property value. Specifies settings for an application that implements a web API.
     * @param value Value to set for the api property.
     */
    public set api(value: ApiApplication | undefined) {
        this._api = value;
    };
    /**
     * Gets the appId property value. The unique identifier for the application that is assigned to an application by Azure AD. Not nullable. Read-only. Supports $filter (eq).
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The unique identifier for the application that is assigned to an application by Azure AD. Not nullable. Read-only. Supports $filter (eq).
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Gets the applicationTemplateId property value. Unique identifier of the applicationTemplate. Supports $filter (eq, not, ne).
     * @returns a string
     */
    public get applicationTemplateId() {
        return this._applicationTemplateId;
    };
    /**
     * Sets the applicationTemplateId property value. Unique identifier of the applicationTemplate. Supports $filter (eq, not, ne).
     * @param value Value to set for the applicationTemplateId property.
     */
    public set applicationTemplateId(value: string | undefined) {
        this._applicationTemplateId = value;
    };
    /**
     * Gets the appManagementPolicies property value. The appManagementPolicies property
     * @returns a appManagementPolicy
     */
    public get appManagementPolicies() {
        return this._appManagementPolicies;
    };
    /**
     * Sets the appManagementPolicies property value. The appManagementPolicies property
     * @param value Value to set for the appManagementPolicies property.
     */
    public set appManagementPolicies(value: AppManagementPolicy[] | undefined) {
        this._appManagementPolicies = value;
    };
    /**
     * Gets the appRoles property value. The collection of roles defined for the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable.
     * @returns a appRole
     */
    public get appRoles() {
        return this._appRoles;
    };
    /**
     * Sets the appRoles property value. The collection of roles defined for the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable.
     * @param value Value to set for the appRoles property.
     */
    public set appRoles(value: AppRole[] | undefined) {
        this._appRoles = value;
    };
    /**
     * Gets the certification property value. Specifies the certification status of the application.
     * @returns a certification
     */
    public get certification() {
        return this._certification;
    };
    /**
     * Sets the certification property value. Specifies the certification status of the application.
     * @param value Value to set for the certification property.
     */
    public set certification(value: Certification | undefined) {
        this._certification = value;
    };
    /**
     * Instantiates a new application and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.application";
    };
    /**
     * Gets the createdDateTime property value. The date and time the application was registered. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  Supports $filter (eq, ne, not, ge, le, in, and eq on null values) and $orderBy.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time the application was registered. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  Supports $filter (eq, ne, not, ge, le, in, and eq on null values) and $orderBy.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the createdOnBehalfOf property value. Supports $filter (/$count eq 0, /$count ne 0). Read-only.
     * @returns a directoryObject
     */
    public get createdOnBehalfOf() {
        return this._createdOnBehalfOf;
    };
    /**
     * Sets the createdOnBehalfOf property value. Supports $filter (/$count eq 0, /$count ne 0). Read-only.
     * @param value Value to set for the createdOnBehalfOf property.
     */
    public set createdOnBehalfOf(value: DirectoryObject | undefined) {
        this._createdOnBehalfOf = value;
    };
    /**
     * Gets the defaultRedirectUri property value. The defaultRedirectUri property
     * @returns a string
     */
    public get defaultRedirectUri() {
        return this._defaultRedirectUri;
    };
    /**
     * Sets the defaultRedirectUri property value. The defaultRedirectUri property
     * @param value Value to set for the defaultRedirectUri property.
     */
    public set defaultRedirectUri(value: string | undefined) {
        this._defaultRedirectUri = value;
    };
    /**
     * Gets the description property value. Free text field to provide a description of the application object to end users. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Free text field to provide a description of the application object to end users. The maximum allowed size is 1024 characters. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
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
        this._disabledByMicrosoftStatus = value;
    };
    /**
     * Gets the displayName property value. The display name for the application. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the application. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the extensionProperties property value. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0).
     * @returns a extensionProperty
     */
    public get extensionProperties() {
        return this._extensionProperties;
    };
    /**
     * Sets the extensionProperties property value. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0).
     * @param value Value to set for the extensionProperties property.
     */
    public set extensionProperties(value: ExtensionProperty[] | undefined) {
        this._extensionProperties = value;
    };
    /**
     * Gets the federatedIdentityCredentials property value. Federated identities for applications. Supports $expand and $filter (startsWith, /$count eq 0, /$count ne 0).
     * @returns a federatedIdentityCredential
     */
    public get federatedIdentityCredentials() {
        return this._federatedIdentityCredentials;
    };
    /**
     * Sets the federatedIdentityCredentials property value. Federated identities for applications. Supports $expand and $filter (startsWith, /$count eq 0, /$count ne 0).
     * @param value Value to set for the federatedIdentityCredentials property.
     */
    public set federatedIdentityCredentials(value: FederatedIdentityCredential[] | undefined) {
        this._federatedIdentityCredentials = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addIns": n => { this.addIns = n.getCollectionOfObjectValues<AddIn>(createAddInFromDiscriminatorValue); },
            "api": n => { this.api = n.getObjectValue<ApiApplication>(createApiApplicationFromDiscriminatorValue); },
            "appId": n => { this.appId = n.getStringValue(); },
            "applicationTemplateId": n => { this.applicationTemplateId = n.getStringValue(); },
            "appManagementPolicies": n => { this.appManagementPolicies = n.getCollectionOfObjectValues<AppManagementPolicy>(createAppManagementPolicyFromDiscriminatorValue); },
            "appRoles": n => { this.appRoles = n.getCollectionOfObjectValues<AppRole>(createAppRoleFromDiscriminatorValue); },
            "certification": n => { this.certification = n.getObjectValue<Certification>(createCertificationFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "createdOnBehalfOf": n => { this.createdOnBehalfOf = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "defaultRedirectUri": n => { this.defaultRedirectUri = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "disabledByMicrosoftStatus": n => { this.disabledByMicrosoftStatus = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "extensionProperties": n => { this.extensionProperties = n.getCollectionOfObjectValues<ExtensionProperty>(createExtensionPropertyFromDiscriminatorValue); },
            "federatedIdentityCredentials": n => { this.federatedIdentityCredentials = n.getCollectionOfObjectValues<FederatedIdentityCredential>(createFederatedIdentityCredentialFromDiscriminatorValue); },
            "groupMembershipClaims": n => { this.groupMembershipClaims = n.getStringValue(); },
            "homeRealmDiscoveryPolicies": n => { this.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicy>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
            "identifierUris": n => { this.identifierUris = n.getCollectionOfPrimitiveValues<string>(); },
            "info": n => { this.info = n.getObjectValue<InformationalUrl>(createInformationalUrlFromDiscriminatorValue); },
            "isDeviceOnlyAuthSupported": n => { this.isDeviceOnlyAuthSupported = n.getBooleanValue(); },
            "isFallbackPublicClient": n => { this.isFallbackPublicClient = n.getBooleanValue(); },
            "keyCredentials": n => { this.keyCredentials = n.getCollectionOfObjectValues<KeyCredential>(createKeyCredentialFromDiscriminatorValue); },
            "logo": n => { this.logo = n.getStringValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "oauth2RequirePostResponse": n => { this.oauth2RequirePostResponse = n.getBooleanValue(); },
            "optionalClaims": n => { this.optionalClaims = n.getObjectValue<OptionalClaims>(createOptionalClaimsFromDiscriminatorValue); },
            "owners": n => { this.owners = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "parentalControlSettings": n => { this.parentalControlSettings = n.getObjectValue<ParentalControlSettings>(createParentalControlSettingsFromDiscriminatorValue); },
            "passwordCredentials": n => { this.passwordCredentials = n.getCollectionOfObjectValues<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
            "publicClient": n => { this.publicClient = n.getObjectValue<PublicClientApplication>(createPublicClientApplicationFromDiscriminatorValue); },
            "publisherDomain": n => { this.publisherDomain = n.getStringValue(); },
            "requestSignatureVerification": n => { this.requestSignatureVerification = n.getObjectValue<RequestSignatureVerification>(createRequestSignatureVerificationFromDiscriminatorValue); },
            "requiredResourceAccess": n => { this.requiredResourceAccess = n.getCollectionOfObjectValues<RequiredResourceAccess>(createRequiredResourceAccessFromDiscriminatorValue); },
            "samlMetadataUrl": n => { this.samlMetadataUrl = n.getStringValue(); },
            "serviceManagementReference": n => { this.serviceManagementReference = n.getStringValue(); },
            "signInAudience": n => { this.signInAudience = n.getStringValue(); },
            "spa": n => { this.spa = n.getObjectValue<SpaApplication>(createSpaApplicationFromDiscriminatorValue); },
            "tags": n => { this.tags = n.getCollectionOfPrimitiveValues<string>(); },
            "tokenEncryptionKeyId": n => { this.tokenEncryptionKeyId = n.getStringValue(); },
            "tokenIssuancePolicies": n => { this.tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicy>(createTokenIssuancePolicyFromDiscriminatorValue); },
            "tokenLifetimePolicies": n => { this.tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicy>(createTokenLifetimePolicyFromDiscriminatorValue); },
            "verifiedPublisher": n => { this.verifiedPublisher = n.getObjectValue<VerifiedPublisher>(createVerifiedPublisherFromDiscriminatorValue); },
            "web": n => { this.web = n.getObjectValue<WebApplication>(createWebApplicationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the groupMembershipClaims property value. Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following valid string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all of the security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of).
     * @returns a string
     */
    public get groupMembershipClaims() {
        return this._groupMembershipClaims;
    };
    /**
     * Sets the groupMembershipClaims property value. Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following valid string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all of the security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of).
     * @param value Value to set for the groupMembershipClaims property.
     */
    public set groupMembershipClaims(value: string | undefined) {
        this._groupMembershipClaims = value;
    };
    /**
     * Gets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies property
     * @returns a homeRealmDiscoveryPolicy
     */
    public get homeRealmDiscoveryPolicies() {
        return this._homeRealmDiscoveryPolicies;
    };
    /**
     * Sets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies property
     * @param value Value to set for the homeRealmDiscoveryPolicies property.
     */
    public set homeRealmDiscoveryPolicies(value: HomeRealmDiscoveryPolicy[] | undefined) {
        this._homeRealmDiscoveryPolicies = value;
    };
    /**
     * Gets the identifierUris property value. Also known as App ID URI, this value is set when an application is used as a resource app. The identifierUris acts as the prefix for the scopes you'll reference in your API's code, and it must be globally unique. You can use the default value provided, which is in the form api://<application-client-id>, or specify a more readable URI like https://contoso.com/api. For more information on valid identifierUris patterns and best practices, see Azure AD application registration security best practices. Not nullable. Supports $filter (eq, ne, ge, le, startsWith).
     * @returns a string
     */
    public get identifierUris() {
        return this._identifierUris;
    };
    /**
     * Sets the identifierUris property value. Also known as App ID URI, this value is set when an application is used as a resource app. The identifierUris acts as the prefix for the scopes you'll reference in your API's code, and it must be globally unique. You can use the default value provided, which is in the form api://<application-client-id>, or specify a more readable URI like https://contoso.com/api. For more information on valid identifierUris patterns and best practices, see Azure AD application registration security best practices. Not nullable. Supports $filter (eq, ne, ge, le, startsWith).
     * @param value Value to set for the identifierUris property.
     */
    public set identifierUris(value: string[] | undefined) {
        this._identifierUris = value;
    };
    /**
     * Gets the info property value. Basic profile information of the application such as  app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     * @returns a informationalUrl
     */
    public get info() {
        return this._info;
    };
    /**
     * Sets the info property value. Basic profile information of the application such as  app's marketing, support, terms of service and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     * @param value Value to set for the info property.
     */
    public set info(value: InformationalUrl | undefined) {
        this._info = value;
    };
    /**
     * Gets the isDeviceOnlyAuthSupported property value. Specifies whether this application supports device authentication without a user. The default is false.
     * @returns a boolean
     */
    public get isDeviceOnlyAuthSupported() {
        return this._isDeviceOnlyAuthSupported;
    };
    /**
     * Sets the isDeviceOnlyAuthSupported property value. Specifies whether this application supports device authentication without a user. The default is false.
     * @param value Value to set for the isDeviceOnlyAuthSupported property.
     */
    public set isDeviceOnlyAuthSupported(value: boolean | undefined) {
        this._isDeviceOnlyAuthSupported = value;
    };
    /**
     * Gets the isFallbackPublicClient property value. Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where it is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property.
     * @returns a boolean
     */
    public get isFallbackPublicClient() {
        return this._isFallbackPublicClient;
    };
    /**
     * Sets the isFallbackPublicClient property value. Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where it is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property.
     * @param value Value to set for the isFallbackPublicClient property.
     */
    public set isFallbackPublicClient(value: boolean | undefined) {
        this._isFallbackPublicClient = value;
    };
    /**
     * Gets the keyCredentials property value. The collection of key credentials associated with the application. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a keyCredential
     */
    public get keyCredentials() {
        return this._keyCredentials;
    };
    /**
     * Sets the keyCredentials property value. The collection of key credentials associated with the application. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the keyCredentials property.
     */
    public set keyCredentials(value: KeyCredential[] | undefined) {
        this._keyCredentials = value;
    };
    /**
     * Gets the logo property value. The main logo for the application. Not nullable.
     * @returns a base64url
     */
    public get logo() {
        return this._logo;
    };
    /**
     * Sets the logo property value. The main logo for the application. Not nullable.
     * @param value Value to set for the logo property.
     */
    public set logo(value: string | undefined) {
        this._logo = value;
    };
    /**
     * Gets the notes property value. Notes relevant for the management of the application.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Notes relevant for the management of the application.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Gets the oauth2RequirePostResponse property value. The oauth2RequirePostResponse property
     * @returns a boolean
     */
    public get oauth2RequirePostResponse() {
        return this._oauth2RequirePostResponse;
    };
    /**
     * Sets the oauth2RequirePostResponse property value. The oauth2RequirePostResponse property
     * @param value Value to set for the oauth2RequirePostResponse property.
     */
    public set oauth2RequirePostResponse(value: boolean | undefined) {
        this._oauth2RequirePostResponse = value;
    };
    /**
     * Gets the optionalClaims property value. Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see How to: Provide optional claims to your app.
     * @returns a optionalClaims
     */
    public get optionalClaims() {
        return this._optionalClaims;
    };
    /**
     * Sets the optionalClaims property value. Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see How to: Provide optional claims to your app.
     * @param value Value to set for the optionalClaims property.
     */
    public set optionalClaims(value: OptionalClaims | undefined) {
        this._optionalClaims = value;
    };
    /**
     * Gets the owners property value. Directory objects that are owners of the application. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     * @returns a directoryObject
     */
    public get owners() {
        return this._owners;
    };
    /**
     * Sets the owners property value. Directory objects that are owners of the application. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     * @param value Value to set for the owners property.
     */
    public set owners(value: DirectoryObject[] | undefined) {
        this._owners = value;
    };
    /**
     * Gets the parentalControlSettings property value. Specifies parental control settings for an application.
     * @returns a parentalControlSettings
     */
    public get parentalControlSettings() {
        return this._parentalControlSettings;
    };
    /**
     * Sets the parentalControlSettings property value. Specifies parental control settings for an application.
     * @param value Value to set for the parentalControlSettings property.
     */
    public set parentalControlSettings(value: ParentalControlSettings | undefined) {
        this._parentalControlSettings = value;
    };
    /**
     * Gets the passwordCredentials property value. The collection of password credentials associated with the application. Not nullable.
     * @returns a passwordCredential
     */
    public get passwordCredentials() {
        return this._passwordCredentials;
    };
    /**
     * Sets the passwordCredentials property value. The collection of password credentials associated with the application. Not nullable.
     * @param value Value to set for the passwordCredentials property.
     */
    public set passwordCredentials(value: PasswordCredential[] | undefined) {
        this._passwordCredentials = value;
    };
    /**
     * Gets the publicClient property value. Specifies settings for installed clients such as desktop or mobile devices.
     * @returns a publicClientApplication
     */
    public get publicClient() {
        return this._publicClient;
    };
    /**
     * Sets the publicClient property value. Specifies settings for installed clients such as desktop or mobile devices.
     * @param value Value to set for the publicClient property.
     */
    public set publicClient(value: PublicClientApplication | undefined) {
        this._publicClient = value;
    };
    /**
     * Gets the publisherDomain property value. The verified publisher domain for the application. Read-only. For more information, see How to: Configure an application's publisher domain. Supports $filter (eq, ne, ge, le, startsWith).
     * @returns a string
     */
    public get publisherDomain() {
        return this._publisherDomain;
    };
    /**
     * Sets the publisherDomain property value. The verified publisher domain for the application. Read-only. For more information, see How to: Configure an application's publisher domain. Supports $filter (eq, ne, ge, le, startsWith).
     * @param value Value to set for the publisherDomain property.
     */
    public set publisherDomain(value: string | undefined) {
        this._publisherDomain = value;
    };
    /**
     * Gets the requestSignatureVerification property value. The requestSignatureVerification property
     * @returns a requestSignatureVerification
     */
    public get requestSignatureVerification() {
        return this._requestSignatureVerification;
    };
    /**
     * Sets the requestSignatureVerification property value. The requestSignatureVerification property
     * @param value Value to set for the requestSignatureVerification property.
     */
    public set requestSignatureVerification(value: RequestSignatureVerification | undefined) {
        this._requestSignatureVerification = value;
    };
    /**
     * Gets the requiredResourceAccess property value. Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. No more than 50 resource services (APIs) can be configured. Beginning mid-October 2021, the total number of required permissions must not exceed 400. For more information, see Limits on requested permissions per app. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a requiredResourceAccess
     */
    public get requiredResourceAccess() {
        return this._requiredResourceAccess;
    };
    /**
     * Sets the requiredResourceAccess property value. Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. No more than 50 resource services (APIs) can be configured. Beginning mid-October 2021, the total number of required permissions must not exceed 400. For more information, see Limits on requested permissions per app. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the requiredResourceAccess property.
     */
    public set requiredResourceAccess(value: RequiredResourceAccess[] | undefined) {
        this._requiredResourceAccess = value;
    };
    /**
     * Gets the samlMetadataUrl property value. The URL where the service exposes SAML metadata for federation. This property is valid only for single-tenant applications. Nullable.
     * @returns a string
     */
    public get samlMetadataUrl() {
        return this._samlMetadataUrl;
    };
    /**
     * Sets the samlMetadataUrl property value. The URL where the service exposes SAML metadata for federation. This property is valid only for single-tenant applications. Nullable.
     * @param value Value to set for the samlMetadataUrl property.
     */
    public set samlMetadataUrl(value: string | undefined) {
        this._samlMetadataUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AddIn>("addIns", this.addIns);
        writer.writeObjectValue<ApiApplication>("api", this.api);
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("applicationTemplateId", this.applicationTemplateId);
        writer.writeCollectionOfObjectValues<AppManagementPolicy>("appManagementPolicies", this.appManagementPolicies);
        writer.writeCollectionOfObjectValues<AppRole>("appRoles", this.appRoles);
        writer.writeObjectValue<Certification>("certification", this.certification);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DirectoryObject>("createdOnBehalfOf", this.createdOnBehalfOf);
        writer.writeStringValue("defaultRedirectUri", this.defaultRedirectUri);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("disabledByMicrosoftStatus", this.disabledByMicrosoftStatus);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<ExtensionProperty>("extensionProperties", this.extensionProperties);
        writer.writeCollectionOfObjectValues<FederatedIdentityCredential>("federatedIdentityCredentials", this.federatedIdentityCredentials);
        writer.writeStringValue("groupMembershipClaims", this.groupMembershipClaims);
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicy>("homeRealmDiscoveryPolicies", this.homeRealmDiscoveryPolicies);
        writer.writeCollectionOfPrimitiveValues<string>("identifierUris", this.identifierUris);
        writer.writeObjectValue<InformationalUrl>("info", this.info);
        writer.writeBooleanValue("isDeviceOnlyAuthSupported", this.isDeviceOnlyAuthSupported);
        writer.writeBooleanValue("isFallbackPublicClient", this.isFallbackPublicClient);
        writer.writeCollectionOfObjectValues<KeyCredential>("keyCredentials", this.keyCredentials);
        writer.writeStringValue("logo", this.logo);
        writer.writeStringValue("notes", this.notes);
        writer.writeBooleanValue("oauth2RequirePostResponse", this.oauth2RequirePostResponse);
        writer.writeObjectValue<OptionalClaims>("optionalClaims", this.optionalClaims);
        writer.writeCollectionOfObjectValues<DirectoryObject>("owners", this.owners);
        writer.writeObjectValue<ParentalControlSettings>("parentalControlSettings", this.parentalControlSettings);
        writer.writeCollectionOfObjectValues<PasswordCredential>("passwordCredentials", this.passwordCredentials);
        writer.writeObjectValue<PublicClientApplication>("publicClient", this.publicClient);
        writer.writeStringValue("publisherDomain", this.publisherDomain);
        writer.writeObjectValue<RequestSignatureVerification>("requestSignatureVerification", this.requestSignatureVerification);
        writer.writeCollectionOfObjectValues<RequiredResourceAccess>("requiredResourceAccess", this.requiredResourceAccess);
        writer.writeStringValue("samlMetadataUrl", this.samlMetadataUrl);
        writer.writeStringValue("serviceManagementReference", this.serviceManagementReference);
        writer.writeStringValue("signInAudience", this.signInAudience);
        writer.writeObjectValue<SpaApplication>("spa", this.spa);
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        writer.writeStringValue("tokenEncryptionKeyId", this.tokenEncryptionKeyId);
        writer.writeCollectionOfObjectValues<TokenIssuancePolicy>("tokenIssuancePolicies", this.tokenIssuancePolicies);
        writer.writeCollectionOfObjectValues<TokenLifetimePolicy>("tokenLifetimePolicies", this.tokenLifetimePolicies);
        writer.writeObjectValue<VerifiedPublisher>("verifiedPublisher", this.verifiedPublisher);
        writer.writeObjectValue<WebApplication>("web", this.web);
    };
    /**
     * Gets the serviceManagementReference property value. References application or service contact information from a Service or Asset Management database. Nullable.
     * @returns a string
     */
    public get serviceManagementReference() {
        return this._serviceManagementReference;
    };
    /**
     * Sets the serviceManagementReference property value. References application or service contact information from a Service or Asset Management database. Nullable.
     * @param value Value to set for the serviceManagementReference property.
     */
    public set serviceManagementReference(value: string | undefined) {
        this._serviceManagementReference = value;
    };
    /**
     * Gets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. The possible values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount (default), and PersonalMicrosoftAccount. See more in the table. The value of this object also limits the number of permissions an app can request. For more information, see Limits on requested permissions per app. The value for this property has implications on other app object properties. As a result, if you change this property, you may need to change other properties first. For more information, see Validation differences for signInAudience.Supports $filter (eq, ne, not).
     * @returns a string
     */
    public get signInAudience() {
        return this._signInAudience;
    };
    /**
     * Sets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. The possible values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount (default), and PersonalMicrosoftAccount. See more in the table. The value of this object also limits the number of permissions an app can request. For more information, see Limits on requested permissions per app. The value for this property has implications on other app object properties. As a result, if you change this property, you may need to change other properties first. For more information, see Validation differences for signInAudience.Supports $filter (eq, ne, not).
     * @param value Value to set for the signInAudience property.
     */
    public set signInAudience(value: string | undefined) {
        this._signInAudience = value;
    };
    /**
     * Gets the spa property value. Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens.
     * @returns a spaApplication
     */
    public get spa() {
        return this._spa;
    };
    /**
     * Sets the spa property value. Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens.
     * @param value Value to set for the spa property.
     */
    public set spa(value: SpaApplication | undefined) {
        this._spa = value;
    };
    /**
     * Gets the tags property value. Custom strings that can be used to categorize and identify the application. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. Custom strings that can be used to categorize and identify the application. Not nullable. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        this._tags = value;
    };
    /**
     * Gets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @returns a Guid
     */
    public get tokenEncryptionKeyId() {
        return this._tokenEncryptionKeyId;
    };
    /**
     * Sets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @param value Value to set for the tokenEncryptionKeyId property.
     */
    public set tokenEncryptionKeyId(value: string | undefined) {
        this._tokenEncryptionKeyId = value;
    };
    /**
     * Gets the tokenIssuancePolicies property value. The tokenIssuancePolicies property
     * @returns a tokenIssuancePolicy
     */
    public get tokenIssuancePolicies() {
        return this._tokenIssuancePolicies;
    };
    /**
     * Sets the tokenIssuancePolicies property value. The tokenIssuancePolicies property
     * @param value Value to set for the tokenIssuancePolicies property.
     */
    public set tokenIssuancePolicies(value: TokenIssuancePolicy[] | undefined) {
        this._tokenIssuancePolicies = value;
    };
    /**
     * Gets the tokenLifetimePolicies property value. The tokenLifetimePolicies property
     * @returns a tokenLifetimePolicy
     */
    public get tokenLifetimePolicies() {
        return this._tokenLifetimePolicies;
    };
    /**
     * Sets the tokenLifetimePolicies property value. The tokenLifetimePolicies property
     * @param value Value to set for the tokenLifetimePolicies property.
     */
    public set tokenLifetimePolicies(value: TokenLifetimePolicy[] | undefined) {
        this._tokenLifetimePolicies = value;
    };
    /**
     * Gets the verifiedPublisher property value. Specifies the verified publisher of the application. For more information about how publisher verification helps support application security, trustworthiness, and compliance, see Publisher verification.
     * @returns a verifiedPublisher
     */
    public get verifiedPublisher() {
        return this._verifiedPublisher;
    };
    /**
     * Sets the verifiedPublisher property value. Specifies the verified publisher of the application. For more information about how publisher verification helps support application security, trustworthiness, and compliance, see Publisher verification.
     * @param value Value to set for the verifiedPublisher property.
     */
    public set verifiedPublisher(value: VerifiedPublisher | undefined) {
        this._verifiedPublisher = value;
    };
    /**
     * Gets the web property value. Specifies settings for a web application.
     * @returns a webApplication
     */
    public get web() {
        return this._web;
    };
    /**
     * Sets the web property value. Specifies settings for a web application.
     * @param value Value to set for the web property.
     */
    public set web(value: WebApplication | undefined) {
        this._web = value;
    };
}

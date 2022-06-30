import {AddIn} from './addIn';
import {ApiApplication} from './apiApplication';
import {Application} from './application';
import {AppRole} from './appRole';
import {Certification} from './certification';
import {createAddInFromDiscriminatorValue} from './createAddInFromDiscriminatorValue';
import {createApiApplicationFromDiscriminatorValue} from './createApiApplicationFromDiscriminatorValue';
import {createAppRoleFromDiscriminatorValue} from './createAppRoleFromDiscriminatorValue';
import {createCertificationFromDiscriminatorValue} from './createCertificationFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createExtensionPropertyFromDiscriminatorValue} from './createExtensionPropertyFromDiscriminatorValue';
import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from './createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {createInformationalUrlFromDiscriminatorValue} from './createInformationalUrlFromDiscriminatorValue';
import {createKeyCredentialFromDiscriminatorValue} from './createKeyCredentialFromDiscriminatorValue';
import {createOptionalClaimsFromDiscriminatorValue} from './createOptionalClaimsFromDiscriminatorValue';
import {createParentalControlSettingsFromDiscriminatorValue} from './createParentalControlSettingsFromDiscriminatorValue';
import {createPasswordCredentialFromDiscriminatorValue} from './createPasswordCredentialFromDiscriminatorValue';
import {createPublicClientApplicationFromDiscriminatorValue} from './createPublicClientApplicationFromDiscriminatorValue';
import {createRequiredResourceAccessFromDiscriminatorValue} from './createRequiredResourceAccessFromDiscriminatorValue';
import {createSpaApplicationFromDiscriminatorValue} from './createSpaApplicationFromDiscriminatorValue';
import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {createVerifiedPublisherFromDiscriminatorValue} from './createVerifiedPublisherFromDiscriminatorValue';
import {createWebApplicationFromDiscriminatorValue} from './createWebApplicationFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {ExtensionProperty} from './extensionProperty';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {AddInImpl, ApiApplicationImpl, AppRoleImpl, CertificationImpl, DirectoryObjectImpl, ExtensionPropertyImpl, HomeRealmDiscoveryPolicyImpl, InformationalUrlImpl, KeyCredentialImpl, OptionalClaimsImpl, ParentalControlSettingsImpl, PasswordCredentialImpl, PublicClientApplicationImpl, RequiredResourceAccessImpl, SpaApplicationImpl, TokenIssuancePolicyImpl, TokenLifetimePolicyImpl, VerifiedPublisherImpl, WebApplicationImpl} from './index';
import {InformationalUrl} from './informationalUrl';
import {KeyCredential} from './keyCredential';
import {OptionalClaims} from './optionalClaims';
import {ParentalControlSettings} from './parentalControlSettings';
import {PasswordCredential} from './passwordCredential';
import {PublicClientApplication} from './publicClientApplication';
import {RequiredResourceAccess} from './requiredResourceAccess';
import {SpaApplication} from './spaApplication';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {VerifiedPublisher} from './verifiedPublisher';
import {WebApplication} from './webApplication';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method. */
export class ApplicationImpl extends DirectoryObjectImpl implements Application {
    /** Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on. */
    private _addIns?: AddIn[] | undefined;
    /** Specifies settings for an application that implements a web API. */
    private _api?: ApiApplication | undefined;
    /** The unique identifier for the application that is assigned by Azure AD. Not nullable. Read-only. */
    private _appId?: string | undefined;
    /** Unique identifier of the applicationTemplate. Supports $filter (eq, not, ne). */
    private _applicationTemplateId?: string | undefined;
    /** The collection of roles assigned to the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable. */
    private _appRoles?: AppRole[] | undefined;
    /** Specifies the certification status of the application. */
    private _certification?: Certification | undefined;
    /** The date and time the application was registered. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  Supports $filter (eq, ne, not, ge, le, in, and eq on null values) and $orderBy. */
    private _createdDateTime?: Date | undefined;
    /** The createdOnBehalfOf property */
    private _createdOnBehalfOf?: DirectoryObject | undefined;
    /** Free text field to provide a description of the application object to end users. The maximum allowed size is 1024 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    private _description?: string | undefined;
    /** Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not). */
    private _disabledByMicrosoftStatus?: string | undefined;
    /** The display name for the application. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** Read-only. Nullable. Supports $expand and $filter (eq when counting empty collections). */
    private _extensionProperties?: ExtensionProperty[] | undefined;
    /** Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of). */
    private _groupMembershipClaims?: string | undefined;
    /** The homeRealmDiscoveryPolicies property */
    private _homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** Also known as App ID URI, this value is set when an application is used as a resource app. The identifierUris acts as the prefix for the scopes you'll reference in your API's code, and it must be globally unique. You can use the default value provided, which is in the form api://<application-client-id>, or specify a more readable URI like https://contoso.com/api. For more information on valid identifierUris patterns and best practices, see Azure AD application registration security best practices. Not nullable. Supports $filter (eq, ne, ge, le, startsWith). */
    private _identifierUris?: string[] | undefined;
    /** Basic profile information of the application, such as it's marketing, support, terms of service, and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more information, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values). */
    private _info?: InformationalUrl | undefined;
    /** Specifies whether this application supports device authentication without a user. The default is false. */
    private _isDeviceOnlyAuthSupported?: boolean | undefined;
    /** Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where the application is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property. */
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
    /** Directory objects that are owners of the application. Read-only. Nullable. Supports $expand. */
    private _owners?: DirectoryObject[] | undefined;
    /** Specifies parental control settings for an application. */
    private _parentalControlSettings?: ParentalControlSettings | undefined;
    /** The collection of password credentials associated with the application. Not nullable. */
    private _passwordCredentials?: PasswordCredential[] | undefined;
    /** Specifies settings for installed clients such as desktop or mobile devices. */
    private _publicClient?: PublicClientApplication | undefined;
    /** The verified publisher domain for the application. Read-only. Supports $filter (eq, ne, ge, le, startsWith). */
    private _publisherDomain?: string | undefined;
    /** Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. No more than 50 resource services (APIs) can be configured. Beginning mid-October 2021, the total number of required permissions must not exceed 400. Not nullable. Supports $filter (eq, not, ge, le). */
    private _requiredResourceAccess?: RequiredResourceAccess[] | undefined;
    /** References application or service contact information from a Service or Asset Management database. Nullable. */
    private _serviceManagementReference?: string | undefined;
    /** Specifies the Microsoft accounts that are supported for the current application. The possible values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount (default), and PersonalMicrosoftAccount. See more in the table below. Supports $filter (eq, ne, not). */
    private _signInAudience?: string | undefined;
    /** Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens. */
    private _spa?: SpaApplication | undefined;
    /** Custom strings that can be used to categorize and identify the application. Not nullable.Supports $filter (eq, not, ge, le, startsWith). */
    private _tags?: string[] | undefined;
    /** Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user. */
    private _tokenEncryptionKeyId?: string | undefined;
    /** The tokenIssuancePolicies property */
    private _tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The tokenLifetimePolicies assigned to this application. Supports $expand. */
    private _tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /** Specifies the verified publisher of the application. For more information about how publisher verification helps support application security, trustworthiness, and compliance, see Publisher verification. */
    private _verifiedPublisher?: VerifiedPublisher | undefined;
    /** Specifies settings for a web application. */
    private _web?: WebApplication | undefined;
    /**
     * Gets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on.
     * @returns a AddInInterface
     */
    public get addIns() {
        return this._addIns;
    };
    /**
     * Sets the addIns property value. Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on.
     * @param value Value to set for the addIns property.
     */
    public set addIns(value: AddIn[] | undefined) {
        if(value) {
            const addInsArrValue: AddInImpl[] = [];
            this.addIns?.forEach(element => {
                addInsArrValue.push((element instanceof AddInImpl? element:new AddInImpl(element)));
            });
            this._addIns = addInsArrValue;
        }
    };
    /**
     * Gets the api property value. Specifies settings for an application that implements a web API.
     * @returns a ApiApplicationInterface
     */
    public get api() {
        return this._api;
    };
    /**
     * Sets the api property value. Specifies settings for an application that implements a web API.
     * @param value Value to set for the api property.
     */
    public set api(value: ApiApplication | undefined) {
        if(value) {
            this._api = value instanceof ApiApplicationImpl? value : new ApiApplicationImpl(value);
        }
    };
    /**
     * Gets the appId property value. The unique identifier for the application that is assigned by Azure AD. Not nullable. Read-only.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The unique identifier for the application that is assigned by Azure AD. Not nullable. Read-only.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        if(value) {
            this._appId = value;
        }
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
        if(value) {
            this._applicationTemplateId = value;
        }
    };
    /**
     * Gets the appRoles property value. The collection of roles assigned to the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable.
     * @returns a AppRoleInterface
     */
    public get appRoles() {
        return this._appRoles;
    };
    /**
     * Sets the appRoles property value. The collection of roles assigned to the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable.
     * @param value Value to set for the appRoles property.
     */
    public set appRoles(value: AppRole[] | undefined) {
        if(value) {
            const appRolesArrValue: AppRoleImpl[] = [];
            this.appRoles?.forEach(element => {
                appRolesArrValue.push((element instanceof AppRoleImpl? element:new AppRoleImpl(element)));
            });
            this._appRoles = appRolesArrValue;
        }
    };
    /**
     * Gets the certification property value. Specifies the certification status of the application.
     * @returns a CertificationInterface
     */
    public get certification() {
        return this._certification;
    };
    /**
     * Sets the certification property value. Specifies the certification status of the application.
     * @param value Value to set for the certification property.
     */
    public set certification(value: Certification | undefined) {
        if(value) {
            this._certification = value instanceof CertificationImpl? value : new CertificationImpl(value);
        }
    };
    /**
     * Instantiates a new application and sets the default values.
     * @param applicationParameterValue 
     */
    public constructor(applicationParameterValue?: Application | undefined) {
        super(applicationParameterValue);
        this._addIns = applicationParameterValue?.addIns;
        this._api = applicationParameterValue?.api;
        this._appId = applicationParameterValue?.appId;
        this._applicationTemplateId = applicationParameterValue?.applicationTemplateId;
        this._appRoles = applicationParameterValue?.appRoles;
        this._certification = applicationParameterValue?.certification;
        this._createdDateTime = applicationParameterValue?.createdDateTime;
        this._createdOnBehalfOf = applicationParameterValue?.createdOnBehalfOf;
        this._description = applicationParameterValue?.description;
        this._disabledByMicrosoftStatus = applicationParameterValue?.disabledByMicrosoftStatus;
        this._displayName = applicationParameterValue?.displayName;
        this._extensionProperties = applicationParameterValue?.extensionProperties;
        this._groupMembershipClaims = applicationParameterValue?.groupMembershipClaims;
        this._homeRealmDiscoveryPolicies = applicationParameterValue?.homeRealmDiscoveryPolicies;
        this._identifierUris = applicationParameterValue?.identifierUris;
        this._info = applicationParameterValue?.info;
        this._isDeviceOnlyAuthSupported = applicationParameterValue?.isDeviceOnlyAuthSupported;
        this._isFallbackPublicClient = applicationParameterValue?.isFallbackPublicClient;
        this._keyCredentials = applicationParameterValue?.keyCredentials;
        this._logo = applicationParameterValue?.logo;
        this._notes = applicationParameterValue?.notes;
        this._oauth2RequirePostResponse = applicationParameterValue?.oauth2RequirePostResponse;
        this._optionalClaims = applicationParameterValue?.optionalClaims;
        this._owners = applicationParameterValue?.owners;
        this._parentalControlSettings = applicationParameterValue?.parentalControlSettings;
        this._passwordCredentials = applicationParameterValue?.passwordCredentials;
        this._publicClient = applicationParameterValue?.publicClient;
        this._publisherDomain = applicationParameterValue?.publisherDomain;
        this._requiredResourceAccess = applicationParameterValue?.requiredResourceAccess;
        this._serviceManagementReference = applicationParameterValue?.serviceManagementReference;
        this._signInAudience = applicationParameterValue?.signInAudience;
        this._spa = applicationParameterValue?.spa;
        this._tags = applicationParameterValue?.tags;
        this._tokenEncryptionKeyId = applicationParameterValue?.tokenEncryptionKeyId;
        this._tokenIssuancePolicies = applicationParameterValue?.tokenIssuancePolicies;
        this._tokenLifetimePolicies = applicationParameterValue?.tokenLifetimePolicies;
        this._verifiedPublisher = applicationParameterValue?.verifiedPublisher;
        this._web = applicationParameterValue?.web;
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
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the createdOnBehalfOf property value. The createdOnBehalfOf property
     * @returns a DirectoryObjectInterface
     */
    public get createdOnBehalfOf() {
        return this._createdOnBehalfOf;
    };
    /**
     * Sets the createdOnBehalfOf property value. The createdOnBehalfOf property
     * @param value Value to set for the createdOnBehalfOf property.
     */
    public set createdOnBehalfOf(value: DirectoryObject | undefined) {
        if(value) {
            this._createdOnBehalfOf = value instanceof DirectoryObjectImpl? value : new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the description property value. Free text field to provide a description of the application object to end users. The maximum allowed size is 1024 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Free text field to provide a description of the application object to end users. The maximum allowed size is 1024 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
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
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the extensionProperties property value. Read-only. Nullable. Supports $expand and $filter (eq when counting empty collections).
     * @returns a ExtensionPropertyInterface
     */
    public get extensionProperties() {
        return this._extensionProperties;
    };
    /**
     * Sets the extensionProperties property value. Read-only. Nullable. Supports $expand and $filter (eq when counting empty collections).
     * @param value Value to set for the extensionProperties property.
     */
    public set extensionProperties(value: ExtensionProperty[] | undefined) {
        if(value) {
            const extensionPropertiesArrValue: ExtensionPropertyImpl[] = [];
            this.extensionProperties?.forEach(element => {
                extensionPropertiesArrValue.push((element instanceof ExtensionPropertyImpl? element:new ExtensionPropertyImpl(element)));
            });
            this._extensionProperties = extensionPropertiesArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addIns": n => { this.addIns = n.getCollectionOfObjectValues<AddInImpl>(createAddInFromDiscriminatorValue); },
            "api": n => { this.api = n.getObjectValue<ApiApplicationImpl>(createApiApplicationFromDiscriminatorValue); },
            "appId": n => { this.appId = n.getStringValue(); },
            "applicationTemplateId": n => { this.applicationTemplateId = n.getStringValue(); },
            "appRoles": n => { this.appRoles = n.getCollectionOfObjectValues<AppRoleImpl>(createAppRoleFromDiscriminatorValue); },
            "certification": n => { this.certification = n.getObjectValue<CertificationImpl>(createCertificationFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "createdOnBehalfOf": n => { this.createdOnBehalfOf = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "disabledByMicrosoftStatus": n => { this.disabledByMicrosoftStatus = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "extensionProperties": n => { this.extensionProperties = n.getCollectionOfObjectValues<ExtensionPropertyImpl>(createExtensionPropertyFromDiscriminatorValue); },
            "groupMembershipClaims": n => { this.groupMembershipClaims = n.getStringValue(); },
            "homeRealmDiscoveryPolicies": n => { this.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
            "identifierUris": n => { this.identifierUris = n.getCollectionOfPrimitiveValues<string>(); },
            "info": n => { this.info = n.getObjectValue<InformationalUrlImpl>(createInformationalUrlFromDiscriminatorValue); },
            "isDeviceOnlyAuthSupported": n => { this.isDeviceOnlyAuthSupported = n.getBooleanValue(); },
            "isFallbackPublicClient": n => { this.isFallbackPublicClient = n.getBooleanValue(); },
            "keyCredentials": n => { this.keyCredentials = n.getCollectionOfObjectValues<KeyCredentialImpl>(createKeyCredentialFromDiscriminatorValue); },
            "logo": n => { this.logo = n.getStringValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "oauth2RequirePostResponse": n => { this.oauth2RequirePostResponse = n.getBooleanValue(); },
            "optionalClaims": n => { this.optionalClaims = n.getObjectValue<OptionalClaimsImpl>(createOptionalClaimsFromDiscriminatorValue); },
            "owners": n => { this.owners = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "parentalControlSettings": n => { this.parentalControlSettings = n.getObjectValue<ParentalControlSettingsImpl>(createParentalControlSettingsFromDiscriminatorValue); },
            "passwordCredentials": n => { this.passwordCredentials = n.getCollectionOfObjectValues<PasswordCredentialImpl>(createPasswordCredentialFromDiscriminatorValue); },
            "publicClient": n => { this.publicClient = n.getObjectValue<PublicClientApplicationImpl>(createPublicClientApplicationFromDiscriminatorValue); },
            "publisherDomain": n => { this.publisherDomain = n.getStringValue(); },
            "requiredResourceAccess": n => { this.requiredResourceAccess = n.getCollectionOfObjectValues<RequiredResourceAccessImpl>(createRequiredResourceAccessFromDiscriminatorValue); },
            "serviceManagementReference": n => { this.serviceManagementReference = n.getStringValue(); },
            "signInAudience": n => { this.signInAudience = n.getStringValue(); },
            "spa": n => { this.spa = n.getObjectValue<SpaApplicationImpl>(createSpaApplicationFromDiscriminatorValue); },
            "tags": n => { this.tags = n.getCollectionOfPrimitiveValues<string>(); },
            "tokenEncryptionKeyId": n => { this.tokenEncryptionKeyId = n.getStringValue(); },
            "tokenIssuancePolicies": n => { this.tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicyImpl>(createTokenIssuancePolicyFromDiscriminatorValue); },
            "tokenLifetimePolicies": n => { this.tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicyImpl>(createTokenLifetimePolicyFromDiscriminatorValue); },
            "verifiedPublisher": n => { this.verifiedPublisher = n.getObjectValue<VerifiedPublisherImpl>(createVerifiedPublisherFromDiscriminatorValue); },
            "web": n => { this.web = n.getObjectValue<WebApplicationImpl>(createWebApplicationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the groupMembershipClaims property value. Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of).
     * @returns a string
     */
    public get groupMembershipClaims() {
        return this._groupMembershipClaims;
    };
    /**
     * Sets the groupMembershipClaims property value. Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of).
     * @param value Value to set for the groupMembershipClaims property.
     */
    public set groupMembershipClaims(value: string | undefined) {
        if(value) {
            this._groupMembershipClaims = value;
        }
    };
    /**
     * Gets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies property
     * @returns a HomeRealmDiscoveryPolicyInterface
     */
    public get homeRealmDiscoveryPolicies() {
        return this._homeRealmDiscoveryPolicies;
    };
    /**
     * Sets the homeRealmDiscoveryPolicies property value. The homeRealmDiscoveryPolicies property
     * @param value Value to set for the homeRealmDiscoveryPolicies property.
     */
    public set homeRealmDiscoveryPolicies(value: HomeRealmDiscoveryPolicy[] | undefined) {
        if(value) {
            const homeRealmDiscoveryPoliciesArrValue: HomeRealmDiscoveryPolicyImpl[] = [];
            this.homeRealmDiscoveryPolicies?.forEach(element => {
                homeRealmDiscoveryPoliciesArrValue.push((element instanceof HomeRealmDiscoveryPolicyImpl? element:new HomeRealmDiscoveryPolicyImpl(element)));
            });
            this._homeRealmDiscoveryPolicies = homeRealmDiscoveryPoliciesArrValue;
        }
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
        if(value) {
            this._identifierUris = value;
        }
    };
    /**
     * Gets the info property value. Basic profile information of the application, such as it's marketing, support, terms of service, and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more information, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     * @returns a InformationalUrlInterface
     */
    public get info() {
        return this._info;
    };
    /**
     * Sets the info property value. Basic profile information of the application, such as it's marketing, support, terms of service, and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more information, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values).
     * @param value Value to set for the info property.
     */
    public set info(value: InformationalUrl | undefined) {
        if(value) {
            this._info = value instanceof InformationalUrlImpl? value : new InformationalUrlImpl(value);
        }
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
        if(value) {
            this._isDeviceOnlyAuthSupported = value;
        }
    };
    /**
     * Gets the isFallbackPublicClient property value. Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where the application is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property.
     * @returns a boolean
     */
    public get isFallbackPublicClient() {
        return this._isFallbackPublicClient;
    };
    /**
     * Sets the isFallbackPublicClient property value. Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where the application is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property.
     * @param value Value to set for the isFallbackPublicClient property.
     */
    public set isFallbackPublicClient(value: boolean | undefined) {
        if(value) {
            this._isFallbackPublicClient = value;
        }
    };
    /**
     * Gets the keyCredentials property value. The collection of key credentials associated with the application. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a KeyCredentialInterface
     */
    public get keyCredentials() {
        return this._keyCredentials;
    };
    /**
     * Sets the keyCredentials property value. The collection of key credentials associated with the application. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the keyCredentials property.
     */
    public set keyCredentials(value: KeyCredential[] | undefined) {
        if(value) {
            const keyCredentialsArrValue: KeyCredentialImpl[] = [];
            this.keyCredentials?.forEach(element => {
                keyCredentialsArrValue.push((element instanceof KeyCredentialImpl? element:new KeyCredentialImpl(element)));
            });
            this._keyCredentials = keyCredentialsArrValue;
        }
    };
    /**
     * Gets the logo property value. The main logo for the application. Not nullable.
     * @returns a binary
     */
    public get logo() {
        return this._logo;
    };
    /**
     * Sets the logo property value. The main logo for the application. Not nullable.
     * @param value Value to set for the logo property.
     */
    public set logo(value: string | undefined) {
        if(value) {
            this._logo = value;
        }
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
        if(value) {
            this._notes = value;
        }
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
        if(value) {
            this._oauth2RequirePostResponse = value;
        }
    };
    /**
     * Gets the optionalClaims property value. Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see How to: Provide optional claims to your app.
     * @returns a OptionalClaimsInterface
     */
    public get optionalClaims() {
        return this._optionalClaims;
    };
    /**
     * Sets the optionalClaims property value. Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see How to: Provide optional claims to your app.
     * @param value Value to set for the optionalClaims property.
     */
    public set optionalClaims(value: OptionalClaims | undefined) {
        if(value) {
            this._optionalClaims = value instanceof OptionalClaimsImpl? value : new OptionalClaimsImpl(value);
        }
    };
    /**
     * Gets the owners property value. Directory objects that are owners of the application. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get owners() {
        return this._owners;
    };
    /**
     * Sets the owners property value. Directory objects that are owners of the application. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the owners property.
     */
    public set owners(value: DirectoryObject[] | undefined) {
        if(value) {
            const ownersArrValue: DirectoryObjectImpl[] = [];
            this.owners?.forEach(element => {
                ownersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._owners = ownersArrValue;
        }
    };
    /**
     * Gets the parentalControlSettings property value. Specifies parental control settings for an application.
     * @returns a ParentalControlSettingsInterface
     */
    public get parentalControlSettings() {
        return this._parentalControlSettings;
    };
    /**
     * Sets the parentalControlSettings property value. Specifies parental control settings for an application.
     * @param value Value to set for the parentalControlSettings property.
     */
    public set parentalControlSettings(value: ParentalControlSettings | undefined) {
        if(value) {
            this._parentalControlSettings = value instanceof ParentalControlSettingsImpl? value : new ParentalControlSettingsImpl(value);
        }
    };
    /**
     * Gets the passwordCredentials property value. The collection of password credentials associated with the application. Not nullable.
     * @returns a PasswordCredentialInterface
     */
    public get passwordCredentials() {
        return this._passwordCredentials;
    };
    /**
     * Sets the passwordCredentials property value. The collection of password credentials associated with the application. Not nullable.
     * @param value Value to set for the passwordCredentials property.
     */
    public set passwordCredentials(value: PasswordCredential[] | undefined) {
        if(value) {
            const passwordCredentialsArrValue: PasswordCredentialImpl[] = [];
            this.passwordCredentials?.forEach(element => {
                passwordCredentialsArrValue.push((element instanceof PasswordCredentialImpl? element:new PasswordCredentialImpl(element)));
            });
            this._passwordCredentials = passwordCredentialsArrValue;
        }
    };
    /**
     * Gets the publicClient property value. Specifies settings for installed clients such as desktop or mobile devices.
     * @returns a PublicClientApplicationInterface
     */
    public get publicClient() {
        return this._publicClient;
    };
    /**
     * Sets the publicClient property value. Specifies settings for installed clients such as desktop or mobile devices.
     * @param value Value to set for the publicClient property.
     */
    public set publicClient(value: PublicClientApplication | undefined) {
        if(value) {
            this._publicClient = value instanceof PublicClientApplicationImpl? value : new PublicClientApplicationImpl(value);
        }
    };
    /**
     * Gets the publisherDomain property value. The verified publisher domain for the application. Read-only. Supports $filter (eq, ne, ge, le, startsWith).
     * @returns a string
     */
    public get publisherDomain() {
        return this._publisherDomain;
    };
    /**
     * Sets the publisherDomain property value. The verified publisher domain for the application. Read-only. Supports $filter (eq, ne, ge, le, startsWith).
     * @param value Value to set for the publisherDomain property.
     */
    public set publisherDomain(value: string | undefined) {
        if(value) {
            this._publisherDomain = value;
        }
    };
    /**
     * Gets the requiredResourceAccess property value. Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. No more than 50 resource services (APIs) can be configured. Beginning mid-October 2021, the total number of required permissions must not exceed 400. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a RequiredResourceAccessInterface
     */
    public get requiredResourceAccess() {
        return this._requiredResourceAccess;
    };
    /**
     * Sets the requiredResourceAccess property value. Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. No more than 50 resource services (APIs) can be configured. Beginning mid-October 2021, the total number of required permissions must not exceed 400. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the requiredResourceAccess property.
     */
    public set requiredResourceAccess(value: RequiredResourceAccess[] | undefined) {
        if(value) {
            const requiredResourceAccessArrValue: RequiredResourceAccessImpl[] = [];
            this.requiredResourceAccess?.forEach(element => {
                requiredResourceAccessArrValue.push((element instanceof RequiredResourceAccessImpl? element:new RequiredResourceAccessImpl(element)));
            });
            this._requiredResourceAccess = requiredResourceAccessArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.addIns && this.addIns.length != 0){        const addInsArrValue: AddInImpl[] = [];
        this.addIns?.forEach(element => {
            addInsArrValue.push((element instanceof AddInImpl? element:new AddInImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AddInImpl>("addIns", addInsArrValue);
        }
        if(this.api){
            writer.writeObjectValue<ApiApplicationImpl>("api", (!this.api || this.api instanceof ApiApplicationImpl? this.api : new ApiApplicationImpl(this.api)));
        }
        if(this.appId){
            writer.writeStringValue("appId", this.appId);
        }
        if(this.applicationTemplateId){
            writer.writeStringValue("applicationTemplateId", this.applicationTemplateId);
        }
        if(this.appRoles && this.appRoles.length != 0){        const appRolesArrValue: AppRoleImpl[] = [];
        this.appRoles?.forEach(element => {
            appRolesArrValue.push((element instanceof AppRoleImpl? element:new AppRoleImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AppRoleImpl>("appRoles", appRolesArrValue);
        }
        if(this.certification){
            writer.writeObjectValue<CertificationImpl>("certification", (!this.certification || this.certification instanceof CertificationImpl? this.certification : new CertificationImpl(this.certification)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.createdOnBehalfOf){
            writer.writeObjectValue<DirectoryObjectImpl>("createdOnBehalfOf", (!this.createdOnBehalfOf || this.createdOnBehalfOf instanceof DirectoryObjectImpl? this.createdOnBehalfOf : new DirectoryObjectImpl(this.createdOnBehalfOf)));
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
        if(this.extensionProperties && this.extensionProperties.length != 0){        const extensionPropertiesArrValue: ExtensionPropertyImpl[] = [];
        this.extensionProperties?.forEach(element => {
            extensionPropertiesArrValue.push((element instanceof ExtensionPropertyImpl? element:new ExtensionPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExtensionPropertyImpl>("extensionProperties", extensionPropertiesArrValue);
        }
        if(this.groupMembershipClaims){
            writer.writeStringValue("groupMembershipClaims", this.groupMembershipClaims);
        }
        if(this.homeRealmDiscoveryPolicies && this.homeRealmDiscoveryPolicies.length != 0){        const homeRealmDiscoveryPoliciesArrValue: HomeRealmDiscoveryPolicyImpl[] = [];
        this.homeRealmDiscoveryPolicies?.forEach(element => {
            homeRealmDiscoveryPoliciesArrValue.push((element instanceof HomeRealmDiscoveryPolicyImpl? element:new HomeRealmDiscoveryPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>("homeRealmDiscoveryPolicies", homeRealmDiscoveryPoliciesArrValue);
        }
        if(this.identifierUris){
            writer.writeCollectionOfPrimitiveValues<string>("identifierUris", this.identifierUris);
        }
        if(this.info){
            writer.writeObjectValue<InformationalUrlImpl>("info", (!this.info || this.info instanceof InformationalUrlImpl? this.info : new InformationalUrlImpl(this.info)));
        }
        if(this.isDeviceOnlyAuthSupported){
            writer.writeBooleanValue("isDeviceOnlyAuthSupported", this.isDeviceOnlyAuthSupported);
        }
        if(this.isFallbackPublicClient){
            writer.writeBooleanValue("isFallbackPublicClient", this.isFallbackPublicClient);
        }
        if(this.keyCredentials && this.keyCredentials.length != 0){        const keyCredentialsArrValue: KeyCredentialImpl[] = [];
        this.keyCredentials?.forEach(element => {
            keyCredentialsArrValue.push((element instanceof KeyCredentialImpl? element:new KeyCredentialImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyCredentialImpl>("keyCredentials", keyCredentialsArrValue);
        }
        if(this.logo){
            writer.writeStringValue("logo", this.logo);
        }
        if(this.notes){
            writer.writeStringValue("notes", this.notes);
        }
        if(this.oauth2RequirePostResponse){
            writer.writeBooleanValue("oauth2RequirePostResponse", this.oauth2RequirePostResponse);
        }
        if(this.optionalClaims){
            writer.writeObjectValue<OptionalClaimsImpl>("optionalClaims", (!this.optionalClaims || this.optionalClaims instanceof OptionalClaimsImpl? this.optionalClaims : new OptionalClaimsImpl(this.optionalClaims)));
        }
        if(this.owners && this.owners.length != 0){        const ownersArrValue: DirectoryObjectImpl[] = [];
        this.owners?.forEach(element => {
            ownersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("owners", ownersArrValue);
        }
        if(this.parentalControlSettings){
            writer.writeObjectValue<ParentalControlSettingsImpl>("parentalControlSettings", (!this.parentalControlSettings || this.parentalControlSettings instanceof ParentalControlSettingsImpl? this.parentalControlSettings : new ParentalControlSettingsImpl(this.parentalControlSettings)));
        }
        if(this.passwordCredentials && this.passwordCredentials.length != 0){        const passwordCredentialsArrValue: PasswordCredentialImpl[] = [];
        this.passwordCredentials?.forEach(element => {
            passwordCredentialsArrValue.push((element instanceof PasswordCredentialImpl? element:new PasswordCredentialImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PasswordCredentialImpl>("passwordCredentials", passwordCredentialsArrValue);
        }
        if(this.publicClient){
            writer.writeObjectValue<PublicClientApplicationImpl>("publicClient", (!this.publicClient || this.publicClient instanceof PublicClientApplicationImpl? this.publicClient : new PublicClientApplicationImpl(this.publicClient)));
        }
        if(this.publisherDomain){
            writer.writeStringValue("publisherDomain", this.publisherDomain);
        }
        if(this.requiredResourceAccess && this.requiredResourceAccess.length != 0){        const requiredResourceAccessArrValue: RequiredResourceAccessImpl[] = [];
        this.requiredResourceAccess?.forEach(element => {
            requiredResourceAccessArrValue.push((element instanceof RequiredResourceAccessImpl? element:new RequiredResourceAccessImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RequiredResourceAccessImpl>("requiredResourceAccess", requiredResourceAccessArrValue);
        }
        if(this.serviceManagementReference){
            writer.writeStringValue("serviceManagementReference", this.serviceManagementReference);
        }
        if(this.signInAudience){
            writer.writeStringValue("signInAudience", this.signInAudience);
        }
        if(this.spa){
            writer.writeObjectValue<SpaApplicationImpl>("spa", (!this.spa || this.spa instanceof SpaApplicationImpl? this.spa : new SpaApplicationImpl(this.spa)));
        }
        if(this.tags){
            writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        }
        if(this.tokenEncryptionKeyId){
            writer.writeStringValue("tokenEncryptionKeyId", this.tokenEncryptionKeyId);
        }
        if(this.tokenIssuancePolicies && this.tokenIssuancePolicies.length != 0){        const tokenIssuancePoliciesArrValue: TokenIssuancePolicyImpl[] = [];
        this.tokenIssuancePolicies?.forEach(element => {
            tokenIssuancePoliciesArrValue.push((element instanceof TokenIssuancePolicyImpl? element:new TokenIssuancePolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TokenIssuancePolicyImpl>("tokenIssuancePolicies", tokenIssuancePoliciesArrValue);
        }
        if(this.tokenLifetimePolicies && this.tokenLifetimePolicies.length != 0){        const tokenLifetimePoliciesArrValue: TokenLifetimePolicyImpl[] = [];
        this.tokenLifetimePolicies?.forEach(element => {
            tokenLifetimePoliciesArrValue.push((element instanceof TokenLifetimePolicyImpl? element:new TokenLifetimePolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TokenLifetimePolicyImpl>("tokenLifetimePolicies", tokenLifetimePoliciesArrValue);
        }
        if(this.verifiedPublisher){
            writer.writeObjectValue<VerifiedPublisherImpl>("verifiedPublisher", (!this.verifiedPublisher || this.verifiedPublisher instanceof VerifiedPublisherImpl? this.verifiedPublisher : new VerifiedPublisherImpl(this.verifiedPublisher)));
        }
        if(this.web){
            writer.writeObjectValue<WebApplicationImpl>("web", (!this.web || this.web instanceof WebApplicationImpl? this.web : new WebApplicationImpl(this.web)));
        }
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
        if(value) {
            this._serviceManagementReference = value;
        }
    };
    /**
     * Gets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. The possible values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount (default), and PersonalMicrosoftAccount. See more in the table below. Supports $filter (eq, ne, not).
     * @returns a string
     */
    public get signInAudience() {
        return this._signInAudience;
    };
    /**
     * Sets the signInAudience property value. Specifies the Microsoft accounts that are supported for the current application. The possible values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount (default), and PersonalMicrosoftAccount. See more in the table below. Supports $filter (eq, ne, not).
     * @param value Value to set for the signInAudience property.
     */
    public set signInAudience(value: string | undefined) {
        if(value) {
            this._signInAudience = value;
        }
    };
    /**
     * Gets the spa property value. Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens.
     * @returns a SpaApplicationInterface
     */
    public get spa() {
        return this._spa;
    };
    /**
     * Sets the spa property value. Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens.
     * @param value Value to set for the spa property.
     */
    public set spa(value: SpaApplication | undefined) {
        if(value) {
            this._spa = value instanceof SpaApplicationImpl? value : new SpaApplicationImpl(value);
        }
    };
    /**
     * Gets the tags property value. Custom strings that can be used to categorize and identify the application. Not nullable.Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. Custom strings that can be used to categorize and identify the application. Not nullable.Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        if(value) {
            this._tags = value;
        }
    };
    /**
     * Gets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @returns a string
     */
    public get tokenEncryptionKeyId() {
        return this._tokenEncryptionKeyId;
    };
    /**
     * Sets the tokenEncryptionKeyId property value. Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     * @param value Value to set for the tokenEncryptionKeyId property.
     */
    public set tokenEncryptionKeyId(value: string | undefined) {
        if(value) {
            this._tokenEncryptionKeyId = value;
        }
    };
    /**
     * Gets the tokenIssuancePolicies property value. The tokenIssuancePolicies property
     * @returns a TokenIssuancePolicyInterface
     */
    public get tokenIssuancePolicies() {
        return this._tokenIssuancePolicies;
    };
    /**
     * Sets the tokenIssuancePolicies property value. The tokenIssuancePolicies property
     * @param value Value to set for the tokenIssuancePolicies property.
     */
    public set tokenIssuancePolicies(value: TokenIssuancePolicy[] | undefined) {
        if(value) {
            const tokenIssuancePoliciesArrValue: TokenIssuancePolicyImpl[] = [];
            this.tokenIssuancePolicies?.forEach(element => {
                tokenIssuancePoliciesArrValue.push((element instanceof TokenIssuancePolicyImpl? element:new TokenIssuancePolicyImpl(element)));
            });
            this._tokenIssuancePolicies = tokenIssuancePoliciesArrValue;
        }
    };
    /**
     * Gets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this application. Supports $expand.
     * @returns a TokenLifetimePolicyInterface
     */
    public get tokenLifetimePolicies() {
        return this._tokenLifetimePolicies;
    };
    /**
     * Sets the tokenLifetimePolicies property value. The tokenLifetimePolicies assigned to this application. Supports $expand.
     * @param value Value to set for the tokenLifetimePolicies property.
     */
    public set tokenLifetimePolicies(value: TokenLifetimePolicy[] | undefined) {
        if(value) {
            const tokenLifetimePoliciesArrValue: TokenLifetimePolicyImpl[] = [];
            this.tokenLifetimePolicies?.forEach(element => {
                tokenLifetimePoliciesArrValue.push((element instanceof TokenLifetimePolicyImpl? element:new TokenLifetimePolicyImpl(element)));
            });
            this._tokenLifetimePolicies = tokenLifetimePoliciesArrValue;
        }
    };
    /**
     * Gets the verifiedPublisher property value. Specifies the verified publisher of the application. For more information about how publisher verification helps support application security, trustworthiness, and compliance, see Publisher verification.
     * @returns a VerifiedPublisherInterface
     */
    public get verifiedPublisher() {
        return this._verifiedPublisher;
    };
    /**
     * Sets the verifiedPublisher property value. Specifies the verified publisher of the application. For more information about how publisher verification helps support application security, trustworthiness, and compliance, see Publisher verification.
     * @param value Value to set for the verifiedPublisher property.
     */
    public set verifiedPublisher(value: VerifiedPublisher | undefined) {
        if(value) {
            this._verifiedPublisher = value instanceof VerifiedPublisherImpl? value : new VerifiedPublisherImpl(value);
        }
    };
    /**
     * Gets the web property value. Specifies settings for a web application.
     * @returns a WebApplicationInterface
     */
    public get web() {
        return this._web;
    };
    /**
     * Sets the web property value. Specifies settings for a web application.
     * @param value Value to set for the web property.
     */
    public set web(value: WebApplication | undefined) {
        if(value) {
            this._web = value instanceof WebApplicationImpl? value : new WebApplicationImpl(value);
        }
    };
}

import {AddIn} from './addIn';
import {ApiApplication} from './apiApplication';
import {Application} from './application';
import {AppRole} from './appRole';
import {createAddInFromDiscriminatorValue} from './createAddInFromDiscriminatorValue';
import {createApiApplicationFromDiscriminatorValue} from './createApiApplicationFromDiscriminatorValue';
import {createAppRoleFromDiscriminatorValue} from './createAppRoleFromDiscriminatorValue';
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
import {AddInImpl, ApiApplicationImpl, AppRoleImpl, DirectoryObjectImpl, ExtensionPropertyImpl, HomeRealmDiscoveryPolicyImpl, InformationalUrlImpl, KeyCredentialImpl, OptionalClaimsImpl, ParentalControlSettingsImpl, PasswordCredentialImpl, PublicClientApplicationImpl, RequiredResourceAccessImpl, SpaApplicationImpl, TokenIssuancePolicyImpl, TokenLifetimePolicyImpl, VerifiedPublisherImpl, WebApplicationImpl} from './index';
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

/** Provides operations to manage the collection of application entities. */
export class ApplicationImpl extends DirectoryObjectImpl implements Application, Parsable {
    /** Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services like Office 365 call the application in the context of a document the user is working on. */
    public addIns?: AddIn[] | undefined;
    /** Specifies settings for an application that implements a web API. */
    public api?: ApiApplication | undefined;
    /** The unique identifier for the application that is assigned by Azure AD. Not nullable. Read-only. */
    public appId?: string | undefined;
    /** Unique identifier of the applicationTemplate. Supports $filter (eq, not, ne). */
    public applicationTemplateId?: string | undefined;
    /** The collection of roles assigned to the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Not nullable. */
    public appRoles?: AppRole[] | undefined;
    /** The date and time the application was registered. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  Supports $filter (eq, ne, not, ge, le, in, and eq on null values) and $orderBy. */
    public createdDateTime?: Date | undefined;
    /** Read-only. */
    public createdOnBehalfOf?: DirectoryObject | undefined;
    /** Free text field to provide a description of the application object to end users. The maximum allowed size is 1024 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    public description?: string | undefined;
    /** Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value), NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious activity, or a violation of the Microsoft Services Agreement).  Supports $filter (eq, ne, not). */
    public disabledByMicrosoftStatus?: string | undefined;
    /** The display name for the application. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    public displayName?: string | undefined;
    /** Read-only. Nullable. Supports $expand and $filter (eq when counting empty collections). */
    public extensionProperties?: ExtensionProperty[] | undefined;
    /** Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this attribute, use one of the following string values: None, SecurityGroup (for security groups and Azure AD roles), All (this gets all security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member of). */
    public groupMembershipClaims?: string | undefined;
    /** The homeRealmDiscoveryPolicies property */
    public homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** Also known as App ID URI, this value is set when an application is used as a resource app. The identifierUris acts as the prefix for the scopes you'll reference in your API's code, and it must be globally unique. You can use the default value provided, which is in the form api://<application-client-id>, or specify a more readable URI like https://contoso.com/api. For more information on valid identifierUris patterns and best practices, see Azure AD application registration security best practices. Not nullable. Supports $filter (eq, ne, ge, le, startsWith). */
    public identifierUris?: string[] | undefined;
    /** Basic profile information of the application, such as it's marketing, support, terms of service, and privacy statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more information, see How to: Add Terms of service and privacy statement for registered Azure AD apps. Supports $filter (eq, ne, not, ge, le, and eq on null values). */
    public info?: InformationalUrl | undefined;
    /** Specifies whether this application supports device authentication without a user. The default is false. */
    public isDeviceOnlyAuthSupported?: boolean | undefined;
    /** Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app. There are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where the application is configured without specifying a redirect URI. In those cases Azure AD interprets the application type based on the value of this property. */
    public isFallbackPublicClient?: boolean | undefined;
    /** The collection of key credentials associated with the application. Not nullable. Supports $filter (eq, not, ge, le). */
    public keyCredentials?: KeyCredential[] | undefined;
    /** The main logo for the application. Not nullable. */
    public logo?: string | undefined;
    /** Notes relevant for the management of the application. */
    public notes?: string | undefined;
    /** The oauth2RequirePostResponse property */
    public oauth2RequirePostResponse?: boolean | undefined;
    /** Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see How to: Provide optional claims to your app. */
    public optionalClaims?: OptionalClaims | undefined;
    /** Directory objects that are owners of the application. Read-only. Nullable. Supports $expand. */
    public owners?: DirectoryObject[] | undefined;
    /** Specifies parental control settings for an application. */
    public parentalControlSettings?: ParentalControlSettings | undefined;
    /** The collection of password credentials associated with the application. Not nullable. */
    public passwordCredentials?: PasswordCredential[] | undefined;
    /** Specifies settings for installed clients such as desktop or mobile devices. */
    public publicClient?: PublicClientApplication | undefined;
    /** The verified publisher domain for the application. Read-only. Supports $filter (eq, ne, ge, le, startsWith). */
    public publisherDomain?: string | undefined;
    /** Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. No more than 50 resource services (APIs) can be configured. Beginning mid-October 2021, the total number of required permissions must not exceed 400. Not nullable. Supports $filter (eq, not, ge, le). */
    public requiredResourceAccess?: RequiredResourceAccess[] | undefined;
    /** References application or service contact information from a Service or Asset Management database. Nullable. */
    public serviceManagementReference?: string | undefined;
    /** Specifies the Microsoft accounts that are supported for the current application. The possible values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount (default), and PersonalMicrosoftAccount. See more in the table below. Supports $filter (eq, ne, not). */
    public signInAudience?: string | undefined;
    /** Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and access tokens. */
    public spa?: SpaApplication | undefined;
    /** Custom strings that can be used to categorize and identify the application. Not nullable.Supports $filter (eq, not, ge, le, startsWith). */
    public tags?: string[] | undefined;
    /** Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the tokens it emits by using the key this property points to. The application code that receives the encrypted token must use the matching private key to decrypt the token before it can be used for the signed-in user. */
    public tokenEncryptionKeyId?: string | undefined;
    /** The tokenIssuancePolicies property */
    public tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The tokenLifetimePolicies assigned to this application. Supports $expand. */
    public tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /** Specifies the verified publisher of the application. For more information about how publisher verification helps support application security, trustworthiness, and compliance, see Publisher verification. */
    public verifiedPublisher?: VerifiedPublisher | undefined;
    /** Specifies settings for a web application. */
    public web?: WebApplication | undefined;
    /**
     * Instantiates a new application and sets the default values.
     * @param applicationParameterValue 
     */
    public constructor(applicationParameterValue?: Application | undefined) {
        super();
        this.addIns = applicationParameterValue?.addIns ;
        this.api = applicationParameterValue?.api ;
        this.appId = applicationParameterValue?.appId ;
        this.applicationTemplateId = applicationParameterValue?.applicationTemplateId ;
        this.appRoles = applicationParameterValue?.appRoles ;
        this.createdDateTime = applicationParameterValue?.createdDateTime ;
        this.createdOnBehalfOf = applicationParameterValue?.createdOnBehalfOf ;
        this.description = applicationParameterValue?.description ;
        this.disabledByMicrosoftStatus = applicationParameterValue?.disabledByMicrosoftStatus ;
        this.displayName = applicationParameterValue?.displayName ;
        this.extensionProperties = applicationParameterValue?.extensionProperties ;
        this.groupMembershipClaims = applicationParameterValue?.groupMembershipClaims ;
        this.homeRealmDiscoveryPolicies = applicationParameterValue?.homeRealmDiscoveryPolicies ;
        this.identifierUris = applicationParameterValue?.identifierUris ;
        this.info = applicationParameterValue?.info ;
        this.isDeviceOnlyAuthSupported = applicationParameterValue?.isDeviceOnlyAuthSupported ;
        this.isFallbackPublicClient = applicationParameterValue?.isFallbackPublicClient ;
        this.keyCredentials = applicationParameterValue?.keyCredentials ;
        this.logo = applicationParameterValue?.logo ;
        this.notes = applicationParameterValue?.notes ;
        this.oauth2RequirePostResponse = applicationParameterValue?.oauth2RequirePostResponse ;
        this.optionalClaims = applicationParameterValue?.optionalClaims ;
        this.owners = applicationParameterValue?.owners ;
        this.parentalControlSettings = applicationParameterValue?.parentalControlSettings ;
        this.passwordCredentials = applicationParameterValue?.passwordCredentials ;
        this.publicClient = applicationParameterValue?.publicClient ;
        this.publisherDomain = applicationParameterValue?.publisherDomain ;
        this.requiredResourceAccess = applicationParameterValue?.requiredResourceAccess ;
        this.serviceManagementReference = applicationParameterValue?.serviceManagementReference ;
        this.signInAudience = applicationParameterValue?.signInAudience ;
        this.spa = applicationParameterValue?.spa ;
        this.tags = applicationParameterValue?.tags ;
        this.tokenEncryptionKeyId = applicationParameterValue?.tokenEncryptionKeyId ;
        this.tokenIssuancePolicies = applicationParameterValue?.tokenIssuancePolicies ;
        this.tokenLifetimePolicies = applicationParameterValue?.tokenLifetimePolicies ;
        this.verifiedPublisher = applicationParameterValue?.verifiedPublisher ;
        this.web = applicationParameterValue?.web ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.addIns && this.addIns.length != 0){        const addInsArrValue: AddInImpl[] = []; this.addIns?.forEach(element => {addInsArrValue.push(new AddInImpl(element));});
        writer.writeCollectionOfObjectValues<AddInImpl>("addIns", addInsArrValue);
        }
        if(this.api){
        writer.writeObjectValue<ApiApplicationImpl>("api", new ApiApplicationImpl(this.api));
        }
        if(this.appId){
        writer.writeStringValue("appId", this.appId);
        }
        if(this.applicationTemplateId){
        writer.writeStringValue("applicationTemplateId", this.applicationTemplateId);
        }
        if(this.appRoles && this.appRoles.length != 0){        const appRolesArrValue: AppRoleImpl[] = []; this.appRoles?.forEach(element => {appRolesArrValue.push(new AppRoleImpl(element));});
        writer.writeCollectionOfObjectValues<AppRoleImpl>("appRoles", appRolesArrValue);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.createdOnBehalfOf){
        writer.writeObjectValue<DirectoryObjectImpl>("createdOnBehalfOf", new DirectoryObjectImpl(this.createdOnBehalfOf));
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
        if(this.extensionProperties && this.extensionProperties.length != 0){        const extensionPropertiesArrValue: ExtensionPropertyImpl[] = []; this.extensionProperties?.forEach(element => {extensionPropertiesArrValue.push(new ExtensionPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionPropertyImpl>("extensionProperties", extensionPropertiesArrValue);
        }
        if(this.groupMembershipClaims){
        writer.writeStringValue("groupMembershipClaims", this.groupMembershipClaims);
        }
        if(this.homeRealmDiscoveryPolicies && this.homeRealmDiscoveryPolicies.length != 0){        const homeRealmDiscoveryPoliciesArrValue: HomeRealmDiscoveryPolicyImpl[] = []; this.homeRealmDiscoveryPolicies?.forEach(element => {homeRealmDiscoveryPoliciesArrValue.push(new HomeRealmDiscoveryPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>("homeRealmDiscoveryPolicies", homeRealmDiscoveryPoliciesArrValue);
        }
        if(this.identifierUris){
        writer.writeCollectionOfPrimitiveValues<string>("identifierUris", this.identifierUris);
        }
        if(this.info){
        writer.writeObjectValue<InformationalUrlImpl>("info", new InformationalUrlImpl(this.info));
        }
        if(this.isDeviceOnlyAuthSupported){
        writer.writeBooleanValue("isDeviceOnlyAuthSupported", this.isDeviceOnlyAuthSupported);
        }
        if(this.isFallbackPublicClient){
        writer.writeBooleanValue("isFallbackPublicClient", this.isFallbackPublicClient);
        }
        if(this.keyCredentials && this.keyCredentials.length != 0){        const keyCredentialsArrValue: KeyCredentialImpl[] = []; this.keyCredentials?.forEach(element => {keyCredentialsArrValue.push(new KeyCredentialImpl(element));});
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
        writer.writeObjectValue<OptionalClaimsImpl>("optionalClaims", new OptionalClaimsImpl(this.optionalClaims));
        }
        if(this.owners && this.owners.length != 0){        const ownersArrValue: DirectoryObjectImpl[] = []; this.owners?.forEach(element => {ownersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("owners", ownersArrValue);
        }
        if(this.parentalControlSettings){
        writer.writeObjectValue<ParentalControlSettingsImpl>("parentalControlSettings", new ParentalControlSettingsImpl(this.parentalControlSettings));
        }
        if(this.passwordCredentials && this.passwordCredentials.length != 0){        const passwordCredentialsArrValue: PasswordCredentialImpl[] = []; this.passwordCredentials?.forEach(element => {passwordCredentialsArrValue.push(new PasswordCredentialImpl(element));});
        writer.writeCollectionOfObjectValues<PasswordCredentialImpl>("passwordCredentials", passwordCredentialsArrValue);
        }
        if(this.publicClient){
        writer.writeObjectValue<PublicClientApplicationImpl>("publicClient", new PublicClientApplicationImpl(this.publicClient));
        }
        if(this.publisherDomain){
        writer.writeStringValue("publisherDomain", this.publisherDomain);
        }
        if(this.requiredResourceAccess && this.requiredResourceAccess.length != 0){        const requiredResourceAccessArrValue: RequiredResourceAccessImpl[] = []; this.requiredResourceAccess?.forEach(element => {requiredResourceAccessArrValue.push(new RequiredResourceAccessImpl(element));});
        writer.writeCollectionOfObjectValues<RequiredResourceAccessImpl>("requiredResourceAccess", requiredResourceAccessArrValue);
        }
        if(this.serviceManagementReference){
        writer.writeStringValue("serviceManagementReference", this.serviceManagementReference);
        }
        if(this.signInAudience){
        writer.writeStringValue("signInAudience", this.signInAudience);
        }
        if(this.spa){
        writer.writeObjectValue<SpaApplicationImpl>("spa", new SpaApplicationImpl(this.spa));
        }
        if(this.tags){
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        }
        if(this.tokenEncryptionKeyId){
        writer.writeStringValue("tokenEncryptionKeyId", this.tokenEncryptionKeyId);
        }
        if(this.tokenIssuancePolicies && this.tokenIssuancePolicies.length != 0){        const tokenIssuancePoliciesArrValue: TokenIssuancePolicyImpl[] = []; this.tokenIssuancePolicies?.forEach(element => {tokenIssuancePoliciesArrValue.push(new TokenIssuancePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<TokenIssuancePolicyImpl>("tokenIssuancePolicies", tokenIssuancePoliciesArrValue);
        }
        if(this.tokenLifetimePolicies && this.tokenLifetimePolicies.length != 0){        const tokenLifetimePoliciesArrValue: TokenLifetimePolicyImpl[] = []; this.tokenLifetimePolicies?.forEach(element => {tokenLifetimePoliciesArrValue.push(new TokenLifetimePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<TokenLifetimePolicyImpl>("tokenLifetimePolicies", tokenLifetimePoliciesArrValue);
        }
        if(this.verifiedPublisher){
        writer.writeObjectValue<VerifiedPublisherImpl>("verifiedPublisher", new VerifiedPublisherImpl(this.verifiedPublisher));
        }
        if(this.web){
        writer.writeObjectValue<WebApplicationImpl>("web", new WebApplicationImpl(this.web));
        }
    };
}

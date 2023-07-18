import {AddIn} from './addIn';
import {ApiApplication} from './apiApplication';
import {Application} from './application';
import {AppManagementPolicy} from './appManagementPolicy';
import {AppRole} from './appRole';
import {Certification} from './certification';
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
import {createSynchronizationFromDiscriminatorValue} from './createSynchronizationFromDiscriminatorValue';
import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {createVerifiedPublisherFromDiscriminatorValue} from './createVerifiedPublisherFromDiscriminatorValue';
import {createWebApplicationFromDiscriminatorValue} from './createWebApplicationFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryObject} from './directoryObject';
import {ExtensionProperty} from './extensionProperty';
import {FederatedIdentityCredential} from './federatedIdentityCredential';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {InformationalUrl} from './informationalUrl';
import {KeyCredential} from './keyCredential';
import {OptionalClaims} from './optionalClaims';
import {ParentalControlSettings} from './parentalControlSettings';
import {PasswordCredential} from './passwordCredential';
import {PublicClientApplication} from './publicClientApplication';
import {RequestSignatureVerification} from './requestSignatureVerification';
import {RequiredResourceAccess} from './requiredResourceAccess';
import {serializeAddIn} from './serializeAddIn';
import {serializeApiApplication} from './serializeApiApplication';
import {serializeAppManagementPolicy} from './serializeAppManagementPolicy';
import {serializeAppRole} from './serializeAppRole';
import {serializeCertification} from './serializeCertification';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeExtensionProperty} from './serializeExtensionProperty';
import {serializeFederatedIdentityCredential} from './serializeFederatedIdentityCredential';
import {serializeHomeRealmDiscoveryPolicy} from './serializeHomeRealmDiscoveryPolicy';
import {serializeInformationalUrl} from './serializeInformationalUrl';
import {serializeKeyCredential} from './serializeKeyCredential';
import {serializeOptionalClaims} from './serializeOptionalClaims';
import {serializeParentalControlSettings} from './serializeParentalControlSettings';
import {serializePasswordCredential} from './serializePasswordCredential';
import {serializePublicClientApplication} from './serializePublicClientApplication';
import {serializeRequestSignatureVerification} from './serializeRequestSignatureVerification';
import {serializeRequiredResourceAccess} from './serializeRequiredResourceAccess';
import {serializeSpaApplication} from './serializeSpaApplication';
import {serializeSynchronization} from './serializeSynchronization';
import {serializeTokenIssuancePolicy} from './serializeTokenIssuancePolicy';
import {serializeTokenLifetimePolicy} from './serializeTokenLifetimePolicy';
import {serializeVerifiedPublisher} from './serializeVerifiedPublisher';
import {serializeWebApplication} from './serializeWebApplication';
import {SpaApplication} from './spaApplication';
import {Synchronization} from './synchronization';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {VerifiedPublisher} from './verifiedPublisher';
import {WebApplication} from './webApplication';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

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

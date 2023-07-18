import {AddIn} from './addIn';
import {AppManagementPolicy} from './appManagementPolicy';
import {AppRole} from './appRole';
import {AppRoleAssignment} from './appRoleAssignment';
import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {createAddInFromDiscriminatorValue} from './createAddInFromDiscriminatorValue';
import {createAppManagementPolicyFromDiscriminatorValue} from './createAppManagementPolicyFromDiscriminatorValue';
import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {createAppRoleFromDiscriminatorValue} from './createAppRoleFromDiscriminatorValue';
import {createClaimsMappingPolicyFromDiscriminatorValue} from './createClaimsMappingPolicyFromDiscriminatorValue';
import {createDelegatedPermissionClassificationFromDiscriminatorValue} from './createDelegatedPermissionClassificationFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createFederatedIdentityCredentialFromDiscriminatorValue} from './createFederatedIdentityCredentialFromDiscriminatorValue';
import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from './createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {createInformationalUrlFromDiscriminatorValue} from './createInformationalUrlFromDiscriminatorValue';
import {createKeyCredentialFromDiscriminatorValue} from './createKeyCredentialFromDiscriminatorValue';
import {createOAuth2PermissionGrantFromDiscriminatorValue} from './createOAuth2PermissionGrantFromDiscriminatorValue';
import {createPasswordCredentialFromDiscriminatorValue} from './createPasswordCredentialFromDiscriminatorValue';
import {createPermissionScopeFromDiscriminatorValue} from './createPermissionScopeFromDiscriminatorValue';
import {createResourceSpecificPermissionFromDiscriminatorValue} from './createResourceSpecificPermissionFromDiscriminatorValue';
import {createSamlSingleSignOnSettingsFromDiscriminatorValue} from './createSamlSingleSignOnSettingsFromDiscriminatorValue';
import {createSynchronizationFromDiscriminatorValue} from './createSynchronizationFromDiscriminatorValue';
import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {createVerifiedPublisherFromDiscriminatorValue} from './createVerifiedPublisherFromDiscriminatorValue';
import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
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
import {serializeAddIn} from './serializeAddIn';
import {serializeAppManagementPolicy} from './serializeAppManagementPolicy';
import {serializeAppRole} from './serializeAppRole';
import {serializeAppRoleAssignment} from './serializeAppRoleAssignment';
import {serializeClaimsMappingPolicy} from './serializeClaimsMappingPolicy';
import {serializeDelegatedPermissionClassification} from './serializeDelegatedPermissionClassification';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEndpoint} from './serializeEndpoint';
import {serializeFederatedIdentityCredential} from './serializeFederatedIdentityCredential';
import {serializeHomeRealmDiscoveryPolicy} from './serializeHomeRealmDiscoveryPolicy';
import {serializeInformationalUrl} from './serializeInformationalUrl';
import {serializeKeyCredential} from './serializeKeyCredential';
import {serializeOAuth2PermissionGrant} from './serializeOAuth2PermissionGrant';
import {serializePasswordCredential} from './serializePasswordCredential';
import {serializePermissionScope} from './serializePermissionScope';
import {serializeResourceSpecificPermission} from './serializeResourceSpecificPermission';
import {serializeSamlSingleSignOnSettings} from './serializeSamlSingleSignOnSettings';
import {serializeSynchronization} from './serializeSynchronization';
import {serializeTokenIssuancePolicy} from './serializeTokenIssuancePolicy';
import {serializeTokenLifetimePolicy} from './serializeTokenLifetimePolicy';
import {serializeVerifiedPublisher} from './serializeVerifiedPublisher';
import {ServicePrincipal} from './servicePrincipal';
import {Synchronization} from './synchronization';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {VerifiedPublisher} from './verifiedPublisher';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoServicePrincipal(servicePrincipal: ServicePrincipal | undefined = {} as ServicePrincipal) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(servicePrincipal),
        "accountEnabled": n => { servicePrincipal.accountEnabled = n.getBooleanValue(); },
        "addIns": n => { servicePrincipal.addIns = n.getCollectionOfObjectValues<AddIn>(createAddInFromDiscriminatorValue); },
        "alternativeNames": n => { servicePrincipal.alternativeNames = n.getCollectionOfPrimitiveValues<string>(); },
        "appDescription": n => { servicePrincipal.appDescription = n.getStringValue(); },
        "appDisplayName": n => { servicePrincipal.appDisplayName = n.getStringValue(); },
        "appId": n => { servicePrincipal.appId = n.getStringValue(); },
        "applicationTemplateId": n => { servicePrincipal.applicationTemplateId = n.getStringValue(); },
        "appManagementPolicies": n => { servicePrincipal.appManagementPolicies = n.getCollectionOfObjectValues<AppManagementPolicy>(createAppManagementPolicyFromDiscriminatorValue); },
        "appOwnerOrganizationId": n => { servicePrincipal.appOwnerOrganizationId = n.getGuidValue(); },
        "appRoleAssignedTo": n => { servicePrincipal.appRoleAssignedTo = n.getCollectionOfObjectValues<AppRoleAssignment>(createAppRoleAssignmentFromDiscriminatorValue); },
        "appRoleAssignmentRequired": n => { servicePrincipal.appRoleAssignmentRequired = n.getBooleanValue(); },
        "appRoleAssignments": n => { servicePrincipal.appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignment>(createAppRoleAssignmentFromDiscriminatorValue); },
        "appRoles": n => { servicePrincipal.appRoles = n.getCollectionOfObjectValues<AppRole>(createAppRoleFromDiscriminatorValue); },
        "claimsMappingPolicies": n => { servicePrincipal.claimsMappingPolicies = n.getCollectionOfObjectValues<ClaimsMappingPolicy>(createClaimsMappingPolicyFromDiscriminatorValue); },
        "createdObjects": n => { servicePrincipal.createdObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "delegatedPermissionClassifications": n => { servicePrincipal.delegatedPermissionClassifications = n.getCollectionOfObjectValues<DelegatedPermissionClassification>(createDelegatedPermissionClassificationFromDiscriminatorValue); },
        "description": n => { servicePrincipal.description = n.getStringValue(); },
        "disabledByMicrosoftStatus": n => { servicePrincipal.disabledByMicrosoftStatus = n.getStringValue(); },
        "displayName": n => { servicePrincipal.displayName = n.getStringValue(); },
        "endpoints": n => { servicePrincipal.endpoints = n.getCollectionOfObjectValues<Endpoint>(createEndpointFromDiscriminatorValue); },
        "federatedIdentityCredentials": n => { servicePrincipal.federatedIdentityCredentials = n.getCollectionOfObjectValues<FederatedIdentityCredential>(createFederatedIdentityCredentialFromDiscriminatorValue); },
        "homepage": n => { servicePrincipal.homepage = n.getStringValue(); },
        "homeRealmDiscoveryPolicies": n => { servicePrincipal.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicy>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
        "info": n => { servicePrincipal.info = n.getObjectValue<InformationalUrl>(createInformationalUrlFromDiscriminatorValue); },
        "keyCredentials": n => { servicePrincipal.keyCredentials = n.getCollectionOfObjectValues<KeyCredential>(createKeyCredentialFromDiscriminatorValue); },
        "loginUrl": n => { servicePrincipal.loginUrl = n.getStringValue(); },
        "logoutUrl": n => { servicePrincipal.logoutUrl = n.getStringValue(); },
        "memberOf": n => { servicePrincipal.memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "notes": n => { servicePrincipal.notes = n.getStringValue(); },
        "notificationEmailAddresses": n => { servicePrincipal.notificationEmailAddresses = n.getCollectionOfPrimitiveValues<string>(); },
        "oauth2PermissionGrants": n => { servicePrincipal.oauth2PermissionGrants = n.getCollectionOfObjectValues<OAuth2PermissionGrant>(createOAuth2PermissionGrantFromDiscriminatorValue); },
        "oauth2PermissionScopes": n => { servicePrincipal.oauth2PermissionScopes = n.getCollectionOfObjectValues<PermissionScope>(createPermissionScopeFromDiscriminatorValue); },
        "ownedObjects": n => { servicePrincipal.ownedObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "owners": n => { servicePrincipal.owners = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "passwordCredentials": n => { servicePrincipal.passwordCredentials = n.getCollectionOfObjectValues<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
        "preferredSingleSignOnMode": n => { servicePrincipal.preferredSingleSignOnMode = n.getStringValue(); },
        "preferredTokenSigningKeyThumbprint": n => { servicePrincipal.preferredTokenSigningKeyThumbprint = n.getStringValue(); },
        "replyUrls": n => { servicePrincipal.replyUrls = n.getCollectionOfPrimitiveValues<string>(); },
        "resourceSpecificApplicationPermissions": n => { servicePrincipal.resourceSpecificApplicationPermissions = n.getCollectionOfObjectValues<ResourceSpecificPermission>(createResourceSpecificPermissionFromDiscriminatorValue); },
        "samlSingleSignOnSettings": n => { servicePrincipal.samlSingleSignOnSettings = n.getObjectValue<SamlSingleSignOnSettings>(createSamlSingleSignOnSettingsFromDiscriminatorValue); },
        "servicePrincipalNames": n => { servicePrincipal.servicePrincipalNames = n.getCollectionOfPrimitiveValues<string>(); },
        "servicePrincipalType": n => { servicePrincipal.servicePrincipalType = n.getStringValue(); },
        "signInAudience": n => { servicePrincipal.signInAudience = n.getStringValue(); },
        "synchronization": n => { servicePrincipal.synchronization = n.getObjectValue<Synchronization>(createSynchronizationFromDiscriminatorValue); },
        "tags": n => { servicePrincipal.tags = n.getCollectionOfPrimitiveValues<string>(); },
        "tokenEncryptionKeyId": n => { servicePrincipal.tokenEncryptionKeyId = n.getGuidValue(); },
        "tokenIssuancePolicies": n => { servicePrincipal.tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicy>(createTokenIssuancePolicyFromDiscriminatorValue); },
        "tokenLifetimePolicies": n => { servicePrincipal.tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicy>(createTokenLifetimePolicyFromDiscriminatorValue); },
        "transitiveMemberOf": n => { servicePrincipal.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "verifiedPublisher": n => { servicePrincipal.verifiedPublisher = n.getObjectValue<VerifiedPublisher>(createVerifiedPublisherFromDiscriminatorValue); },
    }
}

import {createIdleSessionSignOutFromDiscriminatorValue} from './createIdleSessionSignOutFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdleSessionSignOut} from './idleSessionSignOut';
import {ImageTaggingChoice} from './imageTaggingChoice';
import {serializeIdleSessionSignOut} from './serializeIdleSessionSignOut';
import {SharepointSettings} from './sharepointSettings';
import {SharingCapabilities} from './sharingCapabilities';
import {SharingDomainRestrictionMode} from './sharingDomainRestrictionMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoSharepointSettings(sharepointSettings: SharepointSettings | undefined = {} as SharepointSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(sharepointSettings),
        "allowedDomainGuidsForSyncApp": n => { sharepointSettings.allowedDomainGuidsForSyncApp = n.getCollectionOfPrimitiveValues<Guid>(); },
        "availableManagedPathsForSiteCreation": n => { sharepointSettings.availableManagedPathsForSiteCreation = n.getCollectionOfPrimitiveValues<string>(); },
        "deletedUserPersonalSiteRetentionPeriodInDays": n => { sharepointSettings.deletedUserPersonalSiteRetentionPeriodInDays = n.getNumberValue(); },
        "excludedFileExtensionsForSyncApp": n => { sharepointSettings.excludedFileExtensionsForSyncApp = n.getCollectionOfPrimitiveValues<string>(); },
        "idleSessionSignOut": n => { sharepointSettings.idleSessionSignOut = n.getObjectValue<IdleSessionSignOut>(createIdleSessionSignOutFromDiscriminatorValue); },
        "imageTaggingOption": n => { sharepointSettings.imageTaggingOption = n.getEnumValue<ImageTaggingChoice>(ImageTaggingChoice); },
        "isCommentingOnSitePagesEnabled": n => { sharepointSettings.isCommentingOnSitePagesEnabled = n.getBooleanValue(); },
        "isFileActivityNotificationEnabled": n => { sharepointSettings.isFileActivityNotificationEnabled = n.getBooleanValue(); },
        "isLegacyAuthProtocolsEnabled": n => { sharepointSettings.isLegacyAuthProtocolsEnabled = n.getBooleanValue(); },
        "isLoopEnabled": n => { sharepointSettings.isLoopEnabled = n.getBooleanValue(); },
        "isMacSyncAppEnabled": n => { sharepointSettings.isMacSyncAppEnabled = n.getBooleanValue(); },
        "isRequireAcceptingUserToMatchInvitedUserEnabled": n => { sharepointSettings.isRequireAcceptingUserToMatchInvitedUserEnabled = n.getBooleanValue(); },
        "isResharingByExternalUsersEnabled": n => { sharepointSettings.isResharingByExternalUsersEnabled = n.getBooleanValue(); },
        "isSharePointMobileNotificationEnabled": n => { sharepointSettings.isSharePointMobileNotificationEnabled = n.getBooleanValue(); },
        "isSharePointNewsfeedEnabled": n => { sharepointSettings.isSharePointNewsfeedEnabled = n.getBooleanValue(); },
        "isSiteCreationEnabled": n => { sharepointSettings.isSiteCreationEnabled = n.getBooleanValue(); },
        "isSiteCreationUIEnabled": n => { sharepointSettings.isSiteCreationUIEnabled = n.getBooleanValue(); },
        "isSitePagesCreationEnabled": n => { sharepointSettings.isSitePagesCreationEnabled = n.getBooleanValue(); },
        "isSitesStorageLimitAutomatic": n => { sharepointSettings.isSitesStorageLimitAutomatic = n.getBooleanValue(); },
        "isSyncButtonHiddenOnPersonalSite": n => { sharepointSettings.isSyncButtonHiddenOnPersonalSite = n.getBooleanValue(); },
        "isUnmanagedSyncAppForTenantRestricted": n => { sharepointSettings.isUnmanagedSyncAppForTenantRestricted = n.getBooleanValue(); },
        "personalSiteDefaultStorageLimitInMB": n => { sharepointSettings.personalSiteDefaultStorageLimitInMB = n.getNumberValue(); },
        "sharingAllowedDomainList": n => { sharepointSettings.sharingAllowedDomainList = n.getCollectionOfPrimitiveValues<string>(); },
        "sharingBlockedDomainList": n => { sharepointSettings.sharingBlockedDomainList = n.getCollectionOfPrimitiveValues<string>(); },
        "sharingCapability": n => { sharepointSettings.sharingCapability = n.getEnumValue<SharingCapabilities>(SharingCapabilities); },
        "sharingDomainRestrictionMode": n => { sharepointSettings.sharingDomainRestrictionMode = n.getEnumValue<SharingDomainRestrictionMode>(SharingDomainRestrictionMode); },
        "siteCreationDefaultManagedPath": n => { sharepointSettings.siteCreationDefaultManagedPath = n.getStringValue(); },
        "siteCreationDefaultStorageLimitInMB": n => { sharepointSettings.siteCreationDefaultStorageLimitInMB = n.getNumberValue(); },
        "tenantDefaultTimezone": n => { sharepointSettings.tenantDefaultTimezone = n.getStringValue(); },
    }
}

import {IdleSessionSignOut} from './idleSessionSignOut';
import {ImageTaggingChoice} from './imageTaggingChoice';
import {serializeEntity} from './serializeEntity';
import {serializeIdleSessionSignOut} from './serializeIdleSessionSignOut';
import {SharepointSettings} from './sharepointSettings';
import {SharingCapabilities} from './sharingCapabilities';
import {SharingDomainRestrictionMode} from './sharingDomainRestrictionMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeSharepointSettings(writer: SerializationWriter, sharepointSettings: SharepointSettings | undefined = {} as SharepointSettings) : void {
        serializeEntity(writer, sharepointSettings)
        writer.writeCollectionOfPrimitiveValues<Guid>("allowedDomainGuidsForSyncApp", sharepointSettings.allowedDomainGuidsForSyncApp);
        writer.writeCollectionOfPrimitiveValues<string>("availableManagedPathsForSiteCreation", sharepointSettings.availableManagedPathsForSiteCreation);
        writer.writeNumberValue("deletedUserPersonalSiteRetentionPeriodInDays", sharepointSettings.deletedUserPersonalSiteRetentionPeriodInDays);
        writer.writeCollectionOfPrimitiveValues<string>("excludedFileExtensionsForSyncApp", sharepointSettings.excludedFileExtensionsForSyncApp);
        writer.writeObjectValue<IdleSessionSignOut>("idleSessionSignOut", sharepointSettings.idleSessionSignOut, serializeIdleSessionSignOut);
        writer.writeEnumValue<ImageTaggingChoice>("imageTaggingOption", sharepointSettings.imageTaggingOption);
        writer.writeBooleanValue("isCommentingOnSitePagesEnabled", sharepointSettings.isCommentingOnSitePagesEnabled);
        writer.writeBooleanValue("isFileActivityNotificationEnabled", sharepointSettings.isFileActivityNotificationEnabled);
        writer.writeBooleanValue("isLegacyAuthProtocolsEnabled", sharepointSettings.isLegacyAuthProtocolsEnabled);
        writer.writeBooleanValue("isLoopEnabled", sharepointSettings.isLoopEnabled);
        writer.writeBooleanValue("isMacSyncAppEnabled", sharepointSettings.isMacSyncAppEnabled);
        writer.writeBooleanValue("isRequireAcceptingUserToMatchInvitedUserEnabled", sharepointSettings.isRequireAcceptingUserToMatchInvitedUserEnabled);
        writer.writeBooleanValue("isResharingByExternalUsersEnabled", sharepointSettings.isResharingByExternalUsersEnabled);
        writer.writeBooleanValue("isSharePointMobileNotificationEnabled", sharepointSettings.isSharePointMobileNotificationEnabled);
        writer.writeBooleanValue("isSharePointNewsfeedEnabled", sharepointSettings.isSharePointNewsfeedEnabled);
        writer.writeBooleanValue("isSiteCreationEnabled", sharepointSettings.isSiteCreationEnabled);
        writer.writeBooleanValue("isSiteCreationUIEnabled", sharepointSettings.isSiteCreationUIEnabled);
        writer.writeBooleanValue("isSitePagesCreationEnabled", sharepointSettings.isSitePagesCreationEnabled);
        writer.writeBooleanValue("isSitesStorageLimitAutomatic", sharepointSettings.isSitesStorageLimitAutomatic);
        writer.writeBooleanValue("isSyncButtonHiddenOnPersonalSite", sharepointSettings.isSyncButtonHiddenOnPersonalSite);
        writer.writeBooleanValue("isUnmanagedSyncAppForTenantRestricted", sharepointSettings.isUnmanagedSyncAppForTenantRestricted);
        writer.writeNumberValue("personalSiteDefaultStorageLimitInMB", sharepointSettings.personalSiteDefaultStorageLimitInMB);
        writer.writeCollectionOfPrimitiveValues<string>("sharingAllowedDomainList", sharepointSettings.sharingAllowedDomainList);
        writer.writeCollectionOfPrimitiveValues<string>("sharingBlockedDomainList", sharepointSettings.sharingBlockedDomainList);
        writer.writeEnumValue<SharingCapabilities>("sharingCapability", sharepointSettings.sharingCapability);
        writer.writeEnumValue<SharingDomainRestrictionMode>("sharingDomainRestrictionMode", sharepointSettings.sharingDomainRestrictionMode);
        writer.writeStringValue("siteCreationDefaultManagedPath", sharepointSettings.siteCreationDefaultManagedPath);
        writer.writeNumberValue("siteCreationDefaultStorageLimitInMB", sharepointSettings.siteCreationDefaultStorageLimitInMB);
        writer.writeStringValue("tenantDefaultTimezone", sharepointSettings.tenantDefaultTimezone);
}

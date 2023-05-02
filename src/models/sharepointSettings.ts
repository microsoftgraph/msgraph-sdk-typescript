import {Entity} from './entity';
import {IdleSessionSignOut} from './idleSessionSignOut';
import {ImageTaggingChoice} from './imageTaggingChoice';
import {SharingCapabilities} from './sharingCapabilities';
import {SharingDomainRestrictionMode} from './sharingDomainRestrictionMode';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharepointSettings extends Entity, Parsable {
    /** The allowedDomainGuidsForSyncApp property */
    allowedDomainGuidsForSyncApp?: string[] | undefined;
    /** The availableManagedPathsForSiteCreation property */
    availableManagedPathsForSiteCreation?: string[] | undefined;
    /** The deletedUserPersonalSiteRetentionPeriodInDays property */
    deletedUserPersonalSiteRetentionPeriodInDays?: number | undefined;
    /** The excludedFileExtensionsForSyncApp property */
    excludedFileExtensionsForSyncApp?: string[] | undefined;
    /** The idleSessionSignOut property */
    idleSessionSignOut?: IdleSessionSignOut | undefined;
    /** The imageTaggingOption property */
    imageTaggingOption?: ImageTaggingChoice | undefined;
    /** The isCommentingOnSitePagesEnabled property */
    isCommentingOnSitePagesEnabled?: boolean | undefined;
    /** The isFileActivityNotificationEnabled property */
    isFileActivityNotificationEnabled?: boolean | undefined;
    /** The isLegacyAuthProtocolsEnabled property */
    isLegacyAuthProtocolsEnabled?: boolean | undefined;
    /** The isLoopEnabled property */
    isLoopEnabled?: boolean | undefined;
    /** The isMacSyncAppEnabled property */
    isMacSyncAppEnabled?: boolean | undefined;
    /** The isRequireAcceptingUserToMatchInvitedUserEnabled property */
    isRequireAcceptingUserToMatchInvitedUserEnabled?: boolean | undefined;
    /** The isResharingByExternalUsersEnabled property */
    isResharingByExternalUsersEnabled?: boolean | undefined;
    /** The isSharePointMobileNotificationEnabled property */
    isSharePointMobileNotificationEnabled?: boolean | undefined;
    /** The isSharePointNewsfeedEnabled property */
    isSharePointNewsfeedEnabled?: boolean | undefined;
    /** The isSiteCreationEnabled property */
    isSiteCreationEnabled?: boolean | undefined;
    /** The isSiteCreationUIEnabled property */
    isSiteCreationUIEnabled?: boolean | undefined;
    /** The isSitePagesCreationEnabled property */
    isSitePagesCreationEnabled?: boolean | undefined;
    /** The isSitesStorageLimitAutomatic property */
    isSitesStorageLimitAutomatic?: boolean | undefined;
    /** The isSyncButtonHiddenOnPersonalSite property */
    isSyncButtonHiddenOnPersonalSite?: boolean | undefined;
    /** The isUnmanagedSyncAppForTenantRestricted property */
    isUnmanagedSyncAppForTenantRestricted?: boolean | undefined;
    /** The personalSiteDefaultStorageLimitInMB property */
    personalSiteDefaultStorageLimitInMB?: number | undefined;
    /** The sharingAllowedDomainList property */
    sharingAllowedDomainList?: string[] | undefined;
    /** The sharingBlockedDomainList property */
    sharingBlockedDomainList?: string[] | undefined;
    /** The sharingCapability property */
    sharingCapability?: SharingCapabilities | undefined;
    /** The sharingDomainRestrictionMode property */
    sharingDomainRestrictionMode?: SharingDomainRestrictionMode | undefined;
    /** The siteCreationDefaultManagedPath property */
    siteCreationDefaultManagedPath?: string | undefined;
    /** The siteCreationDefaultStorageLimitInMB property */
    siteCreationDefaultStorageLimitInMB?: number | undefined;
    /** The tenantDefaultTimezone property */
    tenantDefaultTimezone?: string | undefined;
}

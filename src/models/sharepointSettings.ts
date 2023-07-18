import {Entity} from './entity';
import {IdleSessionSignOut} from './idleSessionSignOut';
import {ImageTaggingChoice} from './imageTaggingChoice';
import {SharingCapabilities} from './sharingCapabilities';
import {SharingDomainRestrictionMode} from './sharingDomainRestrictionMode';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface SharepointSettings extends Entity, Parsable {
    /**
     * Collection of trusted domain GUIDs for the OneDrive sync app.
     */
    allowedDomainGuidsForSyncApp?: Guid[] | undefined;
    /**
     * Collection of managed paths available for site creation. Read-only.
     */
    availableManagedPathsForSiteCreation?: string[] | undefined;
    /**
     * The number of days for preserving a deleted user's OneDrive.
     */
    deletedUserPersonalSiteRetentionPeriodInDays?: number | undefined;
    /**
     * Collection of file extensions not uploaded by the OneDrive sync app.
     */
    excludedFileExtensionsForSyncApp?: string[] | undefined;
    /**
     * Specifies the idle session sign-out policies for the tenant.
     */
    idleSessionSignOut?: IdleSessionSignOut | undefined;
    /**
     * Specifies the image tagging option for the tenant. Possible values are: disabled, basic, enhanced.
     */
    imageTaggingOption?: ImageTaggingChoice | undefined;
    /**
     * Indicates whether comments are allowed on modern site pages in SharePoint.
     */
    isCommentingOnSitePagesEnabled?: boolean | undefined;
    /**
     * Indicates whether push notifications are enabled for OneDrive events.
     */
    isFileActivityNotificationEnabled?: boolean | undefined;
    /**
     * Indicates whether legacy authentication protocols are enabled for the tenant.
     */
    isLegacyAuthProtocolsEnabled?: boolean | undefined;
    /**
     * Indicates whether if Fluid Framework is allowed on SharePoint sites.
     */
    isLoopEnabled?: boolean | undefined;
    /**
     * Indicates whether files can be synced using the OneDrive sync app for Mac.
     */
    isMacSyncAppEnabled?: boolean | undefined;
    /**
     * Indicates whether guests must sign in using the same account to which sharing invitations are sent.
     */
    isRequireAcceptingUserToMatchInvitedUserEnabled?: boolean | undefined;
    /**
     * Indicates whether guests are allowed to reshare files, folders, and sites they don't own.
     */
    isResharingByExternalUsersEnabled?: boolean | undefined;
    /**
     * Indicates whether mobile push notifications are enabled for SharePoint.
     */
    isSharePointMobileNotificationEnabled?: boolean | undefined;
    /**
     * Indicates whether the newsfeed is allowed on the modern site pages in SharePoint.
     */
    isSharePointNewsfeedEnabled?: boolean | undefined;
    /**
     * Indicates whether users are allowed to create sites.
     */
    isSiteCreationEnabled?: boolean | undefined;
    /**
     * Indicates whether the UI commands for creating sites are shown.
     */
    isSiteCreationUIEnabled?: boolean | undefined;
    /**
     * Indicates whether creating new modern pages is allowed on SharePoint sites.
     */
    isSitePagesCreationEnabled?: boolean | undefined;
    /**
     * Indicates whether site storage space is automatically managed or if specific storage limits are set per site.
     */
    isSitesStorageLimitAutomatic?: boolean | undefined;
    /**
     * Indicates whether the sync button in OneDrive is hidden.
     */
    isSyncButtonHiddenOnPersonalSite?: boolean | undefined;
    /**
     * Indicates whether users are allowed to sync files only on PCs joined to specific domains.
     */
    isUnmanagedSyncAppForTenantRestricted?: boolean | undefined;
    /**
     * The default OneDrive storage limit for all new and existing users who are assigned a qualifying license. Measured in megabytes (MB).
     */
    personalSiteDefaultStorageLimitInMB?: number | undefined;
    /**
     * Collection of email domains that are allowed for sharing outside the organization.
     */
    sharingAllowedDomainList?: string[] | undefined;
    /**
     * Collection of email domains that are blocked for sharing outside the organization.
     */
    sharingBlockedDomainList?: string[] | undefined;
    /**
     * Sharing capability for the tenant. Possible values are: disabled, externalUserSharingOnly, externalUserAndGuestSharing, existingExternalUserSharingOnly.
     */
    sharingCapability?: SharingCapabilities | undefined;
    /**
     * Specifies the external sharing mode for domains. Possible values are: none, allowList, blockList.
     */
    sharingDomainRestrictionMode?: SharingDomainRestrictionMode | undefined;
    /**
     * The value of the team site managed path. This is the path under which new team sites will be created.
     */
    siteCreationDefaultManagedPath?: string | undefined;
    /**
     * The default storage quota for a new site upon creation. Measured in megabytes (MB).
     */
    siteCreationDefaultStorageLimitInMB?: number | undefined;
    /**
     * The default timezone of a tenant for newly created sites. For a list of possible values, see SPRegionalSettings.TimeZones property.
     */
    tenantDefaultTimezone?: string | undefined;
}

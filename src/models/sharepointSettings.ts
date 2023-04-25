import {createIdleSessionSignOutFromDiscriminatorValue} from './createIdleSessionSignOutFromDiscriminatorValue';
import {ImageTaggingChoice} from './imageTaggingChoice';
import {Entity, IdleSessionSignOut} from './index';
import {SharingCapabilities} from './sharingCapabilities';
import {SharingDomainRestrictionMode} from './sharingDomainRestrictionMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharepointSettings extends Entity implements Parsable {
    /** The allowedDomainGuidsForSyncApp property */
    private _allowedDomainGuidsForSyncApp?: string[] | undefined;
    /** The availableManagedPathsForSiteCreation property */
    private _availableManagedPathsForSiteCreation?: string[] | undefined;
    /** The deletedUserPersonalSiteRetentionPeriodInDays property */
    private _deletedUserPersonalSiteRetentionPeriodInDays?: number | undefined;
    /** The excludedFileExtensionsForSyncApp property */
    private _excludedFileExtensionsForSyncApp?: string[] | undefined;
    /** The idleSessionSignOut property */
    private _idleSessionSignOut?: IdleSessionSignOut | undefined;
    /** The imageTaggingOption property */
    private _imageTaggingOption?: ImageTaggingChoice | undefined;
    /** The isCommentingOnSitePagesEnabled property */
    private _isCommentingOnSitePagesEnabled?: boolean | undefined;
    /** The isFileActivityNotificationEnabled property */
    private _isFileActivityNotificationEnabled?: boolean | undefined;
    /** The isLegacyAuthProtocolsEnabled property */
    private _isLegacyAuthProtocolsEnabled?: boolean | undefined;
    /** The isLoopEnabled property */
    private _isLoopEnabled?: boolean | undefined;
    /** The isMacSyncAppEnabled property */
    private _isMacSyncAppEnabled?: boolean | undefined;
    /** The isRequireAcceptingUserToMatchInvitedUserEnabled property */
    private _isRequireAcceptingUserToMatchInvitedUserEnabled?: boolean | undefined;
    /** The isResharingByExternalUsersEnabled property */
    private _isResharingByExternalUsersEnabled?: boolean | undefined;
    /** The isSharePointMobileNotificationEnabled property */
    private _isSharePointMobileNotificationEnabled?: boolean | undefined;
    /** The isSharePointNewsfeedEnabled property */
    private _isSharePointNewsfeedEnabled?: boolean | undefined;
    /** The isSiteCreationEnabled property */
    private _isSiteCreationEnabled?: boolean | undefined;
    /** The isSiteCreationUIEnabled property */
    private _isSiteCreationUIEnabled?: boolean | undefined;
    /** The isSitePagesCreationEnabled property */
    private _isSitePagesCreationEnabled?: boolean | undefined;
    /** The isSitesStorageLimitAutomatic property */
    private _isSitesStorageLimitAutomatic?: boolean | undefined;
    /** The isSyncButtonHiddenOnPersonalSite property */
    private _isSyncButtonHiddenOnPersonalSite?: boolean | undefined;
    /** The isUnmanagedSyncAppForTenantRestricted property */
    private _isUnmanagedSyncAppForTenantRestricted?: boolean | undefined;
    /** The personalSiteDefaultStorageLimitInMB property */
    private _personalSiteDefaultStorageLimitInMB?: number | undefined;
    /** The sharingAllowedDomainList property */
    private _sharingAllowedDomainList?: string[] | undefined;
    /** The sharingBlockedDomainList property */
    private _sharingBlockedDomainList?: string[] | undefined;
    /** The sharingCapability property */
    private _sharingCapability?: SharingCapabilities | undefined;
    /** The sharingDomainRestrictionMode property */
    private _sharingDomainRestrictionMode?: SharingDomainRestrictionMode | undefined;
    /** The siteCreationDefaultManagedPath property */
    private _siteCreationDefaultManagedPath?: string | undefined;
    /** The siteCreationDefaultStorageLimitInMB property */
    private _siteCreationDefaultStorageLimitInMB?: number | undefined;
    /** The tenantDefaultTimezone property */
    private _tenantDefaultTimezone?: string | undefined;
    /**
     * Gets the allowedDomainGuidsForSyncApp property value. The allowedDomainGuidsForSyncApp property
     * @returns a Guid
     */
    public get allowedDomainGuidsForSyncApp() {
        return this._allowedDomainGuidsForSyncApp;
    };
    /**
     * Sets the allowedDomainGuidsForSyncApp property value. The allowedDomainGuidsForSyncApp property
     * @param value Value to set for the allowedDomainGuidsForSyncApp property.
     */
    public set allowedDomainGuidsForSyncApp(value: string[] | undefined) {
        this._allowedDomainGuidsForSyncApp = value;
    };
    /**
     * Gets the availableManagedPathsForSiteCreation property value. The availableManagedPathsForSiteCreation property
     * @returns a string
     */
    public get availableManagedPathsForSiteCreation() {
        return this._availableManagedPathsForSiteCreation;
    };
    /**
     * Sets the availableManagedPathsForSiteCreation property value. The availableManagedPathsForSiteCreation property
     * @param value Value to set for the availableManagedPathsForSiteCreation property.
     */
    public set availableManagedPathsForSiteCreation(value: string[] | undefined) {
        this._availableManagedPathsForSiteCreation = value;
    };
    /**
     * Instantiates a new sharepointSettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deletedUserPersonalSiteRetentionPeriodInDays property value. The deletedUserPersonalSiteRetentionPeriodInDays property
     * @returns a integer
     */
    public get deletedUserPersonalSiteRetentionPeriodInDays() {
        return this._deletedUserPersonalSiteRetentionPeriodInDays;
    };
    /**
     * Sets the deletedUserPersonalSiteRetentionPeriodInDays property value. The deletedUserPersonalSiteRetentionPeriodInDays property
     * @param value Value to set for the deletedUserPersonalSiteRetentionPeriodInDays property.
     */
    public set deletedUserPersonalSiteRetentionPeriodInDays(value: number | undefined) {
        this._deletedUserPersonalSiteRetentionPeriodInDays = value;
    };
    /**
     * Gets the excludedFileExtensionsForSyncApp property value. The excludedFileExtensionsForSyncApp property
     * @returns a string
     */
    public get excludedFileExtensionsForSyncApp() {
        return this._excludedFileExtensionsForSyncApp;
    };
    /**
     * Sets the excludedFileExtensionsForSyncApp property value. The excludedFileExtensionsForSyncApp property
     * @param value Value to set for the excludedFileExtensionsForSyncApp property.
     */
    public set excludedFileExtensionsForSyncApp(value: string[] | undefined) {
        this._excludedFileExtensionsForSyncApp = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedDomainGuidsForSyncApp": n => { this.allowedDomainGuidsForSyncApp = n.getCollectionOfPrimitiveValues<string>(); },
            "availableManagedPathsForSiteCreation": n => { this.availableManagedPathsForSiteCreation = n.getCollectionOfPrimitiveValues<string>(); },
            "deletedUserPersonalSiteRetentionPeriodInDays": n => { this.deletedUserPersonalSiteRetentionPeriodInDays = n.getNumberValue(); },
            "excludedFileExtensionsForSyncApp": n => { this.excludedFileExtensionsForSyncApp = n.getCollectionOfPrimitiveValues<string>(); },
            "idleSessionSignOut": n => { this.idleSessionSignOut = n.getObjectValue<IdleSessionSignOut>(createIdleSessionSignOutFromDiscriminatorValue); },
            "imageTaggingOption": n => { this.imageTaggingOption = n.getEnumValue<ImageTaggingChoice>(ImageTaggingChoice); },
            "isCommentingOnSitePagesEnabled": n => { this.isCommentingOnSitePagesEnabled = n.getBooleanValue(); },
            "isFileActivityNotificationEnabled": n => { this.isFileActivityNotificationEnabled = n.getBooleanValue(); },
            "isLegacyAuthProtocolsEnabled": n => { this.isLegacyAuthProtocolsEnabled = n.getBooleanValue(); },
            "isLoopEnabled": n => { this.isLoopEnabled = n.getBooleanValue(); },
            "isMacSyncAppEnabled": n => { this.isMacSyncAppEnabled = n.getBooleanValue(); },
            "isRequireAcceptingUserToMatchInvitedUserEnabled": n => { this.isRequireAcceptingUserToMatchInvitedUserEnabled = n.getBooleanValue(); },
            "isResharingByExternalUsersEnabled": n => { this.isResharingByExternalUsersEnabled = n.getBooleanValue(); },
            "isSharePointMobileNotificationEnabled": n => { this.isSharePointMobileNotificationEnabled = n.getBooleanValue(); },
            "isSharePointNewsfeedEnabled": n => { this.isSharePointNewsfeedEnabled = n.getBooleanValue(); },
            "isSiteCreationEnabled": n => { this.isSiteCreationEnabled = n.getBooleanValue(); },
            "isSiteCreationUIEnabled": n => { this.isSiteCreationUIEnabled = n.getBooleanValue(); },
            "isSitePagesCreationEnabled": n => { this.isSitePagesCreationEnabled = n.getBooleanValue(); },
            "isSitesStorageLimitAutomatic": n => { this.isSitesStorageLimitAutomatic = n.getBooleanValue(); },
            "isSyncButtonHiddenOnPersonalSite": n => { this.isSyncButtonHiddenOnPersonalSite = n.getBooleanValue(); },
            "isUnmanagedSyncAppForTenantRestricted": n => { this.isUnmanagedSyncAppForTenantRestricted = n.getBooleanValue(); },
            "personalSiteDefaultStorageLimitInMB": n => { this.personalSiteDefaultStorageLimitInMB = n.getNumberValue(); },
            "sharingAllowedDomainList": n => { this.sharingAllowedDomainList = n.getCollectionOfPrimitiveValues<string>(); },
            "sharingBlockedDomainList": n => { this.sharingBlockedDomainList = n.getCollectionOfPrimitiveValues<string>(); },
            "sharingCapability": n => { this.sharingCapability = n.getEnumValue<SharingCapabilities>(SharingCapabilities); },
            "sharingDomainRestrictionMode": n => { this.sharingDomainRestrictionMode = n.getEnumValue<SharingDomainRestrictionMode>(SharingDomainRestrictionMode); },
            "siteCreationDefaultManagedPath": n => { this.siteCreationDefaultManagedPath = n.getStringValue(); },
            "siteCreationDefaultStorageLimitInMB": n => { this.siteCreationDefaultStorageLimitInMB = n.getNumberValue(); },
            "tenantDefaultTimezone": n => { this.tenantDefaultTimezone = n.getStringValue(); },
        };
    };
    /**
     * Gets the idleSessionSignOut property value. The idleSessionSignOut property
     * @returns a idleSessionSignOut
     */
    public get idleSessionSignOut() {
        return this._idleSessionSignOut;
    };
    /**
     * Sets the idleSessionSignOut property value. The idleSessionSignOut property
     * @param value Value to set for the idleSessionSignOut property.
     */
    public set idleSessionSignOut(value: IdleSessionSignOut | undefined) {
        this._idleSessionSignOut = value;
    };
    /**
     * Gets the imageTaggingOption property value. The imageTaggingOption property
     * @returns a imageTaggingChoice
     */
    public get imageTaggingOption() {
        return this._imageTaggingOption;
    };
    /**
     * Sets the imageTaggingOption property value. The imageTaggingOption property
     * @param value Value to set for the imageTaggingOption property.
     */
    public set imageTaggingOption(value: ImageTaggingChoice | undefined) {
        this._imageTaggingOption = value;
    };
    /**
     * Gets the isCommentingOnSitePagesEnabled property value. The isCommentingOnSitePagesEnabled property
     * @returns a boolean
     */
    public get isCommentingOnSitePagesEnabled() {
        return this._isCommentingOnSitePagesEnabled;
    };
    /**
     * Sets the isCommentingOnSitePagesEnabled property value. The isCommentingOnSitePagesEnabled property
     * @param value Value to set for the isCommentingOnSitePagesEnabled property.
     */
    public set isCommentingOnSitePagesEnabled(value: boolean | undefined) {
        this._isCommentingOnSitePagesEnabled = value;
    };
    /**
     * Gets the isFileActivityNotificationEnabled property value. The isFileActivityNotificationEnabled property
     * @returns a boolean
     */
    public get isFileActivityNotificationEnabled() {
        return this._isFileActivityNotificationEnabled;
    };
    /**
     * Sets the isFileActivityNotificationEnabled property value. The isFileActivityNotificationEnabled property
     * @param value Value to set for the isFileActivityNotificationEnabled property.
     */
    public set isFileActivityNotificationEnabled(value: boolean | undefined) {
        this._isFileActivityNotificationEnabled = value;
    };
    /**
     * Gets the isLegacyAuthProtocolsEnabled property value. The isLegacyAuthProtocolsEnabled property
     * @returns a boolean
     */
    public get isLegacyAuthProtocolsEnabled() {
        return this._isLegacyAuthProtocolsEnabled;
    };
    /**
     * Sets the isLegacyAuthProtocolsEnabled property value. The isLegacyAuthProtocolsEnabled property
     * @param value Value to set for the isLegacyAuthProtocolsEnabled property.
     */
    public set isLegacyAuthProtocolsEnabled(value: boolean | undefined) {
        this._isLegacyAuthProtocolsEnabled = value;
    };
    /**
     * Gets the isLoopEnabled property value. The isLoopEnabled property
     * @returns a boolean
     */
    public get isLoopEnabled() {
        return this._isLoopEnabled;
    };
    /**
     * Sets the isLoopEnabled property value. The isLoopEnabled property
     * @param value Value to set for the isLoopEnabled property.
     */
    public set isLoopEnabled(value: boolean | undefined) {
        this._isLoopEnabled = value;
    };
    /**
     * Gets the isMacSyncAppEnabled property value. The isMacSyncAppEnabled property
     * @returns a boolean
     */
    public get isMacSyncAppEnabled() {
        return this._isMacSyncAppEnabled;
    };
    /**
     * Sets the isMacSyncAppEnabled property value. The isMacSyncAppEnabled property
     * @param value Value to set for the isMacSyncAppEnabled property.
     */
    public set isMacSyncAppEnabled(value: boolean | undefined) {
        this._isMacSyncAppEnabled = value;
    };
    /**
     * Gets the isRequireAcceptingUserToMatchInvitedUserEnabled property value. The isRequireAcceptingUserToMatchInvitedUserEnabled property
     * @returns a boolean
     */
    public get isRequireAcceptingUserToMatchInvitedUserEnabled() {
        return this._isRequireAcceptingUserToMatchInvitedUserEnabled;
    };
    /**
     * Sets the isRequireAcceptingUserToMatchInvitedUserEnabled property value. The isRequireAcceptingUserToMatchInvitedUserEnabled property
     * @param value Value to set for the isRequireAcceptingUserToMatchInvitedUserEnabled property.
     */
    public set isRequireAcceptingUserToMatchInvitedUserEnabled(value: boolean | undefined) {
        this._isRequireAcceptingUserToMatchInvitedUserEnabled = value;
    };
    /**
     * Gets the isResharingByExternalUsersEnabled property value. The isResharingByExternalUsersEnabled property
     * @returns a boolean
     */
    public get isResharingByExternalUsersEnabled() {
        return this._isResharingByExternalUsersEnabled;
    };
    /**
     * Sets the isResharingByExternalUsersEnabled property value. The isResharingByExternalUsersEnabled property
     * @param value Value to set for the isResharingByExternalUsersEnabled property.
     */
    public set isResharingByExternalUsersEnabled(value: boolean | undefined) {
        this._isResharingByExternalUsersEnabled = value;
    };
    /**
     * Gets the isSharePointMobileNotificationEnabled property value. The isSharePointMobileNotificationEnabled property
     * @returns a boolean
     */
    public get isSharePointMobileNotificationEnabled() {
        return this._isSharePointMobileNotificationEnabled;
    };
    /**
     * Sets the isSharePointMobileNotificationEnabled property value. The isSharePointMobileNotificationEnabled property
     * @param value Value to set for the isSharePointMobileNotificationEnabled property.
     */
    public set isSharePointMobileNotificationEnabled(value: boolean | undefined) {
        this._isSharePointMobileNotificationEnabled = value;
    };
    /**
     * Gets the isSharePointNewsfeedEnabled property value. The isSharePointNewsfeedEnabled property
     * @returns a boolean
     */
    public get isSharePointNewsfeedEnabled() {
        return this._isSharePointNewsfeedEnabled;
    };
    /**
     * Sets the isSharePointNewsfeedEnabled property value. The isSharePointNewsfeedEnabled property
     * @param value Value to set for the isSharePointNewsfeedEnabled property.
     */
    public set isSharePointNewsfeedEnabled(value: boolean | undefined) {
        this._isSharePointNewsfeedEnabled = value;
    };
    /**
     * Gets the isSiteCreationEnabled property value. The isSiteCreationEnabled property
     * @returns a boolean
     */
    public get isSiteCreationEnabled() {
        return this._isSiteCreationEnabled;
    };
    /**
     * Sets the isSiteCreationEnabled property value. The isSiteCreationEnabled property
     * @param value Value to set for the isSiteCreationEnabled property.
     */
    public set isSiteCreationEnabled(value: boolean | undefined) {
        this._isSiteCreationEnabled = value;
    };
    /**
     * Gets the isSiteCreationUIEnabled property value. The isSiteCreationUIEnabled property
     * @returns a boolean
     */
    public get isSiteCreationUIEnabled() {
        return this._isSiteCreationUIEnabled;
    };
    /**
     * Sets the isSiteCreationUIEnabled property value. The isSiteCreationUIEnabled property
     * @param value Value to set for the isSiteCreationUIEnabled property.
     */
    public set isSiteCreationUIEnabled(value: boolean | undefined) {
        this._isSiteCreationUIEnabled = value;
    };
    /**
     * Gets the isSitePagesCreationEnabled property value. The isSitePagesCreationEnabled property
     * @returns a boolean
     */
    public get isSitePagesCreationEnabled() {
        return this._isSitePagesCreationEnabled;
    };
    /**
     * Sets the isSitePagesCreationEnabled property value. The isSitePagesCreationEnabled property
     * @param value Value to set for the isSitePagesCreationEnabled property.
     */
    public set isSitePagesCreationEnabled(value: boolean | undefined) {
        this._isSitePagesCreationEnabled = value;
    };
    /**
     * Gets the isSitesStorageLimitAutomatic property value. The isSitesStorageLimitAutomatic property
     * @returns a boolean
     */
    public get isSitesStorageLimitAutomatic() {
        return this._isSitesStorageLimitAutomatic;
    };
    /**
     * Sets the isSitesStorageLimitAutomatic property value. The isSitesStorageLimitAutomatic property
     * @param value Value to set for the isSitesStorageLimitAutomatic property.
     */
    public set isSitesStorageLimitAutomatic(value: boolean | undefined) {
        this._isSitesStorageLimitAutomatic = value;
    };
    /**
     * Gets the isSyncButtonHiddenOnPersonalSite property value. The isSyncButtonHiddenOnPersonalSite property
     * @returns a boolean
     */
    public get isSyncButtonHiddenOnPersonalSite() {
        return this._isSyncButtonHiddenOnPersonalSite;
    };
    /**
     * Sets the isSyncButtonHiddenOnPersonalSite property value. The isSyncButtonHiddenOnPersonalSite property
     * @param value Value to set for the isSyncButtonHiddenOnPersonalSite property.
     */
    public set isSyncButtonHiddenOnPersonalSite(value: boolean | undefined) {
        this._isSyncButtonHiddenOnPersonalSite = value;
    };
    /**
     * Gets the isUnmanagedSyncAppForTenantRestricted property value. The isUnmanagedSyncAppForTenantRestricted property
     * @returns a boolean
     */
    public get isUnmanagedSyncAppForTenantRestricted() {
        return this._isUnmanagedSyncAppForTenantRestricted;
    };
    /**
     * Sets the isUnmanagedSyncAppForTenantRestricted property value. The isUnmanagedSyncAppForTenantRestricted property
     * @param value Value to set for the isUnmanagedSyncAppForTenantRestricted property.
     */
    public set isUnmanagedSyncAppForTenantRestricted(value: boolean | undefined) {
        this._isUnmanagedSyncAppForTenantRestricted = value;
    };
    /**
     * Gets the personalSiteDefaultStorageLimitInMB property value. The personalSiteDefaultStorageLimitInMB property
     * @returns a int64
     */
    public get personalSiteDefaultStorageLimitInMB() {
        return this._personalSiteDefaultStorageLimitInMB;
    };
    /**
     * Sets the personalSiteDefaultStorageLimitInMB property value. The personalSiteDefaultStorageLimitInMB property
     * @param value Value to set for the personalSiteDefaultStorageLimitInMB property.
     */
    public set personalSiteDefaultStorageLimitInMB(value: number | undefined) {
        this._personalSiteDefaultStorageLimitInMB = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("allowedDomainGuidsForSyncApp", this.allowedDomainGuidsForSyncApp);
        writer.writeCollectionOfPrimitiveValues<string>("availableManagedPathsForSiteCreation", this.availableManagedPathsForSiteCreation);
        writer.writeNumberValue("deletedUserPersonalSiteRetentionPeriodInDays", this.deletedUserPersonalSiteRetentionPeriodInDays);
        writer.writeCollectionOfPrimitiveValues<string>("excludedFileExtensionsForSyncApp", this.excludedFileExtensionsForSyncApp);
        writer.writeObjectValue<IdleSessionSignOut>("idleSessionSignOut", this.idleSessionSignOut);
        writer.writeEnumValue<ImageTaggingChoice>("imageTaggingOption", this.imageTaggingOption);
        writer.writeBooleanValue("isCommentingOnSitePagesEnabled", this.isCommentingOnSitePagesEnabled);
        writer.writeBooleanValue("isFileActivityNotificationEnabled", this.isFileActivityNotificationEnabled);
        writer.writeBooleanValue("isLegacyAuthProtocolsEnabled", this.isLegacyAuthProtocolsEnabled);
        writer.writeBooleanValue("isLoopEnabled", this.isLoopEnabled);
        writer.writeBooleanValue("isMacSyncAppEnabled", this.isMacSyncAppEnabled);
        writer.writeBooleanValue("isRequireAcceptingUserToMatchInvitedUserEnabled", this.isRequireAcceptingUserToMatchInvitedUserEnabled);
        writer.writeBooleanValue("isResharingByExternalUsersEnabled", this.isResharingByExternalUsersEnabled);
        writer.writeBooleanValue("isSharePointMobileNotificationEnabled", this.isSharePointMobileNotificationEnabled);
        writer.writeBooleanValue("isSharePointNewsfeedEnabled", this.isSharePointNewsfeedEnabled);
        writer.writeBooleanValue("isSiteCreationEnabled", this.isSiteCreationEnabled);
        writer.writeBooleanValue("isSiteCreationUIEnabled", this.isSiteCreationUIEnabled);
        writer.writeBooleanValue("isSitePagesCreationEnabled", this.isSitePagesCreationEnabled);
        writer.writeBooleanValue("isSitesStorageLimitAutomatic", this.isSitesStorageLimitAutomatic);
        writer.writeBooleanValue("isSyncButtonHiddenOnPersonalSite", this.isSyncButtonHiddenOnPersonalSite);
        writer.writeBooleanValue("isUnmanagedSyncAppForTenantRestricted", this.isUnmanagedSyncAppForTenantRestricted);
        writer.writeNumberValue("personalSiteDefaultStorageLimitInMB", this.personalSiteDefaultStorageLimitInMB);
        writer.writeCollectionOfPrimitiveValues<string>("sharingAllowedDomainList", this.sharingAllowedDomainList);
        writer.writeCollectionOfPrimitiveValues<string>("sharingBlockedDomainList", this.sharingBlockedDomainList);
        writer.writeEnumValue<SharingCapabilities>("sharingCapability", this.sharingCapability);
        writer.writeEnumValue<SharingDomainRestrictionMode>("sharingDomainRestrictionMode", this.sharingDomainRestrictionMode);
        writer.writeStringValue("siteCreationDefaultManagedPath", this.siteCreationDefaultManagedPath);
        writer.writeNumberValue("siteCreationDefaultStorageLimitInMB", this.siteCreationDefaultStorageLimitInMB);
        writer.writeStringValue("tenantDefaultTimezone", this.tenantDefaultTimezone);
    };
    /**
     * Gets the sharingAllowedDomainList property value. The sharingAllowedDomainList property
     * @returns a string
     */
    public get sharingAllowedDomainList() {
        return this._sharingAllowedDomainList;
    };
    /**
     * Sets the sharingAllowedDomainList property value. The sharingAllowedDomainList property
     * @param value Value to set for the sharingAllowedDomainList property.
     */
    public set sharingAllowedDomainList(value: string[] | undefined) {
        this._sharingAllowedDomainList = value;
    };
    /**
     * Gets the sharingBlockedDomainList property value. The sharingBlockedDomainList property
     * @returns a string
     */
    public get sharingBlockedDomainList() {
        return this._sharingBlockedDomainList;
    };
    /**
     * Sets the sharingBlockedDomainList property value. The sharingBlockedDomainList property
     * @param value Value to set for the sharingBlockedDomainList property.
     */
    public set sharingBlockedDomainList(value: string[] | undefined) {
        this._sharingBlockedDomainList = value;
    };
    /**
     * Gets the sharingCapability property value. The sharingCapability property
     * @returns a sharingCapabilities
     */
    public get sharingCapability() {
        return this._sharingCapability;
    };
    /**
     * Sets the sharingCapability property value. The sharingCapability property
     * @param value Value to set for the sharingCapability property.
     */
    public set sharingCapability(value: SharingCapabilities | undefined) {
        this._sharingCapability = value;
    };
    /**
     * Gets the sharingDomainRestrictionMode property value. The sharingDomainRestrictionMode property
     * @returns a sharingDomainRestrictionMode
     */
    public get sharingDomainRestrictionMode() {
        return this._sharingDomainRestrictionMode;
    };
    /**
     * Sets the sharingDomainRestrictionMode property value. The sharingDomainRestrictionMode property
     * @param value Value to set for the sharingDomainRestrictionMode property.
     */
    public set sharingDomainRestrictionMode(value: SharingDomainRestrictionMode | undefined) {
        this._sharingDomainRestrictionMode = value;
    };
    /**
     * Gets the siteCreationDefaultManagedPath property value. The siteCreationDefaultManagedPath property
     * @returns a string
     */
    public get siteCreationDefaultManagedPath() {
        return this._siteCreationDefaultManagedPath;
    };
    /**
     * Sets the siteCreationDefaultManagedPath property value. The siteCreationDefaultManagedPath property
     * @param value Value to set for the siteCreationDefaultManagedPath property.
     */
    public set siteCreationDefaultManagedPath(value: string | undefined) {
        this._siteCreationDefaultManagedPath = value;
    };
    /**
     * Gets the siteCreationDefaultStorageLimitInMB property value. The siteCreationDefaultStorageLimitInMB property
     * @returns a integer
     */
    public get siteCreationDefaultStorageLimitInMB() {
        return this._siteCreationDefaultStorageLimitInMB;
    };
    /**
     * Sets the siteCreationDefaultStorageLimitInMB property value. The siteCreationDefaultStorageLimitInMB property
     * @param value Value to set for the siteCreationDefaultStorageLimitInMB property.
     */
    public set siteCreationDefaultStorageLimitInMB(value: number | undefined) {
        this._siteCreationDefaultStorageLimitInMB = value;
    };
    /**
     * Gets the tenantDefaultTimezone property value. The tenantDefaultTimezone property
     * @returns a string
     */
    public get tenantDefaultTimezone() {
        return this._tenantDefaultTimezone;
    };
    /**
     * Sets the tenantDefaultTimezone property value. The tenantDefaultTimezone property
     * @param value Value to set for the tenantDefaultTimezone property.
     */
    public set tenantDefaultTimezone(value: string | undefined) {
        this._tenantDefaultTimezone = value;
    };
}

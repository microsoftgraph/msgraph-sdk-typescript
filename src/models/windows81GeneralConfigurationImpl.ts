import {DeviceConfigurationImpl} from './index';
import {InternetSiteSecurityLevel} from './internetSiteSecurityLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {SiteSecurityLevel} from './siteSecurityLevel';
import {Windows81GeneralConfiguration} from './windows81GeneralConfiguration';
import {WindowsUserAccountControlSettings} from './windowsUserAccountControlSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows81GeneralConfigurationImpl extends DeviceConfigurationImpl implements Windows81GeneralConfiguration {
    /** Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account. */
    private _accountsBlockAddingNonMicrosoftAccountEmail?: boolean | undefined;
    /** Value indicating whether this policy only applies to Windows 8.1. This property is read-only. */
    private _applyOnlyToWindows81?: boolean | undefined;
    /** Indicates whether or not to block auto fill. */
    private _browserBlockAutofill?: boolean | undefined;
    /** Indicates whether or not to block automatic detection of Intranet sites. */
    private _browserBlockAutomaticDetectionOfIntranetSites?: boolean | undefined;
    /** Indicates whether or not to block enterprise mode access. */
    private _browserBlockEnterpriseModeAccess?: boolean | undefined;
    /** Indicates whether or not to Block the user from using JavaScript. */
    private _browserBlockJavaScript?: boolean | undefined;
    /** Indicates whether or not to block plug-ins. */
    private _browserBlockPlugins?: boolean | undefined;
    /** Indicates whether or not to block popups. */
    private _browserBlockPopups?: boolean | undefined;
    /** Indicates whether or not to Block the user from sending the do not track header. */
    private _browserBlockSendingDoNotTrackHeader?: boolean | undefined;
    /** Indicates whether or not to block a single word entry on Intranet sites. */
    private _browserBlockSingleWordEntryOnIntranetSites?: boolean | undefined;
    /** The enterprise mode site list location. Could be a local file, local network or http location. */
    private _browserEnterpriseModeSiteListLocation?: string | undefined;
    /** The internet security level. Possible values are: userDefined, medium, mediumHigh, high. */
    private _browserInternetSecurityLevel?: InternetSiteSecurityLevel | undefined;
    /** The Intranet security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high. */
    private _browserIntranetSecurityLevel?: SiteSecurityLevel | undefined;
    /** The logging report location. */
    private _browserLoggingReportLocation?: string | undefined;
    /** Indicates whether or not to require a firewall. */
    private _browserRequireFirewall?: boolean | undefined;
    /** Indicates whether or not to require fraud warning. */
    private _browserRequireFraudWarning?: boolean | undefined;
    /** Indicates whether or not to require high security for restricted sites. */
    private _browserRequireHighSecurityForRestrictedSites?: boolean | undefined;
    /** Indicates whether or not to require the user to use the smart screen filter. */
    private _browserRequireSmartScreen?: boolean | undefined;
    /** The trusted sites security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high. */
    private _browserTrustedSitesSecurityLevel?: SiteSecurityLevel | undefined;
    /** Indicates whether or not to block data roaming. */
    private _cellularBlockDataRoaming?: boolean | undefined;
    /** Indicates whether or not to block diagnostic data submission. */
    private _diagnosticsBlockDataSubmission?: boolean | undefined;
    /** Indicates whether or not to Block the user from using a pictures password and pin. */
    private _passwordBlockPicturePasswordAndPin?: boolean | undefined;
    /** Password expiration in days. */
    private _passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    private _passwordMinimumCharacterSetCount?: number | undefined;
    /** The minimum password length. */
    private _passwordMinimumLength?: number | undefined;
    /** The minutes of inactivity before the screen times out. */
    private _passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** The number of previous passwords to prevent re-use of. Valid values 0 to 24 */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    private _passwordRequiredType?: RequiredPasswordType | undefined;
    /** The number of sign in failures before factory reset. */
    private _passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Indicates whether or not to require encryption on a mobile device. */
    private _storageRequireDeviceEncryption?: boolean | undefined;
    /** Indicates whether or not to require automatic updates. */
    private _updatesRequireAutomaticUpdates?: boolean | undefined;
    /** The user account control settings. Possible values are: userDefined, alwaysNotify, notifyOnAppChanges, notifyOnAppChangesWithoutDimming, neverNotify. */
    private _userAccountControlSettings?: WindowsUserAccountControlSettings | undefined;
    /** The work folders url. */
    private _workFoldersUrl?: string | undefined;
    /**
     * Gets the accountsBlockAddingNonMicrosoftAccountEmail property value. Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account.
     * @returns a boolean
     */
    public get accountsBlockAddingNonMicrosoftAccountEmail() {
        return this._accountsBlockAddingNonMicrosoftAccountEmail;
    };
    /**
     * Sets the accountsBlockAddingNonMicrosoftAccountEmail property value. Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account.
     * @param value Value to set for the accountsBlockAddingNonMicrosoftAccountEmail property.
     */
    public set accountsBlockAddingNonMicrosoftAccountEmail(value: boolean | undefined) {
        if(value) {
            this._accountsBlockAddingNonMicrosoftAccountEmail = value;
        }
    };
    /**
     * Gets the applyOnlyToWindows81 property value. Value indicating whether this policy only applies to Windows 8.1. This property is read-only.
     * @returns a boolean
     */
    public get applyOnlyToWindows81() {
        return this._applyOnlyToWindows81;
    };
    /**
     * Sets the applyOnlyToWindows81 property value. Value indicating whether this policy only applies to Windows 8.1. This property is read-only.
     * @param value Value to set for the applyOnlyToWindows81 property.
     */
    public set applyOnlyToWindows81(value: boolean | undefined) {
        if(value) {
            this._applyOnlyToWindows81 = value;
        }
    };
    /**
     * Gets the browserBlockAutofill property value. Indicates whether or not to block auto fill.
     * @returns a boolean
     */
    public get browserBlockAutofill() {
        return this._browserBlockAutofill;
    };
    /**
     * Sets the browserBlockAutofill property value. Indicates whether or not to block auto fill.
     * @param value Value to set for the browserBlockAutofill property.
     */
    public set browserBlockAutofill(value: boolean | undefined) {
        if(value) {
            this._browserBlockAutofill = value;
        }
    };
    /**
     * Gets the browserBlockAutomaticDetectionOfIntranetSites property value. Indicates whether or not to block automatic detection of Intranet sites.
     * @returns a boolean
     */
    public get browserBlockAutomaticDetectionOfIntranetSites() {
        return this._browserBlockAutomaticDetectionOfIntranetSites;
    };
    /**
     * Sets the browserBlockAutomaticDetectionOfIntranetSites property value. Indicates whether or not to block automatic detection of Intranet sites.
     * @param value Value to set for the browserBlockAutomaticDetectionOfIntranetSites property.
     */
    public set browserBlockAutomaticDetectionOfIntranetSites(value: boolean | undefined) {
        if(value) {
            this._browserBlockAutomaticDetectionOfIntranetSites = value;
        }
    };
    /**
     * Gets the browserBlockEnterpriseModeAccess property value. Indicates whether or not to block enterprise mode access.
     * @returns a boolean
     */
    public get browserBlockEnterpriseModeAccess() {
        return this._browserBlockEnterpriseModeAccess;
    };
    /**
     * Sets the browserBlockEnterpriseModeAccess property value. Indicates whether or not to block enterprise mode access.
     * @param value Value to set for the browserBlockEnterpriseModeAccess property.
     */
    public set browserBlockEnterpriseModeAccess(value: boolean | undefined) {
        if(value) {
            this._browserBlockEnterpriseModeAccess = value;
        }
    };
    /**
     * Gets the browserBlockJavaScript property value. Indicates whether or not to Block the user from using JavaScript.
     * @returns a boolean
     */
    public get browserBlockJavaScript() {
        return this._browserBlockJavaScript;
    };
    /**
     * Sets the browserBlockJavaScript property value. Indicates whether or not to Block the user from using JavaScript.
     * @param value Value to set for the browserBlockJavaScript property.
     */
    public set browserBlockJavaScript(value: boolean | undefined) {
        if(value) {
            this._browserBlockJavaScript = value;
        }
    };
    /**
     * Gets the browserBlockPlugins property value. Indicates whether or not to block plug-ins.
     * @returns a boolean
     */
    public get browserBlockPlugins() {
        return this._browserBlockPlugins;
    };
    /**
     * Sets the browserBlockPlugins property value. Indicates whether or not to block plug-ins.
     * @param value Value to set for the browserBlockPlugins property.
     */
    public set browserBlockPlugins(value: boolean | undefined) {
        if(value) {
            this._browserBlockPlugins = value;
        }
    };
    /**
     * Gets the browserBlockPopups property value. Indicates whether or not to block popups.
     * @returns a boolean
     */
    public get browserBlockPopups() {
        return this._browserBlockPopups;
    };
    /**
     * Sets the browserBlockPopups property value. Indicates whether or not to block popups.
     * @param value Value to set for the browserBlockPopups property.
     */
    public set browserBlockPopups(value: boolean | undefined) {
        if(value) {
            this._browserBlockPopups = value;
        }
    };
    /**
     * Gets the browserBlockSendingDoNotTrackHeader property value. Indicates whether or not to Block the user from sending the do not track header.
     * @returns a boolean
     */
    public get browserBlockSendingDoNotTrackHeader() {
        return this._browserBlockSendingDoNotTrackHeader;
    };
    /**
     * Sets the browserBlockSendingDoNotTrackHeader property value. Indicates whether or not to Block the user from sending the do not track header.
     * @param value Value to set for the browserBlockSendingDoNotTrackHeader property.
     */
    public set browserBlockSendingDoNotTrackHeader(value: boolean | undefined) {
        if(value) {
            this._browserBlockSendingDoNotTrackHeader = value;
        }
    };
    /**
     * Gets the browserBlockSingleWordEntryOnIntranetSites property value. Indicates whether or not to block a single word entry on Intranet sites.
     * @returns a boolean
     */
    public get browserBlockSingleWordEntryOnIntranetSites() {
        return this._browserBlockSingleWordEntryOnIntranetSites;
    };
    /**
     * Sets the browserBlockSingleWordEntryOnIntranetSites property value. Indicates whether or not to block a single word entry on Intranet sites.
     * @param value Value to set for the browserBlockSingleWordEntryOnIntranetSites property.
     */
    public set browserBlockSingleWordEntryOnIntranetSites(value: boolean | undefined) {
        if(value) {
            this._browserBlockSingleWordEntryOnIntranetSites = value;
        }
    };
    /**
     * Gets the browserEnterpriseModeSiteListLocation property value. The enterprise mode site list location. Could be a local file, local network or http location.
     * @returns a string
     */
    public get browserEnterpriseModeSiteListLocation() {
        return this._browserEnterpriseModeSiteListLocation;
    };
    /**
     * Sets the browserEnterpriseModeSiteListLocation property value. The enterprise mode site list location. Could be a local file, local network or http location.
     * @param value Value to set for the browserEnterpriseModeSiteListLocation property.
     */
    public set browserEnterpriseModeSiteListLocation(value: string | undefined) {
        if(value) {
            this._browserEnterpriseModeSiteListLocation = value;
        }
    };
    /**
     * Gets the browserInternetSecurityLevel property value. The internet security level. Possible values are: userDefined, medium, mediumHigh, high.
     * @returns a internetSiteSecurityLevel
     */
    public get browserInternetSecurityLevel() {
        return this._browserInternetSecurityLevel;
    };
    /**
     * Sets the browserInternetSecurityLevel property value. The internet security level. Possible values are: userDefined, medium, mediumHigh, high.
     * @param value Value to set for the browserInternetSecurityLevel property.
     */
    public set browserInternetSecurityLevel(value: InternetSiteSecurityLevel | undefined) {
        if(value) {
            this._browserInternetSecurityLevel = value;
        }
    };
    /**
     * Gets the browserIntranetSecurityLevel property value. The Intranet security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high.
     * @returns a siteSecurityLevel
     */
    public get browserIntranetSecurityLevel() {
        return this._browserIntranetSecurityLevel;
    };
    /**
     * Sets the browserIntranetSecurityLevel property value. The Intranet security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high.
     * @param value Value to set for the browserIntranetSecurityLevel property.
     */
    public set browserIntranetSecurityLevel(value: SiteSecurityLevel | undefined) {
        if(value) {
            this._browserIntranetSecurityLevel = value;
        }
    };
    /**
     * Gets the browserLoggingReportLocation property value. The logging report location.
     * @returns a string
     */
    public get browserLoggingReportLocation() {
        return this._browserLoggingReportLocation;
    };
    /**
     * Sets the browserLoggingReportLocation property value. The logging report location.
     * @param value Value to set for the browserLoggingReportLocation property.
     */
    public set browserLoggingReportLocation(value: string | undefined) {
        if(value) {
            this._browserLoggingReportLocation = value;
        }
    };
    /**
     * Gets the browserRequireFirewall property value. Indicates whether or not to require a firewall.
     * @returns a boolean
     */
    public get browserRequireFirewall() {
        return this._browserRequireFirewall;
    };
    /**
     * Sets the browserRequireFirewall property value. Indicates whether or not to require a firewall.
     * @param value Value to set for the browserRequireFirewall property.
     */
    public set browserRequireFirewall(value: boolean | undefined) {
        if(value) {
            this._browserRequireFirewall = value;
        }
    };
    /**
     * Gets the browserRequireFraudWarning property value. Indicates whether or not to require fraud warning.
     * @returns a boolean
     */
    public get browserRequireFraudWarning() {
        return this._browserRequireFraudWarning;
    };
    /**
     * Sets the browserRequireFraudWarning property value. Indicates whether or not to require fraud warning.
     * @param value Value to set for the browserRequireFraudWarning property.
     */
    public set browserRequireFraudWarning(value: boolean | undefined) {
        if(value) {
            this._browserRequireFraudWarning = value;
        }
    };
    /**
     * Gets the browserRequireHighSecurityForRestrictedSites property value. Indicates whether or not to require high security for restricted sites.
     * @returns a boolean
     */
    public get browserRequireHighSecurityForRestrictedSites() {
        return this._browserRequireHighSecurityForRestrictedSites;
    };
    /**
     * Sets the browserRequireHighSecurityForRestrictedSites property value. Indicates whether or not to require high security for restricted sites.
     * @param value Value to set for the browserRequireHighSecurityForRestrictedSites property.
     */
    public set browserRequireHighSecurityForRestrictedSites(value: boolean | undefined) {
        if(value) {
            this._browserRequireHighSecurityForRestrictedSites = value;
        }
    };
    /**
     * Gets the browserRequireSmartScreen property value. Indicates whether or not to require the user to use the smart screen filter.
     * @returns a boolean
     */
    public get browserRequireSmartScreen() {
        return this._browserRequireSmartScreen;
    };
    /**
     * Sets the browserRequireSmartScreen property value. Indicates whether or not to require the user to use the smart screen filter.
     * @param value Value to set for the browserRequireSmartScreen property.
     */
    public set browserRequireSmartScreen(value: boolean | undefined) {
        if(value) {
            this._browserRequireSmartScreen = value;
        }
    };
    /**
     * Gets the browserTrustedSitesSecurityLevel property value. The trusted sites security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high.
     * @returns a siteSecurityLevel
     */
    public get browserTrustedSitesSecurityLevel() {
        return this._browserTrustedSitesSecurityLevel;
    };
    /**
     * Sets the browserTrustedSitesSecurityLevel property value. The trusted sites security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high.
     * @param value Value to set for the browserTrustedSitesSecurityLevel property.
     */
    public set browserTrustedSitesSecurityLevel(value: SiteSecurityLevel | undefined) {
        if(value) {
            this._browserTrustedSitesSecurityLevel = value;
        }
    };
    /**
     * Gets the cellularBlockDataRoaming property value. Indicates whether or not to block data roaming.
     * @returns a boolean
     */
    public get cellularBlockDataRoaming() {
        return this._cellularBlockDataRoaming;
    };
    /**
     * Sets the cellularBlockDataRoaming property value. Indicates whether or not to block data roaming.
     * @param value Value to set for the cellularBlockDataRoaming property.
     */
    public set cellularBlockDataRoaming(value: boolean | undefined) {
        if(value) {
            this._cellularBlockDataRoaming = value;
        }
    };
    /**
     * Instantiates a new Windows81GeneralConfiguration and sets the default values.
     * @param windows81GeneralConfigurationParameterValue 
     */
    public constructor(windows81GeneralConfigurationParameterValue?: Windows81GeneralConfiguration | undefined) {
        super(windows81GeneralConfigurationParameterValue);
        this._accountsBlockAddingNonMicrosoftAccountEmail = windows81GeneralConfigurationParameterValue?.accountsBlockAddingNonMicrosoftAccountEmail;
        this._applyOnlyToWindows81 = windows81GeneralConfigurationParameterValue?.applyOnlyToWindows81;
        this._browserBlockAutofill = windows81GeneralConfigurationParameterValue?.browserBlockAutofill;
        this._browserBlockAutomaticDetectionOfIntranetSites = windows81GeneralConfigurationParameterValue?.browserBlockAutomaticDetectionOfIntranetSites;
        this._browserBlockEnterpriseModeAccess = windows81GeneralConfigurationParameterValue?.browserBlockEnterpriseModeAccess;
        this._browserBlockJavaScript = windows81GeneralConfigurationParameterValue?.browserBlockJavaScript;
        this._browserBlockPlugins = windows81GeneralConfigurationParameterValue?.browserBlockPlugins;
        this._browserBlockPopups = windows81GeneralConfigurationParameterValue?.browserBlockPopups;
        this._browserBlockSendingDoNotTrackHeader = windows81GeneralConfigurationParameterValue?.browserBlockSendingDoNotTrackHeader;
        this._browserBlockSingleWordEntryOnIntranetSites = windows81GeneralConfigurationParameterValue?.browserBlockSingleWordEntryOnIntranetSites;
        this._browserEnterpriseModeSiteListLocation = windows81GeneralConfigurationParameterValue?.browserEnterpriseModeSiteListLocation;
        this._browserInternetSecurityLevel = windows81GeneralConfigurationParameterValue?.browserInternetSecurityLevel;
        this._browserIntranetSecurityLevel = windows81GeneralConfigurationParameterValue?.browserIntranetSecurityLevel;
        this._browserLoggingReportLocation = windows81GeneralConfigurationParameterValue?.browserLoggingReportLocation;
        this._browserRequireFirewall = windows81GeneralConfigurationParameterValue?.browserRequireFirewall;
        this._browserRequireFraudWarning = windows81GeneralConfigurationParameterValue?.browserRequireFraudWarning;
        this._browserRequireHighSecurityForRestrictedSites = windows81GeneralConfigurationParameterValue?.browserRequireHighSecurityForRestrictedSites;
        this._browserRequireSmartScreen = windows81GeneralConfigurationParameterValue?.browserRequireSmartScreen;
        this._browserTrustedSitesSecurityLevel = windows81GeneralConfigurationParameterValue?.browserTrustedSitesSecurityLevel;
        this._cellularBlockDataRoaming = windows81GeneralConfigurationParameterValue?.cellularBlockDataRoaming;
        this._diagnosticsBlockDataSubmission = windows81GeneralConfigurationParameterValue?.diagnosticsBlockDataSubmission;
        this._passwordBlockPicturePasswordAndPin = windows81GeneralConfigurationParameterValue?.passwordBlockPicturePasswordAndPin;
        this._passwordExpirationDays = windows81GeneralConfigurationParameterValue?.passwordExpirationDays;
        this._passwordMinimumCharacterSetCount = windows81GeneralConfigurationParameterValue?.passwordMinimumCharacterSetCount;
        this._passwordMinimumLength = windows81GeneralConfigurationParameterValue?.passwordMinimumLength;
        this._passwordMinutesOfInactivityBeforeScreenTimeout = windows81GeneralConfigurationParameterValue?.passwordMinutesOfInactivityBeforeScreenTimeout;
        this._passwordPreviousPasswordBlockCount = windows81GeneralConfigurationParameterValue?.passwordPreviousPasswordBlockCount;
        this._passwordRequiredType = windows81GeneralConfigurationParameterValue?.passwordRequiredType;
        this._passwordSignInFailureCountBeforeFactoryReset = windows81GeneralConfigurationParameterValue?.passwordSignInFailureCountBeforeFactoryReset;
        this._storageRequireDeviceEncryption = windows81GeneralConfigurationParameterValue?.storageRequireDeviceEncryption;
        this._updatesRequireAutomaticUpdates = windows81GeneralConfigurationParameterValue?.updatesRequireAutomaticUpdates;
        this._userAccountControlSettings = windows81GeneralConfigurationParameterValue?.userAccountControlSettings;
        this._workFoldersUrl = windows81GeneralConfigurationParameterValue?.workFoldersUrl;
    };
    /**
     * Gets the diagnosticsBlockDataSubmission property value. Indicates whether or not to block diagnostic data submission.
     * @returns a boolean
     */
    public get diagnosticsBlockDataSubmission() {
        return this._diagnosticsBlockDataSubmission;
    };
    /**
     * Sets the diagnosticsBlockDataSubmission property value. Indicates whether or not to block diagnostic data submission.
     * @param value Value to set for the diagnosticsBlockDataSubmission property.
     */
    public set diagnosticsBlockDataSubmission(value: boolean | undefined) {
        if(value) {
            this._diagnosticsBlockDataSubmission = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountsBlockAddingNonMicrosoftAccountEmail": n => { this.accountsBlockAddingNonMicrosoftAccountEmail = n.getBooleanValue(); },
            "applyOnlyToWindows81": n => { this.applyOnlyToWindows81 = n.getBooleanValue(); },
            "browserBlockAutofill": n => { this.browserBlockAutofill = n.getBooleanValue(); },
            "browserBlockAutomaticDetectionOfIntranetSites": n => { this.browserBlockAutomaticDetectionOfIntranetSites = n.getBooleanValue(); },
            "browserBlockEnterpriseModeAccess": n => { this.browserBlockEnterpriseModeAccess = n.getBooleanValue(); },
            "browserBlockJavaScript": n => { this.browserBlockJavaScript = n.getBooleanValue(); },
            "browserBlockPlugins": n => { this.browserBlockPlugins = n.getBooleanValue(); },
            "browserBlockPopups": n => { this.browserBlockPopups = n.getBooleanValue(); },
            "browserBlockSendingDoNotTrackHeader": n => { this.browserBlockSendingDoNotTrackHeader = n.getBooleanValue(); },
            "browserBlockSingleWordEntryOnIntranetSites": n => { this.browserBlockSingleWordEntryOnIntranetSites = n.getBooleanValue(); },
            "browserEnterpriseModeSiteListLocation": n => { this.browserEnterpriseModeSiteListLocation = n.getStringValue(); },
            "browserInternetSecurityLevel": n => { this.browserInternetSecurityLevel = n.getEnumValue<InternetSiteSecurityLevel>(InternetSiteSecurityLevel); },
            "browserIntranetSecurityLevel": n => { this.browserIntranetSecurityLevel = n.getEnumValue<SiteSecurityLevel>(SiteSecurityLevel); },
            "browserLoggingReportLocation": n => { this.browserLoggingReportLocation = n.getStringValue(); },
            "browserRequireFirewall": n => { this.browserRequireFirewall = n.getBooleanValue(); },
            "browserRequireFraudWarning": n => { this.browserRequireFraudWarning = n.getBooleanValue(); },
            "browserRequireHighSecurityForRestrictedSites": n => { this.browserRequireHighSecurityForRestrictedSites = n.getBooleanValue(); },
            "browserRequireSmartScreen": n => { this.browserRequireSmartScreen = n.getBooleanValue(); },
            "browserTrustedSitesSecurityLevel": n => { this.browserTrustedSitesSecurityLevel = n.getEnumValue<SiteSecurityLevel>(SiteSecurityLevel); },
            "cellularBlockDataRoaming": n => { this.cellularBlockDataRoaming = n.getBooleanValue(); },
            "diagnosticsBlockDataSubmission": n => { this.diagnosticsBlockDataSubmission = n.getBooleanValue(); },
            "passwordBlockPicturePasswordAndPin": n => { this.passwordBlockPicturePasswordAndPin = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumCharacterSetCount": n => { this.passwordMinimumCharacterSetCount = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeScreenTimeout": n => { this.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "passwordSignInFailureCountBeforeFactoryReset": n => { this.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
            "storageRequireDeviceEncryption": n => { this.storageRequireDeviceEncryption = n.getBooleanValue(); },
            "updatesRequireAutomaticUpdates": n => { this.updatesRequireAutomaticUpdates = n.getBooleanValue(); },
            "userAccountControlSettings": n => { this.userAccountControlSettings = n.getEnumValue<WindowsUserAccountControlSettings>(WindowsUserAccountControlSettings); },
            "workFoldersUrl": n => { this.workFoldersUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the passwordBlockPicturePasswordAndPin property value. Indicates whether or not to Block the user from using a pictures password and pin.
     * @returns a boolean
     */
    public get passwordBlockPicturePasswordAndPin() {
        return this._passwordBlockPicturePasswordAndPin;
    };
    /**
     * Sets the passwordBlockPicturePasswordAndPin property value. Indicates whether or not to Block the user from using a pictures password and pin.
     * @param value Value to set for the passwordBlockPicturePasswordAndPin property.
     */
    public set passwordBlockPicturePasswordAndPin(value: boolean | undefined) {
        if(value) {
            this._passwordBlockPicturePasswordAndPin = value;
        }
    };
    /**
     * Gets the passwordExpirationDays property value. Password expiration in days.
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. Password expiration in days.
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        if(value) {
            this._passwordExpirationDays = value;
        }
    };
    /**
     * Gets the passwordMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @returns a integer
     */
    public get passwordMinimumCharacterSetCount() {
        return this._passwordMinimumCharacterSetCount;
    };
    /**
     * Sets the passwordMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @param value Value to set for the passwordMinimumCharacterSetCount property.
     */
    public set passwordMinimumCharacterSetCount(value: number | undefined) {
        if(value) {
            this._passwordMinimumCharacterSetCount = value;
        }
    };
    /**
     * Gets the passwordMinimumLength property value. The minimum password length.
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. The minimum password length.
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        if(value) {
            this._passwordMinimumLength = value;
        }
    };
    /**
     * Gets the passwordMinutesOfInactivityBeforeScreenTimeout property value. The minutes of inactivity before the screen times out.
     * @returns a integer
     */
    public get passwordMinutesOfInactivityBeforeScreenTimeout() {
        return this._passwordMinutesOfInactivityBeforeScreenTimeout;
    };
    /**
     * Sets the passwordMinutesOfInactivityBeforeScreenTimeout property value. The minutes of inactivity before the screen times out.
     * @param value Value to set for the passwordMinutesOfInactivityBeforeScreenTimeout property.
     */
    public set passwordMinutesOfInactivityBeforeScreenTimeout(value: number | undefined) {
        if(value) {
            this._passwordMinutesOfInactivityBeforeScreenTimeout = value;
        }
    };
    /**
     * Gets the passwordPreviousPasswordBlockCount property value. The number of previous passwords to prevent re-use of. Valid values 0 to 24
     * @returns a integer
     */
    public get passwordPreviousPasswordBlockCount() {
        return this._passwordPreviousPasswordBlockCount;
    };
    /**
     * Sets the passwordPreviousPasswordBlockCount property value. The number of previous passwords to prevent re-use of. Valid values 0 to 24
     * @param value Value to set for the passwordPreviousPasswordBlockCount property.
     */
    public set passwordPreviousPasswordBlockCount(value: number | undefined) {
        if(value) {
            this._passwordPreviousPasswordBlockCount = value;
        }
    };
    /**
     * Gets the passwordRequiredType property value. The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @returns a requiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: RequiredPasswordType | undefined) {
        if(value) {
            this._passwordRequiredType = value;
        }
    };
    /**
     * Gets the passwordSignInFailureCountBeforeFactoryReset property value. The number of sign in failures before factory reset.
     * @returns a integer
     */
    public get passwordSignInFailureCountBeforeFactoryReset() {
        return this._passwordSignInFailureCountBeforeFactoryReset;
    };
    /**
     * Sets the passwordSignInFailureCountBeforeFactoryReset property value. The number of sign in failures before factory reset.
     * @param value Value to set for the passwordSignInFailureCountBeforeFactoryReset property.
     */
    public set passwordSignInFailureCountBeforeFactoryReset(value: number | undefined) {
        if(value) {
            this._passwordSignInFailureCountBeforeFactoryReset = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accountsBlockAddingNonMicrosoftAccountEmail){
            writer.writeBooleanValue("accountsBlockAddingNonMicrosoftAccountEmail", this.accountsBlockAddingNonMicrosoftAccountEmail);
        }
        if(this.applyOnlyToWindows81){
            writer.writeBooleanValue("applyOnlyToWindows81", this.applyOnlyToWindows81);
        }
        if(this.browserBlockAutofill){
            writer.writeBooleanValue("browserBlockAutofill", this.browserBlockAutofill);
        }
        if(this.browserBlockAutomaticDetectionOfIntranetSites){
            writer.writeBooleanValue("browserBlockAutomaticDetectionOfIntranetSites", this.browserBlockAutomaticDetectionOfIntranetSites);
        }
        if(this.browserBlockEnterpriseModeAccess){
            writer.writeBooleanValue("browserBlockEnterpriseModeAccess", this.browserBlockEnterpriseModeAccess);
        }
        if(this.browserBlockJavaScript){
            writer.writeBooleanValue("browserBlockJavaScript", this.browserBlockJavaScript);
        }
        if(this.browserBlockPlugins){
            writer.writeBooleanValue("browserBlockPlugins", this.browserBlockPlugins);
        }
        if(this.browserBlockPopups){
            writer.writeBooleanValue("browserBlockPopups", this.browserBlockPopups);
        }
        if(this.browserBlockSendingDoNotTrackHeader){
            writer.writeBooleanValue("browserBlockSendingDoNotTrackHeader", this.browserBlockSendingDoNotTrackHeader);
        }
        if(this.browserBlockSingleWordEntryOnIntranetSites){
            writer.writeBooleanValue("browserBlockSingleWordEntryOnIntranetSites", this.browserBlockSingleWordEntryOnIntranetSites);
        }
        if(this.browserEnterpriseModeSiteListLocation){
            writer.writeStringValue("browserEnterpriseModeSiteListLocation", this.browserEnterpriseModeSiteListLocation);
        }
        if(this.browserInternetSecurityLevel){
            writer.writeEnumValue<InternetSiteSecurityLevel>("browserInternetSecurityLevel", this.browserInternetSecurityLevel);
        }
        if(this.browserIntranetSecurityLevel){
            writer.writeEnumValue<SiteSecurityLevel>("browserIntranetSecurityLevel", this.browserIntranetSecurityLevel);
        }
        if(this.browserLoggingReportLocation){
            writer.writeStringValue("browserLoggingReportLocation", this.browserLoggingReportLocation);
        }
        if(this.browserRequireFirewall){
            writer.writeBooleanValue("browserRequireFirewall", this.browserRequireFirewall);
        }
        if(this.browserRequireFraudWarning){
            writer.writeBooleanValue("browserRequireFraudWarning", this.browserRequireFraudWarning);
        }
        if(this.browserRequireHighSecurityForRestrictedSites){
            writer.writeBooleanValue("browserRequireHighSecurityForRestrictedSites", this.browserRequireHighSecurityForRestrictedSites);
        }
        if(this.browserRequireSmartScreen){
            writer.writeBooleanValue("browserRequireSmartScreen", this.browserRequireSmartScreen);
        }
        if(this.browserTrustedSitesSecurityLevel){
            writer.writeEnumValue<SiteSecurityLevel>("browserTrustedSitesSecurityLevel", this.browserTrustedSitesSecurityLevel);
        }
        if(this.cellularBlockDataRoaming){
            writer.writeBooleanValue("cellularBlockDataRoaming", this.cellularBlockDataRoaming);
        }
        if(this.diagnosticsBlockDataSubmission){
            writer.writeBooleanValue("diagnosticsBlockDataSubmission", this.diagnosticsBlockDataSubmission);
        }
        if(this.passwordBlockPicturePasswordAndPin){
            writer.writeBooleanValue("passwordBlockPicturePasswordAndPin", this.passwordBlockPicturePasswordAndPin);
        }
        if(this.passwordExpirationDays){
            writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        }
        if(this.passwordMinimumCharacterSetCount){
            writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        }
        if(this.passwordMinimumLength){
            writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        }
        if(this.passwordMinutesOfInactivityBeforeScreenTimeout){
            writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        }
        if(this.passwordPreviousPasswordBlockCount){
            writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        }
        if(this.passwordRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
        if(this.passwordSignInFailureCountBeforeFactoryReset){
            writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", this.passwordSignInFailureCountBeforeFactoryReset);
        }
        if(this.storageRequireDeviceEncryption){
            writer.writeBooleanValue("storageRequireDeviceEncryption", this.storageRequireDeviceEncryption);
        }
        if(this.updatesRequireAutomaticUpdates){
            writer.writeBooleanValue("updatesRequireAutomaticUpdates", this.updatesRequireAutomaticUpdates);
        }
        if(this.userAccountControlSettings){
            writer.writeEnumValue<WindowsUserAccountControlSettings>("userAccountControlSettings", this.userAccountControlSettings);
        }
        if(this.workFoldersUrl){
            writer.writeStringValue("workFoldersUrl", this.workFoldersUrl);
        }
    };
    /**
     * Gets the storageRequireDeviceEncryption property value. Indicates whether or not to require encryption on a mobile device.
     * @returns a boolean
     */
    public get storageRequireDeviceEncryption() {
        return this._storageRequireDeviceEncryption;
    };
    /**
     * Sets the storageRequireDeviceEncryption property value. Indicates whether or not to require encryption on a mobile device.
     * @param value Value to set for the storageRequireDeviceEncryption property.
     */
    public set storageRequireDeviceEncryption(value: boolean | undefined) {
        if(value) {
            this._storageRequireDeviceEncryption = value;
        }
    };
    /**
     * Gets the updatesRequireAutomaticUpdates property value. Indicates whether or not to require automatic updates.
     * @returns a boolean
     */
    public get updatesRequireAutomaticUpdates() {
        return this._updatesRequireAutomaticUpdates;
    };
    /**
     * Sets the updatesRequireAutomaticUpdates property value. Indicates whether or not to require automatic updates.
     * @param value Value to set for the updatesRequireAutomaticUpdates property.
     */
    public set updatesRequireAutomaticUpdates(value: boolean | undefined) {
        if(value) {
            this._updatesRequireAutomaticUpdates = value;
        }
    };
    /**
     * Gets the userAccountControlSettings property value. The user account control settings. Possible values are: userDefined, alwaysNotify, notifyOnAppChanges, notifyOnAppChangesWithoutDimming, neverNotify.
     * @returns a windowsUserAccountControlSettings
     */
    public get userAccountControlSettings() {
        return this._userAccountControlSettings;
    };
    /**
     * Sets the userAccountControlSettings property value. The user account control settings. Possible values are: userDefined, alwaysNotify, notifyOnAppChanges, notifyOnAppChangesWithoutDimming, neverNotify.
     * @param value Value to set for the userAccountControlSettings property.
     */
    public set userAccountControlSettings(value: WindowsUserAccountControlSettings | undefined) {
        if(value) {
            this._userAccountControlSettings = value;
        }
    };
    /**
     * Gets the workFoldersUrl property value. The work folders url.
     * @returns a string
     */
    public get workFoldersUrl() {
        return this._workFoldersUrl;
    };
    /**
     * Sets the workFoldersUrl property value. The work folders url.
     * @param value Value to set for the workFoldersUrl property.
     */
    public set workFoldersUrl(value: string | undefined) {
        if(value) {
            this._workFoldersUrl = value;
        }
    };
}

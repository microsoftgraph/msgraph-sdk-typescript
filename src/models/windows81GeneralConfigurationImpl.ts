import {DeviceConfigurationImpl} from './index';
import {InternetSiteSecurityLevel} from './internetSiteSecurityLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {SiteSecurityLevel} from './siteSecurityLevel';
import {Windows81GeneralConfiguration} from './windows81GeneralConfiguration';
import {WindowsUserAccountControlSettings} from './windowsUserAccountControlSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows81GeneralConfigurationImpl extends DeviceConfigurationImpl implements Windows81GeneralConfiguration {
    /** Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account. */
    public accountsBlockAddingNonMicrosoftAccountEmail?: boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Value indicating whether this policy only applies to Windows 8.1. This property is read-only. */
    public applyOnlyToWindows81?: boolean | undefined;
    /** Indicates whether or not to block auto fill. */
    public browserBlockAutofill?: boolean | undefined;
    /** Indicates whether or not to block automatic detection of Intranet sites. */
    public browserBlockAutomaticDetectionOfIntranetSites?: boolean | undefined;
    /** Indicates whether or not to block enterprise mode access. */
    public browserBlockEnterpriseModeAccess?: boolean | undefined;
    /** Indicates whether or not to Block the user from using JavaScript. */
    public browserBlockJavaScript?: boolean | undefined;
    /** Indicates whether or not to block plug-ins. */
    public browserBlockPlugins?: boolean | undefined;
    /** Indicates whether or not to block popups. */
    public browserBlockPopups?: boolean | undefined;
    /** Indicates whether or not to Block the user from sending the do not track header. */
    public browserBlockSendingDoNotTrackHeader?: boolean | undefined;
    /** Indicates whether or not to block a single word entry on Intranet sites. */
    public browserBlockSingleWordEntryOnIntranetSites?: boolean | undefined;
    /** The enterprise mode site list location. Could be a local file, local network or http location. */
    public browserEnterpriseModeSiteListLocation?: string | undefined;
    /** The internet security level. Possible values are: userDefined, medium, mediumHigh, high. */
    public browserInternetSecurityLevel?: InternetSiteSecurityLevel | undefined;
    /** The Intranet security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high. */
    public browserIntranetSecurityLevel?: SiteSecurityLevel | undefined;
    /** The logging report location. */
    public browserLoggingReportLocation?: string | undefined;
    /** Indicates whether or not to require a firewall. */
    public browserRequireFirewall?: boolean | undefined;
    /** Indicates whether or not to require fraud warning. */
    public browserRequireFraudWarning?: boolean | undefined;
    /** Indicates whether or not to require high security for restricted sites. */
    public browserRequireHighSecurityForRestrictedSites?: boolean | undefined;
    /** Indicates whether or not to require the user to use the smart screen filter. */
    public browserRequireSmartScreen?: boolean | undefined;
    /** The trusted sites security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high. */
    public browserTrustedSitesSecurityLevel?: SiteSecurityLevel | undefined;
    /** Indicates whether or not to block data roaming. */
    public cellularBlockDataRoaming?: boolean | undefined;
    /** Indicates whether or not to block diagnostic data submission. */
    public diagnosticsBlockDataSubmission?: boolean | undefined;
    /** Indicates whether or not to Block the user from using a pictures password and pin. */
    public passwordBlockPicturePasswordAndPin?: boolean | undefined;
    /** Password expiration in days. */
    public passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    public passwordMinimumCharacterSetCount?: number | undefined;
    /** The minimum password length. */
    public passwordMinimumLength?: number | undefined;
    /** The minutes of inactivity before the screen times out. */
    public passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** The number of previous passwords to prevent re-use of. Valid values 0 to 24 */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passwordRequiredType?: RequiredPasswordType | undefined;
    /** The number of sign in failures before factory reset. */
    public passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Indicates whether or not to require encryption on a mobile device. */
    public storageRequireDeviceEncryption?: boolean | undefined;
    /** Indicates whether or not to require automatic updates. */
    public updatesRequireAutomaticUpdates?: boolean | undefined;
    /** The user account control settings. Possible values are: userDefined, alwaysNotify, notifyOnAppChanges, notifyOnAppChangesWithoutDimming, neverNotify. */
    public userAccountControlSettings?: WindowsUserAccountControlSettings | undefined;
    /** The work folders url. */
    public workFoldersUrl?: string | undefined;
    /**
     * Instantiates a new Windows81GeneralConfiguration and sets the default values.
     * @param windows81GeneralConfigurationParameterValue 
     */
    public constructor(windows81GeneralConfigurationParameterValue?: Windows81GeneralConfiguration | undefined) {
        super(windows81GeneralConfigurationParameterValue);
        this.accountsBlockAddingNonMicrosoftAccountEmail = windows81GeneralConfigurationParameterValue?.accountsBlockAddingNonMicrosoftAccountEmail;
        this.additionalData = windows81GeneralConfigurationParameterValue?.additionalData ? windows81GeneralConfigurationParameterValue?.additionalData! : {};
        this.applyOnlyToWindows81 = windows81GeneralConfigurationParameterValue?.applyOnlyToWindows81;
        this.browserBlockAutofill = windows81GeneralConfigurationParameterValue?.browserBlockAutofill;
        this.browserBlockAutomaticDetectionOfIntranetSites = windows81GeneralConfigurationParameterValue?.browserBlockAutomaticDetectionOfIntranetSites;
        this.browserBlockEnterpriseModeAccess = windows81GeneralConfigurationParameterValue?.browserBlockEnterpriseModeAccess;
        this.browserBlockJavaScript = windows81GeneralConfigurationParameterValue?.browserBlockJavaScript;
        this.browserBlockPlugins = windows81GeneralConfigurationParameterValue?.browserBlockPlugins;
        this.browserBlockPopups = windows81GeneralConfigurationParameterValue?.browserBlockPopups;
        this.browserBlockSendingDoNotTrackHeader = windows81GeneralConfigurationParameterValue?.browserBlockSendingDoNotTrackHeader;
        this.browserBlockSingleWordEntryOnIntranetSites = windows81GeneralConfigurationParameterValue?.browserBlockSingleWordEntryOnIntranetSites;
        this.browserEnterpriseModeSiteListLocation = windows81GeneralConfigurationParameterValue?.browserEnterpriseModeSiteListLocation;
        this.browserInternetSecurityLevel = windows81GeneralConfigurationParameterValue?.browserInternetSecurityLevel;
        this.browserIntranetSecurityLevel = windows81GeneralConfigurationParameterValue?.browserIntranetSecurityLevel;
        this.browserLoggingReportLocation = windows81GeneralConfigurationParameterValue?.browserLoggingReportLocation;
        this.browserRequireFirewall = windows81GeneralConfigurationParameterValue?.browserRequireFirewall;
        this.browserRequireFraudWarning = windows81GeneralConfigurationParameterValue?.browserRequireFraudWarning;
        this.browserRequireHighSecurityForRestrictedSites = windows81GeneralConfigurationParameterValue?.browserRequireHighSecurityForRestrictedSites;
        this.browserRequireSmartScreen = windows81GeneralConfigurationParameterValue?.browserRequireSmartScreen;
        this.browserTrustedSitesSecurityLevel = windows81GeneralConfigurationParameterValue?.browserTrustedSitesSecurityLevel;
        this.cellularBlockDataRoaming = windows81GeneralConfigurationParameterValue?.cellularBlockDataRoaming;
        this.diagnosticsBlockDataSubmission = windows81GeneralConfigurationParameterValue?.diagnosticsBlockDataSubmission;
        this.passwordBlockPicturePasswordAndPin = windows81GeneralConfigurationParameterValue?.passwordBlockPicturePasswordAndPin;
        this.passwordExpirationDays = windows81GeneralConfigurationParameterValue?.passwordExpirationDays;
        this.passwordMinimumCharacterSetCount = windows81GeneralConfigurationParameterValue?.passwordMinimumCharacterSetCount;
        this.passwordMinimumLength = windows81GeneralConfigurationParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeScreenTimeout = windows81GeneralConfigurationParameterValue?.passwordMinutesOfInactivityBeforeScreenTimeout;
        this.passwordPreviousPasswordBlockCount = windows81GeneralConfigurationParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequiredType = windows81GeneralConfigurationParameterValue?.passwordRequiredType;
        this.passwordSignInFailureCountBeforeFactoryReset = windows81GeneralConfigurationParameterValue?.passwordSignInFailureCountBeforeFactoryReset;
        this.storageRequireDeviceEncryption = windows81GeneralConfigurationParameterValue?.storageRequireDeviceEncryption;
        this.updatesRequireAutomaticUpdates = windows81GeneralConfigurationParameterValue?.updatesRequireAutomaticUpdates;
        this.userAccountControlSettings = windows81GeneralConfigurationParameterValue?.userAccountControlSettings;
        this.workFoldersUrl = windows81GeneralConfigurationParameterValue?.workFoldersUrl;
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
        writer.writeAdditionalData(this.additionalData);
    };
}

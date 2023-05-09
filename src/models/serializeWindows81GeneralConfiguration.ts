import {InternetSiteSecurityLevel} from './internetSiteSecurityLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {SiteSecurityLevel} from './siteSecurityLevel';
import {Windows81GeneralConfiguration} from './windows81GeneralConfiguration';
import {WindowsUserAccountControlSettings} from './windowsUserAccountControlSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows81GeneralConfiguration(writer: SerializationWriter, windows81GeneralConfiguration: Windows81GeneralConfiguration | undefined = {} as Windows81GeneralConfiguration) : void {
        serializeDeviceConfiguration(writer, windows81GeneralConfiguration)
        writer.writeBooleanValue("accountsBlockAddingNonMicrosoftAccountEmail", windows81GeneralConfiguration.accountsBlockAddingNonMicrosoftAccountEmail);
        writer.writeBooleanValue("browserBlockAutofill", windows81GeneralConfiguration.browserBlockAutofill);
        writer.writeBooleanValue("browserBlockAutomaticDetectionOfIntranetSites", windows81GeneralConfiguration.browserBlockAutomaticDetectionOfIntranetSites);
        writer.writeBooleanValue("browserBlockEnterpriseModeAccess", windows81GeneralConfiguration.browserBlockEnterpriseModeAccess);
        writer.writeBooleanValue("browserBlockJavaScript", windows81GeneralConfiguration.browserBlockJavaScript);
        writer.writeBooleanValue("browserBlockPlugins", windows81GeneralConfiguration.browserBlockPlugins);
        writer.writeBooleanValue("browserBlockPopups", windows81GeneralConfiguration.browserBlockPopups);
        writer.writeBooleanValue("browserBlockSendingDoNotTrackHeader", windows81GeneralConfiguration.browserBlockSendingDoNotTrackHeader);
        writer.writeBooleanValue("browserBlockSingleWordEntryOnIntranetSites", windows81GeneralConfiguration.browserBlockSingleWordEntryOnIntranetSites);
        writer.writeStringValue("browserEnterpriseModeSiteListLocation", windows81GeneralConfiguration.browserEnterpriseModeSiteListLocation);
        writer.writeEnumValue<InternetSiteSecurityLevel>("browserInternetSecurityLevel", windows81GeneralConfiguration.browserInternetSecurityLevel);
        writer.writeEnumValue<SiteSecurityLevel>("browserIntranetSecurityLevel", windows81GeneralConfiguration.browserIntranetSecurityLevel);
        writer.writeStringValue("browserLoggingReportLocation", windows81GeneralConfiguration.browserLoggingReportLocation);
        writer.writeBooleanValue("browserRequireFirewall", windows81GeneralConfiguration.browserRequireFirewall);
        writer.writeBooleanValue("browserRequireFraudWarning", windows81GeneralConfiguration.browserRequireFraudWarning);
        writer.writeBooleanValue("browserRequireHighSecurityForRestrictedSites", windows81GeneralConfiguration.browserRequireHighSecurityForRestrictedSites);
        writer.writeBooleanValue("browserRequireSmartScreen", windows81GeneralConfiguration.browserRequireSmartScreen);
        writer.writeEnumValue<SiteSecurityLevel>("browserTrustedSitesSecurityLevel", windows81GeneralConfiguration.browserTrustedSitesSecurityLevel);
        writer.writeBooleanValue("cellularBlockDataRoaming", windows81GeneralConfiguration.cellularBlockDataRoaming);
        writer.writeBooleanValue("diagnosticsBlockDataSubmission", windows81GeneralConfiguration.diagnosticsBlockDataSubmission);
        writer.writeBooleanValue("passwordBlockPicturePasswordAndPin", windows81GeneralConfiguration.passwordBlockPicturePasswordAndPin);
        writer.writeNumberValue("passwordExpirationDays", windows81GeneralConfiguration.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", windows81GeneralConfiguration.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", windows81GeneralConfiguration.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", windows81GeneralConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", windows81GeneralConfiguration.passwordPreviousPasswordBlockCount);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", windows81GeneralConfiguration.passwordRequiredType);
        writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", windows81GeneralConfiguration.passwordSignInFailureCountBeforeFactoryReset);
        writer.writeBooleanValue("storageRequireDeviceEncryption", windows81GeneralConfiguration.storageRequireDeviceEncryption);
        writer.writeBooleanValue("updatesRequireAutomaticUpdates", windows81GeneralConfiguration.updatesRequireAutomaticUpdates);
        writer.writeEnumValue<WindowsUserAccountControlSettings>("userAccountControlSettings", windows81GeneralConfiguration.userAccountControlSettings);
        writer.writeStringValue("workFoldersUrl", windows81GeneralConfiguration.workFoldersUrl);
}

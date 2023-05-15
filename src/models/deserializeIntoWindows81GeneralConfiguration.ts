import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {InternetSiteSecurityLevel} from './internetSiteSecurityLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {SiteSecurityLevel} from './siteSecurityLevel';
import {Windows81GeneralConfiguration} from './windows81GeneralConfiguration';
import {WindowsUserAccountControlSettings} from './windowsUserAccountControlSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows81GeneralConfiguration(windows81GeneralConfiguration: Windows81GeneralConfiguration | undefined = {} as Windows81GeneralConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows81GeneralConfiguration),
        "accountsBlockAddingNonMicrosoftAccountEmail": n => { windows81GeneralConfiguration.accountsBlockAddingNonMicrosoftAccountEmail = n.getBooleanValue(); },
        "applyOnlyToWindows81": n => { windows81GeneralConfiguration.applyOnlyToWindows81 = n.getBooleanValue(); },
        "browserBlockAutofill": n => { windows81GeneralConfiguration.browserBlockAutofill = n.getBooleanValue(); },
        "browserBlockAutomaticDetectionOfIntranetSites": n => { windows81GeneralConfiguration.browserBlockAutomaticDetectionOfIntranetSites = n.getBooleanValue(); },
        "browserBlockEnterpriseModeAccess": n => { windows81GeneralConfiguration.browserBlockEnterpriseModeAccess = n.getBooleanValue(); },
        "browserBlockJavaScript": n => { windows81GeneralConfiguration.browserBlockJavaScript = n.getBooleanValue(); },
        "browserBlockPlugins": n => { windows81GeneralConfiguration.browserBlockPlugins = n.getBooleanValue(); },
        "browserBlockPopups": n => { windows81GeneralConfiguration.browserBlockPopups = n.getBooleanValue(); },
        "browserBlockSendingDoNotTrackHeader": n => { windows81GeneralConfiguration.browserBlockSendingDoNotTrackHeader = n.getBooleanValue(); },
        "browserBlockSingleWordEntryOnIntranetSites": n => { windows81GeneralConfiguration.browserBlockSingleWordEntryOnIntranetSites = n.getBooleanValue(); },
        "browserEnterpriseModeSiteListLocation": n => { windows81GeneralConfiguration.browserEnterpriseModeSiteListLocation = n.getStringValue(); },
        "browserInternetSecurityLevel": n => { windows81GeneralConfiguration.browserInternetSecurityLevel = n.getEnumValue<InternetSiteSecurityLevel>(InternetSiteSecurityLevel); },
        "browserIntranetSecurityLevel": n => { windows81GeneralConfiguration.browserIntranetSecurityLevel = n.getEnumValue<SiteSecurityLevel>(SiteSecurityLevel); },
        "browserLoggingReportLocation": n => { windows81GeneralConfiguration.browserLoggingReportLocation = n.getStringValue(); },
        "browserRequireFirewall": n => { windows81GeneralConfiguration.browserRequireFirewall = n.getBooleanValue(); },
        "browserRequireFraudWarning": n => { windows81GeneralConfiguration.browserRequireFraudWarning = n.getBooleanValue(); },
        "browserRequireHighSecurityForRestrictedSites": n => { windows81GeneralConfiguration.browserRequireHighSecurityForRestrictedSites = n.getBooleanValue(); },
        "browserRequireSmartScreen": n => { windows81GeneralConfiguration.browserRequireSmartScreen = n.getBooleanValue(); },
        "browserTrustedSitesSecurityLevel": n => { windows81GeneralConfiguration.browserTrustedSitesSecurityLevel = n.getEnumValue<SiteSecurityLevel>(SiteSecurityLevel); },
        "cellularBlockDataRoaming": n => { windows81GeneralConfiguration.cellularBlockDataRoaming = n.getBooleanValue(); },
        "diagnosticsBlockDataSubmission": n => { windows81GeneralConfiguration.diagnosticsBlockDataSubmission = n.getBooleanValue(); },
        "passwordBlockPicturePasswordAndPin": n => { windows81GeneralConfiguration.passwordBlockPicturePasswordAndPin = n.getBooleanValue(); },
        "passwordExpirationDays": n => { windows81GeneralConfiguration.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumCharacterSetCount": n => { windows81GeneralConfiguration.passwordMinimumCharacterSetCount = n.getNumberValue(); },
        "passwordMinimumLength": n => { windows81GeneralConfiguration.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { windows81GeneralConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { windows81GeneralConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequiredType": n => { windows81GeneralConfiguration.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        "passwordSignInFailureCountBeforeFactoryReset": n => { windows81GeneralConfiguration.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
        "storageRequireDeviceEncryption": n => { windows81GeneralConfiguration.storageRequireDeviceEncryption = n.getBooleanValue(); },
        "updatesRequireAutomaticUpdates": n => { windows81GeneralConfiguration.updatesRequireAutomaticUpdates = n.getBooleanValue(); },
        "userAccountControlSettings": n => { windows81GeneralConfiguration.userAccountControlSettings = n.getEnumValue<WindowsUserAccountControlSettings>(WindowsUserAccountControlSettings); },
        "workFoldersUrl": n => { windows81GeneralConfiguration.workFoldersUrl = n.getStringValue(); },
    }
}

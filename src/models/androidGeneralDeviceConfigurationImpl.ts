import {AndroidGeneralDeviceConfiguration} from './androidGeneralDeviceConfiguration';
import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {AppListItemImpl, DeviceConfigurationImpl} from './index';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidGeneralDeviceConfigurationImpl extends DeviceConfigurationImpl implements AndroidGeneralDeviceConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether or not to block clipboard sharing to copy and paste between applications. */
    public appsBlockClipboardSharing?: boolean | undefined;
    /** Indicates whether or not to block copy and paste within applications. */
    public appsBlockCopyPaste?: boolean | undefined;
    /** Indicates whether or not to block the YouTube app. */
    public appsBlockYouTube?: boolean | undefined;
    /** List of apps to be hidden on the KNOX device. This collection can contain a maximum of 500 elements. */
    public appsHideList?: AppListItem[] | undefined;
    /** List of apps which can be installed on the KNOX device. This collection can contain a maximum of 500 elements. */
    public appsInstallAllowList?: AppListItem[] | undefined;
    /** List of apps which are blocked from being launched on the KNOX device. This collection can contain a maximum of 500 elements. */
    public appsLaunchBlockList?: AppListItem[] | undefined;
    /** Indicates whether or not to block Bluetooth. */
    public bluetoothBlocked?: boolean | undefined;
    /** Indicates whether or not to block the use of the camera. */
    public cameraBlocked?: boolean | undefined;
    /** Indicates whether or not to block data roaming. */
    public cellularBlockDataRoaming?: boolean | undefined;
    /** Indicates whether or not to block SMS/MMS messaging. */
    public cellularBlockMessaging?: boolean | undefined;
    /** Indicates whether or not to block voice roaming. */
    public cellularBlockVoiceRoaming?: boolean | undefined;
    /** Indicates whether or not to block syncing Wi-Fi tethering. */
    public cellularBlockWiFiTethering?: boolean | undefined;
    /** Type of list that is in the CompliantAppsList. Possible values are: none, appsInListCompliant, appsNotInListCompliant. */
    public compliantAppListType?: AppListType | undefined;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    public compliantAppsList?: AppListItem[] | undefined;
    /** Indicates whether or not to allow device sharing mode. */
    public deviceSharingAllowed?: boolean | undefined;
    /** Indicates whether or not to block diagnostic data submission. */
    public diagnosticDataBlockSubmission?: boolean | undefined;
    /** Indicates whether or not to block user performing a factory reset. */
    public factoryResetBlocked?: boolean | undefined;
    /** Indicates whether or not to block Google account auto sync. */
    public googleAccountBlockAutoSync?: boolean | undefined;
    /** Indicates whether or not to block the Google Play store. */
    public googlePlayStoreBlocked?: boolean | undefined;
    /** A list of apps that will be allowed to run when the device is in Kiosk Mode. This collection can contain a maximum of 500 elements. */
    public kioskModeApps?: AppListItem[] | undefined;
    /** Indicates whether or not to block the screen sleep button while in Kiosk Mode. */
    public kioskModeBlockSleepButton?: boolean | undefined;
    /** Indicates whether or not to block the volume buttons while in Kiosk Mode. */
    public kioskModeBlockVolumeButtons?: boolean | undefined;
    /** Indicates whether or not to block location services. */
    public locationServicesBlocked?: boolean | undefined;
    /** Indicates whether or not to block Near-Field Communication. */
    public nfcBlocked?: boolean | undefined;
    /** Indicates whether or not to block fingerprint unlock. */
    public passwordBlockFingerprintUnlock?: boolean | undefined;
    /** Indicates whether or not to block Smart Lock and other trust agents. */
    public passwordBlockTrustAgents?: boolean | undefined;
    /** Number of days before the password expires. Valid values 1 to 365 */
    public passwordExpirationDays?: number | undefined;
    /** Minimum length of passwords. Valid values 4 to 16 */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before the screen times out. */
    public passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Indicates whether or not to require a password. */
    public passwordRequired?: boolean | undefined;
    /** Type of password that is required. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any. */
    public passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    /** Number of sign in failures allowed before factory reset. Valid values 1 to 16 */
    public passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Indicates whether or not to block powering off the device. */
    public powerOffBlocked?: boolean | undefined;
    /** Indicates whether or not to block screenshots. */
    public screenCaptureBlocked?: boolean | undefined;
    /** Require the Android Verify apps feature is turned on. */
    public securityRequireVerifyApps?: boolean | undefined;
    /** Indicates whether or not to block Google Backup. */
    public storageBlockGoogleBackup?: boolean | undefined;
    /** Indicates whether or not to block removable storage usage. */
    public storageBlockRemovableStorage?: boolean | undefined;
    /** Indicates whether or not to require device encryption. */
    public storageRequireDeviceEncryption?: boolean | undefined;
    /** Indicates whether or not to require removable storage encryption. */
    public storageRequireRemovableStorageEncryption?: boolean | undefined;
    /** Indicates whether or not to block the use of the Voice Assistant. */
    public voiceAssistantBlocked?: boolean | undefined;
    /** Indicates whether or not to block voice dialing. */
    public voiceDialingBlocked?: boolean | undefined;
    /** Indicates whether or not to block the web browser's auto fill feature. */
    public webBrowserBlockAutofill?: boolean | undefined;
    /** Indicates whether or not to block the web browser. */
    public webBrowserBlocked?: boolean | undefined;
    /** Indicates whether or not to block JavaScript within the web browser. */
    public webBrowserBlockJavaScript?: boolean | undefined;
    /** Indicates whether or not to block popups within the web browser. */
    public webBrowserBlockPopups?: boolean | undefined;
    /** Cookie settings within the web browser. Possible values are: browserDefault, blockAlways, allowCurrentWebSite, allowFromWebsitesVisited, allowAlways. */
    public webBrowserCookieSettings?: WebBrowserCookieSettings | undefined;
    /** Indicates whether or not to block syncing Wi-Fi. */
    public wiFiBlocked?: boolean | undefined;
    /**
     * Instantiates a new AndroidGeneralDeviceConfiguration and sets the default values.
     * @param androidGeneralDeviceConfigurationParameterValue 
     */
    public constructor(androidGeneralDeviceConfigurationParameterValue?: AndroidGeneralDeviceConfiguration | undefined) {
        super(androidGeneralDeviceConfigurationParameterValue);
        this.additionalData = androidGeneralDeviceConfigurationParameterValue?.additionalData ? androidGeneralDeviceConfigurationParameterValue?.additionalData! : {};
        this.appsBlockClipboardSharing = androidGeneralDeviceConfigurationParameterValue?.appsBlockClipboardSharing;
        this.appsBlockCopyPaste = androidGeneralDeviceConfigurationParameterValue?.appsBlockCopyPaste;
        this.appsBlockYouTube = androidGeneralDeviceConfigurationParameterValue?.appsBlockYouTube;
        const appsHideListArrValue: AppListItemImpl[] = []; androidGeneralDeviceConfigurationParameterValue.appsHideList?.forEach(element => {appsHideListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
        this.appsHideList = appsHideListArrValue;
        const appsInstallAllowListArrValue: AppListItemImpl[] = []; androidGeneralDeviceConfigurationParameterValue.appsInstallAllowList?.forEach(element => {appsInstallAllowListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
        this.appsInstallAllowList = appsInstallAllowListArrValue;
        const appsLaunchBlockListArrValue: AppListItemImpl[] = []; androidGeneralDeviceConfigurationParameterValue.appsLaunchBlockList?.forEach(element => {appsLaunchBlockListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
        this.appsLaunchBlockList = appsLaunchBlockListArrValue;
        this.bluetoothBlocked = androidGeneralDeviceConfigurationParameterValue?.bluetoothBlocked;
        this.cameraBlocked = androidGeneralDeviceConfigurationParameterValue?.cameraBlocked;
        this.cellularBlockDataRoaming = androidGeneralDeviceConfigurationParameterValue?.cellularBlockDataRoaming;
        this.cellularBlockMessaging = androidGeneralDeviceConfigurationParameterValue?.cellularBlockMessaging;
        this.cellularBlockVoiceRoaming = androidGeneralDeviceConfigurationParameterValue?.cellularBlockVoiceRoaming;
        this.cellularBlockWiFiTethering = androidGeneralDeviceConfigurationParameterValue?.cellularBlockWiFiTethering;
        this.compliantAppListType = androidGeneralDeviceConfigurationParameterValue?.compliantAppListType;
        const compliantAppsListArrValue: AppListItemImpl[] = []; androidGeneralDeviceConfigurationParameterValue.compliantAppsList?.forEach(element => {compliantAppsListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
        this.compliantAppsList = compliantAppsListArrValue;
        this.deviceSharingAllowed = androidGeneralDeviceConfigurationParameterValue?.deviceSharingAllowed;
        this.diagnosticDataBlockSubmission = androidGeneralDeviceConfigurationParameterValue?.diagnosticDataBlockSubmission;
        this.factoryResetBlocked = androidGeneralDeviceConfigurationParameterValue?.factoryResetBlocked;
        this.googleAccountBlockAutoSync = androidGeneralDeviceConfigurationParameterValue?.googleAccountBlockAutoSync;
        this.googlePlayStoreBlocked = androidGeneralDeviceConfigurationParameterValue?.googlePlayStoreBlocked;
        const kioskModeAppsArrValue: AppListItemImpl[] = []; androidGeneralDeviceConfigurationParameterValue.kioskModeApps?.forEach(element => {kioskModeAppsArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
        this.kioskModeApps = kioskModeAppsArrValue;
        this.kioskModeBlockSleepButton = androidGeneralDeviceConfigurationParameterValue?.kioskModeBlockSleepButton;
        this.kioskModeBlockVolumeButtons = androidGeneralDeviceConfigurationParameterValue?.kioskModeBlockVolumeButtons;
        this.locationServicesBlocked = androidGeneralDeviceConfigurationParameterValue?.locationServicesBlocked;
        this.nfcBlocked = androidGeneralDeviceConfigurationParameterValue?.nfcBlocked;
        this.passwordBlockFingerprintUnlock = androidGeneralDeviceConfigurationParameterValue?.passwordBlockFingerprintUnlock;
        this.passwordBlockTrustAgents = androidGeneralDeviceConfigurationParameterValue?.passwordBlockTrustAgents;
        this.passwordExpirationDays = androidGeneralDeviceConfigurationParameterValue?.passwordExpirationDays;
        this.passwordMinimumLength = androidGeneralDeviceConfigurationParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeScreenTimeout = androidGeneralDeviceConfigurationParameterValue?.passwordMinutesOfInactivityBeforeScreenTimeout;
        this.passwordPreviousPasswordBlockCount = androidGeneralDeviceConfigurationParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = androidGeneralDeviceConfigurationParameterValue?.passwordRequired;
        this.passwordRequiredType = androidGeneralDeviceConfigurationParameterValue?.passwordRequiredType;
        this.passwordSignInFailureCountBeforeFactoryReset = androidGeneralDeviceConfigurationParameterValue?.passwordSignInFailureCountBeforeFactoryReset;
        this.powerOffBlocked = androidGeneralDeviceConfigurationParameterValue?.powerOffBlocked;
        this.screenCaptureBlocked = androidGeneralDeviceConfigurationParameterValue?.screenCaptureBlocked;
        this.securityRequireVerifyApps = androidGeneralDeviceConfigurationParameterValue?.securityRequireVerifyApps;
        this.storageBlockGoogleBackup = androidGeneralDeviceConfigurationParameterValue?.storageBlockGoogleBackup;
        this.storageBlockRemovableStorage = androidGeneralDeviceConfigurationParameterValue?.storageBlockRemovableStorage;
        this.storageRequireDeviceEncryption = androidGeneralDeviceConfigurationParameterValue?.storageRequireDeviceEncryption;
        this.storageRequireRemovableStorageEncryption = androidGeneralDeviceConfigurationParameterValue?.storageRequireRemovableStorageEncryption;
        this.voiceAssistantBlocked = androidGeneralDeviceConfigurationParameterValue?.voiceAssistantBlocked;
        this.voiceDialingBlocked = androidGeneralDeviceConfigurationParameterValue?.voiceDialingBlocked;
        this.webBrowserBlockAutofill = androidGeneralDeviceConfigurationParameterValue?.webBrowserBlockAutofill;
        this.webBrowserBlocked = androidGeneralDeviceConfigurationParameterValue?.webBrowserBlocked;
        this.webBrowserBlockJavaScript = androidGeneralDeviceConfigurationParameterValue?.webBrowserBlockJavaScript;
        this.webBrowserBlockPopups = androidGeneralDeviceConfigurationParameterValue?.webBrowserBlockPopups;
        this.webBrowserCookieSettings = androidGeneralDeviceConfigurationParameterValue?.webBrowserCookieSettings;
        this.wiFiBlocked = androidGeneralDeviceConfigurationParameterValue?.wiFiBlocked;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appsBlockClipboardSharing": n => { this.appsBlockClipboardSharing = n.getBooleanValue(); },
            "appsBlockCopyPaste": n => { this.appsBlockCopyPaste = n.getBooleanValue(); },
            "appsBlockYouTube": n => { this.appsBlockYouTube = n.getBooleanValue(); },
            "appsHideList": n => { this.appsHideList = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
            "appsInstallAllowList": n => { this.appsInstallAllowList = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
            "appsLaunchBlockList": n => { this.appsLaunchBlockList = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
            "bluetoothBlocked": n => { this.bluetoothBlocked = n.getBooleanValue(); },
            "cameraBlocked": n => { this.cameraBlocked = n.getBooleanValue(); },
            "cellularBlockDataRoaming": n => { this.cellularBlockDataRoaming = n.getBooleanValue(); },
            "cellularBlockMessaging": n => { this.cellularBlockMessaging = n.getBooleanValue(); },
            "cellularBlockVoiceRoaming": n => { this.cellularBlockVoiceRoaming = n.getBooleanValue(); },
            "cellularBlockWiFiTethering": n => { this.cellularBlockWiFiTethering = n.getBooleanValue(); },
            "compliantAppListType": n => { this.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
            "compliantAppsList": n => { this.compliantAppsList = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
            "deviceSharingAllowed": n => { this.deviceSharingAllowed = n.getBooleanValue(); },
            "diagnosticDataBlockSubmission": n => { this.diagnosticDataBlockSubmission = n.getBooleanValue(); },
            "factoryResetBlocked": n => { this.factoryResetBlocked = n.getBooleanValue(); },
            "googleAccountBlockAutoSync": n => { this.googleAccountBlockAutoSync = n.getBooleanValue(); },
            "googlePlayStoreBlocked": n => { this.googlePlayStoreBlocked = n.getBooleanValue(); },
            "kioskModeApps": n => { this.kioskModeApps = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
            "kioskModeBlockSleepButton": n => { this.kioskModeBlockSleepButton = n.getBooleanValue(); },
            "kioskModeBlockVolumeButtons": n => { this.kioskModeBlockVolumeButtons = n.getBooleanValue(); },
            "locationServicesBlocked": n => { this.locationServicesBlocked = n.getBooleanValue(); },
            "nfcBlocked": n => { this.nfcBlocked = n.getBooleanValue(); },
            "passwordBlockFingerprintUnlock": n => { this.passwordBlockFingerprintUnlock = n.getBooleanValue(); },
            "passwordBlockTrustAgents": n => { this.passwordBlockTrustAgents = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeScreenTimeout": n => { this.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<AndroidRequiredPasswordType>(AndroidRequiredPasswordType); },
            "passwordSignInFailureCountBeforeFactoryReset": n => { this.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
            "powerOffBlocked": n => { this.powerOffBlocked = n.getBooleanValue(); },
            "screenCaptureBlocked": n => { this.screenCaptureBlocked = n.getBooleanValue(); },
            "securityRequireVerifyApps": n => { this.securityRequireVerifyApps = n.getBooleanValue(); },
            "storageBlockGoogleBackup": n => { this.storageBlockGoogleBackup = n.getBooleanValue(); },
            "storageBlockRemovableStorage": n => { this.storageBlockRemovableStorage = n.getBooleanValue(); },
            "storageRequireDeviceEncryption": n => { this.storageRequireDeviceEncryption = n.getBooleanValue(); },
            "storageRequireRemovableStorageEncryption": n => { this.storageRequireRemovableStorageEncryption = n.getBooleanValue(); },
            "voiceAssistantBlocked": n => { this.voiceAssistantBlocked = n.getBooleanValue(); },
            "voiceDialingBlocked": n => { this.voiceDialingBlocked = n.getBooleanValue(); },
            "webBrowserBlockAutofill": n => { this.webBrowserBlockAutofill = n.getBooleanValue(); },
            "webBrowserBlocked": n => { this.webBrowserBlocked = n.getBooleanValue(); },
            "webBrowserBlockJavaScript": n => { this.webBrowserBlockJavaScript = n.getBooleanValue(); },
            "webBrowserBlockPopups": n => { this.webBrowserBlockPopups = n.getBooleanValue(); },
            "webBrowserCookieSettings": n => { this.webBrowserCookieSettings = n.getEnumValue<WebBrowserCookieSettings>(WebBrowserCookieSettings); },
            "wiFiBlocked": n => { this.wiFiBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appsBlockClipboardSharing){
            writer.writeBooleanValue("appsBlockClipboardSharing", this.appsBlockClipboardSharing);
        }
        if(this.appsBlockCopyPaste){
            writer.writeBooleanValue("appsBlockCopyPaste", this.appsBlockCopyPaste);
        }
        if(this.appsBlockYouTube){
            writer.writeBooleanValue("appsBlockYouTube", this.appsBlockYouTube);
        }
        if(this.appsHideList && this.appsHideList.length != 0){        const appsHideListArrValue: AppListItemImpl[] = []; this.appsHideList?.forEach(element => {appsHideListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("appsHideList", appsHideListArrValue);
        }
        if(this.appsInstallAllowList && this.appsInstallAllowList.length != 0){        const appsInstallAllowListArrValue: AppListItemImpl[] = []; this.appsInstallAllowList?.forEach(element => {appsInstallAllowListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("appsInstallAllowList", appsInstallAllowListArrValue);
        }
        if(this.appsLaunchBlockList && this.appsLaunchBlockList.length != 0){        const appsLaunchBlockListArrValue: AppListItemImpl[] = []; this.appsLaunchBlockList?.forEach(element => {appsLaunchBlockListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("appsLaunchBlockList", appsLaunchBlockListArrValue);
        }
        if(this.bluetoothBlocked){
            writer.writeBooleanValue("bluetoothBlocked", this.bluetoothBlocked);
        }
        if(this.cameraBlocked){
            writer.writeBooleanValue("cameraBlocked", this.cameraBlocked);
        }
        if(this.cellularBlockDataRoaming){
            writer.writeBooleanValue("cellularBlockDataRoaming", this.cellularBlockDataRoaming);
        }
        if(this.cellularBlockMessaging){
            writer.writeBooleanValue("cellularBlockMessaging", this.cellularBlockMessaging);
        }
        if(this.cellularBlockVoiceRoaming){
            writer.writeBooleanValue("cellularBlockVoiceRoaming", this.cellularBlockVoiceRoaming);
        }
        if(this.cellularBlockWiFiTethering){
            writer.writeBooleanValue("cellularBlockWiFiTethering", this.cellularBlockWiFiTethering);
        }
        if(this.compliantAppListType){
            writer.writeEnumValue<AppListType>("compliantAppListType", this.compliantAppListType);
        }
        if(this.compliantAppsList && this.compliantAppsList.length != 0){        const compliantAppsListArrValue: AppListItemImpl[] = []; this.compliantAppsList?.forEach(element => {compliantAppsListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("compliantAppsList", compliantAppsListArrValue);
        }
        if(this.deviceSharingAllowed){
            writer.writeBooleanValue("deviceSharingAllowed", this.deviceSharingAllowed);
        }
        if(this.diagnosticDataBlockSubmission){
            writer.writeBooleanValue("diagnosticDataBlockSubmission", this.diagnosticDataBlockSubmission);
        }
        if(this.factoryResetBlocked){
            writer.writeBooleanValue("factoryResetBlocked", this.factoryResetBlocked);
        }
        if(this.googleAccountBlockAutoSync){
            writer.writeBooleanValue("googleAccountBlockAutoSync", this.googleAccountBlockAutoSync);
        }
        if(this.googlePlayStoreBlocked){
            writer.writeBooleanValue("googlePlayStoreBlocked", this.googlePlayStoreBlocked);
        }
        if(this.kioskModeApps && this.kioskModeApps.length != 0){        const kioskModeAppsArrValue: AppListItemImpl[] = []; this.kioskModeApps?.forEach(element => {kioskModeAppsArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("kioskModeApps", kioskModeAppsArrValue);
        }
        if(this.kioskModeBlockSleepButton){
            writer.writeBooleanValue("kioskModeBlockSleepButton", this.kioskModeBlockSleepButton);
        }
        if(this.kioskModeBlockVolumeButtons){
            writer.writeBooleanValue("kioskModeBlockVolumeButtons", this.kioskModeBlockVolumeButtons);
        }
        if(this.locationServicesBlocked){
            writer.writeBooleanValue("locationServicesBlocked", this.locationServicesBlocked);
        }
        if(this.nfcBlocked){
            writer.writeBooleanValue("nfcBlocked", this.nfcBlocked);
        }
        if(this.passwordBlockFingerprintUnlock){
            writer.writeBooleanValue("passwordBlockFingerprintUnlock", this.passwordBlockFingerprintUnlock);
        }
        if(this.passwordBlockTrustAgents){
            writer.writeBooleanValue("passwordBlockTrustAgents", this.passwordBlockTrustAgents);
        }
        if(this.passwordExpirationDays){
            writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
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
        if(this.passwordRequired){
            writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        }
        if(this.passwordRequiredType){
            writer.writeEnumValue<AndroidRequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
        if(this.passwordSignInFailureCountBeforeFactoryReset){
            writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", this.passwordSignInFailureCountBeforeFactoryReset);
        }
        if(this.powerOffBlocked){
            writer.writeBooleanValue("powerOffBlocked", this.powerOffBlocked);
        }
        if(this.screenCaptureBlocked){
            writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        }
        if(this.securityRequireVerifyApps){
            writer.writeBooleanValue("securityRequireVerifyApps", this.securityRequireVerifyApps);
        }
        if(this.storageBlockGoogleBackup){
            writer.writeBooleanValue("storageBlockGoogleBackup", this.storageBlockGoogleBackup);
        }
        if(this.storageBlockRemovableStorage){
            writer.writeBooleanValue("storageBlockRemovableStorage", this.storageBlockRemovableStorage);
        }
        if(this.storageRequireDeviceEncryption){
            writer.writeBooleanValue("storageRequireDeviceEncryption", this.storageRequireDeviceEncryption);
        }
        if(this.storageRequireRemovableStorageEncryption){
            writer.writeBooleanValue("storageRequireRemovableStorageEncryption", this.storageRequireRemovableStorageEncryption);
        }
        if(this.voiceAssistantBlocked){
            writer.writeBooleanValue("voiceAssistantBlocked", this.voiceAssistantBlocked);
        }
        if(this.voiceDialingBlocked){
            writer.writeBooleanValue("voiceDialingBlocked", this.voiceDialingBlocked);
        }
        if(this.webBrowserBlockAutofill){
            writer.writeBooleanValue("webBrowserBlockAutofill", this.webBrowserBlockAutofill);
        }
        if(this.webBrowserBlocked){
            writer.writeBooleanValue("webBrowserBlocked", this.webBrowserBlocked);
        }
        if(this.webBrowserBlockJavaScript){
            writer.writeBooleanValue("webBrowserBlockJavaScript", this.webBrowserBlockJavaScript);
        }
        if(this.webBrowserBlockPopups){
            writer.writeBooleanValue("webBrowserBlockPopups", this.webBrowserBlockPopups);
        }
        if(this.webBrowserCookieSettings){
            writer.writeEnumValue<WebBrowserCookieSettings>("webBrowserCookieSettings", this.webBrowserCookieSettings);
        }
        if(this.wiFiBlocked){
            writer.writeBooleanValue("wiFiBlocked", this.wiFiBlocked);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

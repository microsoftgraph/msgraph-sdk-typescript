import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {AppListItem, DeviceConfiguration} from './index';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidGeneralDeviceConfiguration extends DeviceConfiguration implements Parsable {
    /** Indicates whether or not to block clipboard sharing to copy and paste between applications. */
    private _appsBlockClipboardSharing?: boolean | undefined;
    /** Indicates whether or not to block copy and paste within applications. */
    private _appsBlockCopyPaste?: boolean | undefined;
    /** Indicates whether or not to block the YouTube app. */
    private _appsBlockYouTube?: boolean | undefined;
    /** List of apps to be hidden on the KNOX device. This collection can contain a maximum of 500 elements. */
    private _appsHideList?: AppListItem[] | undefined;
    /** List of apps which can be installed on the KNOX device. This collection can contain a maximum of 500 elements. */
    private _appsInstallAllowList?: AppListItem[] | undefined;
    /** List of apps which are blocked from being launched on the KNOX device. This collection can contain a maximum of 500 elements. */
    private _appsLaunchBlockList?: AppListItem[] | undefined;
    /** Indicates whether or not to block Bluetooth. */
    private _bluetoothBlocked?: boolean | undefined;
    /** Indicates whether or not to block the use of the camera. */
    private _cameraBlocked?: boolean | undefined;
    /** Indicates whether or not to block data roaming. */
    private _cellularBlockDataRoaming?: boolean | undefined;
    /** Indicates whether or not to block SMS/MMS messaging. */
    private _cellularBlockMessaging?: boolean | undefined;
    /** Indicates whether or not to block voice roaming. */
    private _cellularBlockVoiceRoaming?: boolean | undefined;
    /** Indicates whether or not to block syncing Wi-Fi tethering. */
    private _cellularBlockWiFiTethering?: boolean | undefined;
    /** Type of list that is in the CompliantAppsList. Possible values are: none, appsInListCompliant, appsNotInListCompliant. */
    private _compliantAppListType?: AppListType | undefined;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    private _compliantAppsList?: AppListItem[] | undefined;
    /** Indicates whether or not to allow device sharing mode. */
    private _deviceSharingAllowed?: boolean | undefined;
    /** Indicates whether or not to block diagnostic data submission. */
    private _diagnosticDataBlockSubmission?: boolean | undefined;
    /** Indicates whether or not to block user performing a factory reset. */
    private _factoryResetBlocked?: boolean | undefined;
    /** Indicates whether or not to block Google account auto sync. */
    private _googleAccountBlockAutoSync?: boolean | undefined;
    /** Indicates whether or not to block the Google Play store. */
    private _googlePlayStoreBlocked?: boolean | undefined;
    /** A list of apps that will be allowed to run when the device is in Kiosk Mode. This collection can contain a maximum of 500 elements. */
    private _kioskModeApps?: AppListItem[] | undefined;
    /** Indicates whether or not to block the screen sleep button while in Kiosk Mode. */
    private _kioskModeBlockSleepButton?: boolean | undefined;
    /** Indicates whether or not to block the volume buttons while in Kiosk Mode. */
    private _kioskModeBlockVolumeButtons?: boolean | undefined;
    /** Indicates whether or not to block location services. */
    private _locationServicesBlocked?: boolean | undefined;
    /** Indicates whether or not to block Near-Field Communication. */
    private _nfcBlocked?: boolean | undefined;
    /** Indicates whether or not to block fingerprint unlock. */
    private _passwordBlockFingerprintUnlock?: boolean | undefined;
    /** Indicates whether or not to block Smart Lock and other trust agents. */
    private _passwordBlockTrustAgents?: boolean | undefined;
    /** Number of days before the password expires. Valid values 1 to 365 */
    private _passwordExpirationDays?: number | undefined;
    /** Minimum length of passwords. Valid values 4 to 16 */
    private _passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before the screen times out. */
    private _passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Indicates whether or not to require a password. */
    private _passwordRequired?: boolean | undefined;
    /** Type of password that is required. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any. */
    private _passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    /** Number of sign in failures allowed before factory reset. Valid values 1 to 16 */
    private _passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Indicates whether or not to block powering off the device. */
    private _powerOffBlocked?: boolean | undefined;
    /** Indicates whether or not to block screenshots. */
    private _screenCaptureBlocked?: boolean | undefined;
    /** Require the Android Verify apps feature is turned on. */
    private _securityRequireVerifyApps?: boolean | undefined;
    /** Indicates whether or not to block Google Backup. */
    private _storageBlockGoogleBackup?: boolean | undefined;
    /** Indicates whether or not to block removable storage usage. */
    private _storageBlockRemovableStorage?: boolean | undefined;
    /** Indicates whether or not to require device encryption. */
    private _storageRequireDeviceEncryption?: boolean | undefined;
    /** Indicates whether or not to require removable storage encryption. */
    private _storageRequireRemovableStorageEncryption?: boolean | undefined;
    /** Indicates whether or not to block the use of the Voice Assistant. */
    private _voiceAssistantBlocked?: boolean | undefined;
    /** Indicates whether or not to block voice dialing. */
    private _voiceDialingBlocked?: boolean | undefined;
    /** Indicates whether or not to block the web browser's auto fill feature. */
    private _webBrowserBlockAutofill?: boolean | undefined;
    /** Indicates whether or not to block the web browser. */
    private _webBrowserBlocked?: boolean | undefined;
    /** Indicates whether or not to block JavaScript within the web browser. */
    private _webBrowserBlockJavaScript?: boolean | undefined;
    /** Indicates whether or not to block popups within the web browser. */
    private _webBrowserBlockPopups?: boolean | undefined;
    /** Cookie settings within the web browser. Possible values are: browserDefault, blockAlways, allowCurrentWebSite, allowFromWebsitesVisited, allowAlways. */
    private _webBrowserCookieSettings?: WebBrowserCookieSettings | undefined;
    /** Indicates whether or not to block syncing Wi-Fi. */
    private _wiFiBlocked?: boolean | undefined;
    /**
     * Gets the appsBlockClipboardSharing property value. Indicates whether or not to block clipboard sharing to copy and paste between applications.
     * @returns a boolean
     */
    public get appsBlockClipboardSharing() {
        return this._appsBlockClipboardSharing;
    };
    /**
     * Sets the appsBlockClipboardSharing property value. Indicates whether or not to block clipboard sharing to copy and paste between applications.
     * @param value Value to set for the appsBlockClipboardSharing property.
     */
    public set appsBlockClipboardSharing(value: boolean | undefined) {
        this._appsBlockClipboardSharing = value;
    };
    /**
     * Gets the appsBlockCopyPaste property value. Indicates whether or not to block copy and paste within applications.
     * @returns a boolean
     */
    public get appsBlockCopyPaste() {
        return this._appsBlockCopyPaste;
    };
    /**
     * Sets the appsBlockCopyPaste property value. Indicates whether or not to block copy and paste within applications.
     * @param value Value to set for the appsBlockCopyPaste property.
     */
    public set appsBlockCopyPaste(value: boolean | undefined) {
        this._appsBlockCopyPaste = value;
    };
    /**
     * Gets the appsBlockYouTube property value. Indicates whether or not to block the YouTube app.
     * @returns a boolean
     */
    public get appsBlockYouTube() {
        return this._appsBlockYouTube;
    };
    /**
     * Sets the appsBlockYouTube property value. Indicates whether or not to block the YouTube app.
     * @param value Value to set for the appsBlockYouTube property.
     */
    public set appsBlockYouTube(value: boolean | undefined) {
        this._appsBlockYouTube = value;
    };
    /**
     * Gets the appsHideList property value. List of apps to be hidden on the KNOX device. This collection can contain a maximum of 500 elements.
     * @returns a appListItem
     */
    public get appsHideList() {
        return this._appsHideList;
    };
    /**
     * Sets the appsHideList property value. List of apps to be hidden on the KNOX device. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the appsHideList property.
     */
    public set appsHideList(value: AppListItem[] | undefined) {
        this._appsHideList = value;
    };
    /**
     * Gets the appsInstallAllowList property value. List of apps which can be installed on the KNOX device. This collection can contain a maximum of 500 elements.
     * @returns a appListItem
     */
    public get appsInstallAllowList() {
        return this._appsInstallAllowList;
    };
    /**
     * Sets the appsInstallAllowList property value. List of apps which can be installed on the KNOX device. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the appsInstallAllowList property.
     */
    public set appsInstallAllowList(value: AppListItem[] | undefined) {
        this._appsInstallAllowList = value;
    };
    /**
     * Gets the appsLaunchBlockList property value. List of apps which are blocked from being launched on the KNOX device. This collection can contain a maximum of 500 elements.
     * @returns a appListItem
     */
    public get appsLaunchBlockList() {
        return this._appsLaunchBlockList;
    };
    /**
     * Sets the appsLaunchBlockList property value. List of apps which are blocked from being launched on the KNOX device. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the appsLaunchBlockList property.
     */
    public set appsLaunchBlockList(value: AppListItem[] | undefined) {
        this._appsLaunchBlockList = value;
    };
    /**
     * Gets the bluetoothBlocked property value. Indicates whether or not to block Bluetooth.
     * @returns a boolean
     */
    public get bluetoothBlocked() {
        return this._bluetoothBlocked;
    };
    /**
     * Sets the bluetoothBlocked property value. Indicates whether or not to block Bluetooth.
     * @param value Value to set for the bluetoothBlocked property.
     */
    public set bluetoothBlocked(value: boolean | undefined) {
        this._bluetoothBlocked = value;
    };
    /**
     * Gets the cameraBlocked property value. Indicates whether or not to block the use of the camera.
     * @returns a boolean
     */
    public get cameraBlocked() {
        return this._cameraBlocked;
    };
    /**
     * Sets the cameraBlocked property value. Indicates whether or not to block the use of the camera.
     * @param value Value to set for the cameraBlocked property.
     */
    public set cameraBlocked(value: boolean | undefined) {
        this._cameraBlocked = value;
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
        this._cellularBlockDataRoaming = value;
    };
    /**
     * Gets the cellularBlockMessaging property value. Indicates whether or not to block SMS/MMS messaging.
     * @returns a boolean
     */
    public get cellularBlockMessaging() {
        return this._cellularBlockMessaging;
    };
    /**
     * Sets the cellularBlockMessaging property value. Indicates whether or not to block SMS/MMS messaging.
     * @param value Value to set for the cellularBlockMessaging property.
     */
    public set cellularBlockMessaging(value: boolean | undefined) {
        this._cellularBlockMessaging = value;
    };
    /**
     * Gets the cellularBlockVoiceRoaming property value. Indicates whether or not to block voice roaming.
     * @returns a boolean
     */
    public get cellularBlockVoiceRoaming() {
        return this._cellularBlockVoiceRoaming;
    };
    /**
     * Sets the cellularBlockVoiceRoaming property value. Indicates whether or not to block voice roaming.
     * @param value Value to set for the cellularBlockVoiceRoaming property.
     */
    public set cellularBlockVoiceRoaming(value: boolean | undefined) {
        this._cellularBlockVoiceRoaming = value;
    };
    /**
     * Gets the cellularBlockWiFiTethering property value. Indicates whether or not to block syncing Wi-Fi tethering.
     * @returns a boolean
     */
    public get cellularBlockWiFiTethering() {
        return this._cellularBlockWiFiTethering;
    };
    /**
     * Sets the cellularBlockWiFiTethering property value. Indicates whether or not to block syncing Wi-Fi tethering.
     * @param value Value to set for the cellularBlockWiFiTethering property.
     */
    public set cellularBlockWiFiTethering(value: boolean | undefined) {
        this._cellularBlockWiFiTethering = value;
    };
    /**
     * Gets the compliantAppListType property value. Type of list that is in the CompliantAppsList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
     * @returns a appListType
     */
    public get compliantAppListType() {
        return this._compliantAppListType;
    };
    /**
     * Sets the compliantAppListType property value. Type of list that is in the CompliantAppsList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
     * @param value Value to set for the compliantAppListType property.
     */
    public set compliantAppListType(value: AppListType | undefined) {
        this._compliantAppListType = value;
    };
    /**
     * Gets the compliantAppsList property value. List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements.
     * @returns a appListItem
     */
    public get compliantAppsList() {
        return this._compliantAppsList;
    };
    /**
     * Sets the compliantAppsList property value. List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements.
     * @param value Value to set for the compliantAppsList property.
     */
    public set compliantAppsList(value: AppListItem[] | undefined) {
        this._compliantAppsList = value;
    };
    /**
     * Instantiates a new AndroidGeneralDeviceConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceSharingAllowed property value. Indicates whether or not to allow device sharing mode.
     * @returns a boolean
     */
    public get deviceSharingAllowed() {
        return this._deviceSharingAllowed;
    };
    /**
     * Sets the deviceSharingAllowed property value. Indicates whether or not to allow device sharing mode.
     * @param value Value to set for the deviceSharingAllowed property.
     */
    public set deviceSharingAllowed(value: boolean | undefined) {
        this._deviceSharingAllowed = value;
    };
    /**
     * Gets the diagnosticDataBlockSubmission property value. Indicates whether or not to block diagnostic data submission.
     * @returns a boolean
     */
    public get diagnosticDataBlockSubmission() {
        return this._diagnosticDataBlockSubmission;
    };
    /**
     * Sets the diagnosticDataBlockSubmission property value. Indicates whether or not to block diagnostic data submission.
     * @param value Value to set for the diagnosticDataBlockSubmission property.
     */
    public set diagnosticDataBlockSubmission(value: boolean | undefined) {
        this._diagnosticDataBlockSubmission = value;
    };
    /**
     * Gets the factoryResetBlocked property value. Indicates whether or not to block user performing a factory reset.
     * @returns a boolean
     */
    public get factoryResetBlocked() {
        return this._factoryResetBlocked;
    };
    /**
     * Sets the factoryResetBlocked property value. Indicates whether or not to block user performing a factory reset.
     * @param value Value to set for the factoryResetBlocked property.
     */
    public set factoryResetBlocked(value: boolean | undefined) {
        this._factoryResetBlocked = value;
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
            "appsHideList": n => { this.appsHideList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
            "appsInstallAllowList": n => { this.appsInstallAllowList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
            "appsLaunchBlockList": n => { this.appsLaunchBlockList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
            "bluetoothBlocked": n => { this.bluetoothBlocked = n.getBooleanValue(); },
            "cameraBlocked": n => { this.cameraBlocked = n.getBooleanValue(); },
            "cellularBlockDataRoaming": n => { this.cellularBlockDataRoaming = n.getBooleanValue(); },
            "cellularBlockMessaging": n => { this.cellularBlockMessaging = n.getBooleanValue(); },
            "cellularBlockVoiceRoaming": n => { this.cellularBlockVoiceRoaming = n.getBooleanValue(); },
            "cellularBlockWiFiTethering": n => { this.cellularBlockWiFiTethering = n.getBooleanValue(); },
            "compliantAppListType": n => { this.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
            "compliantAppsList": n => { this.compliantAppsList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
            "deviceSharingAllowed": n => { this.deviceSharingAllowed = n.getBooleanValue(); },
            "diagnosticDataBlockSubmission": n => { this.diagnosticDataBlockSubmission = n.getBooleanValue(); },
            "factoryResetBlocked": n => { this.factoryResetBlocked = n.getBooleanValue(); },
            "googleAccountBlockAutoSync": n => { this.googleAccountBlockAutoSync = n.getBooleanValue(); },
            "googlePlayStoreBlocked": n => { this.googlePlayStoreBlocked = n.getBooleanValue(); },
            "kioskModeApps": n => { this.kioskModeApps = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
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
     * Gets the googleAccountBlockAutoSync property value. Indicates whether or not to block Google account auto sync.
     * @returns a boolean
     */
    public get googleAccountBlockAutoSync() {
        return this._googleAccountBlockAutoSync;
    };
    /**
     * Sets the googleAccountBlockAutoSync property value. Indicates whether or not to block Google account auto sync.
     * @param value Value to set for the googleAccountBlockAutoSync property.
     */
    public set googleAccountBlockAutoSync(value: boolean | undefined) {
        this._googleAccountBlockAutoSync = value;
    };
    /**
     * Gets the googlePlayStoreBlocked property value. Indicates whether or not to block the Google Play store.
     * @returns a boolean
     */
    public get googlePlayStoreBlocked() {
        return this._googlePlayStoreBlocked;
    };
    /**
     * Sets the googlePlayStoreBlocked property value. Indicates whether or not to block the Google Play store.
     * @param value Value to set for the googlePlayStoreBlocked property.
     */
    public set googlePlayStoreBlocked(value: boolean | undefined) {
        this._googlePlayStoreBlocked = value;
    };
    /**
     * Gets the kioskModeApps property value. A list of apps that will be allowed to run when the device is in Kiosk Mode. This collection can contain a maximum of 500 elements.
     * @returns a appListItem
     */
    public get kioskModeApps() {
        return this._kioskModeApps;
    };
    /**
     * Sets the kioskModeApps property value. A list of apps that will be allowed to run when the device is in Kiosk Mode. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the kioskModeApps property.
     */
    public set kioskModeApps(value: AppListItem[] | undefined) {
        this._kioskModeApps = value;
    };
    /**
     * Gets the kioskModeBlockSleepButton property value. Indicates whether or not to block the screen sleep button while in Kiosk Mode.
     * @returns a boolean
     */
    public get kioskModeBlockSleepButton() {
        return this._kioskModeBlockSleepButton;
    };
    /**
     * Sets the kioskModeBlockSleepButton property value. Indicates whether or not to block the screen sleep button while in Kiosk Mode.
     * @param value Value to set for the kioskModeBlockSleepButton property.
     */
    public set kioskModeBlockSleepButton(value: boolean | undefined) {
        this._kioskModeBlockSleepButton = value;
    };
    /**
     * Gets the kioskModeBlockVolumeButtons property value. Indicates whether or not to block the volume buttons while in Kiosk Mode.
     * @returns a boolean
     */
    public get kioskModeBlockVolumeButtons() {
        return this._kioskModeBlockVolumeButtons;
    };
    /**
     * Sets the kioskModeBlockVolumeButtons property value. Indicates whether or not to block the volume buttons while in Kiosk Mode.
     * @param value Value to set for the kioskModeBlockVolumeButtons property.
     */
    public set kioskModeBlockVolumeButtons(value: boolean | undefined) {
        this._kioskModeBlockVolumeButtons = value;
    };
    /**
     * Gets the locationServicesBlocked property value. Indicates whether or not to block location services.
     * @returns a boolean
     */
    public get locationServicesBlocked() {
        return this._locationServicesBlocked;
    };
    /**
     * Sets the locationServicesBlocked property value. Indicates whether or not to block location services.
     * @param value Value to set for the locationServicesBlocked property.
     */
    public set locationServicesBlocked(value: boolean | undefined) {
        this._locationServicesBlocked = value;
    };
    /**
     * Gets the nfcBlocked property value. Indicates whether or not to block Near-Field Communication.
     * @returns a boolean
     */
    public get nfcBlocked() {
        return this._nfcBlocked;
    };
    /**
     * Sets the nfcBlocked property value. Indicates whether or not to block Near-Field Communication.
     * @param value Value to set for the nfcBlocked property.
     */
    public set nfcBlocked(value: boolean | undefined) {
        this._nfcBlocked = value;
    };
    /**
     * Gets the passwordBlockFingerprintUnlock property value. Indicates whether or not to block fingerprint unlock.
     * @returns a boolean
     */
    public get passwordBlockFingerprintUnlock() {
        return this._passwordBlockFingerprintUnlock;
    };
    /**
     * Sets the passwordBlockFingerprintUnlock property value. Indicates whether or not to block fingerprint unlock.
     * @param value Value to set for the passwordBlockFingerprintUnlock property.
     */
    public set passwordBlockFingerprintUnlock(value: boolean | undefined) {
        this._passwordBlockFingerprintUnlock = value;
    };
    /**
     * Gets the passwordBlockTrustAgents property value. Indicates whether or not to block Smart Lock and other trust agents.
     * @returns a boolean
     */
    public get passwordBlockTrustAgents() {
        return this._passwordBlockTrustAgents;
    };
    /**
     * Sets the passwordBlockTrustAgents property value. Indicates whether or not to block Smart Lock and other trust agents.
     * @param value Value to set for the passwordBlockTrustAgents property.
     */
    public set passwordBlockTrustAgents(value: boolean | undefined) {
        this._passwordBlockTrustAgents = value;
    };
    /**
     * Gets the passwordExpirationDays property value. Number of days before the password expires. Valid values 1 to 365
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. Number of days before the password expires. Valid values 1 to 365
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        this._passwordExpirationDays = value;
    };
    /**
     * Gets the passwordMinimumLength property value. Minimum length of passwords. Valid values 4 to 16
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. Minimum length of passwords. Valid values 4 to 16
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        this._passwordMinimumLength = value;
    };
    /**
     * Gets the passwordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before the screen times out.
     * @returns a integer
     */
    public get passwordMinutesOfInactivityBeforeScreenTimeout() {
        return this._passwordMinutesOfInactivityBeforeScreenTimeout;
    };
    /**
     * Sets the passwordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before the screen times out.
     * @param value Value to set for the passwordMinutesOfInactivityBeforeScreenTimeout property.
     */
    public set passwordMinutesOfInactivityBeforeScreenTimeout(value: number | undefined) {
        this._passwordMinutesOfInactivityBeforeScreenTimeout = value;
    };
    /**
     * Gets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block. Valid values 0 to 24
     * @returns a integer
     */
    public get passwordPreviousPasswordBlockCount() {
        return this._passwordPreviousPasswordBlockCount;
    };
    /**
     * Sets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block. Valid values 0 to 24
     * @param value Value to set for the passwordPreviousPasswordBlockCount property.
     */
    public set passwordPreviousPasswordBlockCount(value: number | undefined) {
        this._passwordPreviousPasswordBlockCount = value;
    };
    /**
     * Gets the passwordRequired property value. Indicates whether or not to require a password.
     * @returns a boolean
     */
    public get passwordRequired() {
        return this._passwordRequired;
    };
    /**
     * Sets the passwordRequired property value. Indicates whether or not to require a password.
     * @param value Value to set for the passwordRequired property.
     */
    public set passwordRequired(value: boolean | undefined) {
        this._passwordRequired = value;
    };
    /**
     * Gets the passwordRequiredType property value. Type of password that is required. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any.
     * @returns a androidRequiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. Type of password that is required. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: AndroidRequiredPasswordType | undefined) {
        this._passwordRequiredType = value;
    };
    /**
     * Gets the passwordSignInFailureCountBeforeFactoryReset property value. Number of sign in failures allowed before factory reset. Valid values 1 to 16
     * @returns a integer
     */
    public get passwordSignInFailureCountBeforeFactoryReset() {
        return this._passwordSignInFailureCountBeforeFactoryReset;
    };
    /**
     * Sets the passwordSignInFailureCountBeforeFactoryReset property value. Number of sign in failures allowed before factory reset. Valid values 1 to 16
     * @param value Value to set for the passwordSignInFailureCountBeforeFactoryReset property.
     */
    public set passwordSignInFailureCountBeforeFactoryReset(value: number | undefined) {
        this._passwordSignInFailureCountBeforeFactoryReset = value;
    };
    /**
     * Gets the powerOffBlocked property value. Indicates whether or not to block powering off the device.
     * @returns a boolean
     */
    public get powerOffBlocked() {
        return this._powerOffBlocked;
    };
    /**
     * Sets the powerOffBlocked property value. Indicates whether or not to block powering off the device.
     * @param value Value to set for the powerOffBlocked property.
     */
    public set powerOffBlocked(value: boolean | undefined) {
        this._powerOffBlocked = value;
    };
    /**
     * Gets the screenCaptureBlocked property value. Indicates whether or not to block screenshots.
     * @returns a boolean
     */
    public get screenCaptureBlocked() {
        return this._screenCaptureBlocked;
    };
    /**
     * Sets the screenCaptureBlocked property value. Indicates whether or not to block screenshots.
     * @param value Value to set for the screenCaptureBlocked property.
     */
    public set screenCaptureBlocked(value: boolean | undefined) {
        this._screenCaptureBlocked = value;
    };
    /**
     * Gets the securityRequireVerifyApps property value. Require the Android Verify apps feature is turned on.
     * @returns a boolean
     */
    public get securityRequireVerifyApps() {
        return this._securityRequireVerifyApps;
    };
    /**
     * Sets the securityRequireVerifyApps property value. Require the Android Verify apps feature is turned on.
     * @param value Value to set for the securityRequireVerifyApps property.
     */
    public set securityRequireVerifyApps(value: boolean | undefined) {
        this._securityRequireVerifyApps = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("appsBlockClipboardSharing", this.appsBlockClipboardSharing);
        writer.writeBooleanValue("appsBlockCopyPaste", this.appsBlockCopyPaste);
        writer.writeBooleanValue("appsBlockYouTube", this.appsBlockYouTube);
        writer.writeCollectionOfObjectValues<AppListItem>("appsHideList", this.appsHideList);
        writer.writeCollectionOfObjectValues<AppListItem>("appsInstallAllowList", this.appsInstallAllowList);
        writer.writeCollectionOfObjectValues<AppListItem>("appsLaunchBlockList", this.appsLaunchBlockList);
        writer.writeBooleanValue("bluetoothBlocked", this.bluetoothBlocked);
        writer.writeBooleanValue("cameraBlocked", this.cameraBlocked);
        writer.writeBooleanValue("cellularBlockDataRoaming", this.cellularBlockDataRoaming);
        writer.writeBooleanValue("cellularBlockMessaging", this.cellularBlockMessaging);
        writer.writeBooleanValue("cellularBlockVoiceRoaming", this.cellularBlockVoiceRoaming);
        writer.writeBooleanValue("cellularBlockWiFiTethering", this.cellularBlockWiFiTethering);
        writer.writeEnumValue<AppListType>("compliantAppListType", this.compliantAppListType);
        writer.writeCollectionOfObjectValues<AppListItem>("compliantAppsList", this.compliantAppsList);
        writer.writeBooleanValue("deviceSharingAllowed", this.deviceSharingAllowed);
        writer.writeBooleanValue("diagnosticDataBlockSubmission", this.diagnosticDataBlockSubmission);
        writer.writeBooleanValue("factoryResetBlocked", this.factoryResetBlocked);
        writer.writeBooleanValue("googleAccountBlockAutoSync", this.googleAccountBlockAutoSync);
        writer.writeBooleanValue("googlePlayStoreBlocked", this.googlePlayStoreBlocked);
        writer.writeCollectionOfObjectValues<AppListItem>("kioskModeApps", this.kioskModeApps);
        writer.writeBooleanValue("kioskModeBlockSleepButton", this.kioskModeBlockSleepButton);
        writer.writeBooleanValue("kioskModeBlockVolumeButtons", this.kioskModeBlockVolumeButtons);
        writer.writeBooleanValue("locationServicesBlocked", this.locationServicesBlocked);
        writer.writeBooleanValue("nfcBlocked", this.nfcBlocked);
        writer.writeBooleanValue("passwordBlockFingerprintUnlock", this.passwordBlockFingerprintUnlock);
        writer.writeBooleanValue("passwordBlockTrustAgents", this.passwordBlockTrustAgents);
        writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        writer.writeEnumValue<AndroidRequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", this.passwordSignInFailureCountBeforeFactoryReset);
        writer.writeBooleanValue("powerOffBlocked", this.powerOffBlocked);
        writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        writer.writeBooleanValue("securityRequireVerifyApps", this.securityRequireVerifyApps);
        writer.writeBooleanValue("storageBlockGoogleBackup", this.storageBlockGoogleBackup);
        writer.writeBooleanValue("storageBlockRemovableStorage", this.storageBlockRemovableStorage);
        writer.writeBooleanValue("storageRequireDeviceEncryption", this.storageRequireDeviceEncryption);
        writer.writeBooleanValue("storageRequireRemovableStorageEncryption", this.storageRequireRemovableStorageEncryption);
        writer.writeBooleanValue("voiceAssistantBlocked", this.voiceAssistantBlocked);
        writer.writeBooleanValue("voiceDialingBlocked", this.voiceDialingBlocked);
        writer.writeBooleanValue("webBrowserBlockAutofill", this.webBrowserBlockAutofill);
        writer.writeBooleanValue("webBrowserBlocked", this.webBrowserBlocked);
        writer.writeBooleanValue("webBrowserBlockJavaScript", this.webBrowserBlockJavaScript);
        writer.writeBooleanValue("webBrowserBlockPopups", this.webBrowserBlockPopups);
        writer.writeEnumValue<WebBrowserCookieSettings>("webBrowserCookieSettings", this.webBrowserCookieSettings);
        writer.writeBooleanValue("wiFiBlocked", this.wiFiBlocked);
    };
    /**
     * Gets the storageBlockGoogleBackup property value. Indicates whether or not to block Google Backup.
     * @returns a boolean
     */
    public get storageBlockGoogleBackup() {
        return this._storageBlockGoogleBackup;
    };
    /**
     * Sets the storageBlockGoogleBackup property value. Indicates whether or not to block Google Backup.
     * @param value Value to set for the storageBlockGoogleBackup property.
     */
    public set storageBlockGoogleBackup(value: boolean | undefined) {
        this._storageBlockGoogleBackup = value;
    };
    /**
     * Gets the storageBlockRemovableStorage property value. Indicates whether or not to block removable storage usage.
     * @returns a boolean
     */
    public get storageBlockRemovableStorage() {
        return this._storageBlockRemovableStorage;
    };
    /**
     * Sets the storageBlockRemovableStorage property value. Indicates whether or not to block removable storage usage.
     * @param value Value to set for the storageBlockRemovableStorage property.
     */
    public set storageBlockRemovableStorage(value: boolean | undefined) {
        this._storageBlockRemovableStorage = value;
    };
    /**
     * Gets the storageRequireDeviceEncryption property value. Indicates whether or not to require device encryption.
     * @returns a boolean
     */
    public get storageRequireDeviceEncryption() {
        return this._storageRequireDeviceEncryption;
    };
    /**
     * Sets the storageRequireDeviceEncryption property value. Indicates whether or not to require device encryption.
     * @param value Value to set for the storageRequireDeviceEncryption property.
     */
    public set storageRequireDeviceEncryption(value: boolean | undefined) {
        this._storageRequireDeviceEncryption = value;
    };
    /**
     * Gets the storageRequireRemovableStorageEncryption property value. Indicates whether or not to require removable storage encryption.
     * @returns a boolean
     */
    public get storageRequireRemovableStorageEncryption() {
        return this._storageRequireRemovableStorageEncryption;
    };
    /**
     * Sets the storageRequireRemovableStorageEncryption property value. Indicates whether or not to require removable storage encryption.
     * @param value Value to set for the storageRequireRemovableStorageEncryption property.
     */
    public set storageRequireRemovableStorageEncryption(value: boolean | undefined) {
        this._storageRequireRemovableStorageEncryption = value;
    };
    /**
     * Gets the voiceAssistantBlocked property value. Indicates whether or not to block the use of the Voice Assistant.
     * @returns a boolean
     */
    public get voiceAssistantBlocked() {
        return this._voiceAssistantBlocked;
    };
    /**
     * Sets the voiceAssistantBlocked property value. Indicates whether or not to block the use of the Voice Assistant.
     * @param value Value to set for the voiceAssistantBlocked property.
     */
    public set voiceAssistantBlocked(value: boolean | undefined) {
        this._voiceAssistantBlocked = value;
    };
    /**
     * Gets the voiceDialingBlocked property value. Indicates whether or not to block voice dialing.
     * @returns a boolean
     */
    public get voiceDialingBlocked() {
        return this._voiceDialingBlocked;
    };
    /**
     * Sets the voiceDialingBlocked property value. Indicates whether or not to block voice dialing.
     * @param value Value to set for the voiceDialingBlocked property.
     */
    public set voiceDialingBlocked(value: boolean | undefined) {
        this._voiceDialingBlocked = value;
    };
    /**
     * Gets the webBrowserBlockAutofill property value. Indicates whether or not to block the web browser's auto fill feature.
     * @returns a boolean
     */
    public get webBrowserBlockAutofill() {
        return this._webBrowserBlockAutofill;
    };
    /**
     * Sets the webBrowserBlockAutofill property value. Indicates whether or not to block the web browser's auto fill feature.
     * @param value Value to set for the webBrowserBlockAutofill property.
     */
    public set webBrowserBlockAutofill(value: boolean | undefined) {
        this._webBrowserBlockAutofill = value;
    };
    /**
     * Gets the webBrowserBlocked property value. Indicates whether or not to block the web browser.
     * @returns a boolean
     */
    public get webBrowserBlocked() {
        return this._webBrowserBlocked;
    };
    /**
     * Sets the webBrowserBlocked property value. Indicates whether or not to block the web browser.
     * @param value Value to set for the webBrowserBlocked property.
     */
    public set webBrowserBlocked(value: boolean | undefined) {
        this._webBrowserBlocked = value;
    };
    /**
     * Gets the webBrowserBlockJavaScript property value. Indicates whether or not to block JavaScript within the web browser.
     * @returns a boolean
     */
    public get webBrowserBlockJavaScript() {
        return this._webBrowserBlockJavaScript;
    };
    /**
     * Sets the webBrowserBlockJavaScript property value. Indicates whether or not to block JavaScript within the web browser.
     * @param value Value to set for the webBrowserBlockJavaScript property.
     */
    public set webBrowserBlockJavaScript(value: boolean | undefined) {
        this._webBrowserBlockJavaScript = value;
    };
    /**
     * Gets the webBrowserBlockPopups property value. Indicates whether or not to block popups within the web browser.
     * @returns a boolean
     */
    public get webBrowserBlockPopups() {
        return this._webBrowserBlockPopups;
    };
    /**
     * Sets the webBrowserBlockPopups property value. Indicates whether or not to block popups within the web browser.
     * @param value Value to set for the webBrowserBlockPopups property.
     */
    public set webBrowserBlockPopups(value: boolean | undefined) {
        this._webBrowserBlockPopups = value;
    };
    /**
     * Gets the webBrowserCookieSettings property value. Cookie settings within the web browser. Possible values are: browserDefault, blockAlways, allowCurrentWebSite, allowFromWebsitesVisited, allowAlways.
     * @returns a webBrowserCookieSettings
     */
    public get webBrowserCookieSettings() {
        return this._webBrowserCookieSettings;
    };
    /**
     * Sets the webBrowserCookieSettings property value. Cookie settings within the web browser. Possible values are: browserDefault, blockAlways, allowCurrentWebSite, allowFromWebsitesVisited, allowAlways.
     * @param value Value to set for the webBrowserCookieSettings property.
     */
    public set webBrowserCookieSettings(value: WebBrowserCookieSettings | undefined) {
        this._webBrowserCookieSettings = value;
    };
    /**
     * Gets the wiFiBlocked property value. Indicates whether or not to block syncing Wi-Fi.
     * @returns a boolean
     */
    public get wiFiBlocked() {
        return this._wiFiBlocked;
    };
    /**
     * Sets the wiFiBlocked property value. Indicates whether or not to block syncing Wi-Fi.
     * @param value Value to set for the wiFiBlocked property.
     */
    public set wiFiBlocked(value: boolean | undefined) {
        this._wiFiBlocked = value;
    };
}

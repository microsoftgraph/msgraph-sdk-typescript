import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {AppListItem, DeviceConfiguration} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsPhone81GeneralConfiguration extends DeviceConfiguration implements Parsable {
    /** Value indicating whether this policy only applies to Windows Phone 8.1. This property is read-only. */
    private _applyOnlyToWindowsPhone81?: boolean | undefined;
    /** Indicates whether or not to block copy paste. */
    private _appsBlockCopyPaste?: boolean | undefined;
    /** Indicates whether or not to block bluetooth. */
    private _bluetoothBlocked?: boolean | undefined;
    /** Indicates whether or not to block camera. */
    private _cameraBlocked?: boolean | undefined;
    /** Indicates whether or not to block Wi-Fi tethering. Has no impact if Wi-Fi is blocked. */
    private _cellularBlockWifiTethering?: boolean | undefined;
    /** Possible values of the compliance app list. */
    private _compliantAppListType?: AppListType | undefined;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    private _compliantAppsList?: AppListItem[] | undefined;
    /** Indicates whether or not to block diagnostic data submission. */
    private _diagnosticDataBlockSubmission?: boolean | undefined;
    /** Indicates whether or not to block custom email accounts. */
    private _emailBlockAddingAccounts?: boolean | undefined;
    /** Indicates whether or not to block location services. */
    private _locationServicesBlocked?: boolean | undefined;
    /** Indicates whether or not to block using a Microsoft Account. */
    private _microsoftAccountBlocked?: boolean | undefined;
    /** Indicates whether or not to block Near-Field Communication. */
    private _nfcBlocked?: boolean | undefined;
    /** Indicates whether or not to block syncing the calendar. */
    private _passwordBlockSimple?: boolean | undefined;
    /** Number of days before the password expires. */
    private _passwordExpirationDays?: number | undefined;
    /** Number of character sets a password must contain. */
    private _passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passwords. */
    private _passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before screen timeout. */
    private _passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Indicates whether or not to require a password. */
    private _passwordRequired?: boolean | undefined;
    /** Possible values of required passwords. */
    private _passwordRequiredType?: RequiredPasswordType | undefined;
    /** Number of sign in failures allowed before factory reset. */
    private _passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Indicates whether or not to block screenshots. */
    private _screenCaptureBlocked?: boolean | undefined;
    /** Indicates whether or not to block removable storage. */
    private _storageBlockRemovableStorage?: boolean | undefined;
    /** Indicates whether or not to require encryption. */
    private _storageRequireEncryption?: boolean | undefined;
    /** Indicates whether or not to block the web browser. */
    private _webBrowserBlocked?: boolean | undefined;
    /** Indicates whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked. */
    private _wifiBlockAutomaticConnectHotspots?: boolean | undefined;
    /** Indicates whether or not to block Wi-Fi. */
    private _wifiBlocked?: boolean | undefined;
    /** Indicates whether or not to block Wi-Fi hotspot reporting. Has no impact if Wi-Fi is blocked. */
    private _wifiBlockHotspotReporting?: boolean | undefined;
    /** Indicates whether or not to block the Windows Store. */
    private _windowsStoreBlocked?: boolean | undefined;
    /**
     * Gets the applyOnlyToWindowsPhone81 property value. Value indicating whether this policy only applies to Windows Phone 8.1. This property is read-only.
     * @returns a boolean
     */
    public get applyOnlyToWindowsPhone81() {
        return this._applyOnlyToWindowsPhone81;
    };
    /**
     * Sets the applyOnlyToWindowsPhone81 property value. Value indicating whether this policy only applies to Windows Phone 8.1. This property is read-only.
     * @param value Value to set for the applyOnlyToWindowsPhone81 property.
     */
    public set applyOnlyToWindowsPhone81(value: boolean | undefined) {
        this._applyOnlyToWindowsPhone81 = value;
    };
    /**
     * Gets the appsBlockCopyPaste property value. Indicates whether or not to block copy paste.
     * @returns a boolean
     */
    public get appsBlockCopyPaste() {
        return this._appsBlockCopyPaste;
    };
    /**
     * Sets the appsBlockCopyPaste property value. Indicates whether or not to block copy paste.
     * @param value Value to set for the appsBlockCopyPaste property.
     */
    public set appsBlockCopyPaste(value: boolean | undefined) {
        this._appsBlockCopyPaste = value;
    };
    /**
     * Gets the bluetoothBlocked property value. Indicates whether or not to block bluetooth.
     * @returns a boolean
     */
    public get bluetoothBlocked() {
        return this._bluetoothBlocked;
    };
    /**
     * Sets the bluetoothBlocked property value. Indicates whether or not to block bluetooth.
     * @param value Value to set for the bluetoothBlocked property.
     */
    public set bluetoothBlocked(value: boolean | undefined) {
        this._bluetoothBlocked = value;
    };
    /**
     * Gets the cameraBlocked property value. Indicates whether or not to block camera.
     * @returns a boolean
     */
    public get cameraBlocked() {
        return this._cameraBlocked;
    };
    /**
     * Sets the cameraBlocked property value. Indicates whether or not to block camera.
     * @param value Value to set for the cameraBlocked property.
     */
    public set cameraBlocked(value: boolean | undefined) {
        this._cameraBlocked = value;
    };
    /**
     * Gets the cellularBlockWifiTethering property value. Indicates whether or not to block Wi-Fi tethering. Has no impact if Wi-Fi is blocked.
     * @returns a boolean
     */
    public get cellularBlockWifiTethering() {
        return this._cellularBlockWifiTethering;
    };
    /**
     * Sets the cellularBlockWifiTethering property value. Indicates whether or not to block Wi-Fi tethering. Has no impact if Wi-Fi is blocked.
     * @param value Value to set for the cellularBlockWifiTethering property.
     */
    public set cellularBlockWifiTethering(value: boolean | undefined) {
        this._cellularBlockWifiTethering = value;
    };
    /**
     * Gets the compliantAppListType property value. Possible values of the compliance app list.
     * @returns a appListType
     */
    public get compliantAppListType() {
        return this._compliantAppListType;
    };
    /**
     * Sets the compliantAppListType property value. Possible values of the compliance app list.
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
     * Instantiates a new WindowsPhone81GeneralConfiguration and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the emailBlockAddingAccounts property value. Indicates whether or not to block custom email accounts.
     * @returns a boolean
     */
    public get emailBlockAddingAccounts() {
        return this._emailBlockAddingAccounts;
    };
    /**
     * Sets the emailBlockAddingAccounts property value. Indicates whether or not to block custom email accounts.
     * @param value Value to set for the emailBlockAddingAccounts property.
     */
    public set emailBlockAddingAccounts(value: boolean | undefined) {
        this._emailBlockAddingAccounts = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applyOnlyToWindowsPhone81": n => { this.applyOnlyToWindowsPhone81 = n.getBooleanValue(); },
            "appsBlockCopyPaste": n => { this.appsBlockCopyPaste = n.getBooleanValue(); },
            "bluetoothBlocked": n => { this.bluetoothBlocked = n.getBooleanValue(); },
            "cameraBlocked": n => { this.cameraBlocked = n.getBooleanValue(); },
            "cellularBlockWifiTethering": n => { this.cellularBlockWifiTethering = n.getBooleanValue(); },
            "compliantAppListType": n => { this.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
            "compliantAppsList": n => { this.compliantAppsList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
            "diagnosticDataBlockSubmission": n => { this.diagnosticDataBlockSubmission = n.getBooleanValue(); },
            "emailBlockAddingAccounts": n => { this.emailBlockAddingAccounts = n.getBooleanValue(); },
            "locationServicesBlocked": n => { this.locationServicesBlocked = n.getBooleanValue(); },
            "microsoftAccountBlocked": n => { this.microsoftAccountBlocked = n.getBooleanValue(); },
            "nfcBlocked": n => { this.nfcBlocked = n.getBooleanValue(); },
            "passwordBlockSimple": n => { this.passwordBlockSimple = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumCharacterSetCount": n => { this.passwordMinimumCharacterSetCount = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeScreenTimeout": n => { this.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "passwordSignInFailureCountBeforeFactoryReset": n => { this.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
            "screenCaptureBlocked": n => { this.screenCaptureBlocked = n.getBooleanValue(); },
            "storageBlockRemovableStorage": n => { this.storageBlockRemovableStorage = n.getBooleanValue(); },
            "storageRequireEncryption": n => { this.storageRequireEncryption = n.getBooleanValue(); },
            "webBrowserBlocked": n => { this.webBrowserBlocked = n.getBooleanValue(); },
            "wifiBlockAutomaticConnectHotspots": n => { this.wifiBlockAutomaticConnectHotspots = n.getBooleanValue(); },
            "wifiBlocked": n => { this.wifiBlocked = n.getBooleanValue(); },
            "wifiBlockHotspotReporting": n => { this.wifiBlockHotspotReporting = n.getBooleanValue(); },
            "windowsStoreBlocked": n => { this.windowsStoreBlocked = n.getBooleanValue(); },
        };
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
     * Gets the microsoftAccountBlocked property value. Indicates whether or not to block using a Microsoft Account.
     * @returns a boolean
     */
    public get microsoftAccountBlocked() {
        return this._microsoftAccountBlocked;
    };
    /**
     * Sets the microsoftAccountBlocked property value. Indicates whether or not to block using a Microsoft Account.
     * @param value Value to set for the microsoftAccountBlocked property.
     */
    public set microsoftAccountBlocked(value: boolean | undefined) {
        this._microsoftAccountBlocked = value;
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
     * Gets the passwordBlockSimple property value. Indicates whether or not to block syncing the calendar.
     * @returns a boolean
     */
    public get passwordBlockSimple() {
        return this._passwordBlockSimple;
    };
    /**
     * Sets the passwordBlockSimple property value. Indicates whether or not to block syncing the calendar.
     * @param value Value to set for the passwordBlockSimple property.
     */
    public set passwordBlockSimple(value: boolean | undefined) {
        this._passwordBlockSimple = value;
    };
    /**
     * Gets the passwordExpirationDays property value. Number of days before the password expires.
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. Number of days before the password expires.
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        this._passwordExpirationDays = value;
    };
    /**
     * Gets the passwordMinimumCharacterSetCount property value. Number of character sets a password must contain.
     * @returns a integer
     */
    public get passwordMinimumCharacterSetCount() {
        return this._passwordMinimumCharacterSetCount;
    };
    /**
     * Sets the passwordMinimumCharacterSetCount property value. Number of character sets a password must contain.
     * @param value Value to set for the passwordMinimumCharacterSetCount property.
     */
    public set passwordMinimumCharacterSetCount(value: number | undefined) {
        this._passwordMinimumCharacterSetCount = value;
    };
    /**
     * Gets the passwordMinimumLength property value. Minimum length of passwords.
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. Minimum length of passwords.
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        this._passwordMinimumLength = value;
    };
    /**
     * Gets the passwordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before screen timeout.
     * @returns a integer
     */
    public get passwordMinutesOfInactivityBeforeScreenTimeout() {
        return this._passwordMinutesOfInactivityBeforeScreenTimeout;
    };
    /**
     * Sets the passwordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before screen timeout.
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
     * Gets the passwordRequiredType property value. Possible values of required passwords.
     * @returns a requiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. Possible values of required passwords.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: RequiredPasswordType | undefined) {
        this._passwordRequiredType = value;
    };
    /**
     * Gets the passwordSignInFailureCountBeforeFactoryReset property value. Number of sign in failures allowed before factory reset.
     * @returns a integer
     */
    public get passwordSignInFailureCountBeforeFactoryReset() {
        return this._passwordSignInFailureCountBeforeFactoryReset;
    };
    /**
     * Sets the passwordSignInFailureCountBeforeFactoryReset property value. Number of sign in failures allowed before factory reset.
     * @param value Value to set for the passwordSignInFailureCountBeforeFactoryReset property.
     */
    public set passwordSignInFailureCountBeforeFactoryReset(value: number | undefined) {
        this._passwordSignInFailureCountBeforeFactoryReset = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("applyOnlyToWindowsPhone81", this.applyOnlyToWindowsPhone81);
        writer.writeBooleanValue("appsBlockCopyPaste", this.appsBlockCopyPaste);
        writer.writeBooleanValue("bluetoothBlocked", this.bluetoothBlocked);
        writer.writeBooleanValue("cameraBlocked", this.cameraBlocked);
        writer.writeBooleanValue("cellularBlockWifiTethering", this.cellularBlockWifiTethering);
        writer.writeEnumValue<AppListType>("compliantAppListType", this.compliantAppListType);
        writer.writeCollectionOfObjectValues<AppListItem>("compliantAppsList", this.compliantAppsList);
        writer.writeBooleanValue("diagnosticDataBlockSubmission", this.diagnosticDataBlockSubmission);
        writer.writeBooleanValue("emailBlockAddingAccounts", this.emailBlockAddingAccounts);
        writer.writeBooleanValue("locationServicesBlocked", this.locationServicesBlocked);
        writer.writeBooleanValue("microsoftAccountBlocked", this.microsoftAccountBlocked);
        writer.writeBooleanValue("nfcBlocked", this.nfcBlocked);
        writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", this.passwordSignInFailureCountBeforeFactoryReset);
        writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        writer.writeBooleanValue("storageBlockRemovableStorage", this.storageBlockRemovableStorage);
        writer.writeBooleanValue("storageRequireEncryption", this.storageRequireEncryption);
        writer.writeBooleanValue("webBrowserBlocked", this.webBrowserBlocked);
        writer.writeBooleanValue("wifiBlockAutomaticConnectHotspots", this.wifiBlockAutomaticConnectHotspots);
        writer.writeBooleanValue("wifiBlocked", this.wifiBlocked);
        writer.writeBooleanValue("wifiBlockHotspotReporting", this.wifiBlockHotspotReporting);
        writer.writeBooleanValue("windowsStoreBlocked", this.windowsStoreBlocked);
    };
    /**
     * Gets the storageBlockRemovableStorage property value. Indicates whether or not to block removable storage.
     * @returns a boolean
     */
    public get storageBlockRemovableStorage() {
        return this._storageBlockRemovableStorage;
    };
    /**
     * Sets the storageBlockRemovableStorage property value. Indicates whether or not to block removable storage.
     * @param value Value to set for the storageBlockRemovableStorage property.
     */
    public set storageBlockRemovableStorage(value: boolean | undefined) {
        this._storageBlockRemovableStorage = value;
    };
    /**
     * Gets the storageRequireEncryption property value. Indicates whether or not to require encryption.
     * @returns a boolean
     */
    public get storageRequireEncryption() {
        return this._storageRequireEncryption;
    };
    /**
     * Sets the storageRequireEncryption property value. Indicates whether or not to require encryption.
     * @param value Value to set for the storageRequireEncryption property.
     */
    public set storageRequireEncryption(value: boolean | undefined) {
        this._storageRequireEncryption = value;
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
     * Gets the wifiBlockAutomaticConnectHotspots property value. Indicates whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
     * @returns a boolean
     */
    public get wifiBlockAutomaticConnectHotspots() {
        return this._wifiBlockAutomaticConnectHotspots;
    };
    /**
     * Sets the wifiBlockAutomaticConnectHotspots property value. Indicates whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
     * @param value Value to set for the wifiBlockAutomaticConnectHotspots property.
     */
    public set wifiBlockAutomaticConnectHotspots(value: boolean | undefined) {
        this._wifiBlockAutomaticConnectHotspots = value;
    };
    /**
     * Gets the wifiBlocked property value. Indicates whether or not to block Wi-Fi.
     * @returns a boolean
     */
    public get wifiBlocked() {
        return this._wifiBlocked;
    };
    /**
     * Sets the wifiBlocked property value. Indicates whether or not to block Wi-Fi.
     * @param value Value to set for the wifiBlocked property.
     */
    public set wifiBlocked(value: boolean | undefined) {
        this._wifiBlocked = value;
    };
    /**
     * Gets the wifiBlockHotspotReporting property value. Indicates whether or not to block Wi-Fi hotspot reporting. Has no impact if Wi-Fi is blocked.
     * @returns a boolean
     */
    public get wifiBlockHotspotReporting() {
        return this._wifiBlockHotspotReporting;
    };
    /**
     * Sets the wifiBlockHotspotReporting property value. Indicates whether or not to block Wi-Fi hotspot reporting. Has no impact if Wi-Fi is blocked.
     * @param value Value to set for the wifiBlockHotspotReporting property.
     */
    public set wifiBlockHotspotReporting(value: boolean | undefined) {
        this._wifiBlockHotspotReporting = value;
    };
    /**
     * Gets the windowsStoreBlocked property value. Indicates whether or not to block the Windows Store.
     * @returns a boolean
     */
    public get windowsStoreBlocked() {
        return this._windowsStoreBlocked;
    };
    /**
     * Sets the windowsStoreBlocked property value. Indicates whether or not to block the Windows Store.
     * @param value Value to set for the windowsStoreBlocked property.
     */
    public set windowsStoreBlocked(value: boolean | undefined) {
        this._windowsStoreBlocked = value;
    };
}

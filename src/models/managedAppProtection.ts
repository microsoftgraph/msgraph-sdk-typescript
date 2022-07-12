import {ManagedAppPolicy} from './index';
import {ManagedAppClipboardSharingLevel} from './managedAppClipboardSharingLevel';
import {ManagedAppDataTransferLevel} from './managedAppDataTransferLevel';
import {ManagedAppPinCharacterSet} from './managedAppPinCharacterSet';
import {ManagedBrowserType} from './managedBrowserType';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppProtection extends ManagedAppPolicy implements Parsable {
    /** Data storage locations where a user may store managed data. */
    private _allowedDataStorageLocations?: string[] | undefined;
    /** Data can be transferred from/to these classes of apps */
    private _allowedInboundDataTransferSources?: ManagedAppDataTransferLevel | undefined;
    /** Represents the level to which the device's clipboard may be shared between apps */
    private _allowedOutboundClipboardSharingLevel?: ManagedAppClipboardSharingLevel | undefined;
    /** Data can be transferred from/to these classes of apps */
    private _allowedOutboundDataTransferDestinations?: ManagedAppDataTransferLevel | undefined;
    /** Indicates whether contacts can be synced to the user's device. */
    private _contactSyncBlocked?: boolean | undefined;
    /** Indicates whether the backup of a managed app's data is blocked. */
    private _dataBackupBlocked?: boolean | undefined;
    /** Indicates whether device compliance is required. */
    private _deviceComplianceRequired?: boolean | undefined;
    /** Indicates whether use of the app pin is required if the device pin is set. */
    private _disableAppPinIfDevicePinIsSet?: boolean | undefined;
    /** Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True. */
    private _fingerprintBlocked?: boolean | undefined;
    /** Type of managed browser */
    private _managedBrowser?: ManagedBrowserType | undefined;
    /** Indicates whether internet links should be opened in the managed browser app, or any custom browser specified by CustomBrowserProtocol (for iOS) or CustomBrowserPackageId/CustomBrowserDisplayName (for Android) */
    private _managedBrowserToOpenLinksRequired?: boolean | undefined;
    /** Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped. */
    private _maximumPinRetries?: number | undefined;
    /** Minimum pin length required for an app-level pin if PinRequired is set to True */
    private _minimumPinLength?: number | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data. */
    private _minimumRequiredAppVersion?: string | undefined;
    /** Versions less than the specified version will block the managed app from accessing company data. */
    private _minimumRequiredOsVersion?: string | undefined;
    /** Versions less than the specified version will result in warning message on the managed app. */
    private _minimumWarningAppVersion?: string | undefined;
    /** Versions less than the specified version will result in warning message on the managed app from accessing company data. */
    private _minimumWarningOsVersion?: string | undefined;
    /** Indicates whether organizational credentials are required for app use. */
    private _organizationalCredentialsRequired?: boolean | undefined;
    /** TimePeriod before the all-level pin must be reset if PinRequired is set to True. */
    private _periodBeforePinReset?: Duration | undefined;
    /** The period after which access is checked when the device is not connected to the internet. */
    private _periodOfflineBeforeAccessCheck?: Duration | undefined;
    /** The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped. */
    private _periodOfflineBeforeWipeIsEnforced?: Duration | undefined;
    /** The period after which access is checked when the device is connected to the internet. */
    private _periodOnlineBeforeAccessCheck?: Duration | undefined;
    /** Character set which is to be used for a user's app PIN */
    private _pinCharacterSet?: ManagedAppPinCharacterSet | undefined;
    /** Indicates whether an app-level pin is required. */
    private _pinRequired?: boolean | undefined;
    /** Indicates whether printing is allowed from managed apps. */
    private _printBlocked?: boolean | undefined;
    /** Indicates whether users may use the 'Save As' menu item to save a copy of protected files. */
    private _saveAsBlocked?: boolean | undefined;
    /** Indicates whether simplePin is blocked. */
    private _simplePinBlocked?: boolean | undefined;
    /**
     * Gets the allowedDataStorageLocations property value. Data storage locations where a user may store managed data.
     * @returns a string
     */
    public get allowedDataStorageLocations() {
        return this._allowedDataStorageLocations;
    };
    /**
     * Sets the allowedDataStorageLocations property value. Data storage locations where a user may store managed data.
     * @param value Value to set for the allowedDataStorageLocations property.
     */
    public set allowedDataStorageLocations(value: string[] | undefined) {
        this._allowedDataStorageLocations = value;
    };
    /**
     * Gets the allowedInboundDataTransferSources property value. Data can be transferred from/to these classes of apps
     * @returns a managedAppDataTransferLevel
     */
    public get allowedInboundDataTransferSources() {
        return this._allowedInboundDataTransferSources;
    };
    /**
     * Sets the allowedInboundDataTransferSources property value. Data can be transferred from/to these classes of apps
     * @param value Value to set for the allowedInboundDataTransferSources property.
     */
    public set allowedInboundDataTransferSources(value: ManagedAppDataTransferLevel | undefined) {
        this._allowedInboundDataTransferSources = value;
    };
    /**
     * Gets the allowedOutboundClipboardSharingLevel property value. Represents the level to which the device's clipboard may be shared between apps
     * @returns a managedAppClipboardSharingLevel
     */
    public get allowedOutboundClipboardSharingLevel() {
        return this._allowedOutboundClipboardSharingLevel;
    };
    /**
     * Sets the allowedOutboundClipboardSharingLevel property value. Represents the level to which the device's clipboard may be shared between apps
     * @param value Value to set for the allowedOutboundClipboardSharingLevel property.
     */
    public set allowedOutboundClipboardSharingLevel(value: ManagedAppClipboardSharingLevel | undefined) {
        this._allowedOutboundClipboardSharingLevel = value;
    };
    /**
     * Gets the allowedOutboundDataTransferDestinations property value. Data can be transferred from/to these classes of apps
     * @returns a managedAppDataTransferLevel
     */
    public get allowedOutboundDataTransferDestinations() {
        return this._allowedOutboundDataTransferDestinations;
    };
    /**
     * Sets the allowedOutboundDataTransferDestinations property value. Data can be transferred from/to these classes of apps
     * @param value Value to set for the allowedOutboundDataTransferDestinations property.
     */
    public set allowedOutboundDataTransferDestinations(value: ManagedAppDataTransferLevel | undefined) {
        this._allowedOutboundDataTransferDestinations = value;
    };
    /**
     * Instantiates a new ManagedAppProtection and sets the default values.
     */
    public constructor() {
        super();
        this.type = "#microsoft.graph.managedAppProtection";
    };
    /**
     * Gets the contactSyncBlocked property value. Indicates whether contacts can be synced to the user's device.
     * @returns a boolean
     */
    public get contactSyncBlocked() {
        return this._contactSyncBlocked;
    };
    /**
     * Sets the contactSyncBlocked property value. Indicates whether contacts can be synced to the user's device.
     * @param value Value to set for the contactSyncBlocked property.
     */
    public set contactSyncBlocked(value: boolean | undefined) {
        this._contactSyncBlocked = value;
    };
    /**
     * Gets the dataBackupBlocked property value. Indicates whether the backup of a managed app's data is blocked.
     * @returns a boolean
     */
    public get dataBackupBlocked() {
        return this._dataBackupBlocked;
    };
    /**
     * Sets the dataBackupBlocked property value. Indicates whether the backup of a managed app's data is blocked.
     * @param value Value to set for the dataBackupBlocked property.
     */
    public set dataBackupBlocked(value: boolean | undefined) {
        this._dataBackupBlocked = value;
    };
    /**
     * Gets the deviceComplianceRequired property value. Indicates whether device compliance is required.
     * @returns a boolean
     */
    public get deviceComplianceRequired() {
        return this._deviceComplianceRequired;
    };
    /**
     * Sets the deviceComplianceRequired property value. Indicates whether device compliance is required.
     * @param value Value to set for the deviceComplianceRequired property.
     */
    public set deviceComplianceRequired(value: boolean | undefined) {
        this._deviceComplianceRequired = value;
    };
    /**
     * Gets the disableAppPinIfDevicePinIsSet property value. Indicates whether use of the app pin is required if the device pin is set.
     * @returns a boolean
     */
    public get disableAppPinIfDevicePinIsSet() {
        return this._disableAppPinIfDevicePinIsSet;
    };
    /**
     * Sets the disableAppPinIfDevicePinIsSet property value. Indicates whether use of the app pin is required if the device pin is set.
     * @param value Value to set for the disableAppPinIfDevicePinIsSet property.
     */
    public set disableAppPinIfDevicePinIsSet(value: boolean | undefined) {
        this._disableAppPinIfDevicePinIsSet = value;
    };
    /**
     * Gets the fingerprintBlocked property value. Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True.
     * @returns a boolean
     */
    public get fingerprintBlocked() {
        return this._fingerprintBlocked;
    };
    /**
     * Sets the fingerprintBlocked property value. Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True.
     * @param value Value to set for the fingerprintBlocked property.
     */
    public set fingerprintBlocked(value: boolean | undefined) {
        this._fingerprintBlocked = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedDataStorageLocations": n => { this.allowedDataStorageLocations = n.getCollectionOfPrimitiveValues<string>(); },
            "allowedInboundDataTransferSources": n => { this.allowedInboundDataTransferSources = n.getEnumValue<ManagedAppDataTransferLevel>(ManagedAppDataTransferLevel); },
            "allowedOutboundClipboardSharingLevel": n => { this.allowedOutboundClipboardSharingLevel = n.getEnumValue<ManagedAppClipboardSharingLevel>(ManagedAppClipboardSharingLevel); },
            "allowedOutboundDataTransferDestinations": n => { this.allowedOutboundDataTransferDestinations = n.getEnumValue<ManagedAppDataTransferLevel>(ManagedAppDataTransferLevel); },
            "contactSyncBlocked": n => { this.contactSyncBlocked = n.getBooleanValue(); },
            "dataBackupBlocked": n => { this.dataBackupBlocked = n.getBooleanValue(); },
            "deviceComplianceRequired": n => { this.deviceComplianceRequired = n.getBooleanValue(); },
            "disableAppPinIfDevicePinIsSet": n => { this.disableAppPinIfDevicePinIsSet = n.getBooleanValue(); },
            "fingerprintBlocked": n => { this.fingerprintBlocked = n.getBooleanValue(); },
            "managedBrowser": n => { this.managedBrowser = n.getEnumValue<ManagedBrowserType>(ManagedBrowserType); },
            "managedBrowserToOpenLinksRequired": n => { this.managedBrowserToOpenLinksRequired = n.getBooleanValue(); },
            "maximumPinRetries": n => { this.maximumPinRetries = n.getNumberValue(); },
            "minimumPinLength": n => { this.minimumPinLength = n.getNumberValue(); },
            "minimumRequiredAppVersion": n => { this.minimumRequiredAppVersion = n.getStringValue(); },
            "minimumRequiredOsVersion": n => { this.minimumRequiredOsVersion = n.getStringValue(); },
            "minimumWarningAppVersion": n => { this.minimumWarningAppVersion = n.getStringValue(); },
            "minimumWarningOsVersion": n => { this.minimumWarningOsVersion = n.getStringValue(); },
            "organizationalCredentialsRequired": n => { this.organizationalCredentialsRequired = n.getBooleanValue(); },
            "periodBeforePinReset": n => { this.periodBeforePinReset = n.getDurationValue(); },
            "periodOfflineBeforeAccessCheck": n => { this.periodOfflineBeforeAccessCheck = n.getDurationValue(); },
            "periodOfflineBeforeWipeIsEnforced": n => { this.periodOfflineBeforeWipeIsEnforced = n.getDurationValue(); },
            "periodOnlineBeforeAccessCheck": n => { this.periodOnlineBeforeAccessCheck = n.getDurationValue(); },
            "pinCharacterSet": n => { this.pinCharacterSet = n.getEnumValue<ManagedAppPinCharacterSet>(ManagedAppPinCharacterSet); },
            "pinRequired": n => { this.pinRequired = n.getBooleanValue(); },
            "printBlocked": n => { this.printBlocked = n.getBooleanValue(); },
            "saveAsBlocked": n => { this.saveAsBlocked = n.getBooleanValue(); },
            "simplePinBlocked": n => { this.simplePinBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the managedBrowser property value. Type of managed browser
     * @returns a managedBrowserType
     */
    public get managedBrowser() {
        return this._managedBrowser;
    };
    /**
     * Sets the managedBrowser property value. Type of managed browser
     * @param value Value to set for the managedBrowser property.
     */
    public set managedBrowser(value: ManagedBrowserType | undefined) {
        this._managedBrowser = value;
    };
    /**
     * Gets the managedBrowserToOpenLinksRequired property value. Indicates whether internet links should be opened in the managed browser app, or any custom browser specified by CustomBrowserProtocol (for iOS) or CustomBrowserPackageId/CustomBrowserDisplayName (for Android)
     * @returns a boolean
     */
    public get managedBrowserToOpenLinksRequired() {
        return this._managedBrowserToOpenLinksRequired;
    };
    /**
     * Sets the managedBrowserToOpenLinksRequired property value. Indicates whether internet links should be opened in the managed browser app, or any custom browser specified by CustomBrowserProtocol (for iOS) or CustomBrowserPackageId/CustomBrowserDisplayName (for Android)
     * @param value Value to set for the managedBrowserToOpenLinksRequired property.
     */
    public set managedBrowserToOpenLinksRequired(value: boolean | undefined) {
        this._managedBrowserToOpenLinksRequired = value;
    };
    /**
     * Gets the maximumPinRetries property value. Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped.
     * @returns a integer
     */
    public get maximumPinRetries() {
        return this._maximumPinRetries;
    };
    /**
     * Sets the maximumPinRetries property value. Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped.
     * @param value Value to set for the maximumPinRetries property.
     */
    public set maximumPinRetries(value: number | undefined) {
        this._maximumPinRetries = value;
    };
    /**
     * Gets the minimumPinLength property value. Minimum pin length required for an app-level pin if PinRequired is set to True
     * @returns a integer
     */
    public get minimumPinLength() {
        return this._minimumPinLength;
    };
    /**
     * Sets the minimumPinLength property value. Minimum pin length required for an app-level pin if PinRequired is set to True
     * @param value Value to set for the minimumPinLength property.
     */
    public set minimumPinLength(value: number | undefined) {
        this._minimumPinLength = value;
    };
    /**
     * Gets the minimumRequiredAppVersion property value. Versions less than the specified version will block the managed app from accessing company data.
     * @returns a string
     */
    public get minimumRequiredAppVersion() {
        return this._minimumRequiredAppVersion;
    };
    /**
     * Sets the minimumRequiredAppVersion property value. Versions less than the specified version will block the managed app from accessing company data.
     * @param value Value to set for the minimumRequiredAppVersion property.
     */
    public set minimumRequiredAppVersion(value: string | undefined) {
        this._minimumRequiredAppVersion = value;
    };
    /**
     * Gets the minimumRequiredOsVersion property value. Versions less than the specified version will block the managed app from accessing company data.
     * @returns a string
     */
    public get minimumRequiredOsVersion() {
        return this._minimumRequiredOsVersion;
    };
    /**
     * Sets the minimumRequiredOsVersion property value. Versions less than the specified version will block the managed app from accessing company data.
     * @param value Value to set for the minimumRequiredOsVersion property.
     */
    public set minimumRequiredOsVersion(value: string | undefined) {
        this._minimumRequiredOsVersion = value;
    };
    /**
     * Gets the minimumWarningAppVersion property value. Versions less than the specified version will result in warning message on the managed app.
     * @returns a string
     */
    public get minimumWarningAppVersion() {
        return this._minimumWarningAppVersion;
    };
    /**
     * Sets the minimumWarningAppVersion property value. Versions less than the specified version will result in warning message on the managed app.
     * @param value Value to set for the minimumWarningAppVersion property.
     */
    public set minimumWarningAppVersion(value: string | undefined) {
        this._minimumWarningAppVersion = value;
    };
    /**
     * Gets the minimumWarningOsVersion property value. Versions less than the specified version will result in warning message on the managed app from accessing company data.
     * @returns a string
     */
    public get minimumWarningOsVersion() {
        return this._minimumWarningOsVersion;
    };
    /**
     * Sets the minimumWarningOsVersion property value. Versions less than the specified version will result in warning message on the managed app from accessing company data.
     * @param value Value to set for the minimumWarningOsVersion property.
     */
    public set minimumWarningOsVersion(value: string | undefined) {
        this._minimumWarningOsVersion = value;
    };
    /**
     * Gets the organizationalCredentialsRequired property value. Indicates whether organizational credentials are required for app use.
     * @returns a boolean
     */
    public get organizationalCredentialsRequired() {
        return this._organizationalCredentialsRequired;
    };
    /**
     * Sets the organizationalCredentialsRequired property value. Indicates whether organizational credentials are required for app use.
     * @param value Value to set for the organizationalCredentialsRequired property.
     */
    public set organizationalCredentialsRequired(value: boolean | undefined) {
        this._organizationalCredentialsRequired = value;
    };
    /**
     * Gets the periodBeforePinReset property value. TimePeriod before the all-level pin must be reset if PinRequired is set to True.
     * @returns a Duration
     */
    public get periodBeforePinReset() {
        return this._periodBeforePinReset;
    };
    /**
     * Sets the periodBeforePinReset property value. TimePeriod before the all-level pin must be reset if PinRequired is set to True.
     * @param value Value to set for the periodBeforePinReset property.
     */
    public set periodBeforePinReset(value: Duration | undefined) {
        this._periodBeforePinReset = value;
    };
    /**
     * Gets the periodOfflineBeforeAccessCheck property value. The period after which access is checked when the device is not connected to the internet.
     * @returns a Duration
     */
    public get periodOfflineBeforeAccessCheck() {
        return this._periodOfflineBeforeAccessCheck;
    };
    /**
     * Sets the periodOfflineBeforeAccessCheck property value. The period after which access is checked when the device is not connected to the internet.
     * @param value Value to set for the periodOfflineBeforeAccessCheck property.
     */
    public set periodOfflineBeforeAccessCheck(value: Duration | undefined) {
        this._periodOfflineBeforeAccessCheck = value;
    };
    /**
     * Gets the periodOfflineBeforeWipeIsEnforced property value. The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped.
     * @returns a Duration
     */
    public get periodOfflineBeforeWipeIsEnforced() {
        return this._periodOfflineBeforeWipeIsEnforced;
    };
    /**
     * Sets the periodOfflineBeforeWipeIsEnforced property value. The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped.
     * @param value Value to set for the periodOfflineBeforeWipeIsEnforced property.
     */
    public set periodOfflineBeforeWipeIsEnforced(value: Duration | undefined) {
        this._periodOfflineBeforeWipeIsEnforced = value;
    };
    /**
     * Gets the periodOnlineBeforeAccessCheck property value. The period after which access is checked when the device is connected to the internet.
     * @returns a Duration
     */
    public get periodOnlineBeforeAccessCheck() {
        return this._periodOnlineBeforeAccessCheck;
    };
    /**
     * Sets the periodOnlineBeforeAccessCheck property value. The period after which access is checked when the device is connected to the internet.
     * @param value Value to set for the periodOnlineBeforeAccessCheck property.
     */
    public set periodOnlineBeforeAccessCheck(value: Duration | undefined) {
        this._periodOnlineBeforeAccessCheck = value;
    };
    /**
     * Gets the pinCharacterSet property value. Character set which is to be used for a user's app PIN
     * @returns a managedAppPinCharacterSet
     */
    public get pinCharacterSet() {
        return this._pinCharacterSet;
    };
    /**
     * Sets the pinCharacterSet property value. Character set which is to be used for a user's app PIN
     * @param value Value to set for the pinCharacterSet property.
     */
    public set pinCharacterSet(value: ManagedAppPinCharacterSet | undefined) {
        this._pinCharacterSet = value;
    };
    /**
     * Gets the pinRequired property value. Indicates whether an app-level pin is required.
     * @returns a boolean
     */
    public get pinRequired() {
        return this._pinRequired;
    };
    /**
     * Sets the pinRequired property value. Indicates whether an app-level pin is required.
     * @param value Value to set for the pinRequired property.
     */
    public set pinRequired(value: boolean | undefined) {
        this._pinRequired = value;
    };
    /**
     * Gets the printBlocked property value. Indicates whether printing is allowed from managed apps.
     * @returns a boolean
     */
    public get printBlocked() {
        return this._printBlocked;
    };
    /**
     * Sets the printBlocked property value. Indicates whether printing is allowed from managed apps.
     * @param value Value to set for the printBlocked property.
     */
    public set printBlocked(value: boolean | undefined) {
        this._printBlocked = value;
    };
    /**
     * Gets the saveAsBlocked property value. Indicates whether users may use the 'Save As' menu item to save a copy of protected files.
     * @returns a boolean
     */
    public get saveAsBlocked() {
        return this._saveAsBlocked;
    };
    /**
     * Sets the saveAsBlocked property value. Indicates whether users may use the 'Save As' menu item to save a copy of protected files.
     * @param value Value to set for the saveAsBlocked property.
     */
    public set saveAsBlocked(value: boolean | undefined) {
        this._saveAsBlocked = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("allowedDataStorageLocations", this.allowedDataStorageLocations);
        writer.writeEnumValue<ManagedAppDataTransferLevel>("allowedInboundDataTransferSources", this.allowedInboundDataTransferSources);
        writer.writeEnumValue<ManagedAppClipboardSharingLevel>("allowedOutboundClipboardSharingLevel", this.allowedOutboundClipboardSharingLevel);
        writer.writeEnumValue<ManagedAppDataTransferLevel>("allowedOutboundDataTransferDestinations", this.allowedOutboundDataTransferDestinations);
        writer.writeBooleanValue("contactSyncBlocked", this.contactSyncBlocked);
        writer.writeBooleanValue("dataBackupBlocked", this.dataBackupBlocked);
        writer.writeBooleanValue("deviceComplianceRequired", this.deviceComplianceRequired);
        writer.writeBooleanValue("disableAppPinIfDevicePinIsSet", this.disableAppPinIfDevicePinIsSet);
        writer.writeBooleanValue("fingerprintBlocked", this.fingerprintBlocked);
        writer.writeEnumValue<ManagedBrowserType>("managedBrowser", this.managedBrowser);
        writer.writeBooleanValue("managedBrowserToOpenLinksRequired", this.managedBrowserToOpenLinksRequired);
        writer.writeNumberValue("maximumPinRetries", this.maximumPinRetries);
        writer.writeNumberValue("minimumPinLength", this.minimumPinLength);
        writer.writeStringValue("minimumRequiredAppVersion", this.minimumRequiredAppVersion);
        writer.writeStringValue("minimumRequiredOsVersion", this.minimumRequiredOsVersion);
        writer.writeStringValue("minimumWarningAppVersion", this.minimumWarningAppVersion);
        writer.writeStringValue("minimumWarningOsVersion", this.minimumWarningOsVersion);
        writer.writeBooleanValue("organizationalCredentialsRequired", this.organizationalCredentialsRequired);
        writer.writeDurationValue("periodBeforePinReset", this.periodBeforePinReset);
        writer.writeDurationValue("periodOfflineBeforeAccessCheck", this.periodOfflineBeforeAccessCheck);
        writer.writeDurationValue("periodOfflineBeforeWipeIsEnforced", this.periodOfflineBeforeWipeIsEnforced);
        writer.writeDurationValue("periodOnlineBeforeAccessCheck", this.periodOnlineBeforeAccessCheck);
        writer.writeEnumValue<ManagedAppPinCharacterSet>("pinCharacterSet", this.pinCharacterSet);
        writer.writeBooleanValue("pinRequired", this.pinRequired);
        writer.writeBooleanValue("printBlocked", this.printBlocked);
        writer.writeBooleanValue("saveAsBlocked", this.saveAsBlocked);
        writer.writeBooleanValue("simplePinBlocked", this.simplePinBlocked);
    };
    /**
     * Gets the simplePinBlocked property value. Indicates whether simplePin is blocked.
     * @returns a boolean
     */
    public get simplePinBlocked() {
        return this._simplePinBlocked;
    };
    /**
     * Sets the simplePinBlocked property value. Indicates whether simplePin is blocked.
     * @param value Value to set for the simplePinBlocked property.
     */
    public set simplePinBlocked(value: boolean | undefined) {
        this._simplePinBlocked = value;
    };
}

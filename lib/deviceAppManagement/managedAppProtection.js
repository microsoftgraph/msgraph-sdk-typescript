"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedAppProtection = void 0;
var managedAppPolicy_1 = require("./managedAppPolicy");
var ManagedAppProtection = /** @class */ (function (_super) {
    __extends(ManagedAppProtection, _super);
    /**
     * Instantiates a new managedAppProtection and sets the default values.
     */
    function ManagedAppProtection() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "allowedDataStorageLocations", {
        /**
         * Gets the allowedDataStorageLocations property value. Data storage locations where a user may store managed data.
         * @returns a managedAppDataStorageLocation
         */
        get: function () {
            return this._allowedDataStorageLocations;
        },
        /**
         * Sets the allowedDataStorageLocations property value. Data storage locations where a user may store managed data.
         * @param value Value to set for the allowedDataStorageLocations property.
         */
        set: function (value) {
            this._allowedDataStorageLocations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "allowedInboundDataTransferSources", {
        /**
         * Gets the allowedInboundDataTransferSources property value. Sources from which data is allowed to be transferred. Possible values are: allApps, managedApps, none.
         * @returns a managedAppDataTransferLevel
         */
        get: function () {
            return this._allowedInboundDataTransferSources;
        },
        /**
         * Sets the allowedInboundDataTransferSources property value. Sources from which data is allowed to be transferred. Possible values are: allApps, managedApps, none.
         * @param value Value to set for the allowedInboundDataTransferSources property.
         */
        set: function (value) {
            this._allowedInboundDataTransferSources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "allowedOutboundClipboardSharingLevel", {
        /**
         * Gets the allowedOutboundClipboardSharingLevel property value. The level to which the clipboard may be shared between apps on the managed device. Possible values are: allApps, managedAppsWithPasteIn, managedApps, blocked.
         * @returns a managedAppClipboardSharingLevel
         */
        get: function () {
            return this._allowedOutboundClipboardSharingLevel;
        },
        /**
         * Sets the allowedOutboundClipboardSharingLevel property value. The level to which the clipboard may be shared between apps on the managed device. Possible values are: allApps, managedAppsWithPasteIn, managedApps, blocked.
         * @param value Value to set for the allowedOutboundClipboardSharingLevel property.
         */
        set: function (value) {
            this._allowedOutboundClipboardSharingLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "allowedOutboundDataTransferDestinations", {
        /**
         * Gets the allowedOutboundDataTransferDestinations property value. Destinations to which data is allowed to be transferred. Possible values are: allApps, managedApps, none.
         * @returns a managedAppDataTransferLevel
         */
        get: function () {
            return this._allowedOutboundDataTransferDestinations;
        },
        /**
         * Sets the allowedOutboundDataTransferDestinations property value. Destinations to which data is allowed to be transferred. Possible values are: allApps, managedApps, none.
         * @param value Value to set for the allowedOutboundDataTransferDestinations property.
         */
        set: function (value) {
            this._allowedOutboundDataTransferDestinations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "contactSyncBlocked", {
        /**
         * Gets the contactSyncBlocked property value. Indicates whether contacts can be synced to the user's device.
         * @returns a boolean
         */
        get: function () {
            return this._contactSyncBlocked;
        },
        /**
         * Sets the contactSyncBlocked property value. Indicates whether contacts can be synced to the user's device.
         * @param value Value to set for the contactSyncBlocked property.
         */
        set: function (value) {
            this._contactSyncBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "dataBackupBlocked", {
        /**
         * Gets the dataBackupBlocked property value. Indicates whether the backup of a managed app's data is blocked.
         * @returns a boolean
         */
        get: function () {
            return this._dataBackupBlocked;
        },
        /**
         * Sets the dataBackupBlocked property value. Indicates whether the backup of a managed app's data is blocked.
         * @param value Value to set for the dataBackupBlocked property.
         */
        set: function (value) {
            this._dataBackupBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "deviceComplianceRequired", {
        /**
         * Gets the deviceComplianceRequired property value. Indicates whether device compliance is required.
         * @returns a boolean
         */
        get: function () {
            return this._deviceComplianceRequired;
        },
        /**
         * Sets the deviceComplianceRequired property value. Indicates whether device compliance is required.
         * @param value Value to set for the deviceComplianceRequired property.
         */
        set: function (value) {
            this._deviceComplianceRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "disableAppPinIfDevicePinIsSet", {
        /**
         * Gets the disableAppPinIfDevicePinIsSet property value. Indicates whether use of the app pin is required if the device pin is set.
         * @returns a boolean
         */
        get: function () {
            return this._disableAppPinIfDevicePinIsSet;
        },
        /**
         * Sets the disableAppPinIfDevicePinIsSet property value. Indicates whether use of the app pin is required if the device pin is set.
         * @param value Value to set for the disableAppPinIfDevicePinIsSet property.
         */
        set: function (value) {
            this._disableAppPinIfDevicePinIsSet = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "fingerprintBlocked", {
        /**
         * Gets the fingerprintBlocked property value. Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True.
         * @returns a boolean
         */
        get: function () {
            return this._fingerprintBlocked;
        },
        /**
         * Sets the fingerprintBlocked property value. Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True.
         * @param value Value to set for the fingerprintBlocked property.
         */
        set: function (value) {
            this._fingerprintBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "managedBrowser", {
        /**
         * Gets the managedBrowser property value. Indicates in which managed browser(s) that internet links should be opened. When this property is configured, ManagedBrowserToOpenLinksRequired should be true. Possible values are: notConfigured, microsoftEdge.
         * @returns a managedBrowserType
         */
        get: function () {
            return this._managedBrowser;
        },
        /**
         * Sets the managedBrowser property value. Indicates in which managed browser(s) that internet links should be opened. When this property is configured, ManagedBrowserToOpenLinksRequired should be true. Possible values are: notConfigured, microsoftEdge.
         * @param value Value to set for the managedBrowser property.
         */
        set: function (value) {
            this._managedBrowser = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "managedBrowserToOpenLinksRequired", {
        /**
         * Gets the managedBrowserToOpenLinksRequired property value. Indicates whether internet links should be opened in the managed browser app, or any custom browser specified by CustomBrowserProtocol (for iOS) or CustomBrowserPackageId/CustomBrowserDisplayName (for Android)
         * @returns a boolean
         */
        get: function () {
            return this._managedBrowserToOpenLinksRequired;
        },
        /**
         * Sets the managedBrowserToOpenLinksRequired property value. Indicates whether internet links should be opened in the managed browser app, or any custom browser specified by CustomBrowserProtocol (for iOS) or CustomBrowserPackageId/CustomBrowserDisplayName (for Android)
         * @param value Value to set for the managedBrowserToOpenLinksRequired property.
         */
        set: function (value) {
            this._managedBrowserToOpenLinksRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "maximumPinRetries", {
        /**
         * Gets the maximumPinRetries property value. Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped.
         * @returns a integer
         */
        get: function () {
            return this._maximumPinRetries;
        },
        /**
         * Sets the maximumPinRetries property value. Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped.
         * @param value Value to set for the maximumPinRetries property.
         */
        set: function (value) {
            this._maximumPinRetries = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "minimumPinLength", {
        /**
         * Gets the minimumPinLength property value. Minimum pin length required for an app-level pin if PinRequired is set to True
         * @returns a integer
         */
        get: function () {
            return this._minimumPinLength;
        },
        /**
         * Sets the minimumPinLength property value. Minimum pin length required for an app-level pin if PinRequired is set to True
         * @param value Value to set for the minimumPinLength property.
         */
        set: function (value) {
            this._minimumPinLength = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "minimumRequiredAppVersion", {
        /**
         * Gets the minimumRequiredAppVersion property value. Versions less than the specified version will block the managed app from accessing company data.
         * @returns a string
         */
        get: function () {
            return this._minimumRequiredAppVersion;
        },
        /**
         * Sets the minimumRequiredAppVersion property value. Versions less than the specified version will block the managed app from accessing company data.
         * @param value Value to set for the minimumRequiredAppVersion property.
         */
        set: function (value) {
            this._minimumRequiredAppVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "minimumRequiredOsVersion", {
        /**
         * Gets the minimumRequiredOsVersion property value. Versions less than the specified version will block the managed app from accessing company data.
         * @returns a string
         */
        get: function () {
            return this._minimumRequiredOsVersion;
        },
        /**
         * Sets the minimumRequiredOsVersion property value. Versions less than the specified version will block the managed app from accessing company data.
         * @param value Value to set for the minimumRequiredOsVersion property.
         */
        set: function (value) {
            this._minimumRequiredOsVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "minimumWarningAppVersion", {
        /**
         * Gets the minimumWarningAppVersion property value. Versions less than the specified version will result in warning message on the managed app.
         * @returns a string
         */
        get: function () {
            return this._minimumWarningAppVersion;
        },
        /**
         * Sets the minimumWarningAppVersion property value. Versions less than the specified version will result in warning message on the managed app.
         * @param value Value to set for the minimumWarningAppVersion property.
         */
        set: function (value) {
            this._minimumWarningAppVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "minimumWarningOsVersion", {
        /**
         * Gets the minimumWarningOsVersion property value. Versions less than the specified version will result in warning message on the managed app from accessing company data.
         * @returns a string
         */
        get: function () {
            return this._minimumWarningOsVersion;
        },
        /**
         * Sets the minimumWarningOsVersion property value. Versions less than the specified version will result in warning message on the managed app from accessing company data.
         * @param value Value to set for the minimumWarningOsVersion property.
         */
        set: function (value) {
            this._minimumWarningOsVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "organizationalCredentialsRequired", {
        /**
         * Gets the organizationalCredentialsRequired property value. Indicates whether organizational credentials are required for app use.
         * @returns a boolean
         */
        get: function () {
            return this._organizationalCredentialsRequired;
        },
        /**
         * Sets the organizationalCredentialsRequired property value. Indicates whether organizational credentials are required for app use.
         * @param value Value to set for the organizationalCredentialsRequired property.
         */
        set: function (value) {
            this._organizationalCredentialsRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "periodBeforePinReset", {
        /**
         * Gets the periodBeforePinReset property value. TimePeriod before the all-level pin must be reset if PinRequired is set to True.
         * @returns a string
         */
        get: function () {
            return this._periodBeforePinReset;
        },
        /**
         * Sets the periodBeforePinReset property value. TimePeriod before the all-level pin must be reset if PinRequired is set to True.
         * @param value Value to set for the periodBeforePinReset property.
         */
        set: function (value) {
            this._periodBeforePinReset = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "periodOfflineBeforeAccessCheck", {
        /**
         * Gets the periodOfflineBeforeAccessCheck property value. The period after which access is checked when the device is not connected to the internet.
         * @returns a string
         */
        get: function () {
            return this._periodOfflineBeforeAccessCheck;
        },
        /**
         * Sets the periodOfflineBeforeAccessCheck property value. The period after which access is checked when the device is not connected to the internet.
         * @param value Value to set for the periodOfflineBeforeAccessCheck property.
         */
        set: function (value) {
            this._periodOfflineBeforeAccessCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "periodOfflineBeforeWipeIsEnforced", {
        /**
         * Gets the periodOfflineBeforeWipeIsEnforced property value. The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped.
         * @returns a string
         */
        get: function () {
            return this._periodOfflineBeforeWipeIsEnforced;
        },
        /**
         * Sets the periodOfflineBeforeWipeIsEnforced property value. The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped.
         * @param value Value to set for the periodOfflineBeforeWipeIsEnforced property.
         */
        set: function (value) {
            this._periodOfflineBeforeWipeIsEnforced = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "periodOnlineBeforeAccessCheck", {
        /**
         * Gets the periodOnlineBeforeAccessCheck property value. The period after which access is checked when the device is connected to the internet.
         * @returns a string
         */
        get: function () {
            return this._periodOnlineBeforeAccessCheck;
        },
        /**
         * Sets the periodOnlineBeforeAccessCheck property value. The period after which access is checked when the device is connected to the internet.
         * @param value Value to set for the periodOnlineBeforeAccessCheck property.
         */
        set: function (value) {
            this._periodOnlineBeforeAccessCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "pinCharacterSet", {
        /**
         * Gets the pinCharacterSet property value. Character set which may be used for an app-level pin if PinRequired is set to True. Possible values are: numeric, alphanumericAndSymbol.
         * @returns a managedAppPinCharacterSet
         */
        get: function () {
            return this._pinCharacterSet;
        },
        /**
         * Sets the pinCharacterSet property value. Character set which may be used for an app-level pin if PinRequired is set to True. Possible values are: numeric, alphanumericAndSymbol.
         * @param value Value to set for the pinCharacterSet property.
         */
        set: function (value) {
            this._pinCharacterSet = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "pinRequired", {
        /**
         * Gets the pinRequired property value. Indicates whether an app-level pin is required.
         * @returns a boolean
         */
        get: function () {
            return this._pinRequired;
        },
        /**
         * Sets the pinRequired property value. Indicates whether an app-level pin is required.
         * @param value Value to set for the pinRequired property.
         */
        set: function (value) {
            this._pinRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "printBlocked", {
        /**
         * Gets the printBlocked property value. Indicates whether printing is allowed from managed apps.
         * @returns a boolean
         */
        get: function () {
            return this._printBlocked;
        },
        /**
         * Sets the printBlocked property value. Indicates whether printing is allowed from managed apps.
         * @param value Value to set for the printBlocked property.
         */
        set: function (value) {
            this._printBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "saveAsBlocked", {
        /**
         * Gets the saveAsBlocked property value. Indicates whether users may use the 'Save As' menu item to save a copy of protected files.
         * @returns a boolean
         */
        get: function () {
            return this._saveAsBlocked;
        },
        /**
         * Sets the saveAsBlocked property value. Indicates whether users may use the 'Save As' menu item to save a copy of protected files.
         * @param value Value to set for the saveAsBlocked property.
         */
        set: function (value) {
            this._saveAsBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppProtection.prototype, "simplePinBlocked", {
        /**
         * Gets the simplePinBlocked property value. Indicates whether simplePin is blocked.
         * @returns a boolean
         */
        get: function () {
            return this._simplePinBlocked;
        },
        /**
         * Sets the simplePinBlocked property value. Indicates whether simplePin is blocked.
         * @param value Value to set for the simplePinBlocked property.
         */
        set: function (value) {
            this._simplePinBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ManagedAppProtection.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["allowedDataStorageLocations", function (o, n) { o.allowedDataStorageLocations = n.getCollectionOfPrimitiveValues(); }],
            ["allowedInboundDataTransferSources", function (o, n) { o.allowedInboundDataTransferSources = n.getObjectValue(ManagedAppDataTransferLevel); }],
            ["allowedOutboundClipboardSharingLevel", function (o, n) { o.allowedOutboundClipboardSharingLevel = n.getObjectValue(ManagedAppClipboardSharingLevel); }],
            ["allowedOutboundDataTransferDestinations", function (o, n) { o.allowedOutboundDataTransferDestinations = n.getObjectValue(ManagedAppDataTransferLevel); }],
            ["contactSyncBlocked", function (o, n) { o.contactSyncBlocked = n.getBooleanValue(); }],
            ["dataBackupBlocked", function (o, n) { o.dataBackupBlocked = n.getBooleanValue(); }],
            ["deviceComplianceRequired", function (o, n) { o.deviceComplianceRequired = n.getBooleanValue(); }],
            ["disableAppPinIfDevicePinIsSet", function (o, n) { o.disableAppPinIfDevicePinIsSet = n.getBooleanValue(); }],
            ["fingerprintBlocked", function (o, n) { o.fingerprintBlocked = n.getBooleanValue(); }],
            ["managedBrowser", function (o, n) { o.managedBrowser = n.getObjectValue(ManagedBrowserType); }],
            ["managedBrowserToOpenLinksRequired", function (o, n) { o.managedBrowserToOpenLinksRequired = n.getBooleanValue(); }],
            ["maximumPinRetries", function (o, n) { o.maximumPinRetries = n.getNumberValue(); }],
            ["minimumPinLength", function (o, n) { o.minimumPinLength = n.getNumberValue(); }],
            ["minimumRequiredAppVersion", function (o, n) { o.minimumRequiredAppVersion = n.getStringValue(); }],
            ["minimumRequiredOsVersion", function (o, n) { o.minimumRequiredOsVersion = n.getStringValue(); }],
            ["minimumWarningAppVersion", function (o, n) { o.minimumWarningAppVersion = n.getStringValue(); }],
            ["minimumWarningOsVersion", function (o, n) { o.minimumWarningOsVersion = n.getStringValue(); }],
            ["organizationalCredentialsRequired", function (o, n) { o.organizationalCredentialsRequired = n.getBooleanValue(); }],
            ["periodBeforePinReset", function (o, n) { o.periodBeforePinReset = n.getStringValue(); }],
            ["periodOfflineBeforeAccessCheck", function (o, n) { o.periodOfflineBeforeAccessCheck = n.getStringValue(); }],
            ["periodOfflineBeforeWipeIsEnforced", function (o, n) { o.periodOfflineBeforeWipeIsEnforced = n.getStringValue(); }],
            ["periodOnlineBeforeAccessCheck", function (o, n) { o.periodOnlineBeforeAccessCheck = n.getStringValue(); }],
            ["pinCharacterSet", function (o, n) { o.pinCharacterSet = n.getObjectValue(ManagedAppPinCharacterSet); }],
            ["pinRequired", function (o, n) { o.pinRequired = n.getBooleanValue(); }],
            ["printBlocked", function (o, n) { o.printBlocked = n.getBooleanValue(); }],
            ["saveAsBlocked", function (o, n) { o.saveAsBlocked = n.getBooleanValue(); }],
            ["simplePinBlocked", function (o, n) { o.simplePinBlocked = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ManagedAppProtection.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfPrimitiveValues("allowedDataStorageLocations", this.allowedDataStorageLocations);
        writer.writeObjectValue("allowedInboundDataTransferSources", this.allowedInboundDataTransferSources);
        writer.writeObjectValue("allowedOutboundClipboardSharingLevel", this.allowedOutboundClipboardSharingLevel);
        writer.writeObjectValue("allowedOutboundDataTransferDestinations", this.allowedOutboundDataTransferDestinations);
        writer.writeBooleanValue("contactSyncBlocked", this.contactSyncBlocked);
        writer.writeBooleanValue("dataBackupBlocked", this.dataBackupBlocked);
        writer.writeBooleanValue("deviceComplianceRequired", this.deviceComplianceRequired);
        writer.writeBooleanValue("disableAppPinIfDevicePinIsSet", this.disableAppPinIfDevicePinIsSet);
        writer.writeBooleanValue("fingerprintBlocked", this.fingerprintBlocked);
        writer.writeObjectValue("managedBrowser", this.managedBrowser);
        writer.writeBooleanValue("managedBrowserToOpenLinksRequired", this.managedBrowserToOpenLinksRequired);
        writer.writeNumberValue("maximumPinRetries", this.maximumPinRetries);
        writer.writeNumberValue("minimumPinLength", this.minimumPinLength);
        writer.writeStringValue("minimumRequiredAppVersion", this.minimumRequiredAppVersion);
        writer.writeStringValue("minimumRequiredOsVersion", this.minimumRequiredOsVersion);
        writer.writeStringValue("minimumWarningAppVersion", this.minimumWarningAppVersion);
        writer.writeStringValue("minimumWarningOsVersion", this.minimumWarningOsVersion);
        writer.writeBooleanValue("organizationalCredentialsRequired", this.organizationalCredentialsRequired);
        writer.writeStringValue("periodBeforePinReset", this.periodBeforePinReset);
        writer.writeStringValue("periodOfflineBeforeAccessCheck", this.periodOfflineBeforeAccessCheck);
        writer.writeStringValue("periodOfflineBeforeWipeIsEnforced", this.periodOfflineBeforeWipeIsEnforced);
        writer.writeStringValue("periodOnlineBeforeAccessCheck", this.periodOnlineBeforeAccessCheck);
        writer.writeObjectValue("pinCharacterSet", this.pinCharacterSet);
        writer.writeBooleanValue("pinRequired", this.pinRequired);
        writer.writeBooleanValue("printBlocked", this.printBlocked);
        writer.writeBooleanValue("saveAsBlocked", this.saveAsBlocked);
        writer.writeBooleanValue("simplePinBlocked", this.simplePinBlocked);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ManagedAppProtection;
}(managedAppPolicy_1.ManagedAppPolicy));
exports.ManagedAppProtection = ManagedAppProtection;

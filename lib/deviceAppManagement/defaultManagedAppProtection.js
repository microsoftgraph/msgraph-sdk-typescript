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
exports.DefaultManagedAppProtection = void 0;
var managedAppPolicyDeploymentSummary_1 = require("./androidManagedAppProtections/deploymentSummary/managedAppPolicyDeploymentSummary");
var keyValuePair_1 = require("./keyValuePair");
var managedAppProtection_1 = require("./managedAppProtection");
var managedMobileApp_1 = require("./managedMobileApp");
var DefaultManagedAppProtection = /** @class */ (function (_super) {
    __extends(DefaultManagedAppProtection, _super);
    /**
     * Instantiates a new defaultManagedAppProtection and sets the default values.
     */
    function DefaultManagedAppProtection() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "appDataEncryptionType", {
        /**
         * Gets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
         * @returns a managedAppDataEncryptionType
         */
        get: function () {
            return this._appDataEncryptionType;
        },
        /**
         * Sets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
         * @param value Value to set for the appDataEncryptionType property.
         */
        set: function (value) {
            this._appDataEncryptionType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "apps", {
        /**
         * Gets the apps property value. List of apps to which the policy is deployed.
         * @returns a managedMobileApp
         */
        get: function () {
            return this._apps;
        },
        /**
         * Sets the apps property value. List of apps to which the policy is deployed.
         * @param value Value to set for the apps property.
         */
        set: function (value) {
            this._apps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "customSettings", {
        /**
         * Gets the customSettings property value. A set of string key and string value pairs to be sent to the affected users, unalterned by this service
         * @returns a keyValuePair
         */
        get: function () {
            return this._customSettings;
        },
        /**
         * Sets the customSettings property value. A set of string key and string value pairs to be sent to the affected users, unalterned by this service
         * @param value Value to set for the customSettings property.
         */
        set: function (value) {
            this._customSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "deployedAppCount", {
        /**
         * Gets the deployedAppCount property value. Count of apps to which the current policy is deployed.
         * @returns a integer
         */
        get: function () {
            return this._deployedAppCount;
        },
        /**
         * Sets the deployedAppCount property value. Count of apps to which the current policy is deployed.
         * @param value Value to set for the deployedAppCount property.
         */
        set: function (value) {
            this._deployedAppCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "deploymentSummary", {
        /**
         * Gets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
         * @returns a managedAppPolicyDeploymentSummary
         */
        get: function () {
            return this._deploymentSummary;
        },
        /**
         * Sets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
         * @param value Value to set for the deploymentSummary property.
         */
        set: function (value) {
            this._deploymentSummary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "disableAppEncryptionIfDeviceEncryptionIsEnabled", {
        /**
         * Gets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)
         * @returns a boolean
         */
        get: function () {
            return this._disableAppEncryptionIfDeviceEncryptionIsEnabled;
        },
        /**
         * Sets the disableAppEncryptionIfDeviceEncryptionIsEnabled property value. When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)
         * @param value Value to set for the disableAppEncryptionIfDeviceEncryptionIsEnabled property.
         */
        set: function (value) {
            this._disableAppEncryptionIfDeviceEncryptionIsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "encryptAppData", {
        /**
         * Gets the encryptAppData property value. Indicates whether managed-app data should be encrypted. (Android only)
         * @returns a boolean
         */
        get: function () {
            return this._encryptAppData;
        },
        /**
         * Sets the encryptAppData property value. Indicates whether managed-app data should be encrypted. (Android only)
         * @param value Value to set for the encryptAppData property.
         */
        set: function (value) {
            this._encryptAppData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "faceIdBlocked", {
        /**
         * Gets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)
         * @returns a boolean
         */
        get: function () {
            return this._faceIdBlocked;
        },
        /**
         * Sets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)
         * @param value Value to set for the faceIdBlocked property.
         */
        set: function (value) {
            this._faceIdBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "minimumRequiredPatchVersion", {
        /**
         * Gets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only)
         * @returns a string
         */
        get: function () {
            return this._minimumRequiredPatchVersion;
        },
        /**
         * Sets the minimumRequiredPatchVersion property value. Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only)
         * @param value Value to set for the minimumRequiredPatchVersion property.
         */
        set: function (value) {
            this._minimumRequiredPatchVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "minimumRequiredSdkVersion", {
        /**
         * Gets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data. (iOS Only)
         * @returns a string
         */
        get: function () {
            return this._minimumRequiredSdkVersion;
        },
        /**
         * Sets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data. (iOS Only)
         * @param value Value to set for the minimumRequiredSdkVersion property.
         */
        set: function (value) {
            this._minimumRequiredSdkVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "minimumWarningPatchVersion", {
        /**
         * Gets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)
         * @returns a string
         */
        get: function () {
            return this._minimumWarningPatchVersion;
        },
        /**
         * Sets the minimumWarningPatchVersion property value. Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)
         * @param value Value to set for the minimumWarningPatchVersion property.
         */
        set: function (value) {
            this._minimumWarningPatchVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DefaultManagedAppProtection.prototype, "screenCaptureBlocked", {
        /**
         * Gets the screenCaptureBlocked property value. Indicates whether screen capture is blocked. (Android only)
         * @returns a boolean
         */
        get: function () {
            return this._screenCaptureBlocked;
        },
        /**
         * Sets the screenCaptureBlocked property value. Indicates whether screen capture is blocked. (Android only)
         * @param value Value to set for the screenCaptureBlocked property.
         */
        set: function (value) {
            this._screenCaptureBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DefaultManagedAppProtection.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appDataEncryptionType", function (o, n) { o.appDataEncryptionType = n.getObjectValue(ManagedAppDataEncryptionType); }],
            ["apps", function (o, n) { o.apps = n.getCollectionOfObjectValues(managedMobileApp_1.ManagedMobileApp); }],
            ["customSettings", function (o, n) { o.customSettings = n.getCollectionOfObjectValues(keyValuePair_1.KeyValuePair); }],
            ["deployedAppCount", function (o, n) { o.deployedAppCount = n.getNumberValue(); }],
            ["deploymentSummary", function (o, n) { o.deploymentSummary = n.getObjectValue(managedAppPolicyDeploymentSummary_1.ManagedAppPolicyDeploymentSummary); }],
            ["disableAppEncryptionIfDeviceEncryptionIsEnabled", function (o, n) { o.disableAppEncryptionIfDeviceEncryptionIsEnabled = n.getBooleanValue(); }],
            ["encryptAppData", function (o, n) { o.encryptAppData = n.getBooleanValue(); }],
            ["faceIdBlocked", function (o, n) { o.faceIdBlocked = n.getBooleanValue(); }],
            ["minimumRequiredPatchVersion", function (o, n) { o.minimumRequiredPatchVersion = n.getStringValue(); }],
            ["minimumRequiredSdkVersion", function (o, n) { o.minimumRequiredSdkVersion = n.getStringValue(); }],
            ["minimumWarningPatchVersion", function (o, n) { o.minimumWarningPatchVersion = n.getStringValue(); }],
            ["screenCaptureBlocked", function (o, n) { o.screenCaptureBlocked = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DefaultManagedAppProtection.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("appDataEncryptionType", this.appDataEncryptionType);
        writer.writeCollectionOfObjectValues("apps", this.apps);
        writer.writeCollectionOfObjectValues("customSettings", this.customSettings);
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        writer.writeObjectValue("deploymentSummary", this.deploymentSummary);
        writer.writeBooleanValue("disableAppEncryptionIfDeviceEncryptionIsEnabled", this.disableAppEncryptionIfDeviceEncryptionIsEnabled);
        writer.writeBooleanValue("encryptAppData", this.encryptAppData);
        writer.writeBooleanValue("faceIdBlocked", this.faceIdBlocked);
        writer.writeStringValue("minimumRequiredPatchVersion", this.minimumRequiredPatchVersion);
        writer.writeStringValue("minimumRequiredSdkVersion", this.minimumRequiredSdkVersion);
        writer.writeStringValue("minimumWarningPatchVersion", this.minimumWarningPatchVersion);
        writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
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
    return DefaultManagedAppProtection;
}(managedAppProtection_1.ManagedAppProtection));
exports.DefaultManagedAppProtection = DefaultManagedAppProtection;

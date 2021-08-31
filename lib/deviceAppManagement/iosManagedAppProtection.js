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
exports.IosManagedAppProtection = void 0;
var managedAppPolicyDeploymentSummary_1 = require("./androidManagedAppProtections/deploymentSummary/managedAppPolicyDeploymentSummary");
var managedMobileApp_1 = require("./managedMobileApp");
var targetedManagedAppProtection_1 = require("./targetedManagedAppProtection");
var IosManagedAppProtection = /** @class */ (function (_super) {
    __extends(IosManagedAppProtection, _super);
    /**
     * Instantiates a new iosManagedAppProtection and sets the default values.
     */
    function IosManagedAppProtection() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(IosManagedAppProtection.prototype, "appDataEncryptionType", {
        /**
         * Gets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
         * @returns a managedAppDataEncryptionType
         */
        get: function () {
            return this._appDataEncryptionType;
        },
        /**
         * Sets the appDataEncryptionType property value. Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings, afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
         * @param value Value to set for the appDataEncryptionType property.
         */
        set: function (value) {
            this._appDataEncryptionType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IosManagedAppProtection.prototype, "apps", {
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
    Object.defineProperty(IosManagedAppProtection.prototype, "customBrowserProtocol", {
        /**
         * Gets the customBrowserProtocol property value. A custom browser protocol to open weblink on iOS.
         * @returns a string
         */
        get: function () {
            return this._customBrowserProtocol;
        },
        /**
         * Sets the customBrowserProtocol property value. A custom browser protocol to open weblink on iOS.
         * @param value Value to set for the customBrowserProtocol property.
         */
        set: function (value) {
            this._customBrowserProtocol = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IosManagedAppProtection.prototype, "deployedAppCount", {
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
    Object.defineProperty(IosManagedAppProtection.prototype, "deploymentSummary", {
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
    Object.defineProperty(IosManagedAppProtection.prototype, "faceIdBlocked", {
        /**
         * Gets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.
         * @returns a boolean
         */
        get: function () {
            return this._faceIdBlocked;
        },
        /**
         * Sets the faceIdBlocked property value. Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.
         * @param value Value to set for the faceIdBlocked property.
         */
        set: function (value) {
            this._faceIdBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IosManagedAppProtection.prototype, "minimumRequiredSdkVersion", {
        /**
         * Gets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data.
         * @returns a string
         */
        get: function () {
            return this._minimumRequiredSdkVersion;
        },
        /**
         * Sets the minimumRequiredSdkVersion property value. Versions less than the specified version will block the managed app from accessing company data.
         * @param value Value to set for the minimumRequiredSdkVersion property.
         */
        set: function (value) {
            this._minimumRequiredSdkVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    IosManagedAppProtection.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appDataEncryptionType", function (o, n) { o.appDataEncryptionType = n.getObjectValue(ManagedAppDataEncryptionType); }],
            ["apps", function (o, n) { o.apps = n.getCollectionOfObjectValues(managedMobileApp_1.ManagedMobileApp); }],
            ["customBrowserProtocol", function (o, n) { o.customBrowserProtocol = n.getStringValue(); }],
            ["deployedAppCount", function (o, n) { o.deployedAppCount = n.getNumberValue(); }],
            ["deploymentSummary", function (o, n) { o.deploymentSummary = n.getObjectValue(managedAppPolicyDeploymentSummary_1.ManagedAppPolicyDeploymentSummary); }],
            ["faceIdBlocked", function (o, n) { o.faceIdBlocked = n.getBooleanValue(); }],
            ["minimumRequiredSdkVersion", function (o, n) { o.minimumRequiredSdkVersion = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    IosManagedAppProtection.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("appDataEncryptionType", this.appDataEncryptionType);
        writer.writeCollectionOfObjectValues("apps", this.apps);
        writer.writeStringValue("customBrowserProtocol", this.customBrowserProtocol);
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        writer.writeObjectValue("deploymentSummary", this.deploymentSummary);
        writer.writeBooleanValue("faceIdBlocked", this.faceIdBlocked);
        writer.writeStringValue("minimumRequiredSdkVersion", this.minimumRequiredSdkVersion);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return IosManagedAppProtection;
}(targetedManagedAppProtection_1.TargetedManagedAppProtection));
exports.IosManagedAppProtection = IosManagedAppProtection;

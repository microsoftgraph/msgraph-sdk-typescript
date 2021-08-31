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
exports.ManagedAppRegistration = void 0;
var managedAppOperation_1 = require("./deviceAppManagement/managedAppOperation");
var managedAppPolicy_1 = require("./deviceAppManagement/managedAppPolicy");
var entity_1 = require("./entity");
var ManagedAppRegistration = /** @class */ (function (_super) {
    __extends(ManagedAppRegistration, _super);
    /**
     * Instantiates a new managedAppRegistration and sets the default values.
     */
    function ManagedAppRegistration() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "appIdentifier", {
        /**
         * Gets the appIdentifier property value. The app package Identifier
         * @returns a mobileAppIdentifier
         */
        get: function () {
            return this._appIdentifier;
        },
        /**
         * Sets the appIdentifier property value. The app package Identifier
         * @param value Value to set for the appIdentifier property.
         */
        set: function (value) {
            this._appIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "applicationVersion", {
        /**
         * Gets the applicationVersion property value. App version
         * @returns a string
         */
        get: function () {
            return this._applicationVersion;
        },
        /**
         * Sets the applicationVersion property value. App version
         * @param value Value to set for the applicationVersion property.
         */
        set: function (value) {
            this._applicationVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "appliedPolicies", {
        /**
         * Gets the appliedPolicies property value. Zero or more policys already applied on the registered app when it last synchronized with managment service.
         * @returns a managedAppPolicy
         */
        get: function () {
            return this._appliedPolicies;
        },
        /**
         * Sets the appliedPolicies property value. Zero or more policys already applied on the registered app when it last synchronized with managment service.
         * @param value Value to set for the appliedPolicies property.
         */
        set: function (value) {
            this._appliedPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Date and time of creation
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Date and time of creation
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "deviceName", {
        /**
         * Gets the deviceName property value. Host device name
         * @returns a string
         */
        get: function () {
            return this._deviceName;
        },
        /**
         * Sets the deviceName property value. Host device name
         * @param value Value to set for the deviceName property.
         */
        set: function (value) {
            this._deviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "deviceTag", {
        /**
         * Gets the deviceTag property value. App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions.
         * @returns a string
         */
        get: function () {
            return this._deviceTag;
        },
        /**
         * Sets the deviceTag property value. App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions.
         * @param value Value to set for the deviceTag property.
         */
        set: function (value) {
            this._deviceTag = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "deviceType", {
        /**
         * Gets the deviceType property value. Host device type
         * @returns a string
         */
        get: function () {
            return this._deviceType;
        },
        /**
         * Sets the deviceType property value. Host device type
         * @param value Value to set for the deviceType property.
         */
        set: function (value) {
            this._deviceType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "flaggedReasons", {
        /**
         * Gets the flaggedReasons property value. Zero or more reasons an app registration is flagged. E.g. app running on rooted device
         * @returns a managedAppFlaggedReason
         */
        get: function () {
            return this._flaggedReasons;
        },
        /**
         * Sets the flaggedReasons property value. Zero or more reasons an app registration is flagged. E.g. app running on rooted device
         * @param value Value to set for the flaggedReasons property.
         */
        set: function (value) {
            this._flaggedReasons = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "intendedPolicies", {
        /**
         * Gets the intendedPolicies property value. Zero or more policies admin intended for the app as of now.
         * @returns a managedAppPolicy
         */
        get: function () {
            return this._intendedPolicies;
        },
        /**
         * Sets the intendedPolicies property value. Zero or more policies admin intended for the app as of now.
         * @param value Value to set for the intendedPolicies property.
         */
        set: function (value) {
            this._intendedPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "lastSyncDateTime", {
        /**
         * Gets the lastSyncDateTime property value. Date and time of last the app synced with management service.
         * @returns a Date
         */
        get: function () {
            return this._lastSyncDateTime;
        },
        /**
         * Sets the lastSyncDateTime property value. Date and time of last the app synced with management service.
         * @param value Value to set for the lastSyncDateTime property.
         */
        set: function (value) {
            this._lastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "managementSdkVersion", {
        /**
         * Gets the managementSdkVersion property value. App management SDK version
         * @returns a string
         */
        get: function () {
            return this._managementSdkVersion;
        },
        /**
         * Sets the managementSdkVersion property value. App management SDK version
         * @param value Value to set for the managementSdkVersion property.
         */
        set: function (value) {
            this._managementSdkVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "operations", {
        /**
         * Gets the operations property value. Zero or more long running operations triggered on the app registration.
         * @returns a managedAppOperation
         */
        get: function () {
            return this._operations;
        },
        /**
         * Sets the operations property value. Zero or more long running operations triggered on the app registration.
         * @param value Value to set for the operations property.
         */
        set: function (value) {
            this._operations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "platformVersion", {
        /**
         * Gets the platformVersion property value. Operating System version
         * @returns a string
         */
        get: function () {
            return this._platformVersion;
        },
        /**
         * Sets the platformVersion property value. Operating System version
         * @param value Value to set for the platformVersion property.
         */
        set: function (value) {
            this._platformVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "userId", {
        /**
         * Gets the userId property value. The user Id to who this app registration belongs.
         * @returns a string
         */
        get: function () {
            return this._userId;
        },
        /**
         * Sets the userId property value. The user Id to who this app registration belongs.
         * @param value Value to set for the userId property.
         */
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedAppRegistration.prototype, "version", {
        /**
         * Gets the version property value. Version of the entity.
         * @returns a string
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. Version of the entity.
         * @param value Value to set for the version property.
         */
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ManagedAppRegistration.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appIdentifier", function (o, n) { o.appIdentifier = n.getObjectValue(MobileAppIdentifier); }],
            ["applicationVersion", function (o, n) { o.applicationVersion = n.getStringValue(); }],
            ["appliedPolicies", function (o, n) { o.appliedPolicies = n.getCollectionOfObjectValues(managedAppPolicy_1.ManagedAppPolicy); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["deviceName", function (o, n) { o.deviceName = n.getStringValue(); }],
            ["deviceTag", function (o, n) { o.deviceTag = n.getStringValue(); }],
            ["deviceType", function (o, n) { o.deviceType = n.getStringValue(); }],
            ["flaggedReasons", function (o, n) { o.flaggedReasons = n.getCollectionOfPrimitiveValues(); }],
            ["intendedPolicies", function (o, n) { o.intendedPolicies = n.getCollectionOfObjectValues(managedAppPolicy_1.ManagedAppPolicy); }],
            ["lastSyncDateTime", function (o, n) { o.lastSyncDateTime = n.getDateValue(); }],
            ["managementSdkVersion", function (o, n) { o.managementSdkVersion = n.getStringValue(); }],
            ["operations", function (o, n) { o.operations = n.getCollectionOfObjectValues(managedAppOperation_1.ManagedAppOperation); }],
            ["platformVersion", function (o, n) { o.platformVersion = n.getStringValue(); }],
            ["userId", function (o, n) { o.userId = n.getStringValue(); }],
            ["version", function (o, n) { o.version = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ManagedAppRegistration.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("appIdentifier", this.appIdentifier);
        writer.writeStringValue("applicationVersion", this.applicationVersion);
        writer.writeCollectionOfObjectValues("appliedPolicies", this.appliedPolicies);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("deviceTag", this.deviceTag);
        writer.writeStringValue("deviceType", this.deviceType);
        writer.writeCollectionOfPrimitiveValues("flaggedReasons", this.flaggedReasons);
        writer.writeCollectionOfObjectValues("intendedPolicies", this.intendedPolicies);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("managementSdkVersion", this.managementSdkVersion);
        writer.writeCollectionOfObjectValues("operations", this.operations);
        writer.writeStringValue("platformVersion", this.platformVersion);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("version", this.version);
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
    return ManagedAppRegistration;
}(entity_1.Entity));
exports.ManagedAppRegistration = ManagedAppRegistration;

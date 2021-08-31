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
exports.WindowsAutopilotDeviceIdentity = void 0;
var entity_1 = require("../entity");
var WindowsAutopilotDeviceIdentity = /** @class */ (function (_super) {
    __extends(WindowsAutopilotDeviceIdentity, _super);
    /**
     * Instantiates a new windowsAutopilotDeviceIdentity and sets the default values.
     */
    function WindowsAutopilotDeviceIdentity() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "addressableUserName", {
        /**
         * Gets the addressableUserName property value. Addressable user name.
         * @returns a string
         */
        get: function () {
            return this._addressableUserName;
        },
        /**
         * Sets the addressableUserName property value. Addressable user name.
         * @param value Value to set for the addressableUserName property.
         */
        set: function (value) {
            this._addressableUserName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "azureActiveDirectoryDeviceId", {
        /**
         * Gets the azureActiveDirectoryDeviceId property value. AAD Device ID - to be deprecated
         * @returns a string
         */
        get: function () {
            return this._azureActiveDirectoryDeviceId;
        },
        /**
         * Sets the azureActiveDirectoryDeviceId property value. AAD Device ID - to be deprecated
         * @param value Value to set for the azureActiveDirectoryDeviceId property.
         */
        set: function (value) {
            this._azureActiveDirectoryDeviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display Name
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display Name
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "enrollmentState", {
        /**
         * Gets the enrollmentState property value. Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed, notContacted, blocked.
         * @returns a enrollmentState
         */
        get: function () {
            return this._enrollmentState;
        },
        /**
         * Sets the enrollmentState property value. Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed, notContacted, blocked.
         * @param value Value to set for the enrollmentState property.
         */
        set: function (value) {
            this._enrollmentState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "groupTag", {
        /**
         * Gets the groupTag property value. Group Tag of the Windows autopilot device.
         * @returns a string
         */
        get: function () {
            return this._groupTag;
        },
        /**
         * Sets the groupTag property value. Group Tag of the Windows autopilot device.
         * @param value Value to set for the groupTag property.
         */
        set: function (value) {
            this._groupTag = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "lastContactedDateTime", {
        /**
         * Gets the lastContactedDateTime property value. Intune Last Contacted Date Time of the Windows autopilot device.
         * @returns a Date
         */
        get: function () {
            return this._lastContactedDateTime;
        },
        /**
         * Sets the lastContactedDateTime property value. Intune Last Contacted Date Time of the Windows autopilot device.
         * @param value Value to set for the lastContactedDateTime property.
         */
        set: function (value) {
            this._lastContactedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "managedDeviceId", {
        /**
         * Gets the managedDeviceId property value. Managed Device ID
         * @returns a string
         */
        get: function () {
            return this._managedDeviceId;
        },
        /**
         * Sets the managedDeviceId property value. Managed Device ID
         * @param value Value to set for the managedDeviceId property.
         */
        set: function (value) {
            this._managedDeviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "manufacturer", {
        /**
         * Gets the manufacturer property value. Oem manufacturer of the Windows autopilot device.
         * @returns a string
         */
        get: function () {
            return this._manufacturer;
        },
        /**
         * Sets the manufacturer property value. Oem manufacturer of the Windows autopilot device.
         * @param value Value to set for the manufacturer property.
         */
        set: function (value) {
            this._manufacturer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "model", {
        /**
         * Gets the model property value. Model name of the Windows autopilot device.
         * @returns a string
         */
        get: function () {
            return this._model;
        },
        /**
         * Sets the model property value. Model name of the Windows autopilot device.
         * @param value Value to set for the model property.
         */
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "productKey", {
        /**
         * Gets the productKey property value. Product Key of the Windows autopilot device.
         * @returns a string
         */
        get: function () {
            return this._productKey;
        },
        /**
         * Sets the productKey property value. Product Key of the Windows autopilot device.
         * @param value Value to set for the productKey property.
         */
        set: function (value) {
            this._productKey = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "purchaseOrderIdentifier", {
        /**
         * Gets the purchaseOrderIdentifier property value. Purchase Order Identifier of the Windows autopilot device.
         * @returns a string
         */
        get: function () {
            return this._purchaseOrderIdentifier;
        },
        /**
         * Sets the purchaseOrderIdentifier property value. Purchase Order Identifier of the Windows autopilot device.
         * @param value Value to set for the purchaseOrderIdentifier property.
         */
        set: function (value) {
            this._purchaseOrderIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "resourceName", {
        /**
         * Gets the resourceName property value. Resource Name.
         * @returns a string
         */
        get: function () {
            return this._resourceName;
        },
        /**
         * Sets the resourceName property value. Resource Name.
         * @param value Value to set for the resourceName property.
         */
        set: function (value) {
            this._resourceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "serialNumber", {
        /**
         * Gets the serialNumber property value. Serial number of the Windows autopilot device.
         * @returns a string
         */
        get: function () {
            return this._serialNumber;
        },
        /**
         * Sets the serialNumber property value. Serial number of the Windows autopilot device.
         * @param value Value to set for the serialNumber property.
         */
        set: function (value) {
            this._serialNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "skuNumber", {
        /**
         * Gets the skuNumber property value. SKU Number
         * @returns a string
         */
        get: function () {
            return this._skuNumber;
        },
        /**
         * Sets the skuNumber property value. SKU Number
         * @param value Value to set for the skuNumber property.
         */
        set: function (value) {
            this._skuNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "systemFamily", {
        /**
         * Gets the systemFamily property value. System Family
         * @returns a string
         */
        get: function () {
            return this._systemFamily;
        },
        /**
         * Sets the systemFamily property value. System Family
         * @param value Value to set for the systemFamily property.
         */
        set: function (value) {
            this._systemFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsAutopilotDeviceIdentity.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. User Principal Name.
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. User Principal Name.
         * @param value Value to set for the userPrincipalName property.
         */
        set: function (value) {
            this._userPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WindowsAutopilotDeviceIdentity.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["addressableUserName", function (o, n) { o.addressableUserName = n.getStringValue(); }],
            ["azureActiveDirectoryDeviceId", function (o, n) { o.azureActiveDirectoryDeviceId = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["enrollmentState", function (o, n) { o.enrollmentState = n.getObjectValue(EnrollmentState); }],
            ["groupTag", function (o, n) { o.groupTag = n.getStringValue(); }],
            ["lastContactedDateTime", function (o, n) { o.lastContactedDateTime = n.getDateValue(); }],
            ["managedDeviceId", function (o, n) { o.managedDeviceId = n.getStringValue(); }],
            ["manufacturer", function (o, n) { o.manufacturer = n.getStringValue(); }],
            ["model", function (o, n) { o.model = n.getStringValue(); }],
            ["productKey", function (o, n) { o.productKey = n.getStringValue(); }],
            ["purchaseOrderIdentifier", function (o, n) { o.purchaseOrderIdentifier = n.getStringValue(); }],
            ["resourceName", function (o, n) { o.resourceName = n.getStringValue(); }],
            ["serialNumber", function (o, n) { o.serialNumber = n.getStringValue(); }],
            ["skuNumber", function (o, n) { o.skuNumber = n.getStringValue(); }],
            ["systemFamily", function (o, n) { o.systemFamily = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WindowsAutopilotDeviceIdentity.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("addressableUserName", this.addressableUserName);
        writer.writeStringValue("azureActiveDirectoryDeviceId", this.azureActiveDirectoryDeviceId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("enrollmentState", this.enrollmentState);
        writer.writeStringValue("groupTag", this.groupTag);
        writer.writeDateValue("lastContactedDateTime", this.lastContactedDateTime);
        writer.writeStringValue("managedDeviceId", this.managedDeviceId);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("model", this.model);
        writer.writeStringValue("productKey", this.productKey);
        writer.writeStringValue("purchaseOrderIdentifier", this.purchaseOrderIdentifier);
        writer.writeStringValue("resourceName", this.resourceName);
        writer.writeStringValue("serialNumber", this.serialNumber);
        writer.writeStringValue("skuNumber", this.skuNumber);
        writer.writeStringValue("systemFamily", this.systemFamily);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
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
    return WindowsAutopilotDeviceIdentity;
}(entity_1.Entity));
exports.WindowsAutopilotDeviceIdentity = WindowsAutopilotDeviceIdentity;

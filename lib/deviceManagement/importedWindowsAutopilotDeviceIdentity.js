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
exports.ImportedWindowsAutopilotDeviceIdentity = void 0;
var entity_1 = require("../entity");
var ImportedWindowsAutopilotDeviceIdentity = /** @class */ (function (_super) {
    __extends(ImportedWindowsAutopilotDeviceIdentity, _super);
    /**
     * Instantiates a new importedWindowsAutopilotDeviceIdentity and sets the default values.
     */
    function ImportedWindowsAutopilotDeviceIdentity() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ImportedWindowsAutopilotDeviceIdentity.prototype, "assignedUserPrincipalName", {
        /**
         * Gets the assignedUserPrincipalName property value. UPN of the user the device will be assigned
         * @returns a string
         */
        get: function () {
            return this._assignedUserPrincipalName;
        },
        /**
         * Sets the assignedUserPrincipalName property value. UPN of the user the device will be assigned
         * @param value Value to set for the assignedUserPrincipalName property.
         */
        set: function (value) {
            this._assignedUserPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ImportedWindowsAutopilotDeviceIdentity.prototype, "groupTag", {
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
    Object.defineProperty(ImportedWindowsAutopilotDeviceIdentity.prototype, "hardwareIdentifier", {
        /**
         * Gets the hardwareIdentifier property value. Hardware Blob of the Windows autopilot device.
         * @returns a binary
         */
        get: function () {
            return this._hardwareIdentifier;
        },
        /**
         * Sets the hardwareIdentifier property value. Hardware Blob of the Windows autopilot device.
         * @param value Value to set for the hardwareIdentifier property.
         */
        set: function (value) {
            this._hardwareIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ImportedWindowsAutopilotDeviceIdentity.prototype, "importId", {
        /**
         * Gets the importId property value. The Import Id of the Windows autopilot device.
         * @returns a string
         */
        get: function () {
            return this._importId;
        },
        /**
         * Sets the importId property value. The Import Id of the Windows autopilot device.
         * @param value Value to set for the importId property.
         */
        set: function (value) {
            this._importId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ImportedWindowsAutopilotDeviceIdentity.prototype, "productKey", {
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
    Object.defineProperty(ImportedWindowsAutopilotDeviceIdentity.prototype, "serialNumber", {
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
    Object.defineProperty(ImportedWindowsAutopilotDeviceIdentity.prototype, "state", {
        /**
         * Gets the state property value. Current state of the imported device.
         * @returns a importedWindowsAutopilotDeviceIdentityState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. Current state of the imported device.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ImportedWindowsAutopilotDeviceIdentity.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignedUserPrincipalName", function (o, n) { o.assignedUserPrincipalName = n.getStringValue(); }],
            ["groupTag", function (o, n) { o.groupTag = n.getStringValue(); }],
            ["hardwareIdentifier", function (o, n) { o.hardwareIdentifier = n.getObjectValue(Binary); }],
            ["importId", function (o, n) { o.importId = n.getStringValue(); }],
            ["productKey", function (o, n) { o.productKey = n.getStringValue(); }],
            ["serialNumber", function (o, n) { o.serialNumber = n.getStringValue(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(ImportedWindowsAutopilotDeviceIdentityState); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ImportedWindowsAutopilotDeviceIdentity.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("assignedUserPrincipalName", this.assignedUserPrincipalName);
        writer.writeStringValue("groupTag", this.groupTag);
        writer.writeObjectValue("hardwareIdentifier", this.hardwareIdentifier);
        writer.writeStringValue("importId", this.importId);
        writer.writeStringValue("productKey", this.productKey);
        writer.writeStringValue("serialNumber", this.serialNumber);
        writer.writeObjectValue("state", this.state);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ImportedWindowsAutopilotDeviceIdentity;
}(entity_1.Entity));
exports.ImportedWindowsAutopilotDeviceIdentity = ImportedWindowsAutopilotDeviceIdentity;

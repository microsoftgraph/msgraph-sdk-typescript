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
exports.WindowsHelloForBusinessAuthenticationMethod = void 0;
var authenticationMethod_1 = require("./authenticationMethod");
var device_1 = require("./device");
var WindowsHelloForBusinessAuthenticationMethod = /** @class */ (function (_super) {
    __extends(WindowsHelloForBusinessAuthenticationMethod, _super);
    /**
     * Instantiates a new windowsHelloForBusinessAuthenticationMethod and sets the default values.
     */
    function WindowsHelloForBusinessAuthenticationMethod() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WindowsHelloForBusinessAuthenticationMethod.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The date and time that this Windows Hello for Business key was registered.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The date and time that this Windows Hello for Business key was registered.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsHelloForBusinessAuthenticationMethod.prototype, "device", {
        /**
         * Gets the device property value. The registered device on which this Windows Hello for Business key resides.
         * @returns a device
         */
        get: function () {
            return this._device;
        },
        /**
         * Sets the device property value. The registered device on which this Windows Hello for Business key resides.
         * @param value Value to set for the device property.
         */
        set: function (value) {
            this._device = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsHelloForBusinessAuthenticationMethod.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the device on which Windows Hello for Business is registered
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the device on which Windows Hello for Business is registered
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsHelloForBusinessAuthenticationMethod.prototype, "keyStrength", {
        /**
         * Gets the keyStrength property value. Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
         * @returns a authenticationMethodKeyStrength
         */
        get: function () {
            return this._keyStrength;
        },
        /**
         * Sets the keyStrength property value. Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
         * @param value Value to set for the keyStrength property.
         */
        set: function (value) {
            this._keyStrength = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WindowsHelloForBusinessAuthenticationMethod.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["device", function (o, n) { o.device = n.getObjectValue(device_1.Device); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["keyStrength", function (o, n) { o.keyStrength = n.getObjectValue(AuthenticationMethodKeyStrength); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WindowsHelloForBusinessAuthenticationMethod.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("device", this.device);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("keyStrength", this.keyStrength);
    };
    ;
    ;
    ;
    ;
    ;
    return WindowsHelloForBusinessAuthenticationMethod;
}(authenticationMethod_1.AuthenticationMethod));
exports.WindowsHelloForBusinessAuthenticationMethod = WindowsHelloForBusinessAuthenticationMethod;

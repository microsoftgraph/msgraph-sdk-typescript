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
exports.WorkforceIntegration = void 0;
var changeTrackedEntity_1 = require("./changeTrackedEntity");
var WorkforceIntegration = /** @class */ (function (_super) {
    __extends(WorkforceIntegration, _super);
    /**
     * Instantiates a new workforceIntegration and sets the default values.
     */
    function WorkforceIntegration() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkforceIntegration.prototype, "apiVersion", {
        /**
         * Gets the apiVersion property value. API version for the call back URL. Start with 1.
         * @returns a integer
         */
        get: function () {
            return this._apiVersion;
        },
        /**
         * Sets the apiVersion property value. API version for the call back URL. Start with 1.
         * @param value Value to set for the apiVersion property.
         */
        set: function (value) {
            this._apiVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkforceIntegration.prototype, "displayName", {
        /**
         * Gets the displayName property value. Name of the workforce integration.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Name of the workforce integration.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkforceIntegration.prototype, "encryption", {
        /**
         * Gets the encryption property value. The workforce integration encryption resource.
         * @returns a workforceIntegrationEncryption
         */
        get: function () {
            return this._encryption;
        },
        /**
         * Sets the encryption property value. The workforce integration encryption resource.
         * @param value Value to set for the encryption property.
         */
        set: function (value) {
            this._encryption = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkforceIntegration.prototype, "isActive", {
        /**
         * Gets the isActive property value. Indicates whether this workforce integration is currently active and available.
         * @returns a boolean
         */
        get: function () {
            return this._isActive;
        },
        /**
         * Sets the isActive property value. Indicates whether this workforce integration is currently active and available.
         * @param value Value to set for the isActive property.
         */
        set: function (value) {
            this._isActive = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkforceIntegration.prototype, "supportedEntities", {
        /**
         * Gets the supportedEntities property value. This property will replace supports in v1.0. We recommend that you use this property instead of supports. The supports property will still be supported in beta for the time being. Possible values are none, shift, swapRequest, openshift, openShiftRequest, userShiftPreferences, offerShiftRequest, timeCard, timeOffReason, timeOff, timeOffRequest and unknownFutureValue. If selecting more than one value, all values must start with the first letter in uppercase.
         * @returns a workforceIntegrationSupportedEntities
         */
        get: function () {
            return this._supportedEntities;
        },
        /**
         * Sets the supportedEntities property value. This property will replace supports in v1.0. We recommend that you use this property instead of supports. The supports property will still be supported in beta for the time being. Possible values are none, shift, swapRequest, openshift, openShiftRequest, userShiftPreferences, offerShiftRequest, timeCard, timeOffReason, timeOff, timeOffRequest and unknownFutureValue. If selecting more than one value, all values must start with the first letter in uppercase.
         * @param value Value to set for the supportedEntities property.
         */
        set: function (value) {
            this._supportedEntities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkforceIntegration.prototype, "url", {
        /**
         * Gets the url property value. Workforce Integration URL for callbacks from the Shifts service.
         * @returns a string
         */
        get: function () {
            return this._url;
        },
        /**
         * Sets the url property value. Workforce Integration URL for callbacks from the Shifts service.
         * @param value Value to set for the url property.
         */
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkforceIntegration.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["apiVersion", function (o, n) { o.apiVersion = n.getNumberValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["encryption", function (o, n) { o.encryption = n.getObjectValue(WorkforceIntegrationEncryption); }],
            ["isActive", function (o, n) { o.isActive = n.getBooleanValue(); }],
            ["supportedEntities", function (o, n) { o.supportedEntities = n.getObjectValue(WorkforceIntegrationSupportedEntities); }],
            ["url", function (o, n) { o.url = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkforceIntegration.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("apiVersion", this.apiVersion);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("encryption", this.encryption);
        writer.writeBooleanValue("isActive", this.isActive);
        writer.writeObjectValue("supportedEntities", this.supportedEntities);
        writer.writeStringValue("url", this.url);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return WorkforceIntegration;
}(changeTrackedEntity_1.ChangeTrackedEntity));
exports.WorkforceIntegration = WorkforceIntegration;

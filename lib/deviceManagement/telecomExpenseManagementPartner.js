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
exports.TelecomExpenseManagementPartner = void 0;
var entity_1 = require("../entity");
var TelecomExpenseManagementPartner = /** @class */ (function (_super) {
    __extends(TelecomExpenseManagementPartner, _super);
    /**
     * Instantiates a new telecomExpenseManagementPartner and sets the default values.
     */
    function TelecomExpenseManagementPartner() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TelecomExpenseManagementPartner.prototype, "appAuthorized", {
        /**
         * Gets the appAuthorized property value. Whether the partner's AAD app has been authorized to access Intune.
         * @returns a boolean
         */
        get: function () {
            return this._appAuthorized;
        },
        /**
         * Sets the appAuthorized property value. Whether the partner's AAD app has been authorized to access Intune.
         * @param value Value to set for the appAuthorized property.
         */
        set: function (value) {
            this._appAuthorized = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TelecomExpenseManagementPartner.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display name of the TEM partner.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display name of the TEM partner.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TelecomExpenseManagementPartner.prototype, "enabled", {
        /**
         * Gets the enabled property value. Whether Intune's connection to the TEM service is currently enabled or disabled.
         * @returns a boolean
         */
        get: function () {
            return this._enabled;
        },
        /**
         * Sets the enabled property value. Whether Intune's connection to the TEM service is currently enabled or disabled.
         * @param value Value to set for the enabled property.
         */
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TelecomExpenseManagementPartner.prototype, "lastConnectionDateTime", {
        /**
         * Gets the lastConnectionDateTime property value. Timestamp of the last request sent to Intune by the TEM partner.
         * @returns a Date
         */
        get: function () {
            return this._lastConnectionDateTime;
        },
        /**
         * Sets the lastConnectionDateTime property value. Timestamp of the last request sent to Intune by the TEM partner.
         * @param value Value to set for the lastConnectionDateTime property.
         */
        set: function (value) {
            this._lastConnectionDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TelecomExpenseManagementPartner.prototype, "url", {
        /**
         * Gets the url property value. URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.
         * @returns a string
         */
        get: function () {
            return this._url;
        },
        /**
         * Sets the url property value. URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.
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
    TelecomExpenseManagementPartner.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appAuthorized", function (o, n) { o.appAuthorized = n.getBooleanValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["enabled", function (o, n) { o.enabled = n.getBooleanValue(); }],
            ["lastConnectionDateTime", function (o, n) { o.lastConnectionDateTime = n.getDateValue(); }],
            ["url", function (o, n) { o.url = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TelecomExpenseManagementPartner.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("appAuthorized", this.appAuthorized);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeDateValue("lastConnectionDateTime", this.lastConnectionDateTime);
        writer.writeStringValue("url", this.url);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return TelecomExpenseManagementPartner;
}(entity_1.Entity));
exports.TelecomExpenseManagementPartner = TelecomExpenseManagementPartner;

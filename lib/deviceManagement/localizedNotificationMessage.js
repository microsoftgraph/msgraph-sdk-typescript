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
exports.LocalizedNotificationMessage = void 0;
var entity_1 = require("../entity");
var LocalizedNotificationMessage = /** @class */ (function (_super) {
    __extends(LocalizedNotificationMessage, _super);
    /**
     * Instantiates a new localizedNotificationMessage and sets the default values.
     */
    function LocalizedNotificationMessage() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(LocalizedNotificationMessage.prototype, "isDefault", {
        /**
         * Gets the isDefault property value. Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message.
         * @returns a boolean
         */
        get: function () {
            return this._isDefault;
        },
        /**
         * Sets the isDefault property value. Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message.
         * @param value Value to set for the isDefault property.
         */
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LocalizedNotificationMessage.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LocalizedNotificationMessage.prototype, "locale", {
        /**
         * Gets the locale property value. The Locale for which this message is destined.
         * @returns a string
         */
        get: function () {
            return this._locale;
        },
        /**
         * Sets the locale property value. The Locale for which this message is destined.
         * @param value Value to set for the locale property.
         */
        set: function (value) {
            this._locale = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LocalizedNotificationMessage.prototype, "messageTemplate", {
        /**
         * Gets the messageTemplate property value. The Message Template content.
         * @returns a string
         */
        get: function () {
            return this._messageTemplate;
        },
        /**
         * Sets the messageTemplate property value. The Message Template content.
         * @param value Value to set for the messageTemplate property.
         */
        set: function (value) {
            this._messageTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LocalizedNotificationMessage.prototype, "subject", {
        /**
         * Gets the subject property value. The Message Template Subject.
         * @returns a string
         */
        get: function () {
            return this._subject;
        },
        /**
         * Sets the subject property value. The Message Template Subject.
         * @param value Value to set for the subject property.
         */
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    LocalizedNotificationMessage.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["isDefault", function (o, n) { o.isDefault = n.getBooleanValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["locale", function (o, n) { o.locale = n.getStringValue(); }],
            ["messageTemplate", function (o, n) { o.messageTemplate = n.getStringValue(); }],
            ["subject", function (o, n) { o.subject = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    LocalizedNotificationMessage.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("locale", this.locale);
        writer.writeStringValue("messageTemplate", this.messageTemplate);
        writer.writeStringValue("subject", this.subject);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return LocalizedNotificationMessage;
}(entity_1.Entity));
exports.LocalizedNotificationMessage = LocalizedNotificationMessage;

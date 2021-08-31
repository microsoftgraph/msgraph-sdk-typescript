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
exports.NotificationMessageTemplate = void 0;
var entity_1 = require("../entity");
var localizedNotificationMessage_1 = require("./localizedNotificationMessage");
var NotificationMessageTemplate = /** @class */ (function (_super) {
    __extends(NotificationMessageTemplate, _super);
    /**
     * Instantiates a new notificationMessageTemplate and sets the default values.
     */
    function NotificationMessageTemplate() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(NotificationMessageTemplate.prototype, "brandingOptions", {
        /**
         * Gets the brandingOptions property value. The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none, includeCompanyLogo, includeCompanyName, includeContactInformation, includeCompanyPortalLink.
         * @returns a notificationTemplateBrandingOptions
         */
        get: function () {
            return this._brandingOptions;
        },
        /**
         * Sets the brandingOptions property value. The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none, includeCompanyLogo, includeCompanyName, includeContactInformation, includeCompanyPortalLink.
         * @param value Value to set for the brandingOptions property.
         */
        set: function (value) {
            this._brandingOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(NotificationMessageTemplate.prototype, "defaultLocale", {
        /**
         * Gets the defaultLocale property value. The default locale to fallback onto when the requested locale is not available.
         * @returns a string
         */
        get: function () {
            return this._defaultLocale;
        },
        /**
         * Sets the defaultLocale property value. The default locale to fallback onto when the requested locale is not available.
         * @param value Value to set for the defaultLocale property.
         */
        set: function (value) {
            this._defaultLocale = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(NotificationMessageTemplate.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display name for the Notification Message Template.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display name for the Notification Message Template.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(NotificationMessageTemplate.prototype, "lastModifiedDateTime", {
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
    Object.defineProperty(NotificationMessageTemplate.prototype, "localizedNotificationMessages", {
        /**
         * Gets the localizedNotificationMessages property value. The list of localized messages for this Notification Message Template.
         * @returns a localizedNotificationMessage
         */
        get: function () {
            return this._localizedNotificationMessages;
        },
        /**
         * Sets the localizedNotificationMessages property value. The list of localized messages for this Notification Message Template.
         * @param value Value to set for the localizedNotificationMessages property.
         */
        set: function (value) {
            this._localizedNotificationMessages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    NotificationMessageTemplate.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["brandingOptions", function (o, n) { o.brandingOptions = n.getObjectValue(NotificationTemplateBrandingOptions); }],
            ["defaultLocale", function (o, n) { o.defaultLocale = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["localizedNotificationMessages", function (o, n) { o.localizedNotificationMessages = n.getCollectionOfObjectValues(localizedNotificationMessage_1.LocalizedNotificationMessage); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    NotificationMessageTemplate.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("brandingOptions", this.brandingOptions);
        writer.writeStringValue("defaultLocale", this.defaultLocale);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues("localizedNotificationMessages", this.localizedNotificationMessages);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return NotificationMessageTemplate;
}(entity_1.Entity));
exports.NotificationMessageTemplate = NotificationMessageTemplate;

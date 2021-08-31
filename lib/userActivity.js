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
exports.UserActivity = void 0;
var entity_1 = require("./entity");
var activityHistoryItem_1 = require("./me/activityHistoryItem");
var visualInfo_1 = require("./me/visualInfo");
var UserActivity = /** @class */ (function (_super) {
    __extends(UserActivity, _super);
    /**
     * Instantiates a new userActivity and sets the default values.
     */
    function UserActivity() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(UserActivity.prototype, "activationUrl", {
        /**
         * Gets the activationUrl property value. Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists.
         * @returns a string
         */
        get: function () {
            return this._activationUrl;
        },
        /**
         * Sets the activationUrl property value. Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists.
         * @param value Value to set for the activationUrl property.
         */
        set: function (value) {
            this._activationUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "activitySourceHost", {
        /**
         * Gets the activitySourceHost property value. Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint.
         * @returns a string
         */
        get: function () {
            return this._activitySourceHost;
        },
        /**
         * Sets the activitySourceHost property value. Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint.
         * @param value Value to set for the activitySourceHost property.
         */
        set: function (value) {
            this._activitySourceHost = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "appActivityId", {
        /**
         * Gets the appActivityId property value. Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter.
         * @returns a string
         */
        get: function () {
            return this._appActivityId;
        },
        /**
         * Sets the appActivityId property value. Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter.
         * @param value Value to set for the appActivityId property.
         */
        set: function (value) {
            this._appActivityId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "appDisplayName", {
        /**
         * Gets the appDisplayName property value. Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device.
         * @returns a string
         */
        get: function () {
            return this._appDisplayName;
        },
        /**
         * Sets the appDisplayName property value. Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device.
         * @param value Value to set for the appDisplayName property.
         */
        set: function (value) {
            this._appDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "contentInfo", {
        /**
         * Gets the contentInfo property value. Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax.
         * @returns a Json
         */
        get: function () {
            return this._contentInfo;
        },
        /**
         * Sets the contentInfo property value. Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax.
         * @param value Value to set for the contentInfo property.
         */
        set: function (value) {
            this._contentInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "contentUrl", {
        /**
         * Gets the contentUrl property value. Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed).
         * @returns a string
         */
        get: function () {
            return this._contentUrl;
        },
        /**
         * Sets the contentUrl property value. Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed).
         * @param value Value to set for the contentUrl property.
         */
        set: function (value) {
            this._contentUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "expirationDateTime", {
        /**
         * Gets the expirationDateTime property value. Set by the server. DateTime in UTC when the object expired on the server.
         * @returns a Date
         */
        get: function () {
            return this._expirationDateTime;
        },
        /**
         * Sets the expirationDateTime property value. Set by the server. DateTime in UTC when the object expired on the server.
         * @param value Value to set for the expirationDateTime property.
         */
        set: function (value) {
            this._expirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "fallbackUrl", {
        /**
         * Gets the fallbackUrl property value. Optional. URL used to launch the activity in a web-based app, if available.
         * @returns a string
         */
        get: function () {
            return this._fallbackUrl;
        },
        /**
         * Sets the fallbackUrl property value. Optional. URL used to launch the activity in a web-based app, if available.
         * @param value Value to set for the fallbackUrl property.
         */
        set: function (value) {
            this._fallbackUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "historyItems", {
        /**
         * Gets the historyItems property value. Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
         * @returns a activityHistoryItem
         */
        get: function () {
            return this._historyItems;
        },
        /**
         * Sets the historyItems property value. Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
         * @param value Value to set for the historyItems property.
         */
        set: function (value) {
            this._historyItems = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "status", {
        /**
         * Gets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
         * @returns a status
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "userTimezone", {
        /**
         * Gets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation.
         * @returns a string
         */
        get: function () {
            return this._userTimezone;
        },
        /**
         * Sets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation.
         * @param value Value to set for the userTimezone property.
         */
        set: function (value) {
            this._userTimezone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserActivity.prototype, "visualElements", {
        /**
         * Gets the visualElements property value.
         * @returns a visualInfo
         */
        get: function () {
            return this._visualElements;
        },
        /**
         * Sets the visualElements property value.
         * @param value Value to set for the visualElements property.
         */
        set: function (value) {
            this._visualElements = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    UserActivity.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["activationUrl", function (o, n) { o.activationUrl = n.getStringValue(); }],
            ["activitySourceHost", function (o, n) { o.activitySourceHost = n.getStringValue(); }],
            ["appActivityId", function (o, n) { o.appActivityId = n.getStringValue(); }],
            ["appDisplayName", function (o, n) { o.appDisplayName = n.getStringValue(); }],
            ["contentInfo", function (o, n) { o.contentInfo = n.getObjectValue(Json); }],
            ["contentUrl", function (o, n) { o.contentUrl = n.getStringValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["fallbackUrl", function (o, n) { o.fallbackUrl = n.getStringValue(); }],
            ["historyItems", function (o, n) { o.historyItems = n.getCollectionOfObjectValues(activityHistoryItem_1.ActivityHistoryItem); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(Status); }],
            ["userTimezone", function (o, n) { o.userTimezone = n.getStringValue(); }],
            ["visualElements", function (o, n) { o.visualElements = n.getObjectValue(visualInfo_1.VisualInfo); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    UserActivity.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("activationUrl", this.activationUrl);
        writer.writeStringValue("activitySourceHost", this.activitySourceHost);
        writer.writeStringValue("appActivityId", this.appActivityId);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeObjectValue("contentInfo", this.contentInfo);
        writer.writeStringValue("contentUrl", this.contentUrl);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("fallbackUrl", this.fallbackUrl);
        writer.writeCollectionOfObjectValues("historyItems", this.historyItems);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue("status", this.status);
        writer.writeStringValue("userTimezone", this.userTimezone);
        writer.writeObjectValue("visualElements", this.visualElements);
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
    return UserActivity;
}(entity_1.Entity));
exports.UserActivity = UserActivity;

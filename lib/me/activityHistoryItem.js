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
exports.ActivityHistoryItem = void 0;
var entity_1 = require("../entity");
var userActivity_1 = require("../userActivity");
var ActivityHistoryItem = /** @class */ (function (_super) {
    __extends(ActivityHistoryItem, _super);
    /**
     * Instantiates a new activityHistoryItem and sets the default values.
     */
    function ActivityHistoryItem() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ActivityHistoryItem.prototype, "activeDurationSeconds", {
        /**
         * Gets the activeDurationSeconds property value. Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime.
         * @returns a integer
         */
        get: function () {
            return this._activeDurationSeconds;
        },
        /**
         * Sets the activeDurationSeconds property value. Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime.
         * @param value Value to set for the activeDurationSeconds property.
         */
        set: function (value) {
            this._activeDurationSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ActivityHistoryItem.prototype, "activity", {
        /**
         * Gets the activity property value.
         * @returns a userActivity
         */
        get: function () {
            return this._activity;
        },
        /**
         * Sets the activity property value.
         * @param value Value to set for the activity property.
         */
        set: function (value) {
            this._activity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ActivityHistoryItem.prototype, "createdDateTime", {
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
    Object.defineProperty(ActivityHistoryItem.prototype, "expirationDateTime", {
        /**
         * Gets the expirationDateTime property value. Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.
         * @returns a Date
         */
        get: function () {
            return this._expirationDateTime;
        },
        /**
         * Sets the expirationDateTime property value. Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.
         * @param value Value to set for the expirationDateTime property.
         */
        set: function (value) {
            this._expirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ActivityHistoryItem.prototype, "lastActiveDateTime", {
        /**
         * Gets the lastActiveDateTime property value. Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing.
         * @returns a Date
         */
        get: function () {
            return this._lastActiveDateTime;
        },
        /**
         * Sets the lastActiveDateTime property value. Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing.
         * @param value Value to set for the lastActiveDateTime property.
         */
        set: function (value) {
            this._lastActiveDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ActivityHistoryItem.prototype, "lastModifiedDateTime", {
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
    Object.defineProperty(ActivityHistoryItem.prototype, "startedDateTime", {
        /**
         * Gets the startedDateTime property value. Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.
         * @returns a Date
         */
        get: function () {
            return this._startedDateTime;
        },
        /**
         * Sets the startedDateTime property value. Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.
         * @param value Value to set for the startedDateTime property.
         */
        set: function (value) {
            this._startedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ActivityHistoryItem.prototype, "status", {
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
    Object.defineProperty(ActivityHistoryItem.prototype, "userTimezone", {
        /**
         * Gets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation.
         * @returns a string
         */
        get: function () {
            return this._userTimezone;
        },
        /**
         * Sets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation.
         * @param value Value to set for the userTimezone property.
         */
        set: function (value) {
            this._userTimezone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ActivityHistoryItem.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["activeDurationSeconds", function (o, n) { o.activeDurationSeconds = n.getNumberValue(); }],
            ["activity", function (o, n) { o.activity = n.getObjectValue(userActivity_1.UserActivity); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["lastActiveDateTime", function (o, n) { o.lastActiveDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["startedDateTime", function (o, n) { o.startedDateTime = n.getDateValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(Status); }],
            ["userTimezone", function (o, n) { o.userTimezone = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ActivityHistoryItem.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("activeDurationSeconds", this.activeDurationSeconds);
        writer.writeObjectValue("activity", this.activity);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("lastActiveDateTime", this.lastActiveDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("startedDateTime", this.startedDateTime);
        writer.writeObjectValue("status", this.status);
        writer.writeStringValue("userTimezone", this.userTimezone);
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
    return ActivityHistoryItem;
}(entity_1.Entity));
exports.ActivityHistoryItem = ActivityHistoryItem;

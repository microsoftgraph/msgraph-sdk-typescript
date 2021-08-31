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
exports.ItemActivityStat = void 0;
var entity_1 = require("./entity");
var itemActivity_1 = require("./itemActivity");
var ItemActivityStat = /** @class */ (function (_super) {
    __extends(ItemActivityStat, _super);
    /**
     * Instantiates a new itemActivityStat and sets the default values.
     */
    function ItemActivityStat() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ItemActivityStat.prototype, "access", {
        /**
         * Gets the access property value. Statistics about the access actions in this interval. Read-only.
         * @returns a itemActionStat
         */
        get: function () {
            return this._access;
        },
        /**
         * Sets the access property value. Statistics about the access actions in this interval. Read-only.
         * @param value Value to set for the access property.
         */
        set: function (value) {
            this._access = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivityStat.prototype, "activities", {
        /**
         * Gets the activities property value. Exposes the itemActivities represented in this itemActivityStat resource.
         * @returns a itemActivity
         */
        get: function () {
            return this._activities;
        },
        /**
         * Sets the activities property value. Exposes the itemActivities represented in this itemActivityStat resource.
         * @param value Value to set for the activities property.
         */
        set: function (value) {
            this._activities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivityStat.prototype, "create", {
        /**
         * Gets the create property value. Statistics about the create actions in this interval. Read-only.
         * @returns a itemActionStat
         */
        get: function () {
            return this._create;
        },
        /**
         * Sets the create property value. Statistics about the create actions in this interval. Read-only.
         * @param value Value to set for the create property.
         */
        set: function (value) {
            this._create = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivityStat.prototype, "delete", {
        /**
         * Gets the delete property value. Statistics about the delete actions in this interval. Read-only.
         * @returns a itemActionStat
         */
        get: function () {
            return this._delete;
        },
        /**
         * Sets the delete property value. Statistics about the delete actions in this interval. Read-only.
         * @param value Value to set for the delete property.
         */
        set: function (value) {
            this._delete = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivityStat.prototype, "edit", {
        /**
         * Gets the edit property value. Statistics about the edit actions in this interval. Read-only.
         * @returns a itemActionStat
         */
        get: function () {
            return this._edit;
        },
        /**
         * Sets the edit property value. Statistics about the edit actions in this interval. Read-only.
         * @param value Value to set for the edit property.
         */
        set: function (value) {
            this._edit = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivityStat.prototype, "endDateTime", {
        /**
         * Gets the endDateTime property value. When the interval ends. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._endDateTime;
        },
        /**
         * Sets the endDateTime property value. When the interval ends. Read-only.
         * @param value Value to set for the endDateTime property.
         */
        set: function (value) {
            this._endDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivityStat.prototype, "incompleteData", {
        /**
         * Gets the incompleteData property value. Indicates that the statistics in this interval are based on incomplete data. Read-only.
         * @returns a incompleteData
         */
        get: function () {
            return this._incompleteData;
        },
        /**
         * Sets the incompleteData property value. Indicates that the statistics in this interval are based on incomplete data. Read-only.
         * @param value Value to set for the incompleteData property.
         */
        set: function (value) {
            this._incompleteData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivityStat.prototype, "isTrending", {
        /**
         * Gets the isTrending property value. Indicates whether the item is 'trending.' Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._isTrending;
        },
        /**
         * Sets the isTrending property value. Indicates whether the item is 'trending.' Read-only.
         * @param value Value to set for the isTrending property.
         */
        set: function (value) {
            this._isTrending = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivityStat.prototype, "move", {
        /**
         * Gets the move property value. Statistics about the move actions in this interval. Read-only.
         * @returns a itemActionStat
         */
        get: function () {
            return this._move;
        },
        /**
         * Sets the move property value. Statistics about the move actions in this interval. Read-only.
         * @param value Value to set for the move property.
         */
        set: function (value) {
            this._move = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivityStat.prototype, "startDateTime", {
        /**
         * Gets the startDateTime property value. When the interval starts. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._startDateTime;
        },
        /**
         * Sets the startDateTime property value. When the interval starts. Read-only.
         * @param value Value to set for the startDateTime property.
         */
        set: function (value) {
            this._startDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ItemActivityStat.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["access", function (o, n) { o.access = n.getObjectValue(ItemActionStat); }],
            ["activities", function (o, n) { o.activities = n.getCollectionOfObjectValues(itemActivity_1.ItemActivity); }],
            ["create", function (o, n) { o.create = n.getObjectValue(ItemActionStat); }],
            ["delete", function (o, n) { o.delete = n.getObjectValue(ItemActionStat); }],
            ["edit", function (o, n) { o.edit = n.getObjectValue(ItemActionStat); }],
            ["endDateTime", function (o, n) { o.endDateTime = n.getDateValue(); }],
            ["incompleteData", function (o, n) { o.incompleteData = n.getObjectValue(IncompleteData); }],
            ["isTrending", function (o, n) { o.isTrending = n.getBooleanValue(); }],
            ["move", function (o, n) { o.move = n.getObjectValue(ItemActionStat); }],
            ["startDateTime", function (o, n) { o.startDateTime = n.getDateValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ItemActivityStat.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("access", this.access);
        writer.writeCollectionOfObjectValues("activities", this.activities);
        writer.writeObjectValue("create", this.create);
        writer.writeObjectValue("delete", this.delete);
        writer.writeObjectValue("edit", this.edit);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeObjectValue("incompleteData", this.incompleteData);
        writer.writeBooleanValue("isTrending", this.isTrending);
        writer.writeObjectValue("move", this.move);
        writer.writeDateValue("startDateTime", this.startDateTime);
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
    return ItemActivityStat;
}(entity_1.Entity));
exports.ItemActivityStat = ItemActivityStat;

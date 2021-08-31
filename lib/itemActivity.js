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
exports.ItemActivity = void 0;
var driveItem_1 = require("./driveItem");
var entity_1 = require("./entity");
var identitySet_1 = require("./identitySet");
var ItemActivity = /** @class */ (function (_super) {
    __extends(ItemActivity, _super);
    /**
     * Instantiates a new itemActivity and sets the default values.
     */
    function ItemActivity() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ItemActivity.prototype, "access", {
        /**
         * Gets the access property value. An item was accessed.
         * @returns a accessAction
         */
        get: function () {
            return this._access;
        },
        /**
         * Sets the access property value. An item was accessed.
         * @param value Value to set for the access property.
         */
        set: function (value) {
            this._access = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivity.prototype, "activityDateTime", {
        /**
         * Gets the activityDateTime property value. Details about when the activity took place. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._activityDateTime;
        },
        /**
         * Sets the activityDateTime property value. Details about when the activity took place. Read-only.
         * @param value Value to set for the activityDateTime property.
         */
        set: function (value) {
            this._activityDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivity.prototype, "actor", {
        /**
         * Gets the actor property value. Identity of who performed the action. Read-only.
         * @returns a identitySet
         */
        get: function () {
            return this._actor;
        },
        /**
         * Sets the actor property value. Identity of who performed the action. Read-only.
         * @param value Value to set for the actor property.
         */
        set: function (value) {
            this._actor = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemActivity.prototype, "driveItem", {
        /**
         * Gets the driveItem property value. Exposes the driveItem that was the target of this activity.
         * @returns a driveItem
         */
        get: function () {
            return this._driveItem;
        },
        /**
         * Sets the driveItem property value. Exposes the driveItem that was the target of this activity.
         * @param value Value to set for the driveItem property.
         */
        set: function (value) {
            this._driveItem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ItemActivity.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["access", function (o, n) { o.access = n.getObjectValue(AccessAction); }],
            ["activityDateTime", function (o, n) { o.activityDateTime = n.getDateValue(); }],
            ["actor", function (o, n) { o.actor = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["driveItem", function (o, n) { o.driveItem = n.getObjectValue(driveItem_1.DriveItem); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ItemActivity.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("access", this.access);
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        writer.writeObjectValue("actor", this.actor);
        writer.writeObjectValue("driveItem", this.driveItem);
    };
    ;
    ;
    ;
    ;
    ;
    return ItemActivity;
}(entity_1.Entity));
exports.ItemActivity = ItemActivity;

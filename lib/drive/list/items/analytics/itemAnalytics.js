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
exports.ItemAnalytics = void 0;
var entity_1 = require("../../../../entity");
var itemActivityStat_1 = require("../../../../itemActivityStat");
var ItemAnalytics = /** @class */ (function (_super) {
    __extends(ItemAnalytics, _super);
    /**
     * Instantiates a new ItemAnalytics and sets the default values.
     */
    function ItemAnalytics() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ItemAnalytics.prototype, "allTime", {
        /**
         * Gets the allTime property value.
         * @returns a itemActivityStat
         */
        get: function () {
            return this._allTime;
        },
        /**
         * Sets the allTime property value.
         * @param value Value to set for the allTime property.
         */
        set: function (value) {
            this._allTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemAnalytics.prototype, "itemActivityStats", {
        /**
         * Gets the itemActivityStats property value.
         * @returns a itemActivityStat
         */
        get: function () {
            return this._itemActivityStats;
        },
        /**
         * Sets the itemActivityStats property value.
         * @param value Value to set for the itemActivityStats property.
         */
        set: function (value) {
            this._itemActivityStats = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemAnalytics.prototype, "lastSevenDays", {
        /**
         * Gets the lastSevenDays property value.
         * @returns a itemActivityStat
         */
        get: function () {
            return this._lastSevenDays;
        },
        /**
         * Sets the lastSevenDays property value.
         * @param value Value to set for the lastSevenDays property.
         */
        set: function (value) {
            this._lastSevenDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ItemAnalytics.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["allTime", function (o, n) { o.allTime = n.getObjectValue(itemActivityStat_1.ItemActivityStat); }],
            ["itemActivityStats", function (o, n) { o.itemActivityStats = n.getCollectionOfObjectValues(itemActivityStat_1.ItemActivityStat); }],
            ["lastSevenDays", function (o, n) { o.lastSevenDays = n.getObjectValue(itemActivityStat_1.ItemActivityStat); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ItemAnalytics.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("allTime", this.allTime);
        writer.writeCollectionOfObjectValues("itemActivityStats", this.itemActivityStats);
        writer.writeObjectValue("lastSevenDays", this.lastSevenDays);
    };
    ;
    ;
    ;
    ;
    return ItemAnalytics;
}(entity_1.Entity));
exports.ItemAnalytics = ItemAnalytics;

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
exports.OfficeGraphInsights = void 0;
var entity_1 = require("../../entity");
var sharedInsight_1 = require("../../sharedInsight");
var trending_1 = require("../../trending");
var usedInsight_1 = require("../../usedInsight");
var OfficeGraphInsights = /** @class */ (function (_super) {
    __extends(OfficeGraphInsights, _super);
    /**
     * Instantiates a new OfficeGraphInsights and sets the default values.
     */
    function OfficeGraphInsights() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OfficeGraphInsights.prototype, "shared", {
        /**
         * Gets the shared property value. Access this property from the derived type itemInsights.
         * @returns a sharedInsight
         */
        get: function () {
            return this._shared;
        },
        /**
         * Sets the shared property value. Access this property from the derived type itemInsights.
         * @param value Value to set for the shared property.
         */
        set: function (value) {
            this._shared = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OfficeGraphInsights.prototype, "trending", {
        /**
         * Gets the trending property value. Access this property from the derived type itemInsights.
         * @returns a trending
         */
        get: function () {
            return this._trending;
        },
        /**
         * Sets the trending property value. Access this property from the derived type itemInsights.
         * @param value Value to set for the trending property.
         */
        set: function (value) {
            this._trending = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OfficeGraphInsights.prototype, "used", {
        /**
         * Gets the used property value. Access this property from the derived type itemInsights.
         * @returns a usedInsight
         */
        get: function () {
            return this._used;
        },
        /**
         * Sets the used property value. Access this property from the derived type itemInsights.
         * @param value Value to set for the used property.
         */
        set: function (value) {
            this._used = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OfficeGraphInsights.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["shared", function (o, n) { o.shared = n.getCollectionOfObjectValues(sharedInsight_1.SharedInsight); }],
            ["trending", function (o, n) { o.trending = n.getCollectionOfObjectValues(trending_1.Trending); }],
            ["used", function (o, n) { o.used = n.getCollectionOfObjectValues(usedInsight_1.UsedInsight); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OfficeGraphInsights.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("shared", this.shared);
        writer.writeCollectionOfObjectValues("trending", this.trending);
        writer.writeCollectionOfObjectValues("used", this.used);
    };
    ;
    ;
    ;
    ;
    return OfficeGraphInsights;
}(entity_1.Entity));
exports.OfficeGraphInsights = OfficeGraphInsights;

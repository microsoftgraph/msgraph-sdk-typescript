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
exports.CategoryAxis = void 0;
var entity_1 = require("../../../../../../../entity");
var workbookChartAxisFormat_1 = require("./format/workbookChartAxisFormat");
var workbookChartGridlines_1 = require("./majorGridlines/workbookChartGridlines");
var workbookChartAxisTitle_1 = require("./title/workbookChartAxisTitle");
var CategoryAxis = /** @class */ (function (_super) {
    __extends(CategoryAxis, _super);
    /**
     * Instantiates a new CategoryAxis and sets the default values.
     */
    function CategoryAxis() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(CategoryAxis.prototype, "format", {
        /**
         * Gets the format property value. Represents the formatting of a chart object, which includes line and font formatting. Read-only.
         * @returns a workbookChartAxisFormat
         */
        get: function () {
            return this._format;
        },
        /**
         * Sets the format property value. Represents the formatting of a chart object, which includes line and font formatting. Read-only.
         * @param value Value to set for the format property.
         */
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CategoryAxis.prototype, "majorGridlines", {
        /**
         * Gets the majorGridlines property value. Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
         * @returns a workbookChartGridlines
         */
        get: function () {
            return this._majorGridlines;
        },
        /**
         * Sets the majorGridlines property value. Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
         * @param value Value to set for the majorGridlines property.
         */
        set: function (value) {
            this._majorGridlines = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CategoryAxis.prototype, "majorUnit", {
        /**
         * Gets the majorUnit property value. Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
         * @returns a Json
         */
        get: function () {
            return this._majorUnit;
        },
        /**
         * Sets the majorUnit property value. Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
         * @param value Value to set for the majorUnit property.
         */
        set: function (value) {
            this._majorUnit = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CategoryAxis.prototype, "maximum", {
        /**
         * Gets the maximum property value. Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         * @returns a Json
         */
        get: function () {
            return this._maximum;
        },
        /**
         * Sets the maximum property value. Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         * @param value Value to set for the maximum property.
         */
        set: function (value) {
            this._maximum = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CategoryAxis.prototype, "minimum", {
        /**
         * Gets the minimum property value. Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         * @returns a Json
         */
        get: function () {
            return this._minimum;
        },
        /**
         * Sets the minimum property value. Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         * @param value Value to set for the minimum property.
         */
        set: function (value) {
            this._minimum = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CategoryAxis.prototype, "minorGridlines", {
        /**
         * Gets the minorGridlines property value. Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
         * @returns a workbookChartGridlines
         */
        get: function () {
            return this._minorGridlines;
        },
        /**
         * Sets the minorGridlines property value. Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
         * @param value Value to set for the minorGridlines property.
         */
        set: function (value) {
            this._minorGridlines = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CategoryAxis.prototype, "minorUnit", {
        /**
         * Gets the minorUnit property value. Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
         * @returns a Json
         */
        get: function () {
            return this._minorUnit;
        },
        /**
         * Sets the minorUnit property value. Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
         * @param value Value to set for the minorUnit property.
         */
        set: function (value) {
            this._minorUnit = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CategoryAxis.prototype, "title", {
        /**
         * Gets the title property value. Represents the axis title. Read-only.
         * @returns a workbookChartAxisTitle
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. Represents the axis title. Read-only.
         * @param value Value to set for the title property.
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    CategoryAxis.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["format", function (o, n) { o.format = n.getObjectValue(workbookChartAxisFormat_1.WorkbookChartAxisFormat); }],
            ["majorGridlines", function (o, n) { o.majorGridlines = n.getObjectValue(workbookChartGridlines_1.WorkbookChartGridlines); }],
            ["majorUnit", function (o, n) { o.majorUnit = n.getObjectValue(Json); }],
            ["maximum", function (o, n) { o.maximum = n.getObjectValue(Json); }],
            ["minimum", function (o, n) { o.minimum = n.getObjectValue(Json); }],
            ["minorGridlines", function (o, n) { o.minorGridlines = n.getObjectValue(workbookChartGridlines_1.WorkbookChartGridlines); }],
            ["minorUnit", function (o, n) { o.minorUnit = n.getObjectValue(Json); }],
            ["title", function (o, n) { o.title = n.getObjectValue(workbookChartAxisTitle_1.WorkbookChartAxisTitle); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    CategoryAxis.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("format", this.format);
        writer.writeObjectValue("majorGridlines", this.majorGridlines);
        writer.writeObjectValue("majorUnit", this.majorUnit);
        writer.writeObjectValue("maximum", this.maximum);
        writer.writeObjectValue("minimum", this.minimum);
        writer.writeObjectValue("minorGridlines", this.minorGridlines);
        writer.writeObjectValue("minorUnit", this.minorUnit);
        writer.writeObjectValue("title", this.title);
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
    return CategoryAxis;
}(entity_1.Entity));
exports.CategoryAxis = CategoryAxis;

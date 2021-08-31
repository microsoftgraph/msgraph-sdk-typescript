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
exports.WorkbookChartSeries = void 0;
var entity_1 = require("../../../entity");
var workbookChartSeriesFormat_1 = require("../names/worksheet/charts/series/format/workbookChartSeriesFormat");
var workbookChartPoint_1 = require("./charts/workbookChartPoint");
var WorkbookChartSeries = /** @class */ (function (_super) {
    __extends(WorkbookChartSeries, _super);
    /**
     * Instantiates a new workbookChartSeries and sets the default values.
     */
    function WorkbookChartSeries() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookChartSeries.prototype, "format", {
        /**
         * Gets the format property value. Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
         * @returns a workbookChartSeriesFormat
         */
        get: function () {
            return this._format;
        },
        /**
         * Sets the format property value. Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
         * @param value Value to set for the format property.
         */
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChartSeries.prototype, "name", {
        /**
         * Gets the name property value. Represents the name of a series in a chart.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. Represents the name of a series in a chart.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChartSeries.prototype, "points", {
        /**
         * Gets the points property value. Represents a collection of all points in the series. Read-only.
         * @returns a workbookChartPoint
         */
        get: function () {
            return this._points;
        },
        /**
         * Sets the points property value. Represents a collection of all points in the series. Read-only.
         * @param value Value to set for the points property.
         */
        set: function (value) {
            this._points = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkbookChartSeries.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["format", function (o, n) { o.format = n.getObjectValue(workbookChartSeriesFormat_1.WorkbookChartSeriesFormat); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["points", function (o, n) { o.points = n.getCollectionOfObjectValues(workbookChartPoint_1.WorkbookChartPoint); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookChartSeries.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("format", this.format);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues("points", this.points);
    };
    ;
    ;
    ;
    ;
    return WorkbookChartSeries;
}(entity_1.Entity));
exports.WorkbookChartSeries = WorkbookChartSeries;

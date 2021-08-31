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
exports.WorkbookChart = void 0;
var entity_1 = require("../../entity");
var workbookWorksheet_1 = require("../../workbookWorksheet");
var workbookChartAxes_1 = require("./names/worksheet/charts/axes/workbookChartAxes");
var workbookChartDataLabels_1 = require("./names/worksheet/charts/dataLabels/workbookChartDataLabels");
var workbookChartAreaFormat_1 = require("./names/worksheet/charts/format/workbookChartAreaFormat");
var workbookChartLegend_1 = require("./names/worksheet/charts/legend/workbookChartLegend");
var workbookChartTitle_1 = require("./names/worksheet/charts/title/workbookChartTitle");
var workbookChartSeries_1 = require("./worksheets/workbookChartSeries");
var WorkbookChart = /** @class */ (function (_super) {
    __extends(WorkbookChart, _super);
    /**
     * Instantiates a new workbookChart and sets the default values.
     */
    function WorkbookChart() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookChart.prototype, "axes", {
        /**
         * Gets the axes property value. Represents chart axes. Read-only.
         * @returns a workbookChartAxes
         */
        get: function () {
            return this._axes;
        },
        /**
         * Sets the axes property value. Represents chart axes. Read-only.
         * @param value Value to set for the axes property.
         */
        set: function (value) {
            this._axes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "dataLabels", {
        /**
         * Gets the dataLabels property value. Represents the datalabels on the chart. Read-only.
         * @returns a workbookChartDataLabels
         */
        get: function () {
            return this._dataLabels;
        },
        /**
         * Sets the dataLabels property value. Represents the datalabels on the chart. Read-only.
         * @param value Value to set for the dataLabels property.
         */
        set: function (value) {
            this._dataLabels = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "format", {
        /**
         * Gets the format property value. Encapsulates the format properties for the chart area. Read-only.
         * @returns a workbookChartAreaFormat
         */
        get: function () {
            return this._format;
        },
        /**
         * Sets the format property value. Encapsulates the format properties for the chart area. Read-only.
         * @param value Value to set for the format property.
         */
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "height", {
        /**
         * Gets the height property value. Represents the height, in points, of the chart object.
         * @returns a double
         */
        get: function () {
            return this._height;
        },
        /**
         * Sets the height property value. Represents the height, in points, of the chart object.
         * @param value Value to set for the height property.
         */
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "left", {
        /**
         * Gets the left property value. The distance, in points, from the left side of the chart to the worksheet origin.
         * @returns a double
         */
        get: function () {
            return this._left;
        },
        /**
         * Sets the left property value. The distance, in points, from the left side of the chart to the worksheet origin.
         * @param value Value to set for the left property.
         */
        set: function (value) {
            this._left = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "legend", {
        /**
         * Gets the legend property value. Represents the legend for the chart. Read-only.
         * @returns a workbookChartLegend
         */
        get: function () {
            return this._legend;
        },
        /**
         * Sets the legend property value. Represents the legend for the chart. Read-only.
         * @param value Value to set for the legend property.
         */
        set: function (value) {
            this._legend = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "name", {
        /**
         * Gets the name property value. Represents the name of a chart object.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. Represents the name of a chart object.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "series", {
        /**
         * Gets the series property value. Represents either a single series or collection of series in the chart. Read-only.
         * @returns a workbookChartSeries
         */
        get: function () {
            return this._series;
        },
        /**
         * Sets the series property value. Represents either a single series or collection of series in the chart. Read-only.
         * @param value Value to set for the series property.
         */
        set: function (value) {
            this._series = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "title", {
        /**
         * Gets the title property value. Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.
         * @returns a workbookChartTitle
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.
         * @param value Value to set for the title property.
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "top", {
        /**
         * Gets the top property value. Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
         * @returns a double
         */
        get: function () {
            return this._top;
        },
        /**
         * Sets the top property value. Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
         * @param value Value to set for the top property.
         */
        set: function (value) {
            this._top = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "width", {
        /**
         * Gets the width property value. Represents the width, in points, of the chart object.
         * @returns a double
         */
        get: function () {
            return this._width;
        },
        /**
         * Sets the width property value. Represents the width, in points, of the chart object.
         * @param value Value to set for the width property.
         */
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChart.prototype, "worksheet", {
        /**
         * Gets the worksheet property value. The worksheet containing the current chart. Read-only.
         * @returns a workbookWorksheet
         */
        get: function () {
            return this._worksheet;
        },
        /**
         * Sets the worksheet property value. The worksheet containing the current chart. Read-only.
         * @param value Value to set for the worksheet property.
         */
        set: function (value) {
            this._worksheet = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkbookChart.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["axes", function (o, n) { o.axes = n.getObjectValue(workbookChartAxes_1.WorkbookChartAxes); }],
            ["dataLabels", function (o, n) { o.dataLabels = n.getObjectValue(workbookChartDataLabels_1.WorkbookChartDataLabels); }],
            ["format", function (o, n) { o.format = n.getObjectValue(workbookChartAreaFormat_1.WorkbookChartAreaFormat); }],
            ["height", function (o, n) { o.height = n.getNumberValue(); }],
            ["left", function (o, n) { o.left = n.getNumberValue(); }],
            ["legend", function (o, n) { o.legend = n.getObjectValue(workbookChartLegend_1.WorkbookChartLegend); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["series", function (o, n) { o.series = n.getCollectionOfObjectValues(workbookChartSeries_1.WorkbookChartSeries); }],
            ["title", function (o, n) { o.title = n.getObjectValue(workbookChartTitle_1.WorkbookChartTitle); }],
            ["top", function (o, n) { o.top = n.getNumberValue(); }],
            ["width", function (o, n) { o.width = n.getNumberValue(); }],
            ["worksheet", function (o, n) { o.worksheet = n.getObjectValue(workbookWorksheet_1.WorkbookWorksheet); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookChart.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("axes", this.axes);
        writer.writeObjectValue("dataLabels", this.dataLabels);
        writer.writeObjectValue("format", this.format);
        writer.writeNumberValue("height", this.height);
        writer.writeNumberValue("left", this.left);
        writer.writeObjectValue("legend", this.legend);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues("series", this.series);
        writer.writeObjectValue("title", this.title);
        writer.writeNumberValue("top", this.top);
        writer.writeNumberValue("width", this.width);
        writer.writeObjectValue("worksheet", this.worksheet);
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
    return WorkbookChart;
}(entity_1.Entity));
exports.WorkbookChart = WorkbookChart;

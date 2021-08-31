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
exports.DataLabels = void 0;
var entity_1 = require("../../../../../../entity");
var workbookChartDataLabelFormat_1 = require("./format/workbookChartDataLabelFormat");
var DataLabels = /** @class */ (function (_super) {
    __extends(DataLabels, _super);
    /**
     * Instantiates a new DataLabels and sets the default values.
     */
    function DataLabels() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DataLabels.prototype, "format", {
        /**
         * Gets the format property value. Represents the format of chart data labels, which includes fill and font formatting. Read-only.
         * @returns a workbookChartDataLabelFormat
         */
        get: function () {
            return this._format;
        },
        /**
         * Sets the format property value. Represents the format of chart data labels, which includes fill and font formatting. Read-only.
         * @param value Value to set for the format property.
         */
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataLabels.prototype, "position", {
        /**
         * Gets the position property value. DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.
         * @returns a string
         */
        get: function () {
            return this._position;
        },
        /**
         * Sets the position property value. DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.
         * @param value Value to set for the position property.
         */
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataLabels.prototype, "separator", {
        /**
         * Gets the separator property value. String representing the separator used for the data labels on a chart.
         * @returns a string
         */
        get: function () {
            return this._separator;
        },
        /**
         * Sets the separator property value. String representing the separator used for the data labels on a chart.
         * @param value Value to set for the separator property.
         */
        set: function (value) {
            this._separator = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataLabels.prototype, "showBubbleSize", {
        /**
         * Gets the showBubbleSize property value. Boolean value representing if the data label bubble size is visible or not.
         * @returns a boolean
         */
        get: function () {
            return this._showBubbleSize;
        },
        /**
         * Sets the showBubbleSize property value. Boolean value representing if the data label bubble size is visible or not.
         * @param value Value to set for the showBubbleSize property.
         */
        set: function (value) {
            this._showBubbleSize = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataLabels.prototype, "showCategoryName", {
        /**
         * Gets the showCategoryName property value. Boolean value representing if the data label category name is visible or not.
         * @returns a boolean
         */
        get: function () {
            return this._showCategoryName;
        },
        /**
         * Sets the showCategoryName property value. Boolean value representing if the data label category name is visible or not.
         * @param value Value to set for the showCategoryName property.
         */
        set: function (value) {
            this._showCategoryName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataLabels.prototype, "showLegendKey", {
        /**
         * Gets the showLegendKey property value. Boolean value representing if the data label legend key is visible or not.
         * @returns a boolean
         */
        get: function () {
            return this._showLegendKey;
        },
        /**
         * Sets the showLegendKey property value. Boolean value representing if the data label legend key is visible or not.
         * @param value Value to set for the showLegendKey property.
         */
        set: function (value) {
            this._showLegendKey = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataLabels.prototype, "showPercentage", {
        /**
         * Gets the showPercentage property value. Boolean value representing if the data label percentage is visible or not.
         * @returns a boolean
         */
        get: function () {
            return this._showPercentage;
        },
        /**
         * Sets the showPercentage property value. Boolean value representing if the data label percentage is visible or not.
         * @param value Value to set for the showPercentage property.
         */
        set: function (value) {
            this._showPercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataLabels.prototype, "showSeriesName", {
        /**
         * Gets the showSeriesName property value. Boolean value representing if the data label series name is visible or not.
         * @returns a boolean
         */
        get: function () {
            return this._showSeriesName;
        },
        /**
         * Sets the showSeriesName property value. Boolean value representing if the data label series name is visible or not.
         * @param value Value to set for the showSeriesName property.
         */
        set: function (value) {
            this._showSeriesName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataLabels.prototype, "showValue", {
        /**
         * Gets the showValue property value. Boolean value representing if the data label value is visible or not.
         * @returns a boolean
         */
        get: function () {
            return this._showValue;
        },
        /**
         * Sets the showValue property value. Boolean value representing if the data label value is visible or not.
         * @param value Value to set for the showValue property.
         */
        set: function (value) {
            this._showValue = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DataLabels.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["format", function (o, n) { o.format = n.getObjectValue(workbookChartDataLabelFormat_1.WorkbookChartDataLabelFormat); }],
            ["position", function (o, n) { o.position = n.getStringValue(); }],
            ["separator", function (o, n) { o.separator = n.getStringValue(); }],
            ["showBubbleSize", function (o, n) { o.showBubbleSize = n.getBooleanValue(); }],
            ["showCategoryName", function (o, n) { o.showCategoryName = n.getBooleanValue(); }],
            ["showLegendKey", function (o, n) { o.showLegendKey = n.getBooleanValue(); }],
            ["showPercentage", function (o, n) { o.showPercentage = n.getBooleanValue(); }],
            ["showSeriesName", function (o, n) { o.showSeriesName = n.getBooleanValue(); }],
            ["showValue", function (o, n) { o.showValue = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DataLabels.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("format", this.format);
        writer.writeStringValue("position", this.position);
        writer.writeStringValue("separator", this.separator);
        writer.writeBooleanValue("showBubbleSize", this.showBubbleSize);
        writer.writeBooleanValue("showCategoryName", this.showCategoryName);
        writer.writeBooleanValue("showLegendKey", this.showLegendKey);
        writer.writeBooleanValue("showPercentage", this.showPercentage);
        writer.writeBooleanValue("showSeriesName", this.showSeriesName);
        writer.writeBooleanValue("showValue", this.showValue);
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
    return DataLabels;
}(entity_1.Entity));
exports.DataLabels = DataLabels;

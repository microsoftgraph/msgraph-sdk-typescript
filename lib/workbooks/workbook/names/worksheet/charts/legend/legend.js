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
exports.Legend = void 0;
var entity_1 = require("../../../../../../entity");
var workbookChartLegendFormat_1 = require("./format/workbookChartLegendFormat");
var Legend = /** @class */ (function (_super) {
    __extends(Legend, _super);
    /**
     * Instantiates a new Legend and sets the default values.
     */
    function Legend() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Legend.prototype, "format", {
        /**
         * Gets the format property value. Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
         * @returns a workbookChartLegendFormat
         */
        get: function () {
            return this._format;
        },
        /**
         * Sets the format property value. Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
         * @param value Value to set for the format property.
         */
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Legend.prototype, "overlay", {
        /**
         * Gets the overlay property value. Boolean value for whether the chart legend should overlap with the main body of the chart.
         * @returns a boolean
         */
        get: function () {
            return this._overlay;
        },
        /**
         * Sets the overlay property value. Boolean value for whether the chart legend should overlap with the main body of the chart.
         * @param value Value to set for the overlay property.
         */
        set: function (value) {
            this._overlay = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Legend.prototype, "position", {
        /**
         * Gets the position property value. Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom.
         * @returns a string
         */
        get: function () {
            return this._position;
        },
        /**
         * Sets the position property value. Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom.
         * @param value Value to set for the position property.
         */
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Legend.prototype, "visible", {
        /**
         * Gets the visible property value. A boolean value the represents the visibility of a ChartLegend object.
         * @returns a boolean
         */
        get: function () {
            return this._visible;
        },
        /**
         * Sets the visible property value. A boolean value the represents the visibility of a ChartLegend object.
         * @param value Value to set for the visible property.
         */
        set: function (value) {
            this._visible = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Legend.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["format", function (o, n) { o.format = n.getObjectValue(workbookChartLegendFormat_1.WorkbookChartLegendFormat); }],
            ["overlay", function (o, n) { o.overlay = n.getBooleanValue(); }],
            ["position", function (o, n) { o.position = n.getStringValue(); }],
            ["visible", function (o, n) { o.visible = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Legend.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("format", this.format);
        writer.writeBooleanValue("overlay", this.overlay);
        writer.writeStringValue("position", this.position);
        writer.writeBooleanValue("visible", this.visible);
    };
    ;
    ;
    ;
    ;
    ;
    return Legend;
}(entity_1.Entity));
exports.Legend = Legend;

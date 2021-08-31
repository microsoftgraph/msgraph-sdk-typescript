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
exports.WorkbookChartAxes = void 0;
var entity_1 = require("../../../../../../entity");
var workbookChartAxis_1 = require("./categoryAxis/workbookChartAxis");
var WorkbookChartAxes = /** @class */ (function (_super) {
    __extends(WorkbookChartAxes, _super);
    /**
     * Instantiates a new WorkbookChartAxes and sets the default values.
     */
    function WorkbookChartAxes() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookChartAxes.prototype, "categoryAxis", {
        /**
         * Gets the categoryAxis property value. Represents the category axis in a chart. Read-only.
         * @returns a workbookChartAxis
         */
        get: function () {
            return this._categoryAxis;
        },
        /**
         * Sets the categoryAxis property value. Represents the category axis in a chart. Read-only.
         * @param value Value to set for the categoryAxis property.
         */
        set: function (value) {
            this._categoryAxis = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChartAxes.prototype, "seriesAxis", {
        /**
         * Gets the seriesAxis property value. Represents the series axis of a 3-dimensional chart. Read-only.
         * @returns a workbookChartAxis
         */
        get: function () {
            return this._seriesAxis;
        },
        /**
         * Sets the seriesAxis property value. Represents the series axis of a 3-dimensional chart. Read-only.
         * @param value Value to set for the seriesAxis property.
         */
        set: function (value) {
            this._seriesAxis = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChartAxes.prototype, "valueAxis", {
        /**
         * Gets the valueAxis property value. Represents the value axis in an axis. Read-only.
         * @returns a workbookChartAxis
         */
        get: function () {
            return this._valueAxis;
        },
        /**
         * Sets the valueAxis property value. Represents the value axis in an axis. Read-only.
         * @param value Value to set for the valueAxis property.
         */
        set: function (value) {
            this._valueAxis = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkbookChartAxes.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["categoryAxis", function (o, n) { o.categoryAxis = n.getObjectValue(workbookChartAxis_1.WorkbookChartAxis); }],
            ["seriesAxis", function (o, n) { o.seriesAxis = n.getObjectValue(workbookChartAxis_1.WorkbookChartAxis); }],
            ["valueAxis", function (o, n) { o.valueAxis = n.getObjectValue(workbookChartAxis_1.WorkbookChartAxis); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookChartAxes.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("categoryAxis", this.categoryAxis);
        writer.writeObjectValue("seriesAxis", this.seriesAxis);
        writer.writeObjectValue("valueAxis", this.valueAxis);
    };
    ;
    ;
    ;
    ;
    return WorkbookChartAxes;
}(entity_1.Entity));
exports.WorkbookChartAxes = WorkbookChartAxes;

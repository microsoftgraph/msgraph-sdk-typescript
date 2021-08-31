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
exports.WorkbookChartTitle = void 0;
var entity_1 = require("../../../../../../entity");
var workbookChartTitleFormat_1 = require("./format/workbookChartTitleFormat");
var WorkbookChartTitle = /** @class */ (function (_super) {
    __extends(WorkbookChartTitle, _super);
    /**
     * Instantiates a new WorkbookChartTitle and sets the default values.
     */
    function WorkbookChartTitle() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookChartTitle.prototype, "format", {
        /**
         * Gets the format property value. Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
         * @returns a workbookChartTitleFormat
         */
        get: function () {
            return this._format;
        },
        /**
         * Sets the format property value. Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
         * @param value Value to set for the format property.
         */
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChartTitle.prototype, "overlay", {
        /**
         * Gets the overlay property value. Boolean value representing if the chart title will overlay the chart or not.
         * @returns a boolean
         */
        get: function () {
            return this._overlay;
        },
        /**
         * Sets the overlay property value. Boolean value representing if the chart title will overlay the chart or not.
         * @param value Value to set for the overlay property.
         */
        set: function (value) {
            this._overlay = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChartTitle.prototype, "text", {
        /**
         * Gets the text property value. Represents the title text of a chart.
         * @returns a string
         */
        get: function () {
            return this._text;
        },
        /**
         * Sets the text property value. Represents the title text of a chart.
         * @param value Value to set for the text property.
         */
        set: function (value) {
            this._text = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookChartTitle.prototype, "visible", {
        /**
         * Gets the visible property value. A boolean value the represents the visibility of a chart title object.
         * @returns a boolean
         */
        get: function () {
            return this._visible;
        },
        /**
         * Sets the visible property value. A boolean value the represents the visibility of a chart title object.
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
    WorkbookChartTitle.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["format", function (o, n) { o.format = n.getObjectValue(workbookChartTitleFormat_1.WorkbookChartTitleFormat); }],
            ["overlay", function (o, n) { o.overlay = n.getBooleanValue(); }],
            ["text", function (o, n) { o.text = n.getStringValue(); }],
            ["visible", function (o, n) { o.visible = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookChartTitle.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("format", this.format);
        writer.writeBooleanValue("overlay", this.overlay);
        writer.writeStringValue("text", this.text);
        writer.writeBooleanValue("visible", this.visible);
    };
    ;
    ;
    ;
    ;
    ;
    return WorkbookChartTitle;
}(entity_1.Entity));
exports.WorkbookChartTitle = WorkbookChartTitle;

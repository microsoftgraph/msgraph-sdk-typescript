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
exports.WorkbookChartPointFormat = void 0;
var entity_1 = require("../../../../../../../../entity");
var workbookChartFill_1 = require("../../../dataLabels/format/fill/workbookChartFill");
var WorkbookChartPointFormat = /** @class */ (function (_super) {
    __extends(WorkbookChartPointFormat, _super);
    /**
     * Instantiates a new WorkbookChartPointFormat and sets the default values.
     */
    function WorkbookChartPointFormat() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookChartPointFormat.prototype, "fill", {
        /**
         * Gets the fill property value. Represents the fill format of a chart, which includes background formating information. Read-only.
         * @returns a workbookChartFill
         */
        get: function () {
            return this._fill;
        },
        /**
         * Sets the fill property value. Represents the fill format of a chart, which includes background formating information. Read-only.
         * @param value Value to set for the fill property.
         */
        set: function (value) {
            this._fill = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkbookChartPointFormat.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["fill", function (o, n) { o.fill = n.getObjectValue(workbookChartFill_1.WorkbookChartFill); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookChartPointFormat.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("fill", this.fill);
    };
    ;
    ;
    return WorkbookChartPointFormat;
}(entity_1.Entity));
exports.WorkbookChartPointFormat = WorkbookChartPointFormat;

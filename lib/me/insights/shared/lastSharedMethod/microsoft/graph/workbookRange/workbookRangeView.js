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
exports.WorkbookRangeView = void 0;
var entity_1 = require("../../../../../../../../../entity");
var WorkbookRangeView = /** @class */ (function (_super) {
    __extends(WorkbookRangeView, _super);
    /**
     * Instantiates a new workbookRangeView and sets the default values.
     */
    function WorkbookRangeView() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "cellAddresses", {
        /**
         * Gets the cellAddresses property value. Represents the cell addresses
         * @returns a Json
         */
        get: function () {
            return this._cellAddresses;
        },
        /**
         * Sets the cellAddresses property value. Represents the cell addresses
         * @param value Value to set for the cellAddresses property.
         */
        set: function (value) {
            this._cellAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "columnCount", {
        /**
         * Gets the columnCount property value. Returns the number of visible columns. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._columnCount;
        },
        /**
         * Sets the columnCount property value. Returns the number of visible columns. Read-only.
         * @param value Value to set for the columnCount property.
         */
        set: function (value) {
            this._columnCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "formulas", {
        /**
         * Gets the formulas property value. Represents the formula in A1-style notation.
         * @returns a Json
         */
        get: function () {
            return this._formulas;
        },
        /**
         * Sets the formulas property value. Represents the formula in A1-style notation.
         * @param value Value to set for the formulas property.
         */
        set: function (value) {
            this._formulas = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "formulasLocal", {
        /**
         * Gets the formulasLocal property value. Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
         * @returns a Json
         */
        get: function () {
            return this._formulasLocal;
        },
        /**
         * Sets the formulasLocal property value. Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
         * @param value Value to set for the formulasLocal property.
         */
        set: function (value) {
            this._formulasLocal = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "formulasR1C1", {
        /**
         * Gets the formulasR1C1 property value. Represents the formula in R1C1-style notation.
         * @returns a Json
         */
        get: function () {
            return this._formulasR1C1;
        },
        /**
         * Sets the formulasR1C1 property value. Represents the formula in R1C1-style notation.
         * @param value Value to set for the formulasR1C1 property.
         */
        set: function (value) {
            this._formulasR1C1 = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "index", {
        /**
         * Gets the index property value. Index of the range.
         * @returns a integer
         */
        get: function () {
            return this._index;
        },
        /**
         * Sets the index property value. Index of the range.
         * @param value Value to set for the index property.
         */
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "numberFormat", {
        /**
         * Gets the numberFormat property value. Represents Excel's number format code for the given cell. Read-only.
         * @returns a Json
         */
        get: function () {
            return this._numberFormat;
        },
        /**
         * Sets the numberFormat property value. Represents Excel's number format code for the given cell. Read-only.
         * @param value Value to set for the numberFormat property.
         */
        set: function (value) {
            this._numberFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "rowCount", {
        /**
         * Gets the rowCount property value. Returns the number of visible rows. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._rowCount;
        },
        /**
         * Sets the rowCount property value. Returns the number of visible rows. Read-only.
         * @param value Value to set for the rowCount property.
         */
        set: function (value) {
            this._rowCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "rows", {
        /**
         * Gets the rows property value. Represents a collection of range views associated with the range. Read-only. Read-only.
         * @returns a workbookRangeView
         */
        get: function () {
            return this._rows;
        },
        /**
         * Sets the rows property value. Represents a collection of range views associated with the range. Read-only. Read-only.
         * @param value Value to set for the rows property.
         */
        set: function (value) {
            this._rows = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "text", {
        /**
         * Gets the text property value. Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
         * @returns a Json
         */
        get: function () {
            return this._text;
        },
        /**
         * Sets the text property value. Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
         * @param value Value to set for the text property.
         */
        set: function (value) {
            this._text = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "values", {
        /**
         * Gets the values property value. Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         * @returns a Json
         */
        get: function () {
            return this._values;
        },
        /**
         * Sets the values property value. Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         * @param value Value to set for the values property.
         */
        set: function (value) {
            this._values = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRangeView.prototype, "valueTypes", {
        /**
         * Gets the valueTypes property value. Represents the type of data of each cell. Read-only. Possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error.
         * @returns a Json
         */
        get: function () {
            return this._valueTypes;
        },
        /**
         * Sets the valueTypes property value. Represents the type of data of each cell. Read-only. Possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error.
         * @param value Value to set for the valueTypes property.
         */
        set: function (value) {
            this._valueTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkbookRangeView.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["cellAddresses", function (o, n) { o.cellAddresses = n.getObjectValue(Json); }],
            ["columnCount", function (o, n) { o.columnCount = n.getNumberValue(); }],
            ["formulas", function (o, n) { o.formulas = n.getObjectValue(Json); }],
            ["formulasLocal", function (o, n) { o.formulasLocal = n.getObjectValue(Json); }],
            ["formulasR1C1", function (o, n) { o.formulasR1C1 = n.getObjectValue(Json); }],
            ["index", function (o, n) { o.index = n.getNumberValue(); }],
            ["numberFormat", function (o, n) { o.numberFormat = n.getObjectValue(Json); }],
            ["rowCount", function (o, n) { o.rowCount = n.getNumberValue(); }],
            ["rows", function (o, n) { o.rows = n.getCollectionOfObjectValues(WorkbookRangeView); }],
            ["text", function (o, n) { o.text = n.getObjectValue(Json); }],
            ["values", function (o, n) { o.values = n.getObjectValue(Json); }],
            ["valueTypes", function (o, n) { o.valueTypes = n.getObjectValue(Json); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookRangeView.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("cellAddresses", this.cellAddresses);
        writer.writeNumberValue("columnCount", this.columnCount);
        writer.writeObjectValue("formulas", this.formulas);
        writer.writeObjectValue("formulasLocal", this.formulasLocal);
        writer.writeObjectValue("formulasR1C1", this.formulasR1C1);
        writer.writeNumberValue("index", this.index);
        writer.writeObjectValue("numberFormat", this.numberFormat);
        writer.writeNumberValue("rowCount", this.rowCount);
        writer.writeCollectionOfObjectValues("rows", this.rows);
        writer.writeObjectValue("text", this.text);
        writer.writeObjectValue("values", this.values);
        writer.writeObjectValue("valueTypes", this.valueTypes);
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
    return WorkbookRangeView;
}(entity_1.Entity));
exports.WorkbookRangeView = WorkbookRangeView;

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
exports.WorkbookRange = void 0;
var entity_1 = require("../../../../../entity");
var workbookWorksheet_1 = require("../../../../../workbookWorksheet");
var WorkbookRange = /** @class */ (function (_super) {
    __extends(WorkbookRange, _super);
    /**
     * Instantiates a new workbookRange and sets the default values.
     */
    function WorkbookRange() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookRange.prototype, "address", {
        /**
         * Gets the address property value. Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
         * @returns a string
         */
        get: function () {
            return this._address;
        },
        /**
         * Sets the address property value. Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
         * @param value Value to set for the address property.
         */
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "addressLocal", {
        /**
         * Gets the addressLocal property value. Represents range reference for the specified range in the language of the user. Read-only.
         * @returns a string
         */
        get: function () {
            return this._addressLocal;
        },
        /**
         * Sets the addressLocal property value. Represents range reference for the specified range in the language of the user. Read-only.
         * @param value Value to set for the addressLocal property.
         */
        set: function (value) {
            this._addressLocal = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "cellCount", {
        /**
         * Gets the cellCount property value. Number of cells in the range. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._cellCount;
        },
        /**
         * Sets the cellCount property value. Number of cells in the range. Read-only.
         * @param value Value to set for the cellCount property.
         */
        set: function (value) {
            this._cellCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "columnCount", {
        /**
         * Gets the columnCount property value. Represents the total number of columns in the range. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._columnCount;
        },
        /**
         * Sets the columnCount property value. Represents the total number of columns in the range. Read-only.
         * @param value Value to set for the columnCount property.
         */
        set: function (value) {
            this._columnCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "columnHidden", {
        /**
         * Gets the columnHidden property value. Represents if all columns of the current range are hidden.
         * @returns a boolean
         */
        get: function () {
            return this._columnHidden;
        },
        /**
         * Sets the columnHidden property value. Represents if all columns of the current range are hidden.
         * @param value Value to set for the columnHidden property.
         */
        set: function (value) {
            this._columnHidden = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "columnIndex", {
        /**
         * Gets the columnIndex property value. Represents the column number of the first cell in the range. Zero-indexed. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._columnIndex;
        },
        /**
         * Sets the columnIndex property value. Represents the column number of the first cell in the range. Zero-indexed. Read-only.
         * @param value Value to set for the columnIndex property.
         */
        set: function (value) {
            this._columnIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "format", {
        /**
         * Gets the format property value. Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
         * @returns a workbookRangeFormat
         */
        get: function () {
            return this._format;
        },
        /**
         * Sets the format property value. Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
         * @param value Value to set for the format property.
         */
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "formulas", {
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
    Object.defineProperty(WorkbookRange.prototype, "formulasLocal", {
        /**
         * Gets the formulasLocal property value. Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
         * @returns a Json
         */
        get: function () {
            return this._formulasLocal;
        },
        /**
         * Sets the formulasLocal property value. Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
         * @param value Value to set for the formulasLocal property.
         */
        set: function (value) {
            this._formulasLocal = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "formulasR1C1", {
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
    Object.defineProperty(WorkbookRange.prototype, "hidden", {
        /**
         * Gets the hidden property value. Represents if all cells of the current range are hidden. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._hidden;
        },
        /**
         * Sets the hidden property value. Represents if all cells of the current range are hidden. Read-only.
         * @param value Value to set for the hidden property.
         */
        set: function (value) {
            this._hidden = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "numberFormat", {
        /**
         * Gets the numberFormat property value. Represents Excel's number format code for the given cell.
         * @returns a Json
         */
        get: function () {
            return this._numberFormat;
        },
        /**
         * Sets the numberFormat property value. Represents Excel's number format code for the given cell.
         * @param value Value to set for the numberFormat property.
         */
        set: function (value) {
            this._numberFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "rowCount", {
        /**
         * Gets the rowCount property value. Returns the total number of rows in the range. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._rowCount;
        },
        /**
         * Sets the rowCount property value. Returns the total number of rows in the range. Read-only.
         * @param value Value to set for the rowCount property.
         */
        set: function (value) {
            this._rowCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "rowHidden", {
        /**
         * Gets the rowHidden property value. Represents if all rows of the current range are hidden.
         * @returns a boolean
         */
        get: function () {
            return this._rowHidden;
        },
        /**
         * Sets the rowHidden property value. Represents if all rows of the current range are hidden.
         * @param value Value to set for the rowHidden property.
         */
        set: function (value) {
            this._rowHidden = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "rowIndex", {
        /**
         * Gets the rowIndex property value. Returns the row number of the first cell in the range. Zero-indexed. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._rowIndex;
        },
        /**
         * Sets the rowIndex property value. Returns the row number of the first cell in the range. Zero-indexed. Read-only.
         * @param value Value to set for the rowIndex property.
         */
        set: function (value) {
            this._rowIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "sort", {
        /**
         * Gets the sort property value. The worksheet containing the current range. Read-only.
         * @returns a workbookRangeSort
         */
        get: function () {
            return this._sort;
        },
        /**
         * Sets the sort property value. The worksheet containing the current range. Read-only.
         * @param value Value to set for the sort property.
         */
        set: function (value) {
            this._sort = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "text", {
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
    Object.defineProperty(WorkbookRange.prototype, "values", {
        /**
         * Gets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         * @returns a Json
         */
        get: function () {
            return this._values;
        },
        /**
         * Sets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         * @param value Value to set for the values property.
         */
        set: function (value) {
            this._values = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "valueTypes", {
        /**
         * Gets the valueTypes property value. Represents the type of data of each cell. Possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. Read-only.
         * @returns a Json
         */
        get: function () {
            return this._valueTypes;
        },
        /**
         * Sets the valueTypes property value. Represents the type of data of each cell. Possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. Read-only.
         * @param value Value to set for the valueTypes property.
         */
        set: function (value) {
            this._valueTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookRange.prototype, "worksheet", {
        /**
         * Gets the worksheet property value. The worksheet containing the current range. Read-only.
         * @returns a workbookWorksheet
         */
        get: function () {
            return this._worksheet;
        },
        /**
         * Sets the worksheet property value. The worksheet containing the current range. Read-only.
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
    WorkbookRange.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["address", function (o, n) { o.address = n.getStringValue(); }],
            ["addressLocal", function (o, n) { o.addressLocal = n.getStringValue(); }],
            ["cellCount", function (o, n) { o.cellCount = n.getNumberValue(); }],
            ["columnCount", function (o, n) { o.columnCount = n.getNumberValue(); }],
            ["columnHidden", function (o, n) { o.columnHidden = n.getBooleanValue(); }],
            ["columnIndex", function (o, n) { o.columnIndex = n.getNumberValue(); }],
            ["format", function (o, n) { o.format = n.getObjectValue(WorkbookRangeFormat); }],
            ["formulas", function (o, n) { o.formulas = n.getObjectValue(Json); }],
            ["formulasLocal", function (o, n) { o.formulasLocal = n.getObjectValue(Json); }],
            ["formulasR1C1", function (o, n) { o.formulasR1C1 = n.getObjectValue(Json); }],
            ["hidden", function (o, n) { o.hidden = n.getBooleanValue(); }],
            ["numberFormat", function (o, n) { o.numberFormat = n.getObjectValue(Json); }],
            ["rowCount", function (o, n) { o.rowCount = n.getNumberValue(); }],
            ["rowHidden", function (o, n) { o.rowHidden = n.getBooleanValue(); }],
            ["rowIndex", function (o, n) { o.rowIndex = n.getNumberValue(); }],
            ["sort", function (o, n) { o.sort = n.getObjectValue(WorkbookRangeSort); }],
            ["text", function (o, n) { o.text = n.getObjectValue(Json); }],
            ["values", function (o, n) { o.values = n.getObjectValue(Json); }],
            ["valueTypes", function (o, n) { o.valueTypes = n.getObjectValue(Json); }],
            ["worksheet", function (o, n) { o.worksheet = n.getObjectValue(workbookWorksheet_1.WorkbookWorksheet); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookRange.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("addressLocal", this.addressLocal);
        writer.writeNumberValue("cellCount", this.cellCount);
        writer.writeNumberValue("columnCount", this.columnCount);
        writer.writeBooleanValue("columnHidden", this.columnHidden);
        writer.writeNumberValue("columnIndex", this.columnIndex);
        writer.writeObjectValue("format", this.format);
        writer.writeObjectValue("formulas", this.formulas);
        writer.writeObjectValue("formulasLocal", this.formulasLocal);
        writer.writeObjectValue("formulasR1C1", this.formulasR1C1);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeObjectValue("numberFormat", this.numberFormat);
        writer.writeNumberValue("rowCount", this.rowCount);
        writer.writeBooleanValue("rowHidden", this.rowHidden);
        writer.writeNumberValue("rowIndex", this.rowIndex);
        writer.writeObjectValue("sort", this.sort);
        writer.writeObjectValue("text", this.text);
        writer.writeObjectValue("values", this.values);
        writer.writeObjectValue("valueTypes", this.valueTypes);
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
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return WorkbookRange;
}(entity_1.Entity));
exports.WorkbookRange = WorkbookRange;

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
exports.WorkbookTable = void 0;
var entity_1 = require("./entity");
var workbookTableSort_1 = require("./workbooks/workbook/tables/sort/workbookTableSort");
var workbookTableColumn_1 = require("./workbooks/workbook/workbookTableColumn");
var workbookTableRow_1 = require("./workbooks/workbook/workbookTableRow");
var workbookWorksheet_1 = require("./workbookWorksheet");
var WorkbookTable = /** @class */ (function (_super) {
    __extends(WorkbookTable, _super);
    /**
     * Instantiates a new workbookTable and sets the default values.
     */
    function WorkbookTable() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookTable.prototype, "columns", {
        /**
         * Gets the columns property value. Represents a collection of all the columns in the table. Read-only.
         * @returns a workbookTableColumn
         */
        get: function () {
            return this._columns;
        },
        /**
         * Sets the columns property value. Represents a collection of all the columns in the table. Read-only.
         * @param value Value to set for the columns property.
         */
        set: function (value) {
            this._columns = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "highlightFirstColumn", {
        /**
         * Gets the highlightFirstColumn property value. Indicates whether the first column contains special formatting.
         * @returns a boolean
         */
        get: function () {
            return this._highlightFirstColumn;
        },
        /**
         * Sets the highlightFirstColumn property value. Indicates whether the first column contains special formatting.
         * @param value Value to set for the highlightFirstColumn property.
         */
        set: function (value) {
            this._highlightFirstColumn = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "highlightLastColumn", {
        /**
         * Gets the highlightLastColumn property value. Indicates whether the last column contains special formatting.
         * @returns a boolean
         */
        get: function () {
            return this._highlightLastColumn;
        },
        /**
         * Sets the highlightLastColumn property value. Indicates whether the last column contains special formatting.
         * @param value Value to set for the highlightLastColumn property.
         */
        set: function (value) {
            this._highlightLastColumn = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "legacyId", {
        /**
         * Gets the legacyId property value. Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.
         * @returns a string
         */
        get: function () {
            return this._legacyId;
        },
        /**
         * Sets the legacyId property value. Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.
         * @param value Value to set for the legacyId property.
         */
        set: function (value) {
            this._legacyId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "name", {
        /**
         * Gets the name property value. Name of the table.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. Name of the table.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "rows", {
        /**
         * Gets the rows property value. Represents a collection of all the rows in the table. Read-only.
         * @returns a workbookTableRow
         */
        get: function () {
            return this._rows;
        },
        /**
         * Sets the rows property value. Represents a collection of all the rows in the table. Read-only.
         * @param value Value to set for the rows property.
         */
        set: function (value) {
            this._rows = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "showBandedColumns", {
        /**
         * Gets the showBandedColumns property value. Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
         * @returns a boolean
         */
        get: function () {
            return this._showBandedColumns;
        },
        /**
         * Sets the showBandedColumns property value. Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
         * @param value Value to set for the showBandedColumns property.
         */
        set: function (value) {
            this._showBandedColumns = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "showBandedRows", {
        /**
         * Gets the showBandedRows property value. Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
         * @returns a boolean
         */
        get: function () {
            return this._showBandedRows;
        },
        /**
         * Sets the showBandedRows property value. Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
         * @param value Value to set for the showBandedRows property.
         */
        set: function (value) {
            this._showBandedRows = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "showFilterButton", {
        /**
         * Gets the showFilterButton property value. Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
         * @returns a boolean
         */
        get: function () {
            return this._showFilterButton;
        },
        /**
         * Sets the showFilterButton property value. Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
         * @param value Value to set for the showFilterButton property.
         */
        set: function (value) {
            this._showFilterButton = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "showHeaders", {
        /**
         * Gets the showHeaders property value. Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
         * @returns a boolean
         */
        get: function () {
            return this._showHeaders;
        },
        /**
         * Sets the showHeaders property value. Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
         * @param value Value to set for the showHeaders property.
         */
        set: function (value) {
            this._showHeaders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "showTotals", {
        /**
         * Gets the showTotals property value. Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
         * @returns a boolean
         */
        get: function () {
            return this._showTotals;
        },
        /**
         * Sets the showTotals property value. Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
         * @param value Value to set for the showTotals property.
         */
        set: function (value) {
            this._showTotals = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "sort", {
        /**
         * Gets the sort property value. Represents the sorting for the table. Read-only.
         * @returns a workbookTableSort
         */
        get: function () {
            return this._sort;
        },
        /**
         * Sets the sort property value. Represents the sorting for the table. Read-only.
         * @param value Value to set for the sort property.
         */
        set: function (value) {
            this._sort = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "style", {
        /**
         * Gets the style property value. Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
         * @returns a string
         */
        get: function () {
            return this._style;
        },
        /**
         * Sets the style property value. Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
         * @param value Value to set for the style property.
         */
        set: function (value) {
            this._style = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTable.prototype, "worksheet", {
        /**
         * Gets the worksheet property value. The worksheet containing the current table. Read-only.
         * @returns a workbookWorksheet
         */
        get: function () {
            return this._worksheet;
        },
        /**
         * Sets the worksheet property value. The worksheet containing the current table. Read-only.
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
    WorkbookTable.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["columns", function (o, n) { o.columns = n.getCollectionOfObjectValues(workbookTableColumn_1.WorkbookTableColumn); }],
            ["highlightFirstColumn", function (o, n) { o.highlightFirstColumn = n.getBooleanValue(); }],
            ["highlightLastColumn", function (o, n) { o.highlightLastColumn = n.getBooleanValue(); }],
            ["legacyId", function (o, n) { o.legacyId = n.getStringValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["rows", function (o, n) { o.rows = n.getCollectionOfObjectValues(workbookTableRow_1.WorkbookTableRow); }],
            ["showBandedColumns", function (o, n) { o.showBandedColumns = n.getBooleanValue(); }],
            ["showBandedRows", function (o, n) { o.showBandedRows = n.getBooleanValue(); }],
            ["showFilterButton", function (o, n) { o.showFilterButton = n.getBooleanValue(); }],
            ["showHeaders", function (o, n) { o.showHeaders = n.getBooleanValue(); }],
            ["showTotals", function (o, n) { o.showTotals = n.getBooleanValue(); }],
            ["sort", function (o, n) { o.sort = n.getObjectValue(workbookTableSort_1.WorkbookTableSort); }],
            ["style", function (o, n) { o.style = n.getStringValue(); }],
            ["worksheet", function (o, n) { o.worksheet = n.getObjectValue(workbookWorksheet_1.WorkbookWorksheet); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookTable.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("columns", this.columns);
        writer.writeBooleanValue("highlightFirstColumn", this.highlightFirstColumn);
        writer.writeBooleanValue("highlightLastColumn", this.highlightLastColumn);
        writer.writeStringValue("legacyId", this.legacyId);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues("rows", this.rows);
        writer.writeBooleanValue("showBandedColumns", this.showBandedColumns);
        writer.writeBooleanValue("showBandedRows", this.showBandedRows);
        writer.writeBooleanValue("showFilterButton", this.showFilterButton);
        writer.writeBooleanValue("showHeaders", this.showHeaders);
        writer.writeBooleanValue("showTotals", this.showTotals);
        writer.writeObjectValue("sort", this.sort);
        writer.writeStringValue("style", this.style);
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
    return WorkbookTable;
}(entity_1.Entity));
exports.WorkbookTable = WorkbookTable;

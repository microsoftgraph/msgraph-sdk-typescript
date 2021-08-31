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
exports.WorkbookWorksheet = void 0;
var entity_1 = require("./entity");
var workbookNamedItem_1 = require("./workbookNamedItem");
var workbookWorksheetProtection_1 = require("./workbooks/workbook/names/worksheet/protection/workbookWorksheetProtection");
var workbookChart_1 = require("./workbooks/workbook/workbookChart");
var workbookPivotTable_1 = require("./workbooks/workbook/workbookPivotTable");
var workbookTable_1 = require("./workbookTable");
var WorkbookWorksheet = /** @class */ (function (_super) {
    __extends(WorkbookWorksheet, _super);
    /**
     * Instantiates a new workbookWorksheet and sets the default values.
     */
    function WorkbookWorksheet() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookWorksheet.prototype, "charts", {
        /**
         * Gets the charts property value. Returns collection of charts that are part of the worksheet. Read-only.
         * @returns a workbookChart
         */
        get: function () {
            return this._charts;
        },
        /**
         * Sets the charts property value. Returns collection of charts that are part of the worksheet. Read-only.
         * @param value Value to set for the charts property.
         */
        set: function (value) {
            this._charts = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookWorksheet.prototype, "name", {
        /**
         * Gets the name property value. The display name of the worksheet.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The display name of the worksheet.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookWorksheet.prototype, "names", {
        /**
         * Gets the names property value. Returns collection of names that are associated with the worksheet. Read-only.
         * @returns a workbookNamedItem
         */
        get: function () {
            return this._names;
        },
        /**
         * Sets the names property value. Returns collection of names that are associated with the worksheet. Read-only.
         * @param value Value to set for the names property.
         */
        set: function (value) {
            this._names = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookWorksheet.prototype, "pivotTables", {
        /**
         * Gets the pivotTables property value. Collection of PivotTables that are part of the worksheet.
         * @returns a workbookPivotTable
         */
        get: function () {
            return this._pivotTables;
        },
        /**
         * Sets the pivotTables property value. Collection of PivotTables that are part of the worksheet.
         * @param value Value to set for the pivotTables property.
         */
        set: function (value) {
            this._pivotTables = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookWorksheet.prototype, "position", {
        /**
         * Gets the position property value. The zero-based position of the worksheet within the workbook.
         * @returns a integer
         */
        get: function () {
            return this._position;
        },
        /**
         * Sets the position property value. The zero-based position of the worksheet within the workbook.
         * @param value Value to set for the position property.
         */
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookWorksheet.prototype, "protection", {
        /**
         * Gets the protection property value. Returns sheet protection object for a worksheet. Read-only.
         * @returns a workbookWorksheetProtection
         */
        get: function () {
            return this._protection;
        },
        /**
         * Sets the protection property value. Returns sheet protection object for a worksheet. Read-only.
         * @param value Value to set for the protection property.
         */
        set: function (value) {
            this._protection = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookWorksheet.prototype, "tables", {
        /**
         * Gets the tables property value. Collection of tables that are part of the worksheet. Read-only.
         * @returns a workbookTable
         */
        get: function () {
            return this._tables;
        },
        /**
         * Sets the tables property value. Collection of tables that are part of the worksheet. Read-only.
         * @param value Value to set for the tables property.
         */
        set: function (value) {
            this._tables = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookWorksheet.prototype, "visibility", {
        /**
         * Gets the visibility property value. The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.
         * @returns a string
         */
        get: function () {
            return this._visibility;
        },
        /**
         * Sets the visibility property value. The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.
         * @param value Value to set for the visibility property.
         */
        set: function (value) {
            this._visibility = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkbookWorksheet.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["charts", function (o, n) { o.charts = n.getCollectionOfObjectValues(workbookChart_1.WorkbookChart); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["names", function (o, n) { o.names = n.getCollectionOfObjectValues(workbookNamedItem_1.WorkbookNamedItem); }],
            ["pivotTables", function (o, n) { o.pivotTables = n.getCollectionOfObjectValues(workbookPivotTable_1.WorkbookPivotTable); }],
            ["position", function (o, n) { o.position = n.getNumberValue(); }],
            ["protection", function (o, n) { o.protection = n.getObjectValue(workbookWorksheetProtection_1.WorkbookWorksheetProtection); }],
            ["tables", function (o, n) { o.tables = n.getCollectionOfObjectValues(workbookTable_1.WorkbookTable); }],
            ["visibility", function (o, n) { o.visibility = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookWorksheet.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("charts", this.charts);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues("names", this.names);
        writer.writeCollectionOfObjectValues("pivotTables", this.pivotTables);
        writer.writeNumberValue("position", this.position);
        writer.writeObjectValue("protection", this.protection);
        writer.writeCollectionOfObjectValues("tables", this.tables);
        writer.writeStringValue("visibility", this.visibility);
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
    return WorkbookWorksheet;
}(entity_1.Entity));
exports.WorkbookWorksheet = WorkbookWorksheet;

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
exports.Workbook = void 0;
var entity_1 = require("../../entity");
var workbookComment_1 = require("../../workbookComment");
var workbookNamedItem_1 = require("../../workbookNamedItem");
var workbookOperation_1 = require("../../workbookOperation");
var workbookTable_1 = require("../../workbookTable");
var workbookWorksheet_1 = require("../../workbookWorksheet");
var workbookApplication_1 = require("./application/workbookApplication");
var workbookFunctions_1 = require("./functions/workbookFunctions");
var Workbook = /** @class */ (function (_super) {
    __extends(Workbook, _super);
    /**
     * Instantiates a new Workbook and sets the default values.
     */
    function Workbook() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Workbook.prototype, "application", {
        /**
         * Gets the application property value.
         * @returns a workbookApplication
         */
        get: function () {
            return this._application;
        },
        /**
         * Sets the application property value.
         * @param value Value to set for the application property.
         */
        set: function (value) {
            this._application = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Workbook.prototype, "comments", {
        /**
         * Gets the comments property value.
         * @returns a workbookComment
         */
        get: function () {
            return this._comments;
        },
        /**
         * Sets the comments property value.
         * @param value Value to set for the comments property.
         */
        set: function (value) {
            this._comments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Workbook.prototype, "functions", {
        /**
         * Gets the functions property value.
         * @returns a workbookFunctions
         */
        get: function () {
            return this._functions;
        },
        /**
         * Sets the functions property value.
         * @param value Value to set for the functions property.
         */
        set: function (value) {
            this._functions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Workbook.prototype, "names", {
        /**
         * Gets the names property value. Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
         * @returns a workbookNamedItem
         */
        get: function () {
            return this._names;
        },
        /**
         * Sets the names property value. Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
         * @param value Value to set for the names property.
         */
        set: function (value) {
            this._names = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Workbook.prototype, "operations", {
        /**
         * Gets the operations property value. The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable.
         * @returns a workbookOperation
         */
        get: function () {
            return this._operations;
        },
        /**
         * Sets the operations property value. The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable.
         * @param value Value to set for the operations property.
         */
        set: function (value) {
            this._operations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Workbook.prototype, "tables", {
        /**
         * Gets the tables property value. Represents a collection of tables associated with the workbook. Read-only.
         * @returns a workbookTable
         */
        get: function () {
            return this._tables;
        },
        /**
         * Sets the tables property value. Represents a collection of tables associated with the workbook. Read-only.
         * @param value Value to set for the tables property.
         */
        set: function (value) {
            this._tables = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Workbook.prototype, "worksheets", {
        /**
         * Gets the worksheets property value. Represents a collection of worksheets associated with the workbook. Read-only.
         * @returns a workbookWorksheet
         */
        get: function () {
            return this._worksheets;
        },
        /**
         * Sets the worksheets property value. Represents a collection of worksheets associated with the workbook. Read-only.
         * @param value Value to set for the worksheets property.
         */
        set: function (value) {
            this._worksheets = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Workbook.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["application", function (o, n) { o.application = n.getObjectValue(workbookApplication_1.WorkbookApplication); }],
            ["comments", function (o, n) { o.comments = n.getCollectionOfObjectValues(workbookComment_1.WorkbookComment); }],
            ["functions", function (o, n) { o.functions = n.getObjectValue(workbookFunctions_1.WorkbookFunctions); }],
            ["names", function (o, n) { o.names = n.getCollectionOfObjectValues(workbookNamedItem_1.WorkbookNamedItem); }],
            ["operations", function (o, n) { o.operations = n.getCollectionOfObjectValues(workbookOperation_1.WorkbookOperation); }],
            ["tables", function (o, n) { o.tables = n.getCollectionOfObjectValues(workbookTable_1.WorkbookTable); }],
            ["worksheets", function (o, n) { o.worksheets = n.getCollectionOfObjectValues(workbookWorksheet_1.WorkbookWorksheet); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Workbook.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("application", this.application);
        writer.writeCollectionOfObjectValues("comments", this.comments);
        writer.writeObjectValue("functions", this.functions);
        writer.writeCollectionOfObjectValues("names", this.names);
        writer.writeCollectionOfObjectValues("operations", this.operations);
        writer.writeCollectionOfObjectValues("tables", this.tables);
        writer.writeCollectionOfObjectValues("worksheets", this.worksheets);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return Workbook;
}(entity_1.Entity));
exports.Workbook = Workbook;

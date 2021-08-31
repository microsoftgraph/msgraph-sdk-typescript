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
exports.WorkbookTableColumn = void 0;
var entity_1 = require("../../entity");
var workbookFilter_1 = require("./tables/columns/filter/workbookFilter");
var WorkbookTableColumn = /** @class */ (function (_super) {
    __extends(WorkbookTableColumn, _super);
    /**
     * Instantiates a new workbookTableColumn and sets the default values.
     */
    function WorkbookTableColumn() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookTableColumn.prototype, "filter", {
        /**
         * Gets the filter property value. Retrieve the filter applied to the column. Read-only.
         * @returns a workbookFilter
         */
        get: function () {
            return this._filter;
        },
        /**
         * Sets the filter property value. Retrieve the filter applied to the column. Read-only.
         * @param value Value to set for the filter property.
         */
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTableColumn.prototype, "index", {
        /**
         * Gets the index property value. Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._index;
        },
        /**
         * Sets the index property value. Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
         * @param value Value to set for the index property.
         */
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTableColumn.prototype, "name", {
        /**
         * Gets the name property value. Returns the name of the table column.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. Returns the name of the table column.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookTableColumn.prototype, "values", {
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
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkbookTableColumn.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["filter", function (o, n) { o.filter = n.getObjectValue(workbookFilter_1.WorkbookFilter); }],
            ["index", function (o, n) { o.index = n.getNumberValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["values", function (o, n) { o.values = n.getObjectValue(Json); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookTableColumn.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("filter", this.filter);
        writer.writeNumberValue("index", this.index);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue("values", this.values);
    };
    ;
    ;
    ;
    ;
    ;
    return WorkbookTableColumn;
}(entity_1.Entity));
exports.WorkbookTableColumn = WorkbookTableColumn;

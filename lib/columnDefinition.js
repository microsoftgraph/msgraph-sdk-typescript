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
exports.ColumnDefinition = void 0;
var entity_1 = require("./entity");
var ColumnDefinition = /** @class */ (function (_super) {
    __extends(ColumnDefinition, _super);
    /**
     * Instantiates a new columnDefinition and sets the default values.
     */
    function ColumnDefinition() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ColumnDefinition.prototype, "boolean", {
        /**
         * Gets the boolean property value. This column stores boolean values.
         * @returns a booleanColumn
         */
        get: function () {
            return this._boolean;
        },
        /**
         * Sets the boolean property value. This column stores boolean values.
         * @param value Value to set for the boolean property.
         */
        set: function (value) {
            this._boolean = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "calculated", {
        /**
         * Gets the calculated property value. This column's data is calculated based on other columns.
         * @returns a calculatedColumn
         */
        get: function () {
            return this._calculated;
        },
        /**
         * Sets the calculated property value. This column's data is calculated based on other columns.
         * @param value Value to set for the calculated property.
         */
        set: function (value) {
            this._calculated = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "choice", {
        /**
         * Gets the choice property value. This column stores data from a list of choices.
         * @returns a choiceColumn
         */
        get: function () {
            return this._choice;
        },
        /**
         * Sets the choice property value. This column stores data from a list of choices.
         * @param value Value to set for the choice property.
         */
        set: function (value) {
            this._choice = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "columnGroup", {
        /**
         * Gets the columnGroup property value. For site columns, the name of the group this column belongs to. Helps organize related columns.
         * @returns a string
         */
        get: function () {
            return this._columnGroup;
        },
        /**
         * Sets the columnGroup property value. For site columns, the name of the group this column belongs to. Helps organize related columns.
         * @param value Value to set for the columnGroup property.
         */
        set: function (value) {
            this._columnGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "currency", {
        /**
         * Gets the currency property value. This column stores currency values.
         * @returns a currencyColumn
         */
        get: function () {
            return this._currency;
        },
        /**
         * Sets the currency property value. This column stores currency values.
         * @param value Value to set for the currency property.
         */
        set: function (value) {
            this._currency = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "dateTime", {
        /**
         * Gets the dateTime property value. This column stores DateTime values.
         * @returns a dateTimeColumn
         */
        get: function () {
            return this._dateTime;
        },
        /**
         * Sets the dateTime property value. This column stores DateTime values.
         * @param value Value to set for the dateTime property.
         */
        set: function (value) {
            this._dateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "defaultValue", {
        /**
         * Gets the defaultValue property value. The default value for this column.
         * @returns a defaultColumnValue
         */
        get: function () {
            return this._defaultValue;
        },
        /**
         * Sets the defaultValue property value. The default value for this column.
         * @param value Value to set for the defaultValue property.
         */
        set: function (value) {
            this._defaultValue = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "description", {
        /**
         * Gets the description property value. The user-facing description of the column.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. The user-facing description of the column.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "displayName", {
        /**
         * Gets the displayName property value. The user-facing name of the column.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The user-facing name of the column.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "enforceUniqueValues", {
        /**
         * Gets the enforceUniqueValues property value. If true, no two list items may have the same value for this column.
         * @returns a boolean
         */
        get: function () {
            return this._enforceUniqueValues;
        },
        /**
         * Sets the enforceUniqueValues property value. If true, no two list items may have the same value for this column.
         * @param value Value to set for the enforceUniqueValues property.
         */
        set: function (value) {
            this._enforceUniqueValues = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "geolocation", {
        /**
         * Gets the geolocation property value. This column stores a geolocation.
         * @returns a geolocationColumn
         */
        get: function () {
            return this._geolocation;
        },
        /**
         * Sets the geolocation property value. This column stores a geolocation.
         * @param value Value to set for the geolocation property.
         */
        set: function (value) {
            this._geolocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "hidden", {
        /**
         * Gets the hidden property value. Specifies whether the column is displayed in the user interface.
         * @returns a boolean
         */
        get: function () {
            return this._hidden;
        },
        /**
         * Sets the hidden property value. Specifies whether the column is displayed in the user interface.
         * @param value Value to set for the hidden property.
         */
        set: function (value) {
            this._hidden = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "indexed", {
        /**
         * Gets the indexed property value. Specifies whether the column values can used for sorting and searching.
         * @returns a boolean
         */
        get: function () {
            return this._indexed;
        },
        /**
         * Sets the indexed property value. Specifies whether the column values can used for sorting and searching.
         * @param value Value to set for the indexed property.
         */
        set: function (value) {
            this._indexed = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "lookup", {
        /**
         * Gets the lookup property value. This column's data is looked up from another source in the site.
         * @returns a lookupColumn
         */
        get: function () {
            return this._lookup;
        },
        /**
         * Sets the lookup property value. This column's data is looked up from another source in the site.
         * @param value Value to set for the lookup property.
         */
        set: function (value) {
            this._lookup = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "name", {
        /**
         * Gets the name property value. The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "number", {
        /**
         * Gets the number property value. This column stores number values.
         * @returns a numberColumn
         */
        get: function () {
            return this._number;
        },
        /**
         * Sets the number property value. This column stores number values.
         * @param value Value to set for the number property.
         */
        set: function (value) {
            this._number = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "personOrGroup", {
        /**
         * Gets the personOrGroup property value. This column stores Person or Group values.
         * @returns a personOrGroupColumn
         */
        get: function () {
            return this._personOrGroup;
        },
        /**
         * Sets the personOrGroup property value. This column stores Person or Group values.
         * @param value Value to set for the personOrGroup property.
         */
        set: function (value) {
            this._personOrGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "readOnly", {
        /**
         * Gets the readOnly property value. Specifies whether the column values can be modified.
         * @returns a boolean
         */
        get: function () {
            return this._readOnly;
        },
        /**
         * Sets the readOnly property value. Specifies whether the column values can be modified.
         * @param value Value to set for the readOnly property.
         */
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "required", {
        /**
         * Gets the required property value. Specifies whether the column value is not optional.
         * @returns a boolean
         */
        get: function () {
            return this._required;
        },
        /**
         * Sets the required property value. Specifies whether the column value is not optional.
         * @param value Value to set for the required property.
         */
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ColumnDefinition.prototype, "text", {
        /**
         * Gets the text property value. This column stores text values.
         * @returns a textColumn
         */
        get: function () {
            return this._text;
        },
        /**
         * Sets the text property value. This column stores text values.
         * @param value Value to set for the text property.
         */
        set: function (value) {
            this._text = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ColumnDefinition.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["boolean", function (o, n) { o.boolean = n.getObjectValue(BooleanColumn); }],
            ["calculated", function (o, n) { o.calculated = n.getObjectValue(CalculatedColumn); }],
            ["choice", function (o, n) { o.choice = n.getObjectValue(ChoiceColumn); }],
            ["columnGroup", function (o, n) { o.columnGroup = n.getStringValue(); }],
            ["currency", function (o, n) { o.currency = n.getObjectValue(CurrencyColumn); }],
            ["dateTime", function (o, n) { o.dateTime = n.getObjectValue(DateTimeColumn); }],
            ["defaultValue", function (o, n) { o.defaultValue = n.getObjectValue(DefaultColumnValue); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["enforceUniqueValues", function (o, n) { o.enforceUniqueValues = n.getBooleanValue(); }],
            ["geolocation", function (o, n) { o.geolocation = n.getObjectValue(GeolocationColumn); }],
            ["hidden", function (o, n) { o.hidden = n.getBooleanValue(); }],
            ["indexed", function (o, n) { o.indexed = n.getBooleanValue(); }],
            ["lookup", function (o, n) { o.lookup = n.getObjectValue(LookupColumn); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["number", function (o, n) { o.number = n.getObjectValue(NumberColumn); }],
            ["personOrGroup", function (o, n) { o.personOrGroup = n.getObjectValue(PersonOrGroupColumn); }],
            ["readOnly", function (o, n) { o.readOnly = n.getBooleanValue(); }],
            ["required", function (o, n) { o.required = n.getBooleanValue(); }],
            ["text", function (o, n) { o.text = n.getObjectValue(TextColumn); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ColumnDefinition.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("boolean", this.boolean);
        writer.writeObjectValue("calculated", this.calculated);
        writer.writeObjectValue("choice", this.choice);
        writer.writeStringValue("columnGroup", this.columnGroup);
        writer.writeObjectValue("currency", this.currency);
        writer.writeObjectValue("dateTime", this.dateTime);
        writer.writeObjectValue("defaultValue", this.defaultValue);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("enforceUniqueValues", this.enforceUniqueValues);
        writer.writeObjectValue("geolocation", this.geolocation);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeBooleanValue("indexed", this.indexed);
        writer.writeObjectValue("lookup", this.lookup);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue("number", this.number);
        writer.writeObjectValue("personOrGroup", this.personOrGroup);
        writer.writeBooleanValue("readOnly", this.readOnly);
        writer.writeBooleanValue("required", this.required);
        writer.writeObjectValue("text", this.text);
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
    return ColumnDefinition;
}(entity_1.Entity));
exports.ColumnDefinition = ColumnDefinition;

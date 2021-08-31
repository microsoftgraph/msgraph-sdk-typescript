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
exports.WorkbookNamedItem = void 0;
var entity_1 = require("./entity");
var workbookWorksheet_1 = require("./workbookWorksheet");
var WorkbookNamedItem = /** @class */ (function (_super) {
    __extends(WorkbookNamedItem, _super);
    /**
     * Instantiates a new workbookNamedItem and sets the default values.
     */
    function WorkbookNamedItem() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookNamedItem.prototype, "comment", {
        /**
         * Gets the comment property value. Represents the comment associated with this name.
         * @returns a string
         */
        get: function () {
            return this._comment;
        },
        /**
         * Sets the comment property value. Represents the comment associated with this name.
         * @param value Value to set for the comment property.
         */
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookNamedItem.prototype, "name", {
        /**
         * Gets the name property value. The name of the object. Read-only.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The name of the object. Read-only.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookNamedItem.prototype, "scope", {
        /**
         * Gets the scope property value. Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
         * @returns a string
         */
        get: function () {
            return this._scope;
        },
        /**
         * Sets the scope property value. Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
         * @param value Value to set for the scope property.
         */
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookNamedItem.prototype, "type", {
        /**
         * Gets the type property value. Indicates what type of reference is associated with the name. Possible values are: String, Integer, Double, Boolean, Range. Read-only.
         * @returns a string
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. Indicates what type of reference is associated with the name. Possible values are: String, Integer, Double, Boolean, Range. Read-only.
         * @param value Value to set for the type property.
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookNamedItem.prototype, "value", {
        /**
         * Gets the value property value. Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only.
         * @returns a Json
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value property value. Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only.
         * @param value Value to set for the value property.
         */
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookNamedItem.prototype, "visible", {
        /**
         * Gets the visible property value. Specifies whether the object is visible or not.
         * @returns a boolean
         */
        get: function () {
            return this._visible;
        },
        /**
         * Sets the visible property value. Specifies whether the object is visible or not.
         * @param value Value to set for the visible property.
         */
        set: function (value) {
            this._visible = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookNamedItem.prototype, "worksheet", {
        /**
         * Gets the worksheet property value. Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
         * @returns a workbookWorksheet
         */
        get: function () {
            return this._worksheet;
        },
        /**
         * Sets the worksheet property value. Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
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
    WorkbookNamedItem.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["comment", function (o, n) { o.comment = n.getStringValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["scope", function (o, n) { o.scope = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getObjectValue(Json); }],
            ["visible", function (o, n) { o.visible = n.getBooleanValue(); }],
            ["worksheet", function (o, n) { o.worksheet = n.getObjectValue(workbookWorksheet_1.WorkbookWorksheet); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookNamedItem.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("comment", this.comment);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("scope", this.scope);
        writer.writeStringValue("type", this.type);
        writer.writeObjectValue("value", this.value);
        writer.writeBooleanValue("visible", this.visible);
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
    return WorkbookNamedItem;
}(entity_1.Entity));
exports.WorkbookNamedItem = WorkbookNamedItem;

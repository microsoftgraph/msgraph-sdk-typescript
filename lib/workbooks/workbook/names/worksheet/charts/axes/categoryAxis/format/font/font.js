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
exports.Font = void 0;
var entity_1 = require("../../../../../../../../../entity");
var Font = /** @class */ (function (_super) {
    __extends(Font, _super);
    /**
     * Instantiates a new Font and sets the default values.
     */
    function Font() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Font.prototype, "bold", {
        /**
         * Gets the bold property value. Represents the bold status of font.
         * @returns a boolean
         */
        get: function () {
            return this._bold;
        },
        /**
         * Sets the bold property value. Represents the bold status of font.
         * @param value Value to set for the bold property.
         */
        set: function (value) {
            this._bold = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Font.prototype, "color", {
        /**
         * Gets the color property value. HTML color code representation of the text color. E.g. #FF0000 represents Red.
         * @returns a string
         */
        get: function () {
            return this._color;
        },
        /**
         * Sets the color property value. HTML color code representation of the text color. E.g. #FF0000 represents Red.
         * @param value Value to set for the color property.
         */
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Font.prototype, "italic", {
        /**
         * Gets the italic property value. Represents the italic status of the font.
         * @returns a boolean
         */
        get: function () {
            return this._italic;
        },
        /**
         * Sets the italic property value. Represents the italic status of the font.
         * @param value Value to set for the italic property.
         */
        set: function (value) {
            this._italic = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Font.prototype, "name", {
        /**
         * Gets the name property value. Font name (e.g. 'Calibri')
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. Font name (e.g. 'Calibri')
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Font.prototype, "size", {
        /**
         * Gets the size property value. Size of the font (e.g. 11)
         * @returns a double
         */
        get: function () {
            return this._size;
        },
        /**
         * Sets the size property value. Size of the font (e.g. 11)
         * @param value Value to set for the size property.
         */
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Font.prototype, "underline", {
        /**
         * Gets the underline property value. Type of underline applied to the font. The possible values are: None, Single.
         * @returns a string
         */
        get: function () {
            return this._underline;
        },
        /**
         * Sets the underline property value. Type of underline applied to the font. The possible values are: None, Single.
         * @param value Value to set for the underline property.
         */
        set: function (value) {
            this._underline = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Font.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["bold", function (o, n) { o.bold = n.getBooleanValue(); }],
            ["color", function (o, n) { o.color = n.getStringValue(); }],
            ["italic", function (o, n) { o.italic = n.getBooleanValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["size", function (o, n) { o.size = n.getNumberValue(); }],
            ["underline", function (o, n) { o.underline = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Font.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("bold", this.bold);
        writer.writeStringValue("color", this.color);
        writer.writeBooleanValue("italic", this.italic);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("size", this.size);
        writer.writeStringValue("underline", this.underline);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return Font;
}(entity_1.Entity));
exports.Font = Font;

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
exports.Attachment = void 0;
var entity_1 = require("../entity");
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    /**
     * Instantiates a new attachment and sets the default values.
     */
    function Attachment() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Attachment.prototype, "contentType", {
        /**
         * Gets the contentType property value. The MIME type.
         * @returns a string
         */
        get: function () {
            return this._contentType;
        },
        /**
         * Sets the contentType property value. The MIME type.
         * @param value Value to set for the contentType property.
         */
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Attachment.prototype, "isInline", {
        /**
         * Gets the isInline property value. true if the attachment is an inline attachment; otherwise, false.
         * @returns a boolean
         */
        get: function () {
            return this._isInline;
        },
        /**
         * Sets the isInline property value. true if the attachment is an inline attachment; otherwise, false.
         * @param value Value to set for the isInline property.
         */
        set: function (value) {
            this._isInline = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Attachment.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Attachment.prototype, "name", {
        /**
         * Gets the name property value. The display name of the attachment. This does not need to be the actual file name.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The display name of the attachment. This does not need to be the actual file name.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Attachment.prototype, "size", {
        /**
         * Gets the size property value. The length of the attachment in bytes.
         * @returns a integer
         */
        get: function () {
            return this._size;
        },
        /**
         * Sets the size property value. The length of the attachment in bytes.
         * @param value Value to set for the size property.
         */
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Attachment.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["contentType", function (o, n) { o.contentType = n.getStringValue(); }],
            ["isInline", function (o, n) { o.isInline = n.getBooleanValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["size", function (o, n) { o.size = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Attachment.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeBooleanValue("isInline", this.isInline);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("size", this.size);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return Attachment;
}(entity_1.Entity));
exports.Attachment = Attachment;

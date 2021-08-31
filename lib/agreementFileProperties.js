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
exports.AgreementFileProperties = void 0;
var entity_1 = require("./entity");
var AgreementFileProperties = /** @class */ (function (_super) {
    __extends(AgreementFileProperties, _super);
    /**
     * Instantiates a new agreementFileProperties and sets the default values.
     */
    function AgreementFileProperties() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AgreementFileProperties.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementFileProperties.prototype, "displayName", {
        /**
         * Gets the displayName property value.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementFileProperties.prototype, "fileData", {
        /**
         * Gets the fileData property value.
         * @returns a agreementFileData
         */
        get: function () {
            return this._fileData;
        },
        /**
         * Sets the fileData property value.
         * @param value Value to set for the fileData property.
         */
        set: function (value) {
            this._fileData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementFileProperties.prototype, "fileName", {
        /**
         * Gets the fileName property value.
         * @returns a string
         */
        get: function () {
            return this._fileName;
        },
        /**
         * Sets the fileName property value.
         * @param value Value to set for the fileName property.
         */
        set: function (value) {
            this._fileName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementFileProperties.prototype, "isDefault", {
        /**
         * Gets the isDefault property value.
         * @returns a boolean
         */
        get: function () {
            return this._isDefault;
        },
        /**
         * Sets the isDefault property value.
         * @param value Value to set for the isDefault property.
         */
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementFileProperties.prototype, "isMajorVersion", {
        /**
         * Gets the isMajorVersion property value.
         * @returns a boolean
         */
        get: function () {
            return this._isMajorVersion;
        },
        /**
         * Sets the isMajorVersion property value.
         * @param value Value to set for the isMajorVersion property.
         */
        set: function (value) {
            this._isMajorVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementFileProperties.prototype, "language", {
        /**
         * Gets the language property value.
         * @returns a string
         */
        get: function () {
            return this._language;
        },
        /**
         * Sets the language property value.
         * @param value Value to set for the language property.
         */
        set: function (value) {
            this._language = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AgreementFileProperties.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["fileData", function (o, n) { o.fileData = n.getObjectValue(AgreementFileData); }],
            ["fileName", function (o, n) { o.fileName = n.getStringValue(); }],
            ["isDefault", function (o, n) { o.isDefault = n.getBooleanValue(); }],
            ["isMajorVersion", function (o, n) { o.isMajorVersion = n.getBooleanValue(); }],
            ["language", function (o, n) { o.language = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AgreementFileProperties.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("fileData", this.fileData);
        writer.writeStringValue("fileName", this.fileName);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isMajorVersion", this.isMajorVersion);
        writer.writeStringValue("language", this.language);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return AgreementFileProperties;
}(entity_1.Entity));
exports.AgreementFileProperties = AgreementFileProperties;

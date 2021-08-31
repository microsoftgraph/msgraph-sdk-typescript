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
exports.ExtensionProperty = void 0;
var directoryObject_1 = require("./directoryObject");
var ExtensionProperty = /** @class */ (function (_super) {
    __extends(ExtensionProperty, _super);
    /**
     * Instantiates a new extensionProperty and sets the default values.
     */
    function ExtensionProperty() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ExtensionProperty.prototype, "appDisplayName", {
        /**
         * Gets the appDisplayName property value. Display name of the application object on which this extension property is defined. Read-only.
         * @returns a string
         */
        get: function () {
            return this._appDisplayName;
        },
        /**
         * Sets the appDisplayName property value. Display name of the application object on which this extension property is defined. Read-only.
         * @param value Value to set for the appDisplayName property.
         */
        set: function (value) {
            this._appDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExtensionProperty.prototype, "dataType", {
        /**
         * Gets the dataType property value. Specifies the data type of the value the extension property can hold. Following values are supported. Not nullable. Binary - 256 bytes maximumBooleanDateTime - Must be specified in ISO 8601 format. Will be stored in UTC.Integer - 32-bit value.LargeInteger - 64-bit value.String - 256 characters maximum
         * @returns a string
         */
        get: function () {
            return this._dataType;
        },
        /**
         * Sets the dataType property value. Specifies the data type of the value the extension property can hold. Following values are supported. Not nullable. Binary - 256 bytes maximumBooleanDateTime - Must be specified in ISO 8601 format. Will be stored in UTC.Integer - 32-bit value.LargeInteger - 64-bit value.String - 256 characters maximum
         * @param value Value to set for the dataType property.
         */
        set: function (value) {
            this._dataType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExtensionProperty.prototype, "isSyncedFromOnPremises", {
        /**
         * Gets the isSyncedFromOnPremises property value. Indicates if this extension property was sycned from onpremises directory using Azure AD Connect. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._isSyncedFromOnPremises;
        },
        /**
         * Sets the isSyncedFromOnPremises property value. Indicates if this extension property was sycned from onpremises directory using Azure AD Connect. Read-only.
         * @param value Value to set for the isSyncedFromOnPremises property.
         */
        set: function (value) {
            this._isSyncedFromOnPremises = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExtensionProperty.prototype, "name", {
        /**
         * Gets the name property value. Name of the extension property. Not nullable.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. Name of the extension property. Not nullable.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExtensionProperty.prototype, "targetObjects", {
        /**
         * Gets the targetObjects property value. Following values are supported. Not nullable. UserGroupOrganizationDeviceApplication
         * @returns a string
         */
        get: function () {
            return this._targetObjects;
        },
        /**
         * Sets the targetObjects property value. Following values are supported. Not nullable. UserGroupOrganizationDeviceApplication
         * @param value Value to set for the targetObjects property.
         */
        set: function (value) {
            this._targetObjects = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ExtensionProperty.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appDisplayName", function (o, n) { o.appDisplayName = n.getStringValue(); }],
            ["dataType", function (o, n) { o.dataType = n.getStringValue(); }],
            ["isSyncedFromOnPremises", function (o, n) { o.isSyncedFromOnPremises = n.getBooleanValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["targetObjects", function (o, n) { o.targetObjects = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ExtensionProperty.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("dataType", this.dataType);
        writer.writeBooleanValue("isSyncedFromOnPremises", this.isSyncedFromOnPremises);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfPrimitiveValues("targetObjects", this.targetObjects);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return ExtensionProperty;
}(directoryObject_1.DirectoryObject));
exports.ExtensionProperty = ExtensionProperty;

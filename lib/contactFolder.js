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
exports.ContactFolder = void 0;
var contact_1 = require("./contact");
var entity_1 = require("./entity");
var multiValueLegacyExtendedProperty_1 = require("./multiValueLegacyExtendedProperty");
var singleValueLegacyExtendedProperty_1 = require("./singleValueLegacyExtendedProperty");
var ContactFolder = /** @class */ (function (_super) {
    __extends(ContactFolder, _super);
    /**
     * Instantiates a new contactFolder and sets the default values.
     */
    function ContactFolder() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ContactFolder.prototype, "childFolders", {
        /**
         * Gets the childFolders property value. The collection of child folders in the folder. Navigation property. Read-only. Nullable.
         * @returns a contactFolder
         */
        get: function () {
            return this._childFolders;
        },
        /**
         * Sets the childFolders property value. The collection of child folders in the folder. Navigation property. Read-only. Nullable.
         * @param value Value to set for the childFolders property.
         */
        set: function (value) {
            this._childFolders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContactFolder.prototype, "contacts", {
        /**
         * Gets the contacts property value. The contacts in the folder. Navigation property. Read-only. Nullable.
         * @returns a contact
         */
        get: function () {
            return this._contacts;
        },
        /**
         * Sets the contacts property value. The contacts in the folder. Navigation property. Read-only. Nullable.
         * @param value Value to set for the contacts property.
         */
        set: function (value) {
            this._contacts = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContactFolder.prototype, "displayName", {
        /**
         * Gets the displayName property value. The folder's display name.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The folder's display name.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContactFolder.prototype, "multiValueExtendedProperties", {
        /**
         * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.
         * @returns a multiValueLegacyExtendedProperty
         */
        get: function () {
            return this._multiValueExtendedProperties;
        },
        /**
         * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.
         * @param value Value to set for the multiValueExtendedProperties property.
         */
        set: function (value) {
            this._multiValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContactFolder.prototype, "parentFolderId", {
        /**
         * Gets the parentFolderId property value. The ID of the folder's parent folder.
         * @returns a string
         */
        get: function () {
            return this._parentFolderId;
        },
        /**
         * Sets the parentFolderId property value. The ID of the folder's parent folder.
         * @param value Value to set for the parentFolderId property.
         */
        set: function (value) {
            this._parentFolderId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContactFolder.prototype, "singleValueExtendedProperties", {
        /**
         * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.
         * @returns a singleValueLegacyExtendedProperty
         */
        get: function () {
            return this._singleValueExtendedProperties;
        },
        /**
         * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.
         * @param value Value to set for the singleValueExtendedProperties property.
         */
        set: function (value) {
            this._singleValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ContactFolder.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["childFolders", function (o, n) { o.childFolders = n.getCollectionOfObjectValues(ContactFolder); }],
            ["contacts", function (o, n) { o.contacts = n.getCollectionOfObjectValues(contact_1.Contact); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["parentFolderId", function (o, n) { o.parentFolderId = n.getStringValue(); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ContactFolder.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("childFolders", this.childFolders);
        writer.writeCollectionOfObjectValues("contacts", this.contacts);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ContactFolder;
}(entity_1.Entity));
exports.ContactFolder = ContactFolder;

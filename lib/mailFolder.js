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
exports.MailFolder = void 0;
var entity_1 = require("./entity");
var messageRule_1 = require("./me/messageRule");
var message_1 = require("./message");
var multiValueLegacyExtendedProperty_1 = require("./multiValueLegacyExtendedProperty");
var singleValueLegacyExtendedProperty_1 = require("./singleValueLegacyExtendedProperty");
var MailFolder = /** @class */ (function (_super) {
    __extends(MailFolder, _super);
    /**
     * Instantiates a new mailFolder and sets the default values.
     */
    function MailFolder() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(MailFolder.prototype, "childFolderCount", {
        /**
         * Gets the childFolderCount property value. The number of immediate child mailFolders in the current mailFolder.
         * @returns a integer
         */
        get: function () {
            return this._childFolderCount;
        },
        /**
         * Sets the childFolderCount property value. The number of immediate child mailFolders in the current mailFolder.
         * @param value Value to set for the childFolderCount property.
         */
        set: function (value) {
            this._childFolderCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "childFolders", {
        /**
         * Gets the childFolders property value. The collection of child folders in the mailFolder.
         * @returns a mailFolder
         */
        get: function () {
            return this._childFolders;
        },
        /**
         * Sets the childFolders property value. The collection of child folders in the mailFolder.
         * @param value Value to set for the childFolders property.
         */
        set: function (value) {
            this._childFolders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "displayName", {
        /**
         * Gets the displayName property value. The mailFolder's display name.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The mailFolder's display name.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "isHidden", {
        /**
         * Gets the isHidden property value. Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.
         * @returns a boolean
         */
        get: function () {
            return this._isHidden;
        },
        /**
         * Sets the isHidden property value. Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.
         * @param value Value to set for the isHidden property.
         */
        set: function (value) {
            this._isHidden = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "messageRules", {
        /**
         * Gets the messageRules property value. The collection of rules that apply to the user's Inbox folder.
         * @returns a messageRule
         */
        get: function () {
            return this._messageRules;
        },
        /**
         * Sets the messageRules property value. The collection of rules that apply to the user's Inbox folder.
         * @param value Value to set for the messageRules property.
         */
        set: function (value) {
            this._messageRules = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "messages", {
        /**
         * Gets the messages property value. The collection of messages in the mailFolder.
         * @returns a message
         */
        get: function () {
            return this._messages;
        },
        /**
         * Sets the messages property value. The collection of messages in the mailFolder.
         * @param value Value to set for the messages property.
         */
        set: function (value) {
            this._messages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "multiValueExtendedProperties", {
        /**
         * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
         * @returns a multiValueLegacyExtendedProperty
         */
        get: function () {
            return this._multiValueExtendedProperties;
        },
        /**
         * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
         * @param value Value to set for the multiValueExtendedProperties property.
         */
        set: function (value) {
            this._multiValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "parentFolderId", {
        /**
         * Gets the parentFolderId property value. The unique identifier for the mailFolder's parent mailFolder.
         * @returns a string
         */
        get: function () {
            return this._parentFolderId;
        },
        /**
         * Sets the parentFolderId property value. The unique identifier for the mailFolder's parent mailFolder.
         * @param value Value to set for the parentFolderId property.
         */
        set: function (value) {
            this._parentFolderId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "singleValueExtendedProperties", {
        /**
         * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
         * @returns a singleValueLegacyExtendedProperty
         */
        get: function () {
            return this._singleValueExtendedProperties;
        },
        /**
         * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
         * @param value Value to set for the singleValueExtendedProperties property.
         */
        set: function (value) {
            this._singleValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "totalItemCount", {
        /**
         * Gets the totalItemCount property value. The number of items in the mailFolder.
         * @returns a integer
         */
        get: function () {
            return this._totalItemCount;
        },
        /**
         * Sets the totalItemCount property value. The number of items in the mailFolder.
         * @param value Value to set for the totalItemCount property.
         */
        set: function (value) {
            this._totalItemCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MailFolder.prototype, "unreadItemCount", {
        /**
         * Gets the unreadItemCount property value. The number of items in the mailFolder marked as unread.
         * @returns a integer
         */
        get: function () {
            return this._unreadItemCount;
        },
        /**
         * Sets the unreadItemCount property value. The number of items in the mailFolder marked as unread.
         * @param value Value to set for the unreadItemCount property.
         */
        set: function (value) {
            this._unreadItemCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    MailFolder.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["childFolderCount", function (o, n) { o.childFolderCount = n.getNumberValue(); }],
            ["childFolders", function (o, n) { o.childFolders = n.getCollectionOfObjectValues(MailFolder); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["isHidden", function (o, n) { o.isHidden = n.getBooleanValue(); }],
            ["messageRules", function (o, n) { o.messageRules = n.getCollectionOfObjectValues(messageRule_1.MessageRule); }],
            ["messages", function (o, n) { o.messages = n.getCollectionOfObjectValues(message_1.Message); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["parentFolderId", function (o, n) { o.parentFolderId = n.getStringValue(); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],
            ["totalItemCount", function (o, n) { o.totalItemCount = n.getNumberValue(); }],
            ["unreadItemCount", function (o, n) { o.unreadItemCount = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    MailFolder.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("childFolderCount", this.childFolderCount);
        writer.writeCollectionOfObjectValues("childFolders", this.childFolders);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isHidden", this.isHidden);
        writer.writeCollectionOfObjectValues("messageRules", this.messageRules);
        writer.writeCollectionOfObjectValues("messages", this.messages);
        writer.writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeNumberValue("totalItemCount", this.totalItemCount);
        writer.writeNumberValue("unreadItemCount", this.unreadItemCount);
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
    return MailFolder;
}(entity_1.Entity));
exports.MailFolder = MailFolder;

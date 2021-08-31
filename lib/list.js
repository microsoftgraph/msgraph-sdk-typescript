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
exports.List = void 0;
var columnDefinition_1 = require("./columnDefinition");
var contentType_1 = require("./contentType");
var baseItem_1 = require("./drive/baseItem");
var drive_1 = require("./drive/drive");
var listItem_1 = require("./listItem");
var subscription_1 = require("./subscription");
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    /**
     * Instantiates a new list and sets the default values.
     */
    function List() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(List.prototype, "columns", {
        /**
         * Gets the columns property value. The collection of field definitions for this list.
         * @returns a columnDefinition
         */
        get: function () {
            return this._columns;
        },
        /**
         * Sets the columns property value. The collection of field definitions for this list.
         * @param value Value to set for the columns property.
         */
        set: function (value) {
            this._columns = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(List.prototype, "contentTypes", {
        /**
         * Gets the contentTypes property value. The collection of content types present in this list.
         * @returns a contentType
         */
        get: function () {
            return this._contentTypes;
        },
        /**
         * Sets the contentTypes property value. The collection of content types present in this list.
         * @param value Value to set for the contentTypes property.
         */
        set: function (value) {
            this._contentTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(List.prototype, "displayName", {
        /**
         * Gets the displayName property value. The displayable title of the list.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The displayable title of the list.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(List.prototype, "drive", {
        /**
         * Gets the drive property value. Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
         * @returns a drive
         */
        get: function () {
            return this._drive;
        },
        /**
         * Sets the drive property value. Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
         * @param value Value to set for the drive property.
         */
        set: function (value) {
            this._drive = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(List.prototype, "items", {
        /**
         * Gets the items property value. All items contained in the list.
         * @returns a listItem
         */
        get: function () {
            return this._items;
        },
        /**
         * Sets the items property value. All items contained in the list.
         * @param value Value to set for the items property.
         */
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(List.prototype, "list", {
        /**
         * Gets the list property value. Provides additional details about the list.
         * @returns a listInfo
         */
        get: function () {
            return this._list;
        },
        /**
         * Sets the list property value. Provides additional details about the list.
         * @param value Value to set for the list property.
         */
        set: function (value) {
            this._list = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(List.prototype, "sharepointIds", {
        /**
         * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
         * @returns a sharepointIds
         */
        get: function () {
            return this._sharepointIds;
        },
        /**
         * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
         * @param value Value to set for the sharepointIds property.
         */
        set: function (value) {
            this._sharepointIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(List.prototype, "subscriptions", {
        /**
         * Gets the subscriptions property value. The set of subscriptions on the list.
         * @returns a subscription
         */
        get: function () {
            return this._subscriptions;
        },
        /**
         * Sets the subscriptions property value. The set of subscriptions on the list.
         * @param value Value to set for the subscriptions property.
         */
        set: function (value) {
            this._subscriptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(List.prototype, "system", {
        /**
         * Gets the system property value. If present, indicates that this is a system-managed list. Read-only.
         * @returns a systemFacet
         */
        get: function () {
            return this._system;
        },
        /**
         * Sets the system property value. If present, indicates that this is a system-managed list. Read-only.
         * @param value Value to set for the system property.
         */
        set: function (value) {
            this._system = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    List.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["columns", function (o, n) { o.columns = n.getCollectionOfObjectValues(columnDefinition_1.ColumnDefinition); }],
            ["contentTypes", function (o, n) { o.contentTypes = n.getCollectionOfObjectValues(contentType_1.ContentType); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["drive", function (o, n) { o.drive = n.getObjectValue(drive_1.Drive); }],
            ["items", function (o, n) { o.items = n.getCollectionOfObjectValues(listItem_1.ListItem); }],
            ["list", function (o, n) { o.list = n.getObjectValue(ListInfo); }],
            ["sharepointIds", function (o, n) { o.sharepointIds = n.getObjectValue(SharepointIds); }],
            ["subscriptions", function (o, n) { o.subscriptions = n.getCollectionOfObjectValues(subscription_1.Subscription); }],
            ["system", function (o, n) { o.system = n.getObjectValue(SystemFacet); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    List.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("columns", this.columns);
        writer.writeCollectionOfObjectValues("contentTypes", this.contentTypes);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("drive", this.drive);
        writer.writeCollectionOfObjectValues("items", this.items);
        writer.writeObjectValue("list", this.list);
        writer.writeObjectValue("sharepointIds", this.sharepointIds);
        writer.writeCollectionOfObjectValues("subscriptions", this.subscriptions);
        writer.writeObjectValue("system", this.system);
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
    return List;
}(baseItem_1.BaseItem));
exports.List = List;

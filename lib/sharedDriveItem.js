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
exports.SharedDriveItem = void 0;
var baseItem_1 = require("./drive/baseItem");
var driveItem_1 = require("./driveItem");
var identitySet_1 = require("./identitySet");
var list_1 = require("./list");
var listItem_1 = require("./listItem");
var permission_1 = require("./permission");
var site_1 = require("./site");
var SharedDriveItem = /** @class */ (function (_super) {
    __extends(SharedDriveItem, _super);
    /**
     * Instantiates a new sharedDriveItem and sets the default values.
     */
    function SharedDriveItem() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(SharedDriveItem.prototype, "driveItem", {
        /**
         * Gets the driveItem property value. Used to access the underlying driveItem
         * @returns a driveItem
         */
        get: function () {
            return this._driveItem;
        },
        /**
         * Sets the driveItem property value. Used to access the underlying driveItem
         * @param value Value to set for the driveItem property.
         */
        set: function (value) {
            this._driveItem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedDriveItem.prototype, "items", {
        /**
         * Gets the items property value. All driveItems contained in the sharing root. This collection cannot be enumerated.
         * @returns a driveItem
         */
        get: function () {
            return this._items;
        },
        /**
         * Sets the items property value. All driveItems contained in the sharing root. This collection cannot be enumerated.
         * @param value Value to set for the items property.
         */
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedDriveItem.prototype, "list", {
        /**
         * Gets the list property value. Used to access the underlying list
         * @returns a list
         */
        get: function () {
            return this._list;
        },
        /**
         * Sets the list property value. Used to access the underlying list
         * @param value Value to set for the list property.
         */
        set: function (value) {
            this._list = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedDriveItem.prototype, "listItem", {
        /**
         * Gets the listItem property value. Used to access the underlying listItem
         * @returns a listItem
         */
        get: function () {
            return this._listItem;
        },
        /**
         * Sets the listItem property value. Used to access the underlying listItem
         * @param value Value to set for the listItem property.
         */
        set: function (value) {
            this._listItem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedDriveItem.prototype, "owner", {
        /**
         * Gets the owner property value. Information about the owner of the shared item being referenced.
         * @returns a identitySet
         */
        get: function () {
            return this._owner;
        },
        /**
         * Sets the owner property value. Information about the owner of the shared item being referenced.
         * @param value Value to set for the owner property.
         */
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedDriveItem.prototype, "permission", {
        /**
         * Gets the permission property value. Used to access the permission representing the underlying sharing link
         * @returns a permission
         */
        get: function () {
            return this._permission;
        },
        /**
         * Sets the permission property value. Used to access the permission representing the underlying sharing link
         * @param value Value to set for the permission property.
         */
        set: function (value) {
            this._permission = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedDriveItem.prototype, "root", {
        /**
         * Gets the root property value. Used to access the underlying driveItem. Deprecated -- use driveItem instead.
         * @returns a driveItem
         */
        get: function () {
            return this._root;
        },
        /**
         * Sets the root property value. Used to access the underlying driveItem. Deprecated -- use driveItem instead.
         * @param value Value to set for the root property.
         */
        set: function (value) {
            this._root = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedDriveItem.prototype, "site", {
        /**
         * Gets the site property value. Used to access the underlying site
         * @returns a site
         */
        get: function () {
            return this._site;
        },
        /**
         * Sets the site property value. Used to access the underlying site
         * @param value Value to set for the site property.
         */
        set: function (value) {
            this._site = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SharedDriveItem.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["driveItem", function (o, n) { o.driveItem = n.getObjectValue(driveItem_1.DriveItem); }],
            ["items", function (o, n) { o.items = n.getCollectionOfObjectValues(driveItem_1.DriveItem); }],
            ["list", function (o, n) { o.list = n.getObjectValue(list_1.List); }],
            ["listItem", function (o, n) { o.listItem = n.getObjectValue(listItem_1.ListItem); }],
            ["owner", function (o, n) { o.owner = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["permission", function (o, n) { o.permission = n.getObjectValue(permission_1.Permission); }],
            ["root", function (o, n) { o.root = n.getObjectValue(driveItem_1.DriveItem); }],
            ["site", function (o, n) { o.site = n.getObjectValue(site_1.Site); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SharedDriveItem.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("driveItem", this.driveItem);
        writer.writeCollectionOfObjectValues("items", this.items);
        writer.writeObjectValue("list", this.list);
        writer.writeObjectValue("listItem", this.listItem);
        writer.writeObjectValue("owner", this.owner);
        writer.writeObjectValue("permission", this.permission);
        writer.writeObjectValue("root", this.root);
        writer.writeObjectValue("site", this.site);
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
    return SharedDriveItem;
}(baseItem_1.BaseItem));
exports.SharedDriveItem = SharedDriveItem;

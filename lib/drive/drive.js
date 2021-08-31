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
exports.Drive = void 0;
var driveItem_1 = require("../driveItem");
var identitySet_1 = require("../identitySet");
var list_1 = require("../list");
var baseItem_1 = require("./baseItem");
var Drive = /** @class */ (function (_super) {
    __extends(Drive, _super);
    /**
     * Instantiates a new Drive and sets the default values.
     */
    function Drive() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Drive.prototype, "driveType", {
        /**
         * Gets the driveType property value. Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
         * @returns a string
         */
        get: function () {
            return this._driveType;
        },
        /**
         * Sets the driveType property value. Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
         * @param value Value to set for the driveType property.
         */
        set: function (value) {
            this._driveType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Drive.prototype, "following", {
        /**
         * Gets the following property value. The list of items the user is following. Only in OneDrive for Business.
         * @returns a driveItem
         */
        get: function () {
            return this._following;
        },
        /**
         * Sets the following property value. The list of items the user is following. Only in OneDrive for Business.
         * @param value Value to set for the following property.
         */
        set: function (value) {
            this._following = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Drive.prototype, "items", {
        /**
         * Gets the items property value. All items contained in the drive. Read-only. Nullable.
         * @returns a driveItem
         */
        get: function () {
            return this._items;
        },
        /**
         * Sets the items property value. All items contained in the drive. Read-only. Nullable.
         * @param value Value to set for the items property.
         */
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Drive.prototype, "list", {
        /**
         * Gets the list property value. For drives in SharePoint, the underlying document library list. Read-only. Nullable.
         * @returns a list
         */
        get: function () {
            return this._list;
        },
        /**
         * Sets the list property value. For drives in SharePoint, the underlying document library list. Read-only. Nullable.
         * @param value Value to set for the list property.
         */
        set: function (value) {
            this._list = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Drive.prototype, "owner", {
        /**
         * Gets the owner property value. Optional. The user account that owns the drive. Read-only.
         * @returns a identitySet
         */
        get: function () {
            return this._owner;
        },
        /**
         * Sets the owner property value. Optional. The user account that owns the drive. Read-only.
         * @param value Value to set for the owner property.
         */
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Drive.prototype, "quota", {
        /**
         * Gets the quota property value. Optional. Information about the drive's storage space quota. Read-only.
         * @returns a quota
         */
        get: function () {
            return this._quota;
        },
        /**
         * Sets the quota property value. Optional. Information about the drive's storage space quota. Read-only.
         * @param value Value to set for the quota property.
         */
        set: function (value) {
            this._quota = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Drive.prototype, "root", {
        /**
         * Gets the root property value. The root folder of the drive. Read-only.
         * @returns a driveItem
         */
        get: function () {
            return this._root;
        },
        /**
         * Sets the root property value. The root folder of the drive. Read-only.
         * @param value Value to set for the root property.
         */
        set: function (value) {
            this._root = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Drive.prototype, "sharePointIds", {
        /**
         * Gets the sharePointIds property value.
         * @returns a sharepointIds
         */
        get: function () {
            return this._sharePointIds;
        },
        /**
         * Sets the sharePointIds property value.
         * @param value Value to set for the sharePointIds property.
         */
        set: function (value) {
            this._sharePointIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Drive.prototype, "special", {
        /**
         * Gets the special property value. Collection of common folders available in OneDrive. Read-only. Nullable.
         * @returns a driveItem
         */
        get: function () {
            return this._special;
        },
        /**
         * Sets the special property value. Collection of common folders available in OneDrive. Read-only. Nullable.
         * @param value Value to set for the special property.
         */
        set: function (value) {
            this._special = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Drive.prototype, "system", {
        /**
         * Gets the system property value. If present, indicates that this is a system-managed drive. Read-only.
         * @returns a systemFacet
         */
        get: function () {
            return this._system;
        },
        /**
         * Sets the system property value. If present, indicates that this is a system-managed drive. Read-only.
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
    Drive.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["driveType", function (o, n) { o.driveType = n.getStringValue(); }],
            ["following", function (o, n) { o.following = n.getCollectionOfObjectValues(driveItem_1.DriveItem); }],
            ["items", function (o, n) { o.items = n.getCollectionOfObjectValues(driveItem_1.DriveItem); }],
            ["list", function (o, n) { o.list = n.getObjectValue(list_1.List); }],
            ["owner", function (o, n) { o.owner = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["quota", function (o, n) { o.quota = n.getObjectValue(Quota); }],
            ["root", function (o, n) { o.root = n.getObjectValue(driveItem_1.DriveItem); }],
            ["sharePointIds", function (o, n) { o.sharePointIds = n.getObjectValue(SharepointIds); }],
            ["special", function (o, n) { o.special = n.getCollectionOfObjectValues(driveItem_1.DriveItem); }],
            ["system", function (o, n) { o.system = n.getObjectValue(SystemFacet); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Drive.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("driveType", this.driveType);
        writer.writeCollectionOfObjectValues("following", this.following);
        writer.writeCollectionOfObjectValues("items", this.items);
        writer.writeObjectValue("list", this.list);
        writer.writeObjectValue("owner", this.owner);
        writer.writeObjectValue("quota", this.quota);
        writer.writeObjectValue("root", this.root);
        writer.writeObjectValue("sharePointIds", this.sharePointIds);
        writer.writeCollectionOfObjectValues("special", this.special);
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
    ;
    return Drive;
}(baseItem_1.BaseItem));
exports.Drive = Drive;

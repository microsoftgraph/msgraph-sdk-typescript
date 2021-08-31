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
exports.Site = void 0;
var columnDefinition_1 = require("./columnDefinition");
var contentType_1 = require("./contentType");
var baseItem_1 = require("./drive/baseItem");
var drive_1 = require("./drive/drive");
var itemAnalytics_1 = require("./drive/list/items/analytics/itemAnalytics");
var root_1 = require("./drive/root/root");
var onenote_1 = require("./groups/onenote/onenote");
var list_1 = require("./list");
var permission_1 = require("./permission");
var Site = /** @class */ (function (_super) {
    __extends(Site, _super);
    /**
     * Instantiates a new site and sets the default values.
     */
    function Site() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Site.prototype, "analytics", {
        /**
         * Gets the analytics property value. Analytics about the view activities that took place in this site.
         * @returns a itemAnalytics
         */
        get: function () {
            return this._analytics;
        },
        /**
         * Sets the analytics property value. Analytics about the view activities that took place in this site.
         * @param value Value to set for the analytics property.
         */
        set: function (value) {
            this._analytics = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "columns", {
        /**
         * Gets the columns property value. The collection of column definitions reusable across lists under this site.
         * @returns a columnDefinition
         */
        get: function () {
            return this._columns;
        },
        /**
         * Sets the columns property value. The collection of column definitions reusable across lists under this site.
         * @param value Value to set for the columns property.
         */
        set: function (value) {
            this._columns = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "contentTypes", {
        /**
         * Gets the contentTypes property value. The collection of content types defined for this site.
         * @returns a contentType
         */
        get: function () {
            return this._contentTypes;
        },
        /**
         * Sets the contentTypes property value. The collection of content types defined for this site.
         * @param value Value to set for the contentTypes property.
         */
        set: function (value) {
            this._contentTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "displayName", {
        /**
         * Gets the displayName property value. The full title for the site. Read-only.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The full title for the site. Read-only.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "drive", {
        /**
         * Gets the drive property value. The default drive (document library) for this site.
         * @returns a drive
         */
        get: function () {
            return this._drive;
        },
        /**
         * Sets the drive property value. The default drive (document library) for this site.
         * @param value Value to set for the drive property.
         */
        set: function (value) {
            this._drive = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "drives", {
        /**
         * Gets the drives property value. The collection of drives (document libraries) under this site.
         * @returns a drive
         */
        get: function () {
            return this._drives;
        },
        /**
         * Sets the drives property value. The collection of drives (document libraries) under this site.
         * @param value Value to set for the drives property.
         */
        set: function (value) {
            this._drives = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "error", {
        /**
         * Gets the error property value.
         * @returns a publicError
         */
        get: function () {
            return this._error;
        },
        /**
         * Sets the error property value.
         * @param value Value to set for the error property.
         */
        set: function (value) {
            this._error = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "items", {
        /**
         * Gets the items property value. Used to address any item contained in this site. This collection cannot be enumerated.
         * @returns a baseItem
         */
        get: function () {
            return this._items;
        },
        /**
         * Sets the items property value. Used to address any item contained in this site. This collection cannot be enumerated.
         * @param value Value to set for the items property.
         */
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "lists", {
        /**
         * Gets the lists property value. The collection of lists under this site.
         * @returns a list
         */
        get: function () {
            return this._lists;
        },
        /**
         * Sets the lists property value. The collection of lists under this site.
         * @param value Value to set for the lists property.
         */
        set: function (value) {
            this._lists = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "onenote", {
        /**
         * Gets the onenote property value. Calls the OneNote service for notebook related operations.
         * @returns a onenote
         */
        get: function () {
            return this._onenote;
        },
        /**
         * Sets the onenote property value. Calls the OneNote service for notebook related operations.
         * @param value Value to set for the onenote property.
         */
        set: function (value) {
            this._onenote = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "permissions", {
        /**
         * Gets the permissions property value. The permissions associated with the site. Nullable.
         * @returns a permission
         */
        get: function () {
            return this._permissions;
        },
        /**
         * Sets the permissions property value. The permissions associated with the site. Nullable.
         * @param value Value to set for the permissions property.
         */
        set: function (value) {
            this._permissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "root", {
        /**
         * Gets the root property value. If present, indicates that this is the root site in the site collection. Read-only.
         * @returns a root
         */
        get: function () {
            return this._root;
        },
        /**
         * Sets the root property value. If present, indicates that this is the root site in the site collection. Read-only.
         * @param value Value to set for the root property.
         */
        set: function (value) {
            this._root = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "sharepointIds", {
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
    Object.defineProperty(Site.prototype, "siteCollection", {
        /**
         * Gets the siteCollection property value. Provides details about the site's site collection. Available only on the root site. Read-only.
         * @returns a siteCollection
         */
        get: function () {
            return this._siteCollection;
        },
        /**
         * Sets the siteCollection property value. Provides details about the site's site collection. Available only on the root site. Read-only.
         * @param value Value to set for the siteCollection property.
         */
        set: function (value) {
            this._siteCollection = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Site.prototype, "sites", {
        /**
         * Gets the sites property value. The collection of the sub-sites under this site.
         * @returns a site
         */
        get: function () {
            return this._sites;
        },
        /**
         * Sets the sites property value. The collection of the sub-sites under this site.
         * @param value Value to set for the sites property.
         */
        set: function (value) {
            this._sites = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Site.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["analytics", function (o, n) { o.analytics = n.getObjectValue(itemAnalytics_1.ItemAnalytics); }],
            ["columns", function (o, n) { o.columns = n.getCollectionOfObjectValues(columnDefinition_1.ColumnDefinition); }],
            ["contentTypes", function (o, n) { o.contentTypes = n.getCollectionOfObjectValues(contentType_1.ContentType); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["drive", function (o, n) { o.drive = n.getObjectValue(drive_1.Drive); }],
            ["drives", function (o, n) { o.drives = n.getCollectionOfObjectValues(drive_1.Drive); }],
            ["error", function (o, n) { o.error = n.getObjectValue(PublicError); }],
            ["items", function (o, n) { o.items = n.getCollectionOfObjectValues(baseItem_1.BaseItem); }],
            ["lists", function (o, n) { o.lists = n.getCollectionOfObjectValues(list_1.List); }],
            ["onenote", function (o, n) { o.onenote = n.getObjectValue(onenote_1.Onenote); }],
            ["permissions", function (o, n) { o.permissions = n.getCollectionOfObjectValues(permission_1.Permission); }],
            ["root", function (o, n) { o.root = n.getObjectValue(root_1.Root); }],
            ["sharepointIds", function (o, n) { o.sharepointIds = n.getObjectValue(SharepointIds); }],
            ["siteCollection", function (o, n) { o.siteCollection = n.getObjectValue(SiteCollection); }],
            ["sites", function (o, n) { o.sites = n.getCollectionOfObjectValues(Site); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Site.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("analytics", this.analytics);
        writer.writeCollectionOfObjectValues("columns", this.columns);
        writer.writeCollectionOfObjectValues("contentTypes", this.contentTypes);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("drive", this.drive);
        writer.writeCollectionOfObjectValues("drives", this.drives);
        writer.writeObjectValue("error", this.error);
        writer.writeCollectionOfObjectValues("items", this.items);
        writer.writeCollectionOfObjectValues("lists", this.lists);
        writer.writeObjectValue("onenote", this.onenote);
        writer.writeCollectionOfObjectValues("permissions", this.permissions);
        writer.writeObjectValue("root", this.root);
        writer.writeObjectValue("sharepointIds", this.sharepointIds);
        writer.writeObjectValue("siteCollection", this.siteCollection);
        writer.writeCollectionOfObjectValues("sites", this.sites);
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
    ;
    ;
    ;
    ;
    return Site;
}(baseItem_1.BaseItem));
exports.Site = Site;

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
exports.ListItem = void 0;
var baseItem_1 = require("./drive/baseItem");
var itemAnalytics_1 = require("./drive/list/items/analytics/itemAnalytics");
var fieldValueSet_1 = require("./drive/list/items/fields/fieldValueSet");
var driveItem_1 = require("./driveItem");
var listItemVersion_1 = require("./listItemVersion");
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    /**
     * Instantiates a new listItem and sets the default values.
     */
    function ListItem() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ListItem.prototype, "analytics", {
        /**
         * Gets the analytics property value. Analytics about the view activities that took place on this item.
         * @returns a itemAnalytics
         */
        get: function () {
            return this._analytics;
        },
        /**
         * Sets the analytics property value. Analytics about the view activities that took place on this item.
         * @param value Value to set for the analytics property.
         */
        set: function (value) {
            this._analytics = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ListItem.prototype, "contentType", {
        /**
         * Gets the contentType property value. The content type of this list item
         * @returns a contentTypeInfo
         */
        get: function () {
            return this._contentType;
        },
        /**
         * Sets the contentType property value. The content type of this list item
         * @param value Value to set for the contentType property.
         */
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ListItem.prototype, "driveItem", {
        /**
         * Gets the driveItem property value. For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
         * @returns a driveItem
         */
        get: function () {
            return this._driveItem;
        },
        /**
         * Sets the driveItem property value. For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
         * @param value Value to set for the driveItem property.
         */
        set: function (value) {
            this._driveItem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ListItem.prototype, "fields", {
        /**
         * Gets the fields property value. The values of the columns set on this list item.
         * @returns a fieldValueSet
         */
        get: function () {
            return this._fields;
        },
        /**
         * Sets the fields property value. The values of the columns set on this list item.
         * @param value Value to set for the fields property.
         */
        set: function (value) {
            this._fields = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ListItem.prototype, "sharepointIds", {
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
    Object.defineProperty(ListItem.prototype, "versions", {
        /**
         * Gets the versions property value. The list of previous versions of the list item.
         * @returns a listItemVersion
         */
        get: function () {
            return this._versions;
        },
        /**
         * Sets the versions property value. The list of previous versions of the list item.
         * @param value Value to set for the versions property.
         */
        set: function (value) {
            this._versions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ListItem.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["analytics", function (o, n) { o.analytics = n.getObjectValue(itemAnalytics_1.ItemAnalytics); }],
            ["contentType", function (o, n) { o.contentType = n.getObjectValue(ContentTypeInfo); }],
            ["driveItem", function (o, n) { o.driveItem = n.getObjectValue(driveItem_1.DriveItem); }],
            ["fields", function (o, n) { o.fields = n.getObjectValue(fieldValueSet_1.FieldValueSet); }],
            ["sharepointIds", function (o, n) { o.sharepointIds = n.getObjectValue(SharepointIds); }],
            ["versions", function (o, n) { o.versions = n.getCollectionOfObjectValues(listItemVersion_1.ListItemVersion); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ListItem.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("analytics", this.analytics);
        writer.writeObjectValue("contentType", this.contentType);
        writer.writeObjectValue("driveItem", this.driveItem);
        writer.writeObjectValue("fields", this.fields);
        writer.writeObjectValue("sharepointIds", this.sharepointIds);
        writer.writeCollectionOfObjectValues("versions", this.versions);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ListItem;
}(baseItem_1.BaseItem));
exports.ListItem = ListItem;

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
exports.ContentType = void 0;
var entity_1 = require("./entity");
var columnLink_1 = require("./sites/columnLink");
var ContentType = /** @class */ (function (_super) {
    __extends(ContentType, _super);
    /**
     * Instantiates a new contentType and sets the default values.
     */
    function ContentType() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ContentType.prototype, "columnLinks", {
        /**
         * Gets the columnLinks property value. The collection of columns that are required by this content type
         * @returns a columnLink
         */
        get: function () {
            return this._columnLinks;
        },
        /**
         * Sets the columnLinks property value. The collection of columns that are required by this content type
         * @param value Value to set for the columnLinks property.
         */
        set: function (value) {
            this._columnLinks = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContentType.prototype, "description", {
        /**
         * Gets the description property value. The descriptive text for the item.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. The descriptive text for the item.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContentType.prototype, "group", {
        /**
         * Gets the group property value. The name of the group this content type belongs to. Helps organize related content types.
         * @returns a string
         */
        get: function () {
            return this._group;
        },
        /**
         * Sets the group property value. The name of the group this content type belongs to. Helps organize related content types.
         * @param value Value to set for the group property.
         */
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContentType.prototype, "hidden", {
        /**
         * Gets the hidden property value. Indicates whether the content type is hidden in the list's 'New' menu.
         * @returns a boolean
         */
        get: function () {
            return this._hidden;
        },
        /**
         * Sets the hidden property value. Indicates whether the content type is hidden in the list's 'New' menu.
         * @param value Value to set for the hidden property.
         */
        set: function (value) {
            this._hidden = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContentType.prototype, "inheritedFrom", {
        /**
         * Gets the inheritedFrom property value. If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.
         * @returns a itemReference
         */
        get: function () {
            return this._inheritedFrom;
        },
        /**
         * Sets the inheritedFrom property value. If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.
         * @param value Value to set for the inheritedFrom property.
         */
        set: function (value) {
            this._inheritedFrom = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContentType.prototype, "name", {
        /**
         * Gets the name property value. The name of the content type.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The name of the content type.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContentType.prototype, "order", {
        /**
         * Gets the order property value. Specifies the order in which the content type appears in the selection UI.
         * @returns a contentTypeOrder
         */
        get: function () {
            return this._order;
        },
        /**
         * Sets the order property value. Specifies the order in which the content type appears in the selection UI.
         * @param value Value to set for the order property.
         */
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContentType.prototype, "parentId", {
        /**
         * Gets the parentId property value. The unique identifier of the content type.
         * @returns a string
         */
        get: function () {
            return this._parentId;
        },
        /**
         * Sets the parentId property value. The unique identifier of the content type.
         * @param value Value to set for the parentId property.
         */
        set: function (value) {
            this._parentId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContentType.prototype, "readOnly", {
        /**
         * Gets the readOnly property value. If true, the content type cannot be modified unless this value is first set to false.
         * @returns a boolean
         */
        get: function () {
            return this._readOnly;
        },
        /**
         * Sets the readOnly property value. If true, the content type cannot be modified unless this value is first set to false.
         * @param value Value to set for the readOnly property.
         */
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContentType.prototype, "sealed", {
        /**
         * Gets the sealed property value. If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.
         * @returns a boolean
         */
        get: function () {
            return this._sealed;
        },
        /**
         * Sets the sealed property value. If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.
         * @param value Value to set for the sealed property.
         */
        set: function (value) {
            this._sealed = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ContentType.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["columnLinks", function (o, n) { o.columnLinks = n.getCollectionOfObjectValues(columnLink_1.ColumnLink); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["group", function (o, n) { o.group = n.getStringValue(); }],
            ["hidden", function (o, n) { o.hidden = n.getBooleanValue(); }],
            ["inheritedFrom", function (o, n) { o.inheritedFrom = n.getObjectValue(ItemReference); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["order", function (o, n) { o.order = n.getObjectValue(ContentTypeOrder); }],
            ["parentId", function (o, n) { o.parentId = n.getStringValue(); }],
            ["readOnly", function (o, n) { o.readOnly = n.getBooleanValue(); }],
            ["sealed", function (o, n) { o.sealed = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ContentType.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("columnLinks", this.columnLinks);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("group", this.group);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeObjectValue("inheritedFrom", this.inheritedFrom);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue("order", this.order);
        writer.writeStringValue("parentId", this.parentId);
        writer.writeBooleanValue("readOnly", this.readOnly);
        writer.writeBooleanValue("sealed", this.sealed);
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
    return ContentType;
}(entity_1.Entity));
exports.ContentType = ContentType;

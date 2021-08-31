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
exports.BaseItem = void 0;
var entity_1 = require("../entity");
var identitySet_1 = require("../identitySet");
var user_1 = require("../user");
var BaseItem = /** @class */ (function (_super) {
    __extends(BaseItem, _super);
    /**
     * Instantiates a new baseItem and sets the default values.
     */
    function BaseItem() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(BaseItem.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. Identity of the user, device, or application which created the item. Read-only.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. Identity of the user, device, or application which created the item. Read-only.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "createdByUser", {
        /**
         * Gets the createdByUser property value. Identity of the user who created the item. Read-only.
         * @returns a user
         */
        get: function () {
            return this._createdByUser;
        },
        /**
         * Sets the createdByUser property value. Identity of the user who created the item. Read-only.
         * @param value Value to set for the createdByUser property.
         */
        set: function (value) {
            this._createdByUser = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Date and time of item creation. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Date and time of item creation. Read-only.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "description", {
        /**
         * Gets the description property value. Provides a user-visible description of the item. Optional.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Provides a user-visible description of the item. Optional.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "eTag", {
        /**
         * Gets the eTag property value. ETag for the item. Read-only.
         * @returns a string
         */
        get: function () {
            return this._eTag;
        },
        /**
         * Sets the eTag property value. ETag for the item. Read-only.
         * @param value Value to set for the eTag property.
         */
        set: function (value) {
            this._eTag = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "lastModifiedBy", {
        /**
         * Gets the lastModifiedBy property value. Identity of the user, device, and application which last modified the item. Read-only.
         * @returns a identitySet
         */
        get: function () {
            return this._lastModifiedBy;
        },
        /**
         * Sets the lastModifiedBy property value. Identity of the user, device, and application which last modified the item. Read-only.
         * @param value Value to set for the lastModifiedBy property.
         */
        set: function (value) {
            this._lastModifiedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "lastModifiedByUser", {
        /**
         * Gets the lastModifiedByUser property value. Identity of the user who last modified the item. Read-only.
         * @returns a user
         */
        get: function () {
            return this._lastModifiedByUser;
        },
        /**
         * Sets the lastModifiedByUser property value. Identity of the user who last modified the item. Read-only.
         * @param value Value to set for the lastModifiedByUser property.
         */
        set: function (value) {
            this._lastModifiedByUser = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "name", {
        /**
         * Gets the name property value. The name of the item. Read-write.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The name of the item. Read-write.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "parentReference", {
        /**
         * Gets the parentReference property value. Parent information, if the item has a parent. Read-write.
         * @returns a itemReference
         */
        get: function () {
            return this._parentReference;
        },
        /**
         * Sets the parentReference property value. Parent information, if the item has a parent. Read-write.
         * @param value Value to set for the parentReference property.
         */
        set: function (value) {
            this._parentReference = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BaseItem.prototype, "webUrl", {
        /**
         * Gets the webUrl property value. URL that displays the resource in the browser. Read-only.
         * @returns a string
         */
        get: function () {
            return this._webUrl;
        },
        /**
         * Sets the webUrl property value. URL that displays the resource in the browser. Read-only.
         * @param value Value to set for the webUrl property.
         */
        set: function (value) {
            this._webUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    BaseItem.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["createdByUser", function (o, n) { o.createdByUser = n.getObjectValue(user_1.User); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["eTag", function (o, n) { o.eTag = n.getStringValue(); }],
            ["lastModifiedBy", function (o, n) { o.lastModifiedBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["lastModifiedByUser", function (o, n) { o.lastModifiedByUser = n.getObjectValue(user_1.User); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["parentReference", function (o, n) { o.parentReference = n.getObjectValue(ItemReference); }],
            ["webUrl", function (o, n) { o.webUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    BaseItem.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeObjectValue("createdByUser", this.createdByUser);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("eTag", this.eTag);
        writer.writeObjectValue("lastModifiedBy", this.lastModifiedBy);
        writer.writeObjectValue("lastModifiedByUser", this.lastModifiedByUser);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue("parentReference", this.parentReference);
        writer.writeStringValue("webUrl", this.webUrl);
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
    return BaseItem;
}(entity_1.Entity));
exports.BaseItem = BaseItem;

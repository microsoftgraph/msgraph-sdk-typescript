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
exports.SharedInsight = void 0;
var entity_1 = require("./entity");
var SharedInsight = /** @class */ (function (_super) {
    __extends(SharedInsight, _super);
    /**
     * Instantiates a new sharedInsight and sets the default values.
     */
    function SharedInsight() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(SharedInsight.prototype, "lastShared", {
        /**
         * Gets the lastShared property value. Details about the shared item. Read only.
         * @returns a sharingDetail
         */
        get: function () {
            return this._lastShared;
        },
        /**
         * Sets the lastShared property value. Details about the shared item. Read only.
         * @param value Value to set for the lastShared property.
         */
        set: function (value) {
            this._lastShared = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedInsight.prototype, "lastSharedMethod", {
        /**
         * Gets the lastSharedMethod property value.
         * @returns a entity
         */
        get: function () {
            return this._lastSharedMethod;
        },
        /**
         * Sets the lastSharedMethod property value.
         * @param value Value to set for the lastSharedMethod property.
         */
        set: function (value) {
            this._lastSharedMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedInsight.prototype, "resource", {
        /**
         * Gets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
         * @returns a entity
         */
        get: function () {
            return this._resource;
        },
        /**
         * Sets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
         * @param value Value to set for the resource property.
         */
        set: function (value) {
            this._resource = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedInsight.prototype, "resourceReference", {
        /**
         * Gets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
         * @returns a resourceReference
         */
        get: function () {
            return this._resourceReference;
        },
        /**
         * Sets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
         * @param value Value to set for the resourceReference property.
         */
        set: function (value) {
            this._resourceReference = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedInsight.prototype, "resourceVisualization", {
        /**
         * Gets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
         * @returns a resourceVisualization
         */
        get: function () {
            return this._resourceVisualization;
        },
        /**
         * Sets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
         * @param value Value to set for the resourceVisualization property.
         */
        set: function (value) {
            this._resourceVisualization = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SharedInsight.prototype, "sharingHistory", {
        /**
         * Gets the sharingHistory property value.
         * @returns a sharingDetail
         */
        get: function () {
            return this._sharingHistory;
        },
        /**
         * Sets the sharingHistory property value.
         * @param value Value to set for the sharingHistory property.
         */
        set: function (value) {
            this._sharingHistory = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SharedInsight.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["lastShared", function (o, n) { o.lastShared = n.getObjectValue(SharingDetail); }],
            ["lastSharedMethod", function (o, n) { o.lastSharedMethod = n.getObjectValue(entity_1.Entity); }],
            ["resource", function (o, n) { o.resource = n.getObjectValue(entity_1.Entity); }],
            ["resourceReference", function (o, n) { o.resourceReference = n.getObjectValue(ResourceReference); }],
            ["resourceVisualization", function (o, n) { o.resourceVisualization = n.getObjectValue(ResourceVisualization); }],
            ["sharingHistory", function (o, n) { o.sharingHistory = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SharedInsight.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("lastShared", this.lastShared);
        writer.writeObjectValue("lastSharedMethod", this.lastSharedMethod);
        writer.writeObjectValue("resource", this.resource);
        writer.writeObjectValue("resourceReference", this.resourceReference);
        writer.writeObjectValue("resourceVisualization", this.resourceVisualization);
        writer.writeCollectionOfPrimitiveValues("sharingHistory", this.sharingHistory);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return SharedInsight;
}(entity_1.Entity));
exports.SharedInsight = SharedInsight;

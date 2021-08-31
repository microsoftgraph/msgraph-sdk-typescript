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
exports.Trending = void 0;
var entity_1 = require("./entity");
var Trending = /** @class */ (function (_super) {
    __extends(Trending, _super);
    /**
     * Instantiates a new trending and sets the default values.
     */
    function Trending() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Trending.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Trending.prototype, "resource", {
        /**
         * Gets the resource property value. Used for navigating to the trending document.
         * @returns a entity
         */
        get: function () {
            return this._resource;
        },
        /**
         * Sets the resource property value. Used for navigating to the trending document.
         * @param value Value to set for the resource property.
         */
        set: function (value) {
            this._resource = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Trending.prototype, "resourceReference", {
        /**
         * Gets the resourceReference property value. Reference properties of the trending document, such as the url and type of the document.
         * @returns a resourceReference
         */
        get: function () {
            return this._resourceReference;
        },
        /**
         * Sets the resourceReference property value. Reference properties of the trending document, such as the url and type of the document.
         * @param value Value to set for the resourceReference property.
         */
        set: function (value) {
            this._resourceReference = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Trending.prototype, "resourceVisualization", {
        /**
         * Gets the resourceVisualization property value. Properties that you can use to visualize the document in your experience.
         * @returns a resourceVisualization
         */
        get: function () {
            return this._resourceVisualization;
        },
        /**
         * Sets the resourceVisualization property value. Properties that you can use to visualize the document in your experience.
         * @param value Value to set for the resourceVisualization property.
         */
        set: function (value) {
            this._resourceVisualization = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Trending.prototype, "weight", {
        /**
         * Gets the weight property value. Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value.
         * @returns a double
         */
        get: function () {
            return this._weight;
        },
        /**
         * Sets the weight property value. Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value.
         * @param value Value to set for the weight property.
         */
        set: function (value) {
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Trending.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["resource", function (o, n) { o.resource = n.getObjectValue(entity_1.Entity); }],
            ["resourceReference", function (o, n) { o.resourceReference = n.getObjectValue(ResourceReference); }],
            ["resourceVisualization", function (o, n) { o.resourceVisualization = n.getObjectValue(ResourceVisualization); }],
            ["weight", function (o, n) { o.weight = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Trending.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue("resource", this.resource);
        writer.writeObjectValue("resourceReference", this.resourceReference);
        writer.writeObjectValue("resourceVisualization", this.resourceVisualization);
        writer.writeNumberValue("weight", this.weight);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return Trending;
}(entity_1.Entity));
exports.Trending = Trending;

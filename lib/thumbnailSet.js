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
exports.ThumbnailSet = void 0;
var entity_1 = require("./entity");
var ThumbnailSet = /** @class */ (function (_super) {
    __extends(ThumbnailSet, _super);
    /**
     * Instantiates a new thumbnailSet and sets the default values.
     */
    function ThumbnailSet() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ThumbnailSet.prototype, "large", {
        /**
         * Gets the large property value. A 1920x1920 scaled thumbnail.
         * @returns a thumbnail
         */
        get: function () {
            return this._large;
        },
        /**
         * Sets the large property value. A 1920x1920 scaled thumbnail.
         * @param value Value to set for the large property.
         */
        set: function (value) {
            this._large = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThumbnailSet.prototype, "medium", {
        /**
         * Gets the medium property value. A 176x176 scaled thumbnail.
         * @returns a thumbnail
         */
        get: function () {
            return this._medium;
        },
        /**
         * Sets the medium property value. A 176x176 scaled thumbnail.
         * @param value Value to set for the medium property.
         */
        set: function (value) {
            this._medium = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThumbnailSet.prototype, "small", {
        /**
         * Gets the small property value. A 48x48 cropped thumbnail.
         * @returns a thumbnail
         */
        get: function () {
            return this._small;
        },
        /**
         * Sets the small property value. A 48x48 cropped thumbnail.
         * @param value Value to set for the small property.
         */
        set: function (value) {
            this._small = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ThumbnailSet.prototype, "source", {
        /**
         * Gets the source property value. A custom thumbnail image or the original image used to generate other thumbnails.
         * @returns a thumbnail
         */
        get: function () {
            return this._source;
        },
        /**
         * Sets the source property value. A custom thumbnail image or the original image used to generate other thumbnails.
         * @param value Value to set for the source property.
         */
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ThumbnailSet.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["large", function (o, n) { o.large = n.getObjectValue(Thumbnail); }],
            ["medium", function (o, n) { o.medium = n.getObjectValue(Thumbnail); }],
            ["small", function (o, n) { o.small = n.getObjectValue(Thumbnail); }],
            ["source", function (o, n) { o.source = n.getObjectValue(Thumbnail); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ThumbnailSet.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("large", this.large);
        writer.writeObjectValue("medium", this.medium);
        writer.writeObjectValue("small", this.small);
        writer.writeObjectValue("source", this.source);
    };
    ;
    ;
    ;
    ;
    ;
    return ThumbnailSet;
}(entity_1.Entity));
exports.ThumbnailSet = ThumbnailSet;

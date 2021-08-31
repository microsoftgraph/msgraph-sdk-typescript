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
exports.ProfilePhoto = void 0;
var entity_1 = require("./entity");
var ProfilePhoto = /** @class */ (function (_super) {
    __extends(ProfilePhoto, _super);
    /**
     * Instantiates a new profilePhoto and sets the default values.
     */
    function ProfilePhoto() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ProfilePhoto.prototype, "height", {
        /**
         * Gets the height property value. The height of the photo. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._height;
        },
        /**
         * Sets the height property value. The height of the photo. Read-only.
         * @param value Value to set for the height property.
         */
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProfilePhoto.prototype, "width", {
        /**
         * Gets the width property value. The width of the photo. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._width;
        },
        /**
         * Sets the width property value. The width of the photo. Read-only.
         * @param value Value to set for the width property.
         */
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ProfilePhoto.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["height", function (o, n) { o.height = n.getNumberValue(); }],
            ["width", function (o, n) { o.width = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ProfilePhoto.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("height", this.height);
        writer.writeNumberValue("width", this.width);
    };
    ;
    ;
    ;
    return ProfilePhoto;
}(entity_1.Entity));
exports.ProfilePhoto = ProfilePhoto;

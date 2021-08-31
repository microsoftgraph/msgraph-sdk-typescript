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
exports.Place = void 0;
var entity_1 = require("./entity");
var Place = /** @class */ (function (_super) {
    __extends(Place, _super);
    /**
     * Instantiates a new place and sets the default values.
     */
    function Place() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Place.prototype, "address", {
        /**
         * Gets the address property value. The street address of the place.
         * @returns a physicalAddress
         */
        get: function () {
            return this._address;
        },
        /**
         * Sets the address property value. The street address of the place.
         * @param value Value to set for the address property.
         */
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Place.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name associated with the place.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name associated with the place.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Place.prototype, "geoCoordinates", {
        /**
         * Gets the geoCoordinates property value. Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
         * @returns a outlookGeoCoordinates
         */
        get: function () {
            return this._geoCoordinates;
        },
        /**
         * Sets the geoCoordinates property value. Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
         * @param value Value to set for the geoCoordinates property.
         */
        set: function (value) {
            this._geoCoordinates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Place.prototype, "phone", {
        /**
         * Gets the phone property value. The phone number of the place.
         * @returns a string
         */
        get: function () {
            return this._phone;
        },
        /**
         * Sets the phone property value. The phone number of the place.
         * @param value Value to set for the phone property.
         */
        set: function (value) {
            this._phone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Place.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["address", function (o, n) { o.address = n.getObjectValue(PhysicalAddress); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["geoCoordinates", function (o, n) { o.geoCoordinates = n.getObjectValue(OutlookGeoCoordinates); }],
            ["phone", function (o, n) { o.phone = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Place.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("address", this.address);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("geoCoordinates", this.geoCoordinates);
        writer.writeStringValue("phone", this.phone);
    };
    ;
    ;
    ;
    ;
    ;
    return Place;
}(entity_1.Entity));
exports.Place = Place;

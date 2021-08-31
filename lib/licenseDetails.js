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
exports.LicenseDetails = void 0;
var entity_1 = require("./entity");
var servicePlanInfo_1 = require("./servicePlanInfo");
var LicenseDetails = /** @class */ (function (_super) {
    __extends(LicenseDetails, _super);
    /**
     * Instantiates a new licenseDetails and sets the default values.
     */
    function LicenseDetails() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(LicenseDetails.prototype, "servicePlans", {
        /**
         * Gets the servicePlans property value. Information about the service plans assigned with the license. Read-only, Not nullable
         * @returns a servicePlanInfo
         */
        get: function () {
            return this._servicePlans;
        },
        /**
         * Sets the servicePlans property value. Information about the service plans assigned with the license. Read-only, Not nullable
         * @param value Value to set for the servicePlans property.
         */
        set: function (value) {
            this._servicePlans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LicenseDetails.prototype, "skuId", {
        /**
         * Gets the skuId property value. Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only
         * @returns a string
         */
        get: function () {
            return this._skuId;
        },
        /**
         * Sets the skuId property value. Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only
         * @param value Value to set for the skuId property.
         */
        set: function (value) {
            this._skuId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LicenseDetails.prototype, "skuPartNumber", {
        /**
         * Gets the skuPartNumber property value. Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only
         * @returns a string
         */
        get: function () {
            return this._skuPartNumber;
        },
        /**
         * Sets the skuPartNumber property value. Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only
         * @param value Value to set for the skuPartNumber property.
         */
        set: function (value) {
            this._skuPartNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    LicenseDetails.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["servicePlans", function (o, n) { o.servicePlans = n.getCollectionOfObjectValues(servicePlanInfo_1.ServicePlanInfo); }],
            ["skuId", function (o, n) { o.skuId = n.getStringValue(); }],
            ["skuPartNumber", function (o, n) { o.skuPartNumber = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    LicenseDetails.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("servicePlans", this.servicePlans);
        writer.writeStringValue("skuId", this.skuId);
        writer.writeStringValue("skuPartNumber", this.skuPartNumber);
    };
    ;
    ;
    ;
    ;
    return LicenseDetails;
}(entity_1.Entity));
exports.LicenseDetails = LicenseDetails;

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
exports.SubscribedSku = void 0;
var entity_1 = require("./entity");
var servicePlanInfo_1 = require("./servicePlanInfo");
var SubscribedSku = /** @class */ (function (_super) {
    __extends(SubscribedSku, _super);
    /**
     * Instantiates a new subscribedSku and sets the default values.
     */
    function SubscribedSku() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(SubscribedSku.prototype, "appliesTo", {
        /**
         * Gets the appliesTo property value. For example, 'User' or 'Company'.
         * @returns a string
         */
        get: function () {
            return this._appliesTo;
        },
        /**
         * Sets the appliesTo property value. For example, 'User' or 'Company'.
         * @param value Value to set for the appliesTo property.
         */
        set: function (value) {
            this._appliesTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SubscribedSku.prototype, "capabilityStatus", {
        /**
         * Gets the capabilityStatus property value. Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription.
         * @returns a string
         */
        get: function () {
            return this._capabilityStatus;
        },
        /**
         * Sets the capabilityStatus property value. Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription.
         * @param value Value to set for the capabilityStatus property.
         */
        set: function (value) {
            this._capabilityStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SubscribedSku.prototype, "consumedUnits", {
        /**
         * Gets the consumedUnits property value. The number of licenses that have been assigned.
         * @returns a integer
         */
        get: function () {
            return this._consumedUnits;
        },
        /**
         * Sets the consumedUnits property value. The number of licenses that have been assigned.
         * @param value Value to set for the consumedUnits property.
         */
        set: function (value) {
            this._consumedUnits = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SubscribedSku.prototype, "prepaidUnits", {
        /**
         * Gets the prepaidUnits property value. Information about the number and status of prepaid licenses.
         * @returns a licenseUnitsDetail
         */
        get: function () {
            return this._prepaidUnits;
        },
        /**
         * Sets the prepaidUnits property value. Information about the number and status of prepaid licenses.
         * @param value Value to set for the prepaidUnits property.
         */
        set: function (value) {
            this._prepaidUnits = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SubscribedSku.prototype, "servicePlans", {
        /**
         * Gets the servicePlans property value. Information about the service plans that are available with the SKU. Not nullable
         * @returns a servicePlanInfo
         */
        get: function () {
            return this._servicePlans;
        },
        /**
         * Sets the servicePlans property value. Information about the service plans that are available with the SKU. Not nullable
         * @param value Value to set for the servicePlans property.
         */
        set: function (value) {
            this._servicePlans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SubscribedSku.prototype, "skuId", {
        /**
         * Gets the skuId property value. The unique identifier (GUID) for the service SKU.
         * @returns a string
         */
        get: function () {
            return this._skuId;
        },
        /**
         * Sets the skuId property value. The unique identifier (GUID) for the service SKU.
         * @param value Value to set for the skuId property.
         */
        set: function (value) {
            this._skuId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SubscribedSku.prototype, "skuPartNumber", {
        /**
         * Gets the skuPartNumber property value. The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus.
         * @returns a string
         */
        get: function () {
            return this._skuPartNumber;
        },
        /**
         * Sets the skuPartNumber property value. The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus.
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
    SubscribedSku.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appliesTo", function (o, n) { o.appliesTo = n.getStringValue(); }],
            ["capabilityStatus", function (o, n) { o.capabilityStatus = n.getStringValue(); }],
            ["consumedUnits", function (o, n) { o.consumedUnits = n.getNumberValue(); }],
            ["prepaidUnits", function (o, n) { o.prepaidUnits = n.getObjectValue(LicenseUnitsDetail); }],
            ["servicePlans", function (o, n) { o.servicePlans = n.getCollectionOfObjectValues(servicePlanInfo_1.ServicePlanInfo); }],
            ["skuId", function (o, n) { o.skuId = n.getStringValue(); }],
            ["skuPartNumber", function (o, n) { o.skuPartNumber = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SubscribedSku.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("appliesTo", this.appliesTo);
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        writer.writeNumberValue("consumedUnits", this.consumedUnits);
        writer.writeObjectValue("prepaidUnits", this.prepaidUnits);
        writer.writeCollectionOfObjectValues("servicePlans", this.servicePlans);
        writer.writeStringValue("skuId", this.skuId);
        writer.writeStringValue("skuPartNumber", this.skuPartNumber);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return SubscribedSku;
}(entity_1.Entity));
exports.SubscribedSku = SubscribedSku;

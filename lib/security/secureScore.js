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
exports.SecureScore = void 0;
var entity_1 = require("../entity");
var SecureScore = /** @class */ (function (_super) {
    __extends(SecureScore, _super);
    /**
     * Instantiates a new secureScore and sets the default values.
     */
    function SecureScore() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(SecureScore.prototype, "activeUserCount", {
        /**
         * Gets the activeUserCount property value. Active user count of the given tenant.
         * @returns a integer
         */
        get: function () {
            return this._activeUserCount;
        },
        /**
         * Sets the activeUserCount property value. Active user count of the given tenant.
         * @param value Value to set for the activeUserCount property.
         */
        set: function (value) {
            this._activeUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScore.prototype, "averageComparativeScores", {
        /**
         * Gets the averageComparativeScores property value. Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope.
         * @returns a averageComparativeScore
         */
        get: function () {
            return this._averageComparativeScores;
        },
        /**
         * Sets the averageComparativeScores property value. Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope.
         * @param value Value to set for the averageComparativeScores property.
         */
        set: function (value) {
            this._averageComparativeScores = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScore.prototype, "azureTenantId", {
        /**
         * Gets the azureTenantId property value. GUID string for tenant ID.
         * @returns a string
         */
        get: function () {
            return this._azureTenantId;
        },
        /**
         * Sets the azureTenantId property value. GUID string for tenant ID.
         * @param value Value to set for the azureTenantId property.
         */
        set: function (value) {
            this._azureTenantId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScore.prototype, "controlScores", {
        /**
         * Gets the controlScores property value. Contains tenant scores for a set of controls.
         * @returns a controlScore
         */
        get: function () {
            return this._controlScores;
        },
        /**
         * Sets the controlScores property value. Contains tenant scores for a set of controls.
         * @param value Value to set for the controlScores property.
         */
        set: function (value) {
            this._controlScores = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScore.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The date when the entity is created.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The date when the entity is created.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScore.prototype, "currentScore", {
        /**
         * Gets the currentScore property value. Tenant current attained score on specified date.
         * @returns a double
         */
        get: function () {
            return this._currentScore;
        },
        /**
         * Sets the currentScore property value. Tenant current attained score on specified date.
         * @param value Value to set for the currentScore property.
         */
        set: function (value) {
            this._currentScore = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScore.prototype, "enabledServices", {
        /**
         * Gets the enabledServices property value. Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint).
         * @returns a string
         */
        get: function () {
            return this._enabledServices;
        },
        /**
         * Sets the enabledServices property value. Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint).
         * @param value Value to set for the enabledServices property.
         */
        set: function (value) {
            this._enabledServices = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScore.prototype, "licensedUserCount", {
        /**
         * Gets the licensedUserCount property value. Licensed user count of the given tenant.
         * @returns a integer
         */
        get: function () {
            return this._licensedUserCount;
        },
        /**
         * Sets the licensedUserCount property value. Licensed user count of the given tenant.
         * @param value Value to set for the licensedUserCount property.
         */
        set: function (value) {
            this._licensedUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScore.prototype, "maxScore", {
        /**
         * Gets the maxScore property value. Tenant maximum possible score on specified date.
         * @returns a double
         */
        get: function () {
            return this._maxScore;
        },
        /**
         * Sets the maxScore property value. Tenant maximum possible score on specified date.
         * @param value Value to set for the maxScore property.
         */
        set: function (value) {
            this._maxScore = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScore.prototype, "vendorInformation", {
        /**
         * Gets the vendorInformation property value. Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required.
         * @returns a securityVendorInformation
         */
        get: function () {
            return this._vendorInformation;
        },
        /**
         * Sets the vendorInformation property value. Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required.
         * @param value Value to set for the vendorInformation property.
         */
        set: function (value) {
            this._vendorInformation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SecureScore.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["activeUserCount", function (o, n) { o.activeUserCount = n.getNumberValue(); }],
            ["averageComparativeScores", function (o, n) { o.averageComparativeScores = n.getCollectionOfPrimitiveValues(); }],
            ["azureTenantId", function (o, n) { o.azureTenantId = n.getStringValue(); }],
            ["controlScores", function (o, n) { o.controlScores = n.getCollectionOfPrimitiveValues(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["currentScore", function (o, n) { o.currentScore = n.getNumberValue(); }],
            ["enabledServices", function (o, n) { o.enabledServices = n.getCollectionOfPrimitiveValues(); }],
            ["licensedUserCount", function (o, n) { o.licensedUserCount = n.getNumberValue(); }],
            ["maxScore", function (o, n) { o.maxScore = n.getNumberValue(); }],
            ["vendorInformation", function (o, n) { o.vendorInformation = n.getObjectValue(SecurityVendorInformation); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SecureScore.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("activeUserCount", this.activeUserCount);
        writer.writeCollectionOfPrimitiveValues("averageComparativeScores", this.averageComparativeScores);
        writer.writeStringValue("azureTenantId", this.azureTenantId);
        writer.writeCollectionOfPrimitiveValues("controlScores", this.controlScores);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeNumberValue("currentScore", this.currentScore);
        writer.writeCollectionOfPrimitiveValues("enabledServices", this.enabledServices);
        writer.writeNumberValue("licensedUserCount", this.licensedUserCount);
        writer.writeNumberValue("maxScore", this.maxScore);
        writer.writeObjectValue("vendorInformation", this.vendorInformation);
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
    return SecureScore;
}(entity_1.Entity));
exports.SecureScore = SecureScore;

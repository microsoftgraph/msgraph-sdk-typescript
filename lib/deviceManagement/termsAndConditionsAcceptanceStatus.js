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
exports.TermsAndConditionsAcceptanceStatus = void 0;
var entity_1 = require("../entity");
var termsAndConditions_1 = require("./termsAndConditions");
var TermsAndConditionsAcceptanceStatus = /** @class */ (function (_super) {
    __extends(TermsAndConditionsAcceptanceStatus, _super);
    /**
     * Instantiates a new termsAndConditionsAcceptanceStatus and sets the default values.
     */
    function TermsAndConditionsAcceptanceStatus() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TermsAndConditionsAcceptanceStatus.prototype, "acceptedDateTime", {
        /**
         * Gets the acceptedDateTime property value. DateTime when the terms were last accepted by the user.
         * @returns a Date
         */
        get: function () {
            return this._acceptedDateTime;
        },
        /**
         * Sets the acceptedDateTime property value. DateTime when the terms were last accepted by the user.
         * @param value Value to set for the acceptedDateTime property.
         */
        set: function (value) {
            this._acceptedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditionsAcceptanceStatus.prototype, "acceptedVersion", {
        /**
         * Gets the acceptedVersion property value. Most recent version number of the T&C accepted by the user.
         * @returns a integer
         */
        get: function () {
            return this._acceptedVersion;
        },
        /**
         * Sets the acceptedVersion property value. Most recent version number of the T&C accepted by the user.
         * @param value Value to set for the acceptedVersion property.
         */
        set: function (value) {
            this._acceptedVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditionsAcceptanceStatus.prototype, "termsAndConditions", {
        /**
         * Gets the termsAndConditions property value. Navigation link to the terms and conditions that are assigned.
         * @returns a termsAndConditions
         */
        get: function () {
            return this._termsAndConditions;
        },
        /**
         * Sets the termsAndConditions property value. Navigation link to the terms and conditions that are assigned.
         * @param value Value to set for the termsAndConditions property.
         */
        set: function (value) {
            this._termsAndConditions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditionsAcceptanceStatus.prototype, "userDisplayName", {
        /**
         * Gets the userDisplayName property value. Display name of the user whose acceptance the entity represents.
         * @returns a string
         */
        get: function () {
            return this._userDisplayName;
        },
        /**
         * Sets the userDisplayName property value. Display name of the user whose acceptance the entity represents.
         * @param value Value to set for the userDisplayName property.
         */
        set: function (value) {
            this._userDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditionsAcceptanceStatus.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. The userPrincipalName of the User that accepted the term.
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. The userPrincipalName of the User that accepted the term.
         * @param value Value to set for the userPrincipalName property.
         */
        set: function (value) {
            this._userPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TermsAndConditionsAcceptanceStatus.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["acceptedDateTime", function (o, n) { o.acceptedDateTime = n.getDateValue(); }],
            ["acceptedVersion", function (o, n) { o.acceptedVersion = n.getNumberValue(); }],
            ["termsAndConditions", function (o, n) { o.termsAndConditions = n.getObjectValue(termsAndConditions_1.TermsAndConditions); }],
            ["userDisplayName", function (o, n) { o.userDisplayName = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TermsAndConditionsAcceptanceStatus.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("acceptedDateTime", this.acceptedDateTime);
        writer.writeNumberValue("acceptedVersion", this.acceptedVersion);
        writer.writeObjectValue("termsAndConditions", this.termsAndConditions);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return TermsAndConditionsAcceptanceStatus;
}(entity_1.Entity));
exports.TermsAndConditionsAcceptanceStatus = TermsAndConditionsAcceptanceStatus;

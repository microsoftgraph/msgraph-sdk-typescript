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
exports.TermsOfUse = void 0;
var agreement_1 = require("../../agreement");
var agreementAcceptance_1 = require("../../agreementAcceptance");
var entity_1 = require("../../entity");
var TermsOfUse = /** @class */ (function (_super) {
    __extends(TermsOfUse, _super);
    /**
     * Instantiates a new TermsOfUse and sets the default values.
     */
    function TermsOfUse() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TermsOfUse.prototype, "agreementAcceptances", {
        /**
         * Gets the agreementAcceptances property value.
         * @returns a agreementAcceptance
         */
        get: function () {
            return this._agreementAcceptances;
        },
        /**
         * Sets the agreementAcceptances property value.
         * @param value Value to set for the agreementAcceptances property.
         */
        set: function (value) {
            this._agreementAcceptances = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsOfUse.prototype, "agreements", {
        /**
         * Gets the agreements property value.
         * @returns a agreement
         */
        get: function () {
            return this._agreements;
        },
        /**
         * Sets the agreements property value.
         * @param value Value to set for the agreements property.
         */
        set: function (value) {
            this._agreements = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TermsOfUse.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["agreementAcceptances", function (o, n) { o.agreementAcceptances = n.getCollectionOfObjectValues(agreementAcceptance_1.AgreementAcceptance); }],
            ["agreements", function (o, n) { o.agreements = n.getCollectionOfObjectValues(agreement_1.Agreement); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TermsOfUse.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("agreementAcceptances", this.agreementAcceptances);
        writer.writeCollectionOfObjectValues("agreements", this.agreements);
    };
    ;
    ;
    ;
    return TermsOfUse;
}(entity_1.Entity));
exports.TermsOfUse = TermsOfUse;

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
exports.Contract = void 0;
var directoryObject_1 = require("./directoryObject");
var Contract = /** @class */ (function (_super) {
    __extends(Contract, _super);
    /**
     * Instantiates a new contract and sets the default values.
     */
    function Contract() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Contract.prototype, "contractType", {
        /**
         * Gets the contractType property value. Type of contract. Possible values are:  SyndicationPartner, BreadthPartner, ResellerPartner. See more in the table below.
         * @returns a string
         */
        get: function () {
            return this._contractType;
        },
        /**
         * Sets the contractType property value. Type of contract. Possible values are:  SyndicationPartner, BreadthPartner, ResellerPartner. See more in the table below.
         * @param value Value to set for the contractType property.
         */
        set: function (value) {
            this._contractType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contract.prototype, "customerId", {
        /**
         * Gets the customerId property value. The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the customer tenant's organization resource.
         * @returns a string
         */
        get: function () {
            return this._customerId;
        },
        /**
         * Sets the customerId property value. The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the customer tenant's organization resource.
         * @param value Value to set for the customerId property.
         */
        set: function (value) {
            this._customerId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contract.prototype, "defaultDomainName", {
        /**
         * Gets the defaultDomainName property value. A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's default domain name changes.
         * @returns a string
         */
        get: function () {
            return this._defaultDomainName;
        },
        /**
         * Sets the defaultDomainName property value. A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's default domain name changes.
         * @param value Value to set for the defaultDomainName property.
         */
        set: function (value) {
            this._defaultDomainName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contract.prototype, "displayName", {
        /**
         * Gets the displayName property value. A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's display name changes.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's display name changes.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Contract.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["contractType", function (o, n) { o.contractType = n.getStringValue(); }],
            ["customerId", function (o, n) { o.customerId = n.getStringValue(); }],
            ["defaultDomainName", function (o, n) { o.defaultDomainName = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Contract.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("contractType", this.contractType);
        writer.writeStringValue("customerId", this.customerId);
        writer.writeStringValue("defaultDomainName", this.defaultDomainName);
        writer.writeStringValue("displayName", this.displayName);
    };
    ;
    ;
    ;
    ;
    ;
    return Contract;
}(directoryObject_1.DirectoryObject));
exports.Contract = Contract;

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
exports.IdentityContainer = void 0;
var entity_1 = require("../entity");
var b2xIdentityUserFlow_1 = require("./b2xIdentityUserFlow");
var conditionalAccessRoot_1 = require("./conditionalAccess/conditionalAccessRoot");
var identityApiConnector_1 = require("./identityApiConnector");
var identityProviderBase_1 = require("./identityProviderBase");
var identityUserFlowAttribute_1 = require("./identityUserFlowAttribute");
var IdentityContainer = /** @class */ (function (_super) {
    __extends(IdentityContainer, _super);
    /**
     * Instantiates a new IdentityContainer and sets the default values.
     */
    function IdentityContainer() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(IdentityContainer.prototype, "apiConnectors", {
        /**
         * Gets the apiConnectors property value.
         * @returns a identityApiConnector
         */
        get: function () {
            return this._apiConnectors;
        },
        /**
         * Sets the apiConnectors property value.
         * @param value Value to set for the apiConnectors property.
         */
        set: function (value) {
            this._apiConnectors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityContainer.prototype, "b2xUserFlows", {
        /**
         * Gets the b2xUserFlows property value.
         * @returns a b2xIdentityUserFlow
         */
        get: function () {
            return this._b2xUserFlows;
        },
        /**
         * Sets the b2xUserFlows property value.
         * @param value Value to set for the b2xUserFlows property.
         */
        set: function (value) {
            this._b2xUserFlows = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityContainer.prototype, "conditionalAccess", {
        /**
         * Gets the conditionalAccess property value.
         * @returns a conditionalAccessRoot
         */
        get: function () {
            return this._conditionalAccess;
        },
        /**
         * Sets the conditionalAccess property value.
         * @param value Value to set for the conditionalAccess property.
         */
        set: function (value) {
            this._conditionalAccess = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityContainer.prototype, "identityProviders", {
        /**
         * Gets the identityProviders property value.
         * @returns a identityProviderBase
         */
        get: function () {
            return this._identityProviders;
        },
        /**
         * Sets the identityProviders property value.
         * @param value Value to set for the identityProviders property.
         */
        set: function (value) {
            this._identityProviders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityContainer.prototype, "userFlowAttributes", {
        /**
         * Gets the userFlowAttributes property value.
         * @returns a identityUserFlowAttribute
         */
        get: function () {
            return this._userFlowAttributes;
        },
        /**
         * Sets the userFlowAttributes property value.
         * @param value Value to set for the userFlowAttributes property.
         */
        set: function (value) {
            this._userFlowAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    IdentityContainer.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["apiConnectors", function (o, n) { o.apiConnectors = n.getCollectionOfObjectValues(identityApiConnector_1.IdentityApiConnector); }],
            ["b2xUserFlows", function (o, n) { o.b2xUserFlows = n.getCollectionOfObjectValues(b2xIdentityUserFlow_1.B2xIdentityUserFlow); }],
            ["conditionalAccess", function (o, n) { o.conditionalAccess = n.getObjectValue(conditionalAccessRoot_1.ConditionalAccessRoot); }],
            ["identityProviders", function (o, n) { o.identityProviders = n.getCollectionOfObjectValues(identityProviderBase_1.IdentityProviderBase); }],
            ["userFlowAttributes", function (o, n) { o.userFlowAttributes = n.getCollectionOfObjectValues(identityUserFlowAttribute_1.IdentityUserFlowAttribute); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    IdentityContainer.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("apiConnectors", this.apiConnectors);
        writer.writeCollectionOfObjectValues("b2xUserFlows", this.b2xUserFlows);
        writer.writeObjectValue("conditionalAccess", this.conditionalAccess);
        writer.writeCollectionOfObjectValues("identityProviders", this.identityProviders);
        writer.writeCollectionOfObjectValues("userFlowAttributes", this.userFlowAttributes);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return IdentityContainer;
}(entity_1.Entity));
exports.IdentityContainer = IdentityContainer;

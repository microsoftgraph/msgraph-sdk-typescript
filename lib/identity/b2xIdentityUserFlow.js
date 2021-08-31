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
exports.B2xIdentityUserFlow = void 0;
var identityProvider_1 = require("../identityProvider");
var identityProviderBase_1 = require("./identityProviderBase");
var identityUserFlow_1 = require("./identityUserFlow");
var identityUserFlowAttributeAssignment_1 = require("./identityUserFlowAttributeAssignment");
var userFlowLanguageConfiguration_1 = require("./userFlowLanguageConfiguration");
var B2xIdentityUserFlow = /** @class */ (function (_super) {
    __extends(B2xIdentityUserFlow, _super);
    /**
     * Instantiates a new b2xIdentityUserFlow and sets the default values.
     */
    function B2xIdentityUserFlow() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(B2xIdentityUserFlow.prototype, "apiConnectorConfiguration", {
        /**
         * Gets the apiConnectorConfiguration property value. Configuration for enabling an API connector for use as part of the self-service sign up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
         * @returns a userFlowApiConnectorConfiguration
         */
        get: function () {
            return this._apiConnectorConfiguration;
        },
        /**
         * Sets the apiConnectorConfiguration property value. Configuration for enabling an API connector for use as part of the self-service sign up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
         * @param value Value to set for the apiConnectorConfiguration property.
         */
        set: function (value) {
            this._apiConnectorConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(B2xIdentityUserFlow.prototype, "identityProviders", {
        /**
         * Gets the identityProviders property value. The identity providers included in the user flow.
         * @returns a identityProvider
         */
        get: function () {
            return this._identityProviders;
        },
        /**
         * Sets the identityProviders property value. The identity providers included in the user flow.
         * @param value Value to set for the identityProviders property.
         */
        set: function (value) {
            this._identityProviders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(B2xIdentityUserFlow.prototype, "languages", {
        /**
         * Gets the languages property value. The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign up user flow. You cannot create custom languages in self-service sign up user flows.
         * @returns a userFlowLanguageConfiguration
         */
        get: function () {
            return this._languages;
        },
        /**
         * Sets the languages property value. The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign up user flow. You cannot create custom languages in self-service sign up user flows.
         * @param value Value to set for the languages property.
         */
        set: function (value) {
            this._languages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(B2xIdentityUserFlow.prototype, "userAttributeAssignments", {
        /**
         * Gets the userAttributeAssignments property value. The user attribute assignments included in the user flow.
         * @returns a identityUserFlowAttributeAssignment
         */
        get: function () {
            return this._userAttributeAssignments;
        },
        /**
         * Sets the userAttributeAssignments property value. The user attribute assignments included in the user flow.
         * @param value Value to set for the userAttributeAssignments property.
         */
        set: function (value) {
            this._userAttributeAssignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(B2xIdentityUserFlow.prototype, "userFlowIdentityProviders", {
        /**
         * Gets the userFlowIdentityProviders property value.
         * @returns a identityProviderBase
         */
        get: function () {
            return this._userFlowIdentityProviders;
        },
        /**
         * Sets the userFlowIdentityProviders property value.
         * @param value Value to set for the userFlowIdentityProviders property.
         */
        set: function (value) {
            this._userFlowIdentityProviders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    B2xIdentityUserFlow.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["apiConnectorConfiguration", function (o, n) { o.apiConnectorConfiguration = n.getObjectValue(UserFlowApiConnectorConfiguration); }],
            ["identityProviders", function (o, n) { o.identityProviders = n.getCollectionOfObjectValues(identityProvider_1.IdentityProvider); }],
            ["languages", function (o, n) { o.languages = n.getCollectionOfObjectValues(userFlowLanguageConfiguration_1.UserFlowLanguageConfiguration); }],
            ["userAttributeAssignments", function (o, n) { o.userAttributeAssignments = n.getCollectionOfObjectValues(identityUserFlowAttributeAssignment_1.IdentityUserFlowAttributeAssignment); }],
            ["userFlowIdentityProviders", function (o, n) { o.userFlowIdentityProviders = n.getCollectionOfObjectValues(identityProviderBase_1.IdentityProviderBase); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    B2xIdentityUserFlow.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("apiConnectorConfiguration", this.apiConnectorConfiguration);
        writer.writeCollectionOfObjectValues("identityProviders", this.identityProviders);
        writer.writeCollectionOfObjectValues("languages", this.languages);
        writer.writeCollectionOfObjectValues("userAttributeAssignments", this.userAttributeAssignments);
        writer.writeCollectionOfObjectValues("userFlowIdentityProviders", this.userFlowIdentityProviders);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return B2xIdentityUserFlow;
}(identityUserFlow_1.IdentityUserFlow));
exports.B2xIdentityUserFlow = B2xIdentityUserFlow;

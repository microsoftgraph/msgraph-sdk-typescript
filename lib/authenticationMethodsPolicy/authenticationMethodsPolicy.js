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
exports.AuthenticationMethodsPolicy = void 0;
var authenticationMethodConfiguration_1 = require("../authenticationMethodConfiguration");
var entity_1 = require("../entity");
var AuthenticationMethodsPolicy = /** @class */ (function (_super) {
    __extends(AuthenticationMethodsPolicy, _super);
    /**
     * Instantiates a new AuthenticationMethodsPolicy and sets the default values.
     */
    function AuthenticationMethodsPolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AuthenticationMethodsPolicy.prototype, "authenticationMethodConfigurations", {
        /**
         * Gets the authenticationMethodConfigurations property value. Represents the settings for each authentication method.
         * @returns a authenticationMethodConfiguration
         */
        get: function () {
            return this._authenticationMethodConfigurations;
        },
        /**
         * Sets the authenticationMethodConfigurations property value. Represents the settings for each authentication method.
         * @param value Value to set for the authenticationMethodConfigurations property.
         */
        set: function (value) {
            this._authenticationMethodConfigurations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthenticationMethodsPolicy.prototype, "description", {
        /**
         * Gets the description property value. A description of the policy.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. A description of the policy.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthenticationMethodsPolicy.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the policy.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the policy.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthenticationMethodsPolicy.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. The date and time of the last update to the policy.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. The date and time of the last update to the policy.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthenticationMethodsPolicy.prototype, "policyVersion", {
        /**
         * Gets the policyVersion property value. The version of the policy in use.
         * @returns a string
         */
        get: function () {
            return this._policyVersion;
        },
        /**
         * Sets the policyVersion property value. The version of the policy in use.
         * @param value Value to set for the policyVersion property.
         */
        set: function (value) {
            this._policyVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthenticationMethodsPolicy.prototype, "reconfirmationInDays", {
        /**
         * Gets the reconfirmationInDays property value.
         * @returns a integer
         */
        get: function () {
            return this._reconfirmationInDays;
        },
        /**
         * Sets the reconfirmationInDays property value.
         * @param value Value to set for the reconfirmationInDays property.
         */
        set: function (value) {
            this._reconfirmationInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AuthenticationMethodsPolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["authenticationMethodConfigurations", function (o, n) { o.authenticationMethodConfigurations = n.getCollectionOfObjectValues(authenticationMethodConfiguration_1.AuthenticationMethodConfiguration); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["policyVersion", function (o, n) { o.policyVersion = n.getStringValue(); }],
            ["reconfirmationInDays", function (o, n) { o.reconfirmationInDays = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AuthenticationMethodsPolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("authenticationMethodConfigurations", this.authenticationMethodConfigurations);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("policyVersion", this.policyVersion);
        writer.writeNumberValue("reconfirmationInDays", this.reconfirmationInDays);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return AuthenticationMethodsPolicy;
}(entity_1.Entity));
exports.AuthenticationMethodsPolicy = AuthenticationMethodsPolicy;

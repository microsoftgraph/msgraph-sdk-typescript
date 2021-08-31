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
exports.AuthenticationFlowsPolicy = void 0;
var entity_1 = require("../../entity");
var AuthenticationFlowsPolicy = /** @class */ (function (_super) {
    __extends(AuthenticationFlowsPolicy, _super);
    /**
     * Instantiates a new AuthenticationFlowsPolicy and sets the default values.
     */
    function AuthenticationFlowsPolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AuthenticationFlowsPolicy.prototype, "description", {
        /**
         * Gets the description property value. Inherited property. A description of the policy. This property is not a key. Optional. Read-only.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Inherited property. A description of the policy. This property is not a key. Optional. Read-only.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthenticationFlowsPolicy.prototype, "displayName", {
        /**
         * Gets the displayName property value. Inherited property. The human-readable name of the policy. This property is not a key. Optional. Read-only.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Inherited property. The human-readable name of the policy. This property is not a key. Optional. Read-only.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuthenticationFlowsPolicy.prototype, "selfServiceSignUp", {
        /**
         * Gets the selfServiceSignUp property value. Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. This property is not a key. Optional. Read-only.
         * @returns a selfServiceSignUpAuthenticationFlowConfiguration
         */
        get: function () {
            return this._selfServiceSignUp;
        },
        /**
         * Sets the selfServiceSignUp property value. Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. This property is not a key. Optional. Read-only.
         * @param value Value to set for the selfServiceSignUp property.
         */
        set: function (value) {
            this._selfServiceSignUp = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AuthenticationFlowsPolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["selfServiceSignUp", function (o, n) { o.selfServiceSignUp = n.getObjectValue(SelfServiceSignUpAuthenticationFlowConfiguration); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AuthenticationFlowsPolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("selfServiceSignUp", this.selfServiceSignUp);
    };
    ;
    ;
    ;
    ;
    return AuthenticationFlowsPolicy;
}(entity_1.Entity));
exports.AuthenticationFlowsPolicy = AuthenticationFlowsPolicy;

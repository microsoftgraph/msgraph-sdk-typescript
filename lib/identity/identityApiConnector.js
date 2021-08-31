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
exports.IdentityApiConnector = void 0;
var entity_1 = require("../entity");
var IdentityApiConnector = /** @class */ (function (_super) {
    __extends(IdentityApiConnector, _super);
    /**
     * Instantiates a new identityApiConnector and sets the default values.
     */
    function IdentityApiConnector() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(IdentityApiConnector.prototype, "authenticationConfiguration", {
        /**
         * Gets the authenticationConfiguration property value. The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported.
         * @returns a apiAuthenticationConfigurationBase
         */
        get: function () {
            return this._authenticationConfiguration;
        },
        /**
         * Sets the authenticationConfiguration property value. The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported.
         * @param value Value to set for the authenticationConfiguration property.
         */
        set: function (value) {
            this._authenticationConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityApiConnector.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the API connector.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the API connector.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityApiConnector.prototype, "targetUrl", {
        /**
         * Gets the targetUrl property value. The URL of the API endpoint to call.
         * @returns a string
         */
        get: function () {
            return this._targetUrl;
        },
        /**
         * Sets the targetUrl property value. The URL of the API endpoint to call.
         * @param value Value to set for the targetUrl property.
         */
        set: function (value) {
            this._targetUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    IdentityApiConnector.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["authenticationConfiguration", function (o, n) { o.authenticationConfiguration = n.getObjectValue(ApiAuthenticationConfigurationBase); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["targetUrl", function (o, n) { o.targetUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    IdentityApiConnector.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("authenticationConfiguration", this.authenticationConfiguration);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("targetUrl", this.targetUrl);
    };
    ;
    ;
    ;
    ;
    return IdentityApiConnector;
}(entity_1.Entity));
exports.IdentityApiConnector = IdentityApiConnector;

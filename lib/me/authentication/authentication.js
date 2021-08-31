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
exports.Authentication = void 0;
var authenticationMethod_1 = require("../../authenticationMethod");
var entity_1 = require("../../entity");
var fido2AuthenticationMethod_1 = require("../../fido2AuthenticationMethod");
var microsoftAuthenticatorAuthenticationMethod_1 = require("../../microsoftAuthenticatorAuthenticationMethod");
var windowsHelloForBusinessAuthenticationMethod_1 = require("../../windowsHelloForBusinessAuthenticationMethod");
var Authentication = /** @class */ (function (_super) {
    __extends(Authentication, _super);
    /**
     * Instantiates a new Authentication and sets the default values.
     */
    function Authentication() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Authentication.prototype, "fido2Methods", {
        /**
         * Gets the fido2Methods property value.
         * @returns a fido2AuthenticationMethod
         */
        get: function () {
            return this._fido2Methods;
        },
        /**
         * Sets the fido2Methods property value.
         * @param value Value to set for the fido2Methods property.
         */
        set: function (value) {
            this._fido2Methods = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Authentication.prototype, "methods", {
        /**
         * Gets the methods property value.
         * @returns a authenticationMethod
         */
        get: function () {
            return this._methods;
        },
        /**
         * Sets the methods property value.
         * @param value Value to set for the methods property.
         */
        set: function (value) {
            this._methods = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Authentication.prototype, "microsoftAuthenticatorMethods", {
        /**
         * Gets the microsoftAuthenticatorMethods property value.
         * @returns a microsoftAuthenticatorAuthenticationMethod
         */
        get: function () {
            return this._microsoftAuthenticatorMethods;
        },
        /**
         * Sets the microsoftAuthenticatorMethods property value.
         * @param value Value to set for the microsoftAuthenticatorMethods property.
         */
        set: function (value) {
            this._microsoftAuthenticatorMethods = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Authentication.prototype, "windowsHelloForBusinessMethods", {
        /**
         * Gets the windowsHelloForBusinessMethods property value.
         * @returns a windowsHelloForBusinessAuthenticationMethod
         */
        get: function () {
            return this._windowsHelloForBusinessMethods;
        },
        /**
         * Sets the windowsHelloForBusinessMethods property value.
         * @param value Value to set for the windowsHelloForBusinessMethods property.
         */
        set: function (value) {
            this._windowsHelloForBusinessMethods = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Authentication.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["fido2Methods", function (o, n) { o.fido2Methods = n.getCollectionOfObjectValues(fido2AuthenticationMethod_1.Fido2AuthenticationMethod); }],
            ["methods", function (o, n) { o.methods = n.getCollectionOfObjectValues(authenticationMethod_1.AuthenticationMethod); }],
            ["microsoftAuthenticatorMethods", function (o, n) { o.microsoftAuthenticatorMethods = n.getCollectionOfObjectValues(microsoftAuthenticatorAuthenticationMethod_1.MicrosoftAuthenticatorAuthenticationMethod); }],
            ["windowsHelloForBusinessMethods", function (o, n) { o.windowsHelloForBusinessMethods = n.getCollectionOfObjectValues(windowsHelloForBusinessAuthenticationMethod_1.WindowsHelloForBusinessAuthenticationMethod); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Authentication.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("fido2Methods", this.fido2Methods);
        writer.writeCollectionOfObjectValues("methods", this.methods);
        writer.writeCollectionOfObjectValues("microsoftAuthenticatorMethods", this.microsoftAuthenticatorMethods);
        writer.writeCollectionOfObjectValues("windowsHelloForBusinessMethods", this.windowsHelloForBusinessMethods);
    };
    ;
    ;
    ;
    ;
    ;
    return Authentication;
}(entity_1.Entity));
exports.Authentication = Authentication;

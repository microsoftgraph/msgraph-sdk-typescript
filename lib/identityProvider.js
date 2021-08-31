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
exports.IdentityProvider = void 0;
var entity_1 = require("./entity");
var IdentityProvider = /** @class */ (function (_super) {
    __extends(IdentityProvider, _super);
    /**
     * Instantiates a new identityProvider and sets the default values.
     */
    function IdentityProvider() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(IdentityProvider.prototype, "clientId", {
        /**
         * Gets the clientId property value. The client ID for the application obtained when registering the application with the identity provider. This is a required field.  Required. Not nullable.
         * @returns a string
         */
        get: function () {
            return this._clientId;
        },
        /**
         * Sets the clientId property value. The client ID for the application obtained when registering the application with the identity provider. This is a required field.  Required. Not nullable.
         * @param value Value to set for the clientId property.
         */
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityProvider.prototype, "clientSecret", {
        /**
         * Gets the clientSecret property value. The client secret for the application obtained when registering the application with the identity provider. This is write-only. A read operation will return ****. This is a required field. Required. Not nullable.
         * @returns a string
         */
        get: function () {
            return this._clientSecret;
        },
        /**
         * Sets the clientSecret property value. The client secret for the application obtained when registering the application with the identity provider. This is write-only. A read operation will return ****. This is a required field. Required. Not nullable.
         * @param value Value to set for the clientSecret property.
         */
        set: function (value) {
            this._clientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityProvider.prototype, "name", {
        /**
         * Gets the name property value. The display name of the identity provider. Not nullable.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The display name of the identity provider. Not nullable.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityProvider.prototype, "type", {
        /**
         * Gets the type property value. The identity provider type is a required field. For B2B scenario: Google, Facebook. For B2C scenario: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo,QQ, WeChat, OpenIDConnect. Not nullable.
         * @returns a string
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. The identity provider type is a required field. For B2B scenario: Google, Facebook. For B2C scenario: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo,QQ, WeChat, OpenIDConnect. Not nullable.
         * @param value Value to set for the type property.
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    IdentityProvider.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["clientId", function (o, n) { o.clientId = n.getStringValue(); }],
            ["clientSecret", function (o, n) { o.clientSecret = n.getStringValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    IdentityProvider.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("clientId", this.clientId);
        writer.writeStringValue("clientSecret", this.clientSecret);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("type", this.type);
    };
    ;
    ;
    ;
    ;
    ;
    return IdentityProvider;
}(entity_1.Entity));
exports.IdentityProvider = IdentityProvider;

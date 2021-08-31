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
exports.Endpoint = void 0;
var directoryObject_1 = require("./directoryObject");
var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    /**
     * Instantiates a new endpoint and sets the default values.
     */
    function Endpoint() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Endpoint.prototype, "capability", {
        /**
         * Gets the capability property value. Describes the capability that is associated with this resource. (e.g. Messages, Conversations, etc.)  Not nullable. Read-only.
         * @returns a string
         */
        get: function () {
            return this._capability;
        },
        /**
         * Sets the capability property value. Describes the capability that is associated with this resource. (e.g. Messages, Conversations, etc.)  Not nullable. Read-only.
         * @param value Value to set for the capability property.
         */
        set: function (value) {
            this._capability = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Endpoint.prototype, "providerId", {
        /**
         * Gets the providerId property value. Application id of the publishing underlying service. Not nullable. Read-only.
         * @returns a string
         */
        get: function () {
            return this._providerId;
        },
        /**
         * Sets the providerId property value. Application id of the publishing underlying service. Not nullable. Read-only.
         * @param value Value to set for the providerId property.
         */
        set: function (value) {
            this._providerId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Endpoint.prototype, "providerName", {
        /**
         * Gets the providerName property value. Name of the publishing underlying service. Read-only.
         * @returns a string
         */
        get: function () {
            return this._providerName;
        },
        /**
         * Sets the providerName property value. Name of the publishing underlying service. Read-only.
         * @param value Value to set for the providerName property.
         */
        set: function (value) {
            this._providerName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Endpoint.prototype, "providerResourceId", {
        /**
         * Gets the providerResourceId property value. For Microsoft 365 groups, this is set to a well-known name for the resource (e.g. Yammer.FeedURL etc.). Not nullable. Read-only.
         * @returns a string
         */
        get: function () {
            return this._providerResourceId;
        },
        /**
         * Sets the providerResourceId property value. For Microsoft 365 groups, this is set to a well-known name for the resource (e.g. Yammer.FeedURL etc.). Not nullable. Read-only.
         * @param value Value to set for the providerResourceId property.
         */
        set: function (value) {
            this._providerResourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Endpoint.prototype, "uri", {
        /**
         * Gets the uri property value. URL of the published resource. Not nullable. Read-only.
         * @returns a string
         */
        get: function () {
            return this._uri;
        },
        /**
         * Sets the uri property value. URL of the published resource. Not nullable. Read-only.
         * @param value Value to set for the uri property.
         */
        set: function (value) {
            this._uri = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Endpoint.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["capability", function (o, n) { o.capability = n.getStringValue(); }],
            ["providerId", function (o, n) { o.providerId = n.getStringValue(); }],
            ["providerName", function (o, n) { o.providerName = n.getStringValue(); }],
            ["providerResourceId", function (o, n) { o.providerResourceId = n.getStringValue(); }],
            ["uri", function (o, n) { o.uri = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Endpoint.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("capability", this.capability);
        writer.writeStringValue("providerId", this.providerId);
        writer.writeStringValue("providerName", this.providerName);
        writer.writeStringValue("providerResourceId", this.providerResourceId);
        writer.writeStringValue("uri", this.uri);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return Endpoint;
}(directoryObject_1.DirectoryObject));
exports.Endpoint = Endpoint;

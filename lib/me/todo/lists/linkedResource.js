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
exports.LinkedResource = void 0;
var entity_1 = require("../../../entity");
var LinkedResource = /** @class */ (function (_super) {
    __extends(LinkedResource, _super);
    /**
     * Instantiates a new linkedResource and sets the default values.
     */
    function LinkedResource() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(LinkedResource.prototype, "applicationName", {
        /**
         * Gets the applicationName property value. Field indicating the app name of the source that is sending the linkedResource.
         * @returns a string
         */
        get: function () {
            return this._applicationName;
        },
        /**
         * Sets the applicationName property value. Field indicating the app name of the source that is sending the linkedResource.
         * @param value Value to set for the applicationName property.
         */
        set: function (value) {
            this._applicationName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LinkedResource.prototype, "displayName", {
        /**
         * Gets the displayName property value. Field indicating the title of the linkedResource.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Field indicating the title of the linkedResource.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LinkedResource.prototype, "externalId", {
        /**
         * Gets the externalId property value. Id of the object that is associated with this task on the third-party/partner system.
         * @returns a string
         */
        get: function () {
            return this._externalId;
        },
        /**
         * Sets the externalId property value. Id of the object that is associated with this task on the third-party/partner system.
         * @param value Value to set for the externalId property.
         */
        set: function (value) {
            this._externalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LinkedResource.prototype, "webUrl", {
        /**
         * Gets the webUrl property value. Deep link to the linkedResource.
         * @returns a string
         */
        get: function () {
            return this._webUrl;
        },
        /**
         * Sets the webUrl property value. Deep link to the linkedResource.
         * @param value Value to set for the webUrl property.
         */
        set: function (value) {
            this._webUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    LinkedResource.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["applicationName", function (o, n) { o.applicationName = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["externalId", function (o, n) { o.externalId = n.getStringValue(); }],
            ["webUrl", function (o, n) { o.webUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    LinkedResource.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("applicationName", this.applicationName);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    ;
    ;
    ;
    ;
    ;
    return LinkedResource;
}(entity_1.Entity));
exports.LinkedResource = LinkedResource;

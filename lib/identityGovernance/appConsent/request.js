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
exports.Request = void 0;
var entity_1 = require("../../entity");
var identitySet_1 = require("../../identitySet");
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    /**
     * Instantiates a new request and sets the default values.
     */
    function Request() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Request.prototype, "approvalId", {
        /**
         * Gets the approvalId property value.
         * @returns a string
         */
        get: function () {
            return this._approvalId;
        },
        /**
         * Sets the approvalId property value.
         * @param value Value to set for the approvalId property.
         */
        set: function (value) {
            this._approvalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Request.prototype, "completedDateTime", {
        /**
         * Gets the completedDateTime property value.
         * @returns a Date
         */
        get: function () {
            return this._completedDateTime;
        },
        /**
         * Sets the completedDateTime property value.
         * @param value Value to set for the completedDateTime property.
         */
        set: function (value) {
            this._completedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Request.prototype, "createdBy", {
        /**
         * Gets the createdBy property value.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Request.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Request.prototype, "customData", {
        /**
         * Gets the customData property value.
         * @returns a string
         */
        get: function () {
            return this._customData;
        },
        /**
         * Sets the customData property value.
         * @param value Value to set for the customData property.
         */
        set: function (value) {
            this._customData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Request.prototype, "status", {
        /**
         * Gets the status property value.
         * @returns a string
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Request.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["approvalId", function (o, n) { o.approvalId = n.getStringValue(); }],
            ["completedDateTime", function (o, n) { o.completedDateTime = n.getDateValue(); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["customData", function (o, n) { o.customData = n.getStringValue(); }],
            ["status", function (o, n) { o.status = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Request.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("approvalId", this.approvalId);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("customData", this.customData);
        writer.writeStringValue("status", this.status);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return Request;
}(entity_1.Entity));
exports.Request = Request;

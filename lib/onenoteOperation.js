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
exports.OnenoteOperation = void 0;
var operation_1 = require("./operation");
var OnenoteOperation = /** @class */ (function (_super) {
    __extends(OnenoteOperation, _super);
    /**
     * Instantiates a new onenoteOperation and sets the default values.
     */
    function OnenoteOperation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OnenoteOperation.prototype, "error", {
        /**
         * Gets the error property value. The error returned by the operation.
         * @returns a onenoteOperationError
         */
        get: function () {
            return this._error;
        },
        /**
         * Sets the error property value. The error returned by the operation.
         * @param value Value to set for the error property.
         */
        set: function (value) {
            this._error = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenoteOperation.prototype, "percentComplete", {
        /**
         * Gets the percentComplete property value. The operation percent complete if the operation is still in running status.
         * @returns a string
         */
        get: function () {
            return this._percentComplete;
        },
        /**
         * Sets the percentComplete property value. The operation percent complete if the operation is still in running status.
         * @param value Value to set for the percentComplete property.
         */
        set: function (value) {
            this._percentComplete = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenoteOperation.prototype, "resourceId", {
        /**
         * Gets the resourceId property value. The resource id.
         * @returns a string
         */
        get: function () {
            return this._resourceId;
        },
        /**
         * Sets the resourceId property value. The resource id.
         * @param value Value to set for the resourceId property.
         */
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenoteOperation.prototype, "resourceLocation", {
        /**
         * Gets the resourceLocation property value. The resource URI for the object. For example, the resource URI for a copied page or section.
         * @returns a string
         */
        get: function () {
            return this._resourceLocation;
        },
        /**
         * Sets the resourceLocation property value. The resource URI for the object. For example, the resource URI for a copied page or section.
         * @param value Value to set for the resourceLocation property.
         */
        set: function (value) {
            this._resourceLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OnenoteOperation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["error", function (o, n) { o.error = n.getObjectValue(OnenoteOperationError); }],
            ["percentComplete", function (o, n) { o.percentComplete = n.getStringValue(); }],
            ["resourceId", function (o, n) { o.resourceId = n.getStringValue(); }],
            ["resourceLocation", function (o, n) { o.resourceLocation = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OnenoteOperation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("error", this.error);
        writer.writeStringValue("percentComplete", this.percentComplete);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeStringValue("resourceLocation", this.resourceLocation);
    };
    ;
    ;
    ;
    ;
    ;
    return OnenoteOperation;
}(operation_1.Operation));
exports.OnenoteOperation = OnenoteOperation;

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
exports.ConnectionOperation = void 0;
var entity_1 = require("./entity");
var ConnectionOperation = /** @class */ (function (_super) {
    __extends(ConnectionOperation, _super);
    /**
     * Instantiates a new connectionOperation and sets the default values.
     */
    function ConnectionOperation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ConnectionOperation.prototype, "error", {
        /**
         * Gets the error property value.
         * @returns a publicError
         */
        get: function () {
            return this._error;
        },
        /**
         * Sets the error property value.
         * @param value Value to set for the error property.
         */
        set: function (value) {
            this._error = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConnectionOperation.prototype, "status", {
        /**
         * Gets the status property value.
         * @returns a connectionOperationStatus
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
    ConnectionOperation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["error", function (o, n) { o.error = n.getObjectValue(PublicError); }],
            ["status", function (o, n) { o.status = n.getObjectValue(ConnectionOperationStatus); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ConnectionOperation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("error", this.error);
        writer.writeObjectValue("status", this.status);
    };
    ;
    ;
    ;
    return ConnectionOperation;
}(entity_1.Entity));
exports.ConnectionOperation = ConnectionOperation;

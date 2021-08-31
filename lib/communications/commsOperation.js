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
exports.CommsOperation = void 0;
var entity_1 = require("../entity");
var CommsOperation = /** @class */ (function (_super) {
    __extends(CommsOperation, _super);
    /**
     * Instantiates a new commsOperation and sets the default values.
     */
    function CommsOperation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(CommsOperation.prototype, "clientContext", {
        /**
         * Gets the clientContext property value. Unique Client Context string. Max limit is 256 chars.
         * @returns a string
         */
        get: function () {
            return this._clientContext;
        },
        /**
         * Sets the clientContext property value. Unique Client Context string. Max limit is 256 chars.
         * @param value Value to set for the clientContext property.
         */
        set: function (value) {
            this._clientContext = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CommsOperation.prototype, "resultInfo", {
        /**
         * Gets the resultInfo property value. The result information. Read-only.
         * @returns a resultInfo
         */
        get: function () {
            return this._resultInfo;
        },
        /**
         * Sets the resultInfo property value. The result information. Read-only.
         * @param value Value to set for the resultInfo property.
         */
        set: function (value) {
            this._resultInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CommsOperation.prototype, "status", {
        /**
         * Gets the status property value. Possible values are: notStarted, running, completed, failed. Read-only.
         * @returns a operationStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Possible values are: notStarted, running, completed, failed. Read-only.
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
    CommsOperation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["clientContext", function (o, n) { o.clientContext = n.getStringValue(); }],
            ["resultInfo", function (o, n) { o.resultInfo = n.getObjectValue(ResultInfo); }],
            ["status", function (o, n) { o.status = n.getObjectValue(OperationStatus); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    CommsOperation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("clientContext", this.clientContext);
        writer.writeObjectValue("resultInfo", this.resultInfo);
        writer.writeObjectValue("status", this.status);
    };
    ;
    ;
    ;
    ;
    return CommsOperation;
}(entity_1.Entity));
exports.CommsOperation = CommsOperation;

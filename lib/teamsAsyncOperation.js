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
exports.TeamsAsyncOperation = void 0;
var entity_1 = require("./entity");
var TeamsAsyncOperation = /** @class */ (function (_super) {
    __extends(TeamsAsyncOperation, _super);
    /**
     * Instantiates a new teamsAsyncOperation and sets the default values.
     */
    function TeamsAsyncOperation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TeamsAsyncOperation.prototype, "attemptsCount", {
        /**
         * Gets the attemptsCount property value. Number of times the operation was attempted before being marked successful or failed.
         * @returns a integer
         */
        get: function () {
            return this._attemptsCount;
        },
        /**
         * Sets the attemptsCount property value. Number of times the operation was attempted before being marked successful or failed.
         * @param value Value to set for the attemptsCount property.
         */
        set: function (value) {
            this._attemptsCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAsyncOperation.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Time when the operation was created.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Time when the operation was created.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAsyncOperation.prototype, "error", {
        /**
         * Gets the error property value. Any error that causes the async operation to fail.
         * @returns a operationError
         */
        get: function () {
            return this._error;
        },
        /**
         * Sets the error property value. Any error that causes the async operation to fail.
         * @param value Value to set for the error property.
         */
        set: function (value) {
            this._error = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAsyncOperation.prototype, "lastActionDateTime", {
        /**
         * Gets the lastActionDateTime property value. Time when the async operation was last updated.
         * @returns a Date
         */
        get: function () {
            return this._lastActionDateTime;
        },
        /**
         * Sets the lastActionDateTime property value. Time when the async operation was last updated.
         * @param value Value to set for the lastActionDateTime property.
         */
        set: function (value) {
            this._lastActionDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAsyncOperation.prototype, "operationType", {
        /**
         * Gets the operationType property value. Denotes which type of operation is being described.
         * @returns a teamsAsyncOperationType
         */
        get: function () {
            return this._operationType;
        },
        /**
         * Sets the operationType property value. Denotes which type of operation is being described.
         * @param value Value to set for the operationType property.
         */
        set: function (value) {
            this._operationType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAsyncOperation.prototype, "status", {
        /**
         * Gets the status property value. Operation status.
         * @returns a teamsAsyncOperationStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Operation status.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAsyncOperation.prototype, "targetResourceId", {
        /**
         * Gets the targetResourceId property value. The ID of the object that's created or modified as result of this async operation, typically a team.
         * @returns a string
         */
        get: function () {
            return this._targetResourceId;
        },
        /**
         * Sets the targetResourceId property value. The ID of the object that's created or modified as result of this async operation, typically a team.
         * @param value Value to set for the targetResourceId property.
         */
        set: function (value) {
            this._targetResourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAsyncOperation.prototype, "targetResourceLocation", {
        /**
         * Gets the targetResourceLocation property value. The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths.
         * @returns a string
         */
        get: function () {
            return this._targetResourceLocation;
        },
        /**
         * Sets the targetResourceLocation property value. The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths.
         * @param value Value to set for the targetResourceLocation property.
         */
        set: function (value) {
            this._targetResourceLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TeamsAsyncOperation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["attemptsCount", function (o, n) { o.attemptsCount = n.getNumberValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["error", function (o, n) { o.error = n.getObjectValue(OperationError); }],
            ["lastActionDateTime", function (o, n) { o.lastActionDateTime = n.getDateValue(); }],
            ["operationType", function (o, n) { o.operationType = n.getObjectValue(TeamsAsyncOperationType); }],
            ["status", function (o, n) { o.status = n.getObjectValue(TeamsAsyncOperationStatus); }],
            ["targetResourceId", function (o, n) { o.targetResourceId = n.getStringValue(); }],
            ["targetResourceLocation", function (o, n) { o.targetResourceLocation = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TeamsAsyncOperation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("attemptsCount", this.attemptsCount);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("error", this.error);
        writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        writer.writeObjectValue("operationType", this.operationType);
        writer.writeObjectValue("status", this.status);
        writer.writeStringValue("targetResourceId", this.targetResourceId);
        writer.writeStringValue("targetResourceLocation", this.targetResourceLocation);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return TeamsAsyncOperation;
}(entity_1.Entity));
exports.TeamsAsyncOperation = TeamsAsyncOperation;

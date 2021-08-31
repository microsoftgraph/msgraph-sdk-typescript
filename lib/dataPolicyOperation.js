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
exports.DataPolicyOperation = void 0;
var entity_1 = require("./entity");
var DataPolicyOperation = /** @class */ (function (_super) {
    __extends(DataPolicyOperation, _super);
    /**
     * Instantiates a new dataPolicyOperation and sets the default values.
     */
    function DataPolicyOperation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DataPolicyOperation.prototype, "completedDateTime", {
        /**
         * Gets the completedDateTime property value. Represents when the request for this data policy operation was completed, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Null until the operation completes.
         * @returns a Date
         */
        get: function () {
            return this._completedDateTime;
        },
        /**
         * Sets the completedDateTime property value. Represents when the request for this data policy operation was completed, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Null until the operation completes.
         * @param value Value to set for the completedDateTime property.
         */
        set: function (value) {
            this._completedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataPolicyOperation.prototype, "progress", {
        /**
         * Gets the progress property value. Specifies the progress of an operation.
         * @returns a double
         */
        get: function () {
            return this._progress;
        },
        /**
         * Sets the progress property value. Specifies the progress of an operation.
         * @param value Value to set for the progress property.
         */
        set: function (value) {
            this._progress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataPolicyOperation.prototype, "status", {
        /**
         * Gets the status property value. Possible values are: notStarted, running, complete, failed, unknownFutureValue.
         * @returns a dataPolicyOperationStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Possible values are: notStarted, running, complete, failed, unknownFutureValue.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataPolicyOperation.prototype, "storageLocation", {
        /**
         * Gets the storageLocation property value. The URL location to where data is being exported for export requests.
         * @returns a string
         */
        get: function () {
            return this._storageLocation;
        },
        /**
         * Sets the storageLocation property value. The URL location to where data is being exported for export requests.
         * @param value Value to set for the storageLocation property.
         */
        set: function (value) {
            this._storageLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataPolicyOperation.prototype, "submittedDateTime", {
        /**
         * Gets the submittedDateTime property value. Represents when the request for this data operation was submitted, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._submittedDateTime;
        },
        /**
         * Sets the submittedDateTime property value. Represents when the request for this data operation was submitted, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the submittedDateTime property.
         */
        set: function (value) {
            this._submittedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataPolicyOperation.prototype, "userId", {
        /**
         * Gets the userId property value. The id for the user on whom the operation is performed.
         * @returns a string
         */
        get: function () {
            return this._userId;
        },
        /**
         * Sets the userId property value. The id for the user on whom the operation is performed.
         * @param value Value to set for the userId property.
         */
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DataPolicyOperation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["completedDateTime", function (o, n) { o.completedDateTime = n.getDateValue(); }],
            ["progress", function (o, n) { o.progress = n.getNumberValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(DataPolicyOperationStatus); }],
            ["storageLocation", function (o, n) { o.storageLocation = n.getStringValue(); }],
            ["submittedDateTime", function (o, n) { o.submittedDateTime = n.getDateValue(); }],
            ["userId", function (o, n) { o.userId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DataPolicyOperation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeNumberValue("progress", this.progress);
        writer.writeObjectValue("status", this.status);
        writer.writeStringValue("storageLocation", this.storageLocation);
        writer.writeDateValue("submittedDateTime", this.submittedDateTime);
        writer.writeStringValue("userId", this.userId);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return DataPolicyOperation;
}(entity_1.Entity));
exports.DataPolicyOperation = DataPolicyOperation;

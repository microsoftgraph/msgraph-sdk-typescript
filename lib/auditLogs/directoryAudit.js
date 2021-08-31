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
exports.DirectoryAudit = void 0;
var entity_1 = require("../entity");
var keyValue_1 = require("../keyValue");
var auditActivityInitiator_1 = require("./auditActivityInitiator");
var DirectoryAudit = /** @class */ (function (_super) {
    __extends(DirectoryAudit, _super);
    /**
     * Instantiates a new directoryAudit and sets the default values.
     */
    function DirectoryAudit() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DirectoryAudit.prototype, "activityDateTime", {
        /**
         * Gets the activityDateTime property value. Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @returns a Date
         */
        get: function () {
            return this._activityDateTime;
        },
        /**
         * Sets the activityDateTime property value. Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @param value Value to set for the activityDateTime property.
         */
        set: function (value) {
            this._activityDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "activityDisplayName", {
        /**
         * Gets the activityDisplayName property value. Indicates the activity name or the operation name (E.g. 'Create User', 'Add member to group'). For a list of activities logged, refer to Azure Ad activity list.
         * @returns a string
         */
        get: function () {
            return this._activityDisplayName;
        },
        /**
         * Sets the activityDisplayName property value. Indicates the activity name or the operation name (E.g. 'Create User', 'Add member to group'). For a list of activities logged, refer to Azure Ad activity list.
         * @param value Value to set for the activityDisplayName property.
         */
        set: function (value) {
            this._activityDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "additionalDetails", {
        /**
         * Gets the additionalDetails property value. Indicates additional details on the activity.
         * @returns a keyValue
         */
        get: function () {
            return this._additionalDetails;
        },
        /**
         * Sets the additionalDetails property value. Indicates additional details on the activity.
         * @param value Value to set for the additionalDetails property.
         */
        set: function (value) {
            this._additionalDetails = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "category", {
        /**
         * Gets the category property value. Indicates which resource category that's targeted by the activity. (For example: User Management, Group Management etc..)
         * @returns a string
         */
        get: function () {
            return this._category;
        },
        /**
         * Sets the category property value. Indicates which resource category that's targeted by the activity. (For example: User Management, Group Management etc..)
         * @param value Value to set for the category property.
         */
        set: function (value) {
            this._category = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "correlationId", {
        /**
         * Gets the correlationId property value. Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs across services.
         * @returns a string
         */
        get: function () {
            return this._correlationId;
        },
        /**
         * Sets the correlationId property value. Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs across services.
         * @param value Value to set for the correlationId property.
         */
        set: function (value) {
            this._correlationId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "initiatedBy", {
        /**
         * Gets the initiatedBy property value.
         * @returns a auditActivityInitiator
         */
        get: function () {
            return this._initiatedBy;
        },
        /**
         * Sets the initiatedBy property value.
         * @param value Value to set for the initiatedBy property.
         */
        set: function (value) {
            this._initiatedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "loggedByService", {
        /**
         * Gets the loggedByService property value. Indicates information on which service initiated the activity (For example: Self-service Password Management, Core Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management.
         * @returns a string
         */
        get: function () {
            return this._loggedByService;
        },
        /**
         * Sets the loggedByService property value. Indicates information on which service initiated the activity (For example: Self-service Password Management, Core Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management.
         * @param value Value to set for the loggedByService property.
         */
        set: function (value) {
            this._loggedByService = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "operationType", {
        /**
         * Gets the operationType property value.
         * @returns a string
         */
        get: function () {
            return this._operationType;
        },
        /**
         * Sets the operationType property value.
         * @param value Value to set for the operationType property.
         */
        set: function (value) {
            this._operationType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "result", {
        /**
         * Gets the result property value. Indicates the result of the activity. Possible values are: success, failure, timeout, unknownFutureValue.
         * @returns a operationResult
         */
        get: function () {
            return this._result;
        },
        /**
         * Sets the result property value. Indicates the result of the activity. Possible values are: success, failure, timeout, unknownFutureValue.
         * @param value Value to set for the result property.
         */
        set: function (value) {
            this._result = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "resultReason", {
        /**
         * Gets the resultReason property value. Indicates the reason for failure if the result is failure or timeout.
         * @returns a string
         */
        get: function () {
            return this._resultReason;
        },
        /**
         * Sets the resultReason property value. Indicates the reason for failure if the result is failure or timeout.
         * @param value Value to set for the resultReason property.
         */
        set: function (value) {
            this._resultReason = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DirectoryAudit.prototype, "targetResources", {
        /**
         * Gets the targetResources property value. Indicates information on which resource was changed due to the activity. Target Resource Type can be User, Device, Directory, App, Role, Group, Policy or Other.
         * @returns a targetResource
         */
        get: function () {
            return this._targetResources;
        },
        /**
         * Sets the targetResources property value. Indicates information on which resource was changed due to the activity. Target Resource Type can be User, Device, Directory, App, Role, Group, Policy or Other.
         * @param value Value to set for the targetResources property.
         */
        set: function (value) {
            this._targetResources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DirectoryAudit.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["activityDateTime", function (o, n) { o.activityDateTime = n.getDateValue(); }],
            ["activityDisplayName", function (o, n) { o.activityDisplayName = n.getStringValue(); }],
            ["additionalDetails", function (o, n) { o.additionalDetails = n.getCollectionOfObjectValues(keyValue_1.KeyValue); }],
            ["category", function (o, n) { o.category = n.getStringValue(); }],
            ["correlationId", function (o, n) { o.correlationId = n.getStringValue(); }],
            ["initiatedBy", function (o, n) { o.initiatedBy = n.getObjectValue(auditActivityInitiator_1.AuditActivityInitiator); }],
            ["loggedByService", function (o, n) { o.loggedByService = n.getStringValue(); }],
            ["operationType", function (o, n) { o.operationType = n.getStringValue(); }],
            ["result", function (o, n) { o.result = n.getObjectValue(OperationResult); }],
            ["resultReason", function (o, n) { o.resultReason = n.getStringValue(); }],
            ["targetResources", function (o, n) { o.targetResources = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DirectoryAudit.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        writer.writeStringValue("activityDisplayName", this.activityDisplayName);
        writer.writeCollectionOfObjectValues("additionalDetails", this.additionalDetails);
        writer.writeStringValue("category", this.category);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeObjectValue("initiatedBy", this.initiatedBy);
        writer.writeStringValue("loggedByService", this.loggedByService);
        writer.writeStringValue("operationType", this.operationType);
        writer.writeObjectValue("result", this.result);
        writer.writeStringValue("resultReason", this.resultReason);
        writer.writeCollectionOfPrimitiveValues("targetResources", this.targetResources);
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
    ;
    ;
    ;
    return DirectoryAudit;
}(entity_1.Entity));
exports.DirectoryAudit = DirectoryAudit;

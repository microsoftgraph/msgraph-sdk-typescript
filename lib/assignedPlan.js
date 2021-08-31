"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignedPlan = void 0;
var AssignedPlan = /** @class */ (function () {
    /**
     * Instantiates a new assignedPlan and sets the default values.
     */
    function AssignedPlan() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(AssignedPlan.prototype, "additionalData", {
        /**
         * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @returns a Map<string, unknown>
         */
        get: function () {
            return this._additionalData;
        },
        /**
         * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @param value Value to set for the AdditionalData property.
         */
        set: function (value) {
            this._additionalData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AssignedPlan.prototype, "assignedDateTime", {
        /**
         * Gets the assignedDateTime property value. The date and time at which the plan was assigned; for example: 2013-01-02T19:32:30Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._assignedDateTime;
        },
        /**
         * Sets the assignedDateTime property value. The date and time at which the plan was assigned; for example: 2013-01-02T19:32:30Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the assignedDateTime property.
         */
        set: function (value) {
            this._assignedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AssignedPlan.prototype, "capabilityStatus", {
        /**
         * Gets the capabilityStatus property value. Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut.
         * @returns a string
         */
        get: function () {
            return this._capabilityStatus;
        },
        /**
         * Sets the capabilityStatus property value. Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut.
         * @param value Value to set for the capabilityStatus property.
         */
        set: function (value) {
            this._capabilityStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AssignedPlan.prototype, "service", {
        /**
         * Gets the service property value. The name of the service; for example, 'Exchange'.
         * @returns a string
         */
        get: function () {
            return this._service;
        },
        /**
         * Sets the service property value. The name of the service; for example, 'Exchange'.
         * @param value Value to set for the service property.
         */
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AssignedPlan.prototype, "servicePlanId", {
        /**
         * Gets the servicePlanId property value. A GUID that identifies the service plan.
         * @returns a string
         */
        get: function () {
            return this._servicePlanId;
        },
        /**
         * Sets the servicePlanId property value. A GUID that identifies the service plan.
         * @param value Value to set for the servicePlanId property.
         */
        set: function (value) {
            this._servicePlanId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AssignedPlan.prototype.getFieldDeserializers = function () {
        return new Map([
            ["assignedDateTime", function (o, n) { o.assignedDateTime = n.getDateValue(); }],
            ["capabilityStatus", function (o, n) { o.capabilityStatus = n.getStringValue(); }],
            ["service", function (o, n) { o.service = n.getStringValue(); }],
            ["servicePlanId", function (o, n) { o.servicePlanId = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AssignedPlan.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeDateValue("assignedDateTime", this.assignedDateTime);
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        writer.writeStringValue("service", this.service);
        writer.writeStringValue("servicePlanId", this.servicePlanId);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return AssignedPlan;
}());
exports.AssignedPlan = AssignedPlan;

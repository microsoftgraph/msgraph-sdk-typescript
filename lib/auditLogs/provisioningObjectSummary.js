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
exports.ProvisioningObjectSummary = void 0;
var entity_1 = require("../entity");
var ProvisioningObjectSummary = /** @class */ (function (_super) {
    __extends(ProvisioningObjectSummary, _super);
    /**
     * Instantiates a new provisioningObjectSummary and sets the default values.
     */
    function ProvisioningObjectSummary() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "activityDateTime", {
        /**
         * Gets the activityDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._activityDateTime;
        },
        /**
         * Sets the activityDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the activityDateTime property.
         */
        set: function (value) {
            this._activityDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "changeId", {
        /**
         * Gets the changeId property value. Unique ID of this change in this cycle.
         * @returns a string
         */
        get: function () {
            return this._changeId;
        },
        /**
         * Sets the changeId property value. Unique ID of this change in this cycle.
         * @param value Value to set for the changeId property.
         */
        set: function (value) {
            this._changeId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "cycleId", {
        /**
         * Gets the cycleId property value. Unique ID per job iteration.
         * @returns a string
         */
        get: function () {
            return this._cycleId;
        },
        /**
         * Sets the cycleId property value. Unique ID per job iteration.
         * @param value Value to set for the cycleId property.
         */
        set: function (value) {
            this._cycleId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "durationInMilliseconds", {
        /**
         * Gets the durationInMilliseconds property value. Indicates how long this provisioning action took to finish. Measured in milliseconds.
         * @returns a integer
         */
        get: function () {
            return this._durationInMilliseconds;
        },
        /**
         * Sets the durationInMilliseconds property value. Indicates how long this provisioning action took to finish. Measured in milliseconds.
         * @param value Value to set for the durationInMilliseconds property.
         */
        set: function (value) {
            this._durationInMilliseconds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "initiatedBy", {
        /**
         * Gets the initiatedBy property value. Details of who initiated this provisioning.
         * @returns a initiator
         */
        get: function () {
            return this._initiatedBy;
        },
        /**
         * Sets the initiatedBy property value. Details of who initiated this provisioning.
         * @param value Value to set for the initiatedBy property.
         */
        set: function (value) {
            this._initiatedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "jobId", {
        /**
         * Gets the jobId property value. The unique ID for the whole provisioning job.
         * @returns a string
         */
        get: function () {
            return this._jobId;
        },
        /**
         * Sets the jobId property value. The unique ID for the whole provisioning job.
         * @param value Value to set for the jobId property.
         */
        set: function (value) {
            this._jobId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "modifiedProperties", {
        /**
         * Gets the modifiedProperties property value. Details of each property that was modified in this provisioning action on this object.
         * @returns a modifiedProperty
         */
        get: function () {
            return this._modifiedProperties;
        },
        /**
         * Sets the modifiedProperties property value. Details of each property that was modified in this provisioning action on this object.
         * @param value Value to set for the modifiedProperties property.
         */
        set: function (value) {
            this._modifiedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "provisioningAction", {
        /**
         * Gets the provisioningAction property value. Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list.
         * @returns a provisioningAction
         */
        get: function () {
            return this._provisioningAction;
        },
        /**
         * Sets the provisioningAction property value. Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable, other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list.
         * @param value Value to set for the provisioningAction property.
         */
        set: function (value) {
            this._provisioningAction = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "provisioningStatusInfo", {
        /**
         * Gets the provisioningStatusInfo property value. Details of provisioning status.
         * @returns a provisioningStatusInfo
         */
        get: function () {
            return this._provisioningStatusInfo;
        },
        /**
         * Sets the provisioningStatusInfo property value. Details of provisioning status.
         * @param value Value to set for the provisioningStatusInfo property.
         */
        set: function (value) {
            this._provisioningStatusInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "provisioningSteps", {
        /**
         * Gets the provisioningSteps property value. Details of each step in provisioning.
         * @returns a provisioningStep
         */
        get: function () {
            return this._provisioningSteps;
        },
        /**
         * Sets the provisioningSteps property value. Details of each step in provisioning.
         * @param value Value to set for the provisioningSteps property.
         */
        set: function (value) {
            this._provisioningSteps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "servicePrincipal", {
        /**
         * Gets the servicePrincipal property value. Represents the service principal used for provisioning.
         * @returns a provisioningServicePrincipal
         */
        get: function () {
            return this._servicePrincipal;
        },
        /**
         * Sets the servicePrincipal property value. Represents the service principal used for provisioning.
         * @param value Value to set for the servicePrincipal property.
         */
        set: function (value) {
            this._servicePrincipal = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "sourceIdentity", {
        /**
         * Gets the sourceIdentity property value. Details of source object being provisioned.
         * @returns a provisionedIdentity
         */
        get: function () {
            return this._sourceIdentity;
        },
        /**
         * Sets the sourceIdentity property value. Details of source object being provisioned.
         * @param value Value to set for the sourceIdentity property.
         */
        set: function (value) {
            this._sourceIdentity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "sourceSystem", {
        /**
         * Gets the sourceSystem property value. Details of source system of the object being provisioned.
         * @returns a provisioningSystem
         */
        get: function () {
            return this._sourceSystem;
        },
        /**
         * Sets the sourceSystem property value. Details of source system of the object being provisioned.
         * @param value Value to set for the sourceSystem property.
         */
        set: function (value) {
            this._sourceSystem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "targetIdentity", {
        /**
         * Gets the targetIdentity property value. Details of target object being provisioned.
         * @returns a provisionedIdentity
         */
        get: function () {
            return this._targetIdentity;
        },
        /**
         * Sets the targetIdentity property value. Details of target object being provisioned.
         * @param value Value to set for the targetIdentity property.
         */
        set: function (value) {
            this._targetIdentity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "targetSystem", {
        /**
         * Gets the targetSystem property value. Details of target system of the object being provisioned.
         * @returns a provisioningSystem
         */
        get: function () {
            return this._targetSystem;
        },
        /**
         * Sets the targetSystem property value. Details of target system of the object being provisioned.
         * @param value Value to set for the targetSystem property.
         */
        set: function (value) {
            this._targetSystem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisioningObjectSummary.prototype, "tenantId", {
        /**
         * Gets the tenantId property value. Unique Azure AD tenant ID.
         * @returns a string
         */
        get: function () {
            return this._tenantId;
        },
        /**
         * Sets the tenantId property value. Unique Azure AD tenant ID.
         * @param value Value to set for the tenantId property.
         */
        set: function (value) {
            this._tenantId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ProvisioningObjectSummary.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["activityDateTime", function (o, n) { o.activityDateTime = n.getDateValue(); }],
            ["changeId", function (o, n) { o.changeId = n.getStringValue(); }],
            ["cycleId", function (o, n) { o.cycleId = n.getStringValue(); }],
            ["durationInMilliseconds", function (o, n) { o.durationInMilliseconds = n.getNumberValue(); }],
            ["initiatedBy", function (o, n) { o.initiatedBy = n.getObjectValue(Initiator); }],
            ["jobId", function (o, n) { o.jobId = n.getStringValue(); }],
            ["modifiedProperties", function (o, n) { o.modifiedProperties = n.getCollectionOfPrimitiveValues(); }],
            ["provisioningAction", function (o, n) { o.provisioningAction = n.getObjectValue(ProvisioningAction); }],
            ["provisioningStatusInfo", function (o, n) { o.provisioningStatusInfo = n.getObjectValue(ProvisioningStatusInfo); }],
            ["provisioningSteps", function (o, n) { o.provisioningSteps = n.getCollectionOfPrimitiveValues(); }],
            ["servicePrincipal", function (o, n) { o.servicePrincipal = n.getObjectValue(ProvisioningServicePrincipal); }],
            ["sourceIdentity", function (o, n) { o.sourceIdentity = n.getObjectValue(ProvisionedIdentity); }],
            ["sourceSystem", function (o, n) { o.sourceSystem = n.getObjectValue(ProvisioningSystem); }],
            ["targetIdentity", function (o, n) { o.targetIdentity = n.getObjectValue(ProvisionedIdentity); }],
            ["targetSystem", function (o, n) { o.targetSystem = n.getObjectValue(ProvisioningSystem); }],
            ["tenantId", function (o, n) { o.tenantId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ProvisioningObjectSummary.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        writer.writeStringValue("changeId", this.changeId);
        writer.writeStringValue("cycleId", this.cycleId);
        writer.writeNumberValue("durationInMilliseconds", this.durationInMilliseconds);
        writer.writeObjectValue("initiatedBy", this.initiatedBy);
        writer.writeStringValue("jobId", this.jobId);
        writer.writeCollectionOfPrimitiveValues("modifiedProperties", this.modifiedProperties);
        writer.writeObjectValue("provisioningAction", this.provisioningAction);
        writer.writeObjectValue("provisioningStatusInfo", this.provisioningStatusInfo);
        writer.writeCollectionOfPrimitiveValues("provisioningSteps", this.provisioningSteps);
        writer.writeObjectValue("servicePrincipal", this.servicePrincipal);
        writer.writeObjectValue("sourceIdentity", this.sourceIdentity);
        writer.writeObjectValue("sourceSystem", this.sourceSystem);
        writer.writeObjectValue("targetIdentity", this.targetIdentity);
        writer.writeObjectValue("targetSystem", this.targetSystem);
        writer.writeStringValue("tenantId", this.tenantId);
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
    ;
    ;
    ;
    ;
    ;
    return ProvisioningObjectSummary;
}(entity_1.Entity));
exports.ProvisioningObjectSummary = ProvisioningObjectSummary;

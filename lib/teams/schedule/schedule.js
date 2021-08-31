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
exports.Schedule = void 0;
var entity_1 = require("../../entity");
var offerShiftRequest_1 = require("../../offerShiftRequest");
var openShift_1 = require("../../openShift");
var openShiftChangeRequest_1 = require("../../openShiftChangeRequest");
var schedulingGroup_1 = require("../../schedulingGroup");
var shift_1 = require("../../shift");
var swapShiftsChangeRequest_1 = require("../../swapShiftsChangeRequest");
var timeOff_1 = require("../../timeOff");
var timeOffReason_1 = require("../../timeOffReason");
var timeOffRequest_1 = require("../../timeOffRequest");
var Schedule = /** @class */ (function (_super) {
    __extends(Schedule, _super);
    /**
     * Instantiates a new Schedule and sets the default values.
     */
    function Schedule() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Schedule.prototype, "enabled", {
        /**
         * Gets the enabled property value. Indicates whether the schedule is enabled for the team. Required.
         * @returns a boolean
         */
        get: function () {
            return this._enabled;
        },
        /**
         * Sets the enabled property value. Indicates whether the schedule is enabled for the team. Required.
         * @param value Value to set for the enabled property.
         */
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "offerShiftRequests", {
        /**
         * Gets the offerShiftRequests property value.
         * @returns a offerShiftRequest
         */
        get: function () {
            return this._offerShiftRequests;
        },
        /**
         * Sets the offerShiftRequests property value.
         * @param value Value to set for the offerShiftRequests property.
         */
        set: function (value) {
            this._offerShiftRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "offerShiftRequestsEnabled", {
        /**
         * Gets the offerShiftRequestsEnabled property value. Indicates whether offer shift requests are enabled for the schedule.
         * @returns a boolean
         */
        get: function () {
            return this._offerShiftRequestsEnabled;
        },
        /**
         * Sets the offerShiftRequestsEnabled property value. Indicates whether offer shift requests are enabled for the schedule.
         * @param value Value to set for the offerShiftRequestsEnabled property.
         */
        set: function (value) {
            this._offerShiftRequestsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "openShiftChangeRequests", {
        /**
         * Gets the openShiftChangeRequests property value.
         * @returns a openShiftChangeRequest
         */
        get: function () {
            return this._openShiftChangeRequests;
        },
        /**
         * Sets the openShiftChangeRequests property value.
         * @param value Value to set for the openShiftChangeRequests property.
         */
        set: function (value) {
            this._openShiftChangeRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "openShifts", {
        /**
         * Gets the openShifts property value.
         * @returns a openShift
         */
        get: function () {
            return this._openShifts;
        },
        /**
         * Sets the openShifts property value.
         * @param value Value to set for the openShifts property.
         */
        set: function (value) {
            this._openShifts = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "openShiftsEnabled", {
        /**
         * Gets the openShiftsEnabled property value. Indicates whether open shifts are enabled for the schedule.
         * @returns a boolean
         */
        get: function () {
            return this._openShiftsEnabled;
        },
        /**
         * Sets the openShiftsEnabled property value. Indicates whether open shifts are enabled for the schedule.
         * @param value Value to set for the openShiftsEnabled property.
         */
        set: function (value) {
            this._openShiftsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "provisionStatus", {
        /**
         * Gets the provisionStatus property value. The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.
         * @returns a operationStatus
         */
        get: function () {
            return this._provisionStatus;
        },
        /**
         * Sets the provisionStatus property value. The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.
         * @param value Value to set for the provisionStatus property.
         */
        set: function (value) {
            this._provisionStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "provisionStatusCode", {
        /**
         * Gets the provisionStatusCode property value. Additional information about why schedule provisioning failed.
         * @returns a string
         */
        get: function () {
            return this._provisionStatusCode;
        },
        /**
         * Sets the provisionStatusCode property value. Additional information about why schedule provisioning failed.
         * @param value Value to set for the provisionStatusCode property.
         */
        set: function (value) {
            this._provisionStatusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "schedulingGroups", {
        /**
         * Gets the schedulingGroups property value. The logical grouping of users in the schedule (usually by role).
         * @returns a schedulingGroup
         */
        get: function () {
            return this._schedulingGroups;
        },
        /**
         * Sets the schedulingGroups property value. The logical grouping of users in the schedule (usually by role).
         * @param value Value to set for the schedulingGroups property.
         */
        set: function (value) {
            this._schedulingGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "shifts", {
        /**
         * Gets the shifts property value. The shifts in the schedule.
         * @returns a shift
         */
        get: function () {
            return this._shifts;
        },
        /**
         * Sets the shifts property value. The shifts in the schedule.
         * @param value Value to set for the shifts property.
         */
        set: function (value) {
            this._shifts = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "swapShiftsChangeRequests", {
        /**
         * Gets the swapShiftsChangeRequests property value.
         * @returns a swapShiftsChangeRequest
         */
        get: function () {
            return this._swapShiftsChangeRequests;
        },
        /**
         * Sets the swapShiftsChangeRequests property value.
         * @param value Value to set for the swapShiftsChangeRequests property.
         */
        set: function (value) {
            this._swapShiftsChangeRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "swapShiftsRequestsEnabled", {
        /**
         * Gets the swapShiftsRequestsEnabled property value. Indicates whether swap shifts requests are enabled for the schedule.
         * @returns a boolean
         */
        get: function () {
            return this._swapShiftsRequestsEnabled;
        },
        /**
         * Sets the swapShiftsRequestsEnabled property value. Indicates whether swap shifts requests are enabled for the schedule.
         * @param value Value to set for the swapShiftsRequestsEnabled property.
         */
        set: function (value) {
            this._swapShiftsRequestsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "timeClockEnabled", {
        /**
         * Gets the timeClockEnabled property value. Indicates whether time clock is enabled for the schedule.
         * @returns a boolean
         */
        get: function () {
            return this._timeClockEnabled;
        },
        /**
         * Sets the timeClockEnabled property value. Indicates whether time clock is enabled for the schedule.
         * @param value Value to set for the timeClockEnabled property.
         */
        set: function (value) {
            this._timeClockEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "timeOffReasons", {
        /**
         * Gets the timeOffReasons property value. The set of reasons for a time off in the schedule.
         * @returns a timeOffReason
         */
        get: function () {
            return this._timeOffReasons;
        },
        /**
         * Sets the timeOffReasons property value. The set of reasons for a time off in the schedule.
         * @param value Value to set for the timeOffReasons property.
         */
        set: function (value) {
            this._timeOffReasons = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "timeOffRequests", {
        /**
         * Gets the timeOffRequests property value.
         * @returns a timeOffRequest
         */
        get: function () {
            return this._timeOffRequests;
        },
        /**
         * Sets the timeOffRequests property value.
         * @param value Value to set for the timeOffRequests property.
         */
        set: function (value) {
            this._timeOffRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "timeOffRequestsEnabled", {
        /**
         * Gets the timeOffRequestsEnabled property value. Indicates whether time off requests are enabled for the schedule.
         * @returns a boolean
         */
        get: function () {
            return this._timeOffRequestsEnabled;
        },
        /**
         * Sets the timeOffRequestsEnabled property value. Indicates whether time off requests are enabled for the schedule.
         * @param value Value to set for the timeOffRequestsEnabled property.
         */
        set: function (value) {
            this._timeOffRequestsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "timesOff", {
        /**
         * Gets the timesOff property value. The instances of times off in the schedule.
         * @returns a timeOff
         */
        get: function () {
            return this._timesOff;
        },
        /**
         * Sets the timesOff property value. The instances of times off in the schedule.
         * @param value Value to set for the timesOff property.
         */
        set: function (value) {
            this._timesOff = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "timeZone", {
        /**
         * Gets the timeZone property value. Indicates the time zone of the schedule team using tz database format. Required.
         * @returns a string
         */
        get: function () {
            return this._timeZone;
        },
        /**
         * Sets the timeZone property value. Indicates the time zone of the schedule team using tz database format. Required.
         * @param value Value to set for the timeZone property.
         */
        set: function (value) {
            this._timeZone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Schedule.prototype, "workforceIntegrationIds", {
        /**
         * Gets the workforceIntegrationIds property value.
         * @returns a string
         */
        get: function () {
            return this._workforceIntegrationIds;
        },
        /**
         * Sets the workforceIntegrationIds property value.
         * @param value Value to set for the workforceIntegrationIds property.
         */
        set: function (value) {
            this._workforceIntegrationIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Schedule.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["enabled", function (o, n) { o.enabled = n.getBooleanValue(); }],
            ["offerShiftRequests", function (o, n) { o.offerShiftRequests = n.getCollectionOfObjectValues(offerShiftRequest_1.OfferShiftRequest); }],
            ["offerShiftRequestsEnabled", function (o, n) { o.offerShiftRequestsEnabled = n.getBooleanValue(); }],
            ["openShiftChangeRequests", function (o, n) { o.openShiftChangeRequests = n.getCollectionOfObjectValues(openShiftChangeRequest_1.OpenShiftChangeRequest); }],
            ["openShifts", function (o, n) { o.openShifts = n.getCollectionOfObjectValues(openShift_1.OpenShift); }],
            ["openShiftsEnabled", function (o, n) { o.openShiftsEnabled = n.getBooleanValue(); }],
            ["provisionStatus", function (o, n) { o.provisionStatus = n.getObjectValue(OperationStatus); }],
            ["provisionStatusCode", function (o, n) { o.provisionStatusCode = n.getStringValue(); }],
            ["schedulingGroups", function (o, n) { o.schedulingGroups = n.getCollectionOfObjectValues(schedulingGroup_1.SchedulingGroup); }],
            ["shifts", function (o, n) { o.shifts = n.getCollectionOfObjectValues(shift_1.Shift); }],
            ["swapShiftsChangeRequests", function (o, n) { o.swapShiftsChangeRequests = n.getCollectionOfObjectValues(swapShiftsChangeRequest_1.SwapShiftsChangeRequest); }],
            ["swapShiftsRequestsEnabled", function (o, n) { o.swapShiftsRequestsEnabled = n.getBooleanValue(); }],
            ["timeClockEnabled", function (o, n) { o.timeClockEnabled = n.getBooleanValue(); }],
            ["timeOffReasons", function (o, n) { o.timeOffReasons = n.getCollectionOfObjectValues(timeOffReason_1.TimeOffReason); }],
            ["timeOffRequests", function (o, n) { o.timeOffRequests = n.getCollectionOfObjectValues(timeOffRequest_1.TimeOffRequest); }],
            ["timeOffRequestsEnabled", function (o, n) { o.timeOffRequestsEnabled = n.getBooleanValue(); }],
            ["timesOff", function (o, n) { o.timesOff = n.getCollectionOfObjectValues(timeOff_1.TimeOff); }],
            ["timeZone", function (o, n) { o.timeZone = n.getStringValue(); }],
            ["workforceIntegrationIds", function (o, n) { o.workforceIntegrationIds = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Schedule.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeCollectionOfObjectValues("offerShiftRequests", this.offerShiftRequests);
        writer.writeBooleanValue("offerShiftRequestsEnabled", this.offerShiftRequestsEnabled);
        writer.writeCollectionOfObjectValues("openShiftChangeRequests", this.openShiftChangeRequests);
        writer.writeCollectionOfObjectValues("openShifts", this.openShifts);
        writer.writeBooleanValue("openShiftsEnabled", this.openShiftsEnabled);
        writer.writeObjectValue("provisionStatus", this.provisionStatus);
        writer.writeStringValue("provisionStatusCode", this.provisionStatusCode);
        writer.writeCollectionOfObjectValues("schedulingGroups", this.schedulingGroups);
        writer.writeCollectionOfObjectValues("shifts", this.shifts);
        writer.writeCollectionOfObjectValues("swapShiftsChangeRequests", this.swapShiftsChangeRequests);
        writer.writeBooleanValue("swapShiftsRequestsEnabled", this.swapShiftsRequestsEnabled);
        writer.writeBooleanValue("timeClockEnabled", this.timeClockEnabled);
        writer.writeCollectionOfObjectValues("timeOffReasons", this.timeOffReasons);
        writer.writeCollectionOfObjectValues("timeOffRequests", this.timeOffRequests);
        writer.writeBooleanValue("timeOffRequestsEnabled", this.timeOffRequestsEnabled);
        writer.writeCollectionOfObjectValues("timesOff", this.timesOff);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeCollectionOfPrimitiveValues("workforceIntegrationIds", this.workforceIntegrationIds);
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
    ;
    ;
    ;
    return Schedule;
}(entity_1.Entity));
exports.Schedule = Schedule;

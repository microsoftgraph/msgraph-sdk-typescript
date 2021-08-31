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
exports.PlannerPlan = void 0;
var entity_1 = require("./entity");
var identitySet_1 = require("./identitySet");
var plannerBucket_1 = require("./planner/plannerBucket");
var plannerPlanDetails_1 = require("./planner/plans/details/plannerPlanDetails");
var plannerTask_1 = require("./plannerTask");
var PlannerPlan = /** @class */ (function (_super) {
    __extends(PlannerPlan, _super);
    /**
     * Instantiates a new plannerPlan and sets the default values.
     */
    function PlannerPlan() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PlannerPlan.prototype, "buckets", {
        /**
         * Gets the buckets property value. Collection of buckets in the plan. Read-only. Nullable.
         * @returns a plannerBucket
         */
        get: function () {
            return this._buckets;
        },
        /**
         * Sets the buckets property value. Collection of buckets in the plan. Read-only. Nullable.
         * @param value Value to set for the buckets property.
         */
        set: function (value) {
            this._buckets = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerPlan.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. Read-only. The user who created the plan.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. Read-only. The user who created the plan.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerPlan.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerPlan.prototype, "details", {
        /**
         * Gets the details property value. Additional details about the plan. Read-only. Nullable.
         * @returns a plannerPlanDetails
         */
        get: function () {
            return this._details;
        },
        /**
         * Sets the details property value. Additional details about the plan. Read-only. Nullable.
         * @param value Value to set for the details property.
         */
        set: function (value) {
            this._details = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerPlan.prototype, "owner", {
        /**
         * Gets the owner property value. ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.
         * @returns a string
         */
        get: function () {
            return this._owner;
        },
        /**
         * Sets the owner property value. ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.
         * @param value Value to set for the owner property.
         */
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerPlan.prototype, "tasks", {
        /**
         * Gets the tasks property value. Collection of tasks in the plan. Read-only. Nullable.
         * @returns a plannerTask
         */
        get: function () {
            return this._tasks;
        },
        /**
         * Sets the tasks property value. Collection of tasks in the plan. Read-only. Nullable.
         * @param value Value to set for the tasks property.
         */
        set: function (value) {
            this._tasks = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerPlan.prototype, "title", {
        /**
         * Gets the title property value. Required. Title of the plan.
         * @returns a string
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. Required. Title of the plan.
         * @param value Value to set for the title property.
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PlannerPlan.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["buckets", function (o, n) { o.buckets = n.getCollectionOfObjectValues(plannerBucket_1.PlannerBucket); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["details", function (o, n) { o.details = n.getObjectValue(plannerPlanDetails_1.PlannerPlanDetails); }],
            ["owner", function (o, n) { o.owner = n.getStringValue(); }],
            ["tasks", function (o, n) { o.tasks = n.getCollectionOfObjectValues(plannerTask_1.PlannerTask); }],
            ["title", function (o, n) { o.title = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PlannerPlan.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("buckets", this.buckets);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("details", this.details);
        writer.writeStringValue("owner", this.owner);
        writer.writeCollectionOfObjectValues("tasks", this.tasks);
        writer.writeStringValue("title", this.title);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return PlannerPlan;
}(entity_1.Entity));
exports.PlannerPlan = PlannerPlan;

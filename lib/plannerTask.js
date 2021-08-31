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
exports.PlannerTask = void 0;
var entity_1 = require("./entity");
var identitySet_1 = require("./identitySet");
var plannerAssignedToTaskBoardTaskFormat_1 = require("./planner/buckets/tasks/assignedToTaskBoardFormat/plannerAssignedToTaskBoardTaskFormat");
var plannerBucketTaskBoardTaskFormat_1 = require("./planner/buckets/tasks/bucketTaskBoardFormat/plannerBucketTaskBoardTaskFormat");
var plannerTaskDetails_1 = require("./planner/buckets/tasks/details/plannerTaskDetails");
var plannerProgressTaskBoardTaskFormat_1 = require("./planner/buckets/tasks/progressTaskBoardFormat/plannerProgressTaskBoardTaskFormat");
var PlannerTask = /** @class */ (function (_super) {
    __extends(PlannerTask, _super);
    /**
     * Instantiates a new plannerTask and sets the default values.
     */
    function PlannerTask() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PlannerTask.prototype, "activeChecklistItemCount", {
        /**
         * Gets the activeChecklistItemCount property value. Number of checklist items with value set to false, representing incomplete items.
         * @returns a integer
         */
        get: function () {
            return this._activeChecklistItemCount;
        },
        /**
         * Sets the activeChecklistItemCount property value. Number of checklist items with value set to false, representing incomplete items.
         * @param value Value to set for the activeChecklistItemCount property.
         */
        set: function (value) {
            this._activeChecklistItemCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "appliedCategories", {
        /**
         * Gets the appliedCategories property value. The categories to which the task has been applied. See applied Categories for possible values.
         * @returns a plannerAppliedCategories
         */
        get: function () {
            return this._appliedCategories;
        },
        /**
         * Sets the appliedCategories property value. The categories to which the task has been applied. See applied Categories for possible values.
         * @param value Value to set for the appliedCategories property.
         */
        set: function (value) {
            this._appliedCategories = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "assignedToTaskBoardFormat", {
        /**
         * Gets the assignedToTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
         * @returns a plannerAssignedToTaskBoardTaskFormat
         */
        get: function () {
            return this._assignedToTaskBoardFormat;
        },
        /**
         * Sets the assignedToTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
         * @param value Value to set for the assignedToTaskBoardFormat property.
         */
        set: function (value) {
            this._assignedToTaskBoardFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "assigneePriority", {
        /**
         * Gets the assigneePriority property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
         * @returns a string
         */
        get: function () {
            return this._assigneePriority;
        },
        /**
         * Sets the assigneePriority property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
         * @param value Value to set for the assigneePriority property.
         */
        set: function (value) {
            this._assigneePriority = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "assignments", {
        /**
         * Gets the assignments property value. The set of assignees the task is assigned to.
         * @returns a plannerAssignments
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. The set of assignees the task is assigned to.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "bucketId", {
        /**
         * Gets the bucketId property value. Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case-sensitive. Format validation is done on the service.
         * @returns a string
         */
        get: function () {
            return this._bucketId;
        },
        /**
         * Sets the bucketId property value. Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case-sensitive. Format validation is done on the service.
         * @param value Value to set for the bucketId property.
         */
        set: function (value) {
            this._bucketId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "bucketTaskBoardFormat", {
        /**
         * Gets the bucketTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
         * @returns a plannerBucketTaskBoardTaskFormat
         */
        get: function () {
            return this._bucketTaskBoardFormat;
        },
        /**
         * Sets the bucketTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
         * @param value Value to set for the bucketTaskBoardFormat property.
         */
        set: function (value) {
            this._bucketTaskBoardFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "checklistItemCount", {
        /**
         * Gets the checklistItemCount property value. Number of checklist items that are present on the task.
         * @returns a integer
         */
        get: function () {
            return this._checklistItemCount;
        },
        /**
         * Sets the checklistItemCount property value. Number of checklist items that are present on the task.
         * @param value Value to set for the checklistItemCount property.
         */
        set: function (value) {
            this._checklistItemCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "completedBy", {
        /**
         * Gets the completedBy property value. Identity of the user that completed the task.
         * @returns a identitySet
         */
        get: function () {
            return this._completedBy;
        },
        /**
         * Sets the completedBy property value. Identity of the user that completed the task.
         * @param value Value to set for the completedBy property.
         */
        set: function (value) {
            this._completedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "completedDateTime", {
        /**
         * Gets the completedDateTime property value. Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._completedDateTime;
        },
        /**
         * Sets the completedDateTime property value. Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the completedDateTime property.
         */
        set: function (value) {
            this._completedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "conversationThreadId", {
        /**
         * Gets the conversationThreadId property value. Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group.
         * @returns a string
         */
        get: function () {
            return this._conversationThreadId;
        },
        /**
         * Sets the conversationThreadId property value. Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group.
         * @param value Value to set for the conversationThreadId property.
         */
        set: function (value) {
            this._conversationThreadId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. Identity of the user that created the task.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. Identity of the user that created the task.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "details", {
        /**
         * Gets the details property value. Read-only. Nullable. Additional details about the task.
         * @returns a plannerTaskDetails
         */
        get: function () {
            return this._details;
        },
        /**
         * Sets the details property value. Read-only. Nullable. Additional details about the task.
         * @param value Value to set for the details property.
         */
        set: function (value) {
            this._details = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "dueDateTime", {
        /**
         * Gets the dueDateTime property value. Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._dueDateTime;
        },
        /**
         * Sets the dueDateTime property value. Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the dueDateTime property.
         */
        set: function (value) {
            this._dueDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "hasDescription", {
        /**
         * Gets the hasDescription property value. Read-only. Value is true if the details object of the task has a non-empty description and false otherwise.
         * @returns a boolean
         */
        get: function () {
            return this._hasDescription;
        },
        /**
         * Sets the hasDescription property value. Read-only. Value is true if the details object of the task has a non-empty description and false otherwise.
         * @param value Value to set for the hasDescription property.
         */
        set: function (value) {
            this._hasDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "orderHint", {
        /**
         * Gets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
         * @returns a string
         */
        get: function () {
            return this._orderHint;
        },
        /**
         * Sets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
         * @param value Value to set for the orderHint property.
         */
        set: function (value) {
            this._orderHint = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "percentComplete", {
        /**
         * Gets the percentComplete property value. Percentage of task completion. When set to 100, the task is considered completed.
         * @returns a integer
         */
        get: function () {
            return this._percentComplete;
        },
        /**
         * Sets the percentComplete property value. Percentage of task completion. When set to 100, the task is considered completed.
         * @param value Value to set for the percentComplete property.
         */
        set: function (value) {
            this._percentComplete = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "planId", {
        /**
         * Gets the planId property value. Plan ID to which the task belongs.
         * @returns a string
         */
        get: function () {
            return this._planId;
        },
        /**
         * Sets the planId property value. Plan ID to which the task belongs.
         * @param value Value to set for the planId property.
         */
        set: function (value) {
            this._planId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "previewType", {
        /**
         * Gets the previewType property value. This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference.
         * @returns a plannerPreviewType
         */
        get: function () {
            return this._previewType;
        },
        /**
         * Sets the previewType property value. This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference.
         * @param value Value to set for the previewType property.
         */
        set: function (value) {
            this._previewType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "progressTaskBoardFormat", {
        /**
         * Gets the progressTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
         * @returns a plannerProgressTaskBoardTaskFormat
         */
        get: function () {
            return this._progressTaskBoardFormat;
        },
        /**
         * Sets the progressTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
         * @param value Value to set for the progressTaskBoardFormat property.
         */
        set: function (value) {
            this._progressTaskBoardFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "referenceCount", {
        /**
         * Gets the referenceCount property value. Number of external references that exist on the task.
         * @returns a integer
         */
        get: function () {
            return this._referenceCount;
        },
        /**
         * Sets the referenceCount property value. Number of external references that exist on the task.
         * @param value Value to set for the referenceCount property.
         */
        set: function (value) {
            this._referenceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "startDateTime", {
        /**
         * Gets the startDateTime property value. Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._startDateTime;
        },
        /**
         * Sets the startDateTime property value. Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the startDateTime property.
         */
        set: function (value) {
            this._startDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerTask.prototype, "title", {
        /**
         * Gets the title property value. Title of the task.
         * @returns a string
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. Title of the task.
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
    PlannerTask.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["activeChecklistItemCount", function (o, n) { o.activeChecklistItemCount = n.getNumberValue(); }],
            ["appliedCategories", function (o, n) { o.appliedCategories = n.getObjectValue(PlannerAppliedCategories); }],
            ["assignedToTaskBoardFormat", function (o, n) { o.assignedToTaskBoardFormat = n.getObjectValue(plannerAssignedToTaskBoardTaskFormat_1.PlannerAssignedToTaskBoardTaskFormat); }],
            ["assigneePriority", function (o, n) { o.assigneePriority = n.getStringValue(); }],
            ["assignments", function (o, n) { o.assignments = n.getObjectValue(PlannerAssignments); }],
            ["bucketId", function (o, n) { o.bucketId = n.getStringValue(); }],
            ["bucketTaskBoardFormat", function (o, n) { o.bucketTaskBoardFormat = n.getObjectValue(plannerBucketTaskBoardTaskFormat_1.PlannerBucketTaskBoardTaskFormat); }],
            ["checklistItemCount", function (o, n) { o.checklistItemCount = n.getNumberValue(); }],
            ["completedBy", function (o, n) { o.completedBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["completedDateTime", function (o, n) { o.completedDateTime = n.getDateValue(); }],
            ["conversationThreadId", function (o, n) { o.conversationThreadId = n.getStringValue(); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["details", function (o, n) { o.details = n.getObjectValue(plannerTaskDetails_1.PlannerTaskDetails); }],
            ["dueDateTime", function (o, n) { o.dueDateTime = n.getDateValue(); }],
            ["hasDescription", function (o, n) { o.hasDescription = n.getBooleanValue(); }],
            ["orderHint", function (o, n) { o.orderHint = n.getStringValue(); }],
            ["percentComplete", function (o, n) { o.percentComplete = n.getNumberValue(); }],
            ["planId", function (o, n) { o.planId = n.getStringValue(); }],
            ["previewType", function (o, n) { o.previewType = n.getObjectValue(PlannerPreviewType); }],
            ["progressTaskBoardFormat", function (o, n) { o.progressTaskBoardFormat = n.getObjectValue(plannerProgressTaskBoardTaskFormat_1.PlannerProgressTaskBoardTaskFormat); }],
            ["referenceCount", function (o, n) { o.referenceCount = n.getNumberValue(); }],
            ["startDateTime", function (o, n) { o.startDateTime = n.getDateValue(); }],
            ["title", function (o, n) { o.title = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PlannerTask.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("activeChecklistItemCount", this.activeChecklistItemCount);
        writer.writeObjectValue("appliedCategories", this.appliedCategories);
        writer.writeObjectValue("assignedToTaskBoardFormat", this.assignedToTaskBoardFormat);
        writer.writeStringValue("assigneePriority", this.assigneePriority);
        writer.writeObjectValue("assignments", this.assignments);
        writer.writeStringValue("bucketId", this.bucketId);
        writer.writeObjectValue("bucketTaskBoardFormat", this.bucketTaskBoardFormat);
        writer.writeNumberValue("checklistItemCount", this.checklistItemCount);
        writer.writeObjectValue("completedBy", this.completedBy);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeStringValue("conversationThreadId", this.conversationThreadId);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("details", this.details);
        writer.writeDateValue("dueDateTime", this.dueDateTime);
        writer.writeBooleanValue("hasDescription", this.hasDescription);
        writer.writeStringValue("orderHint", this.orderHint);
        writer.writeNumberValue("percentComplete", this.percentComplete);
        writer.writeStringValue("planId", this.planId);
        writer.writeObjectValue("previewType", this.previewType);
        writer.writeObjectValue("progressTaskBoardFormat", this.progressTaskBoardFormat);
        writer.writeNumberValue("referenceCount", this.referenceCount);
        writer.writeDateValue("startDateTime", this.startDateTime);
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
    return PlannerTask;
}(entity_1.Entity));
exports.PlannerTask = PlannerTask;

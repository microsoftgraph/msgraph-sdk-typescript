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
exports.EducationAssignment = void 0;
var entity_1 = require("../entity");
var identitySet_1 = require("../identitySet");
var educationAssignmentResource_1 = require("./classes/educationAssignmentResource");
var educationSubmission_1 = require("./classes/educationSubmission");
var educationCategory_1 = require("./educationCategory");
var educationRubric_1 = require("./educationRubric");
var EducationAssignment = /** @class */ (function (_super) {
    __extends(EducationAssignment, _super);
    /**
     * Instantiates a new educationAssignment and sets the default values.
     */
    function EducationAssignment() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EducationAssignment.prototype, "addedStudentAction", {
        /**
         * Gets the addedStudentAction property value. Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none value. Currently supports only two values: none or assignIfOpen.
         * @returns a educationAddedStudentAction
         */
        get: function () {
            return this._addedStudentAction;
        },
        /**
         * Sets the addedStudentAction property value. Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none value. Currently supports only two values: none or assignIfOpen.
         * @param value Value to set for the addedStudentAction property.
         */
        set: function (value) {
            this._addedStudentAction = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "allowLateSubmissions", {
        /**
         * Gets the allowLateSubmissions property value. Identifies whether students can submit after the due date. If this property is not specified during create, it defaults to true.
         * @returns a boolean
         */
        get: function () {
            return this._allowLateSubmissions;
        },
        /**
         * Sets the allowLateSubmissions property value. Identifies whether students can submit after the due date. If this property is not specified during create, it defaults to true.
         * @param value Value to set for the allowLateSubmissions property.
         */
        set: function (value) {
            this._allowLateSubmissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "allowStudentsToAddResourcesToSubmission", {
        /**
         * Gets the allowStudentsToAddResourcesToSubmission property value. Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher.
         * @returns a boolean
         */
        get: function () {
            return this._allowStudentsToAddResourcesToSubmission;
        },
        /**
         * Sets the allowStudentsToAddResourcesToSubmission property value. Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher.
         * @param value Value to set for the allowStudentsToAddResourcesToSubmission property.
         */
        set: function (value) {
            this._allowStudentsToAddResourcesToSubmission = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "assignDateTime", {
        /**
         * Gets the assignDateTime property value. The date when the assignment should become active.  If in the future, the assignment is not shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._assignDateTime;
        },
        /**
         * Sets the assignDateTime property value. The date when the assignment should become active.  If in the future, the assignment is not shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the assignDateTime property.
         */
        set: function (value) {
            this._assignDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "assignedDateTime", {
        /**
         * Gets the assignedDateTime property value. The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._assignedDateTime;
        },
        /**
         * Sets the assignedDateTime property value. The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the assignedDateTime property.
         */
        set: function (value) {
            this._assignedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "assignTo", {
        /**
         * Gets the assignTo property value. Which users, or whole class should receive a submission object once the assignment is published.
         * @returns a educationAssignmentRecipient
         */
        get: function () {
            return this._assignTo;
        },
        /**
         * Sets the assignTo property value. Which users, or whole class should receive a submission object once the assignment is published.
         * @param value Value to set for the assignTo property.
         */
        set: function (value) {
            this._assignTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "categories", {
        /**
         * Gets the categories property value. When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
         * @returns a educationCategory
         */
        get: function () {
            return this._categories;
        },
        /**
         * Sets the categories property value. When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
         * @param value Value to set for the categories property.
         */
        set: function (value) {
            this._categories = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "classId", {
        /**
         * Gets the classId property value. Class which this assignment belongs.
         * @returns a string
         */
        get: function () {
            return this._classId;
        },
        /**
         * Sets the classId property value. Class which this assignment belongs.
         * @param value Value to set for the classId property.
         */
        set: function (value) {
            this._classId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "closeDateTime", {
        /**
         * Gets the closeDateTime property value. Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._closeDateTime;
        },
        /**
         * Sets the closeDateTime property value. Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the closeDateTime property.
         */
        set: function (value) {
            this._closeDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. Who created the assignment.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. Who created the assignment.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "displayName", {
        /**
         * Gets the displayName property value. Name of the assignment.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Name of the assignment.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "dueDateTime", {
        /**
         * Gets the dueDateTime property value. Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._dueDateTime;
        },
        /**
         * Sets the dueDateTime property value. Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the dueDateTime property.
         */
        set: function (value) {
            this._dueDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "grading", {
        /**
         * Gets the grading property value. How the assignment will be graded.
         * @returns a educationAssignmentGradeType
         */
        get: function () {
            return this._grading;
        },
        /**
         * Sets the grading property value. How the assignment will be graded.
         * @param value Value to set for the grading property.
         */
        set: function (value) {
            this._grading = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "instructions", {
        /**
         * Gets the instructions property value. Instructions for the assignment.  This along with the display name tell the student what to do.
         * @returns a educationItemBody
         */
        get: function () {
            return this._instructions;
        },
        /**
         * Sets the instructions property value. Instructions for the assignment.  This along with the display name tell the student what to do.
         * @param value Value to set for the instructions property.
         */
        set: function (value) {
            this._instructions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "lastModifiedBy", {
        /**
         * Gets the lastModifiedBy property value. Who last modified the assignment.
         * @returns a identitySet
         */
        get: function () {
            return this._lastModifiedBy;
        },
        /**
         * Sets the lastModifiedBy property value. Who last modified the assignment.
         * @param value Value to set for the lastModifiedBy property.
         */
        set: function (value) {
            this._lastModifiedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "notificationChannelUrl", {
        /**
         * Gets the notificationChannelUrl property value. Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl is not allowed after the assignment has been published.
         * @returns a string
         */
        get: function () {
            return this._notificationChannelUrl;
        },
        /**
         * Sets the notificationChannelUrl property value. Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl is not allowed after the assignment has been published.
         * @param value Value to set for the notificationChannelUrl property.
         */
        set: function (value) {
            this._notificationChannelUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "resources", {
        /**
         * Gets the resources property value. Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.
         * @returns a educationAssignmentResource
         */
        get: function () {
            return this._resources;
        },
        /**
         * Sets the resources property value. Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.
         * @param value Value to set for the resources property.
         */
        set: function (value) {
            this._resources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "resourcesFolderUrl", {
        /**
         * Gets the resourcesFolderUrl property value. Folder URL where all the file resources for this assignment are stored.
         * @returns a string
         */
        get: function () {
            return this._resourcesFolderUrl;
        },
        /**
         * Sets the resourcesFolderUrl property value. Folder URL where all the file resources for this assignment are stored.
         * @param value Value to set for the resourcesFolderUrl property.
         */
        set: function (value) {
            this._resourcesFolderUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "rubric", {
        /**
         * Gets the rubric property value. When set, the grading rubric attached to this assignment.
         * @returns a educationRubric
         */
        get: function () {
            return this._rubric;
        },
        /**
         * Sets the rubric property value. When set, the grading rubric attached to this assignment.
         * @param value Value to set for the rubric property.
         */
        set: function (value) {
            this._rubric = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "status", {
        /**
         * Gets the status property value. Status of the Assignment.  You can not PATCH this value.  Possible values are: draft, scheduled, published, assigned.
         * @returns a educationAssignmentStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Status of the Assignment.  You can not PATCH this value.  Possible values are: draft, scheduled, published, assigned.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "submissions", {
        /**
         * Gets the submissions property value. Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
         * @returns a educationSubmission
         */
        get: function () {
            return this._submissions;
        },
        /**
         * Sets the submissions property value. Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
         * @param value Value to set for the submissions property.
         */
        set: function (value) {
            this._submissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignment.prototype, "webUrl", {
        /**
         * Gets the webUrl property value. The deep link URL for the given assignment.
         * @returns a string
         */
        get: function () {
            return this._webUrl;
        },
        /**
         * Sets the webUrl property value. The deep link URL for the given assignment.
         * @param value Value to set for the webUrl property.
         */
        set: function (value) {
            this._webUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationAssignment.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["addedStudentAction", function (o, n) { o.addedStudentAction = n.getObjectValue(EducationAddedStudentAction); }],
            ["allowLateSubmissions", function (o, n) { o.allowLateSubmissions = n.getBooleanValue(); }],
            ["allowStudentsToAddResourcesToSubmission", function (o, n) { o.allowStudentsToAddResourcesToSubmission = n.getBooleanValue(); }],
            ["assignDateTime", function (o, n) { o.assignDateTime = n.getDateValue(); }],
            ["assignedDateTime", function (o, n) { o.assignedDateTime = n.getDateValue(); }],
            ["assignTo", function (o, n) { o.assignTo = n.getObjectValue(EducationAssignmentRecipient); }],
            ["categories", function (o, n) { o.categories = n.getCollectionOfObjectValues(educationCategory_1.EducationCategory); }],
            ["classId", function (o, n) { o.classId = n.getStringValue(); }],
            ["closeDateTime", function (o, n) { o.closeDateTime = n.getDateValue(); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["dueDateTime", function (o, n) { o.dueDateTime = n.getDateValue(); }],
            ["grading", function (o, n) { o.grading = n.getObjectValue(EducationAssignmentGradeType); }],
            ["instructions", function (o, n) { o.instructions = n.getObjectValue(EducationItemBody); }],
            ["lastModifiedBy", function (o, n) { o.lastModifiedBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["notificationChannelUrl", function (o, n) { o.notificationChannelUrl = n.getStringValue(); }],
            ["resources", function (o, n) { o.resources = n.getCollectionOfObjectValues(educationAssignmentResource_1.EducationAssignmentResource); }],
            ["resourcesFolderUrl", function (o, n) { o.resourcesFolderUrl = n.getStringValue(); }],
            ["rubric", function (o, n) { o.rubric = n.getObjectValue(educationRubric_1.EducationRubric); }],
            ["status", function (o, n) { o.status = n.getObjectValue(EducationAssignmentStatus); }],
            ["submissions", function (o, n) { o.submissions = n.getCollectionOfObjectValues(educationSubmission_1.EducationSubmission); }],
            ["webUrl", function (o, n) { o.webUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationAssignment.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("addedStudentAction", this.addedStudentAction);
        writer.writeBooleanValue("allowLateSubmissions", this.allowLateSubmissions);
        writer.writeBooleanValue("allowStudentsToAddResourcesToSubmission", this.allowStudentsToAddResourcesToSubmission);
        writer.writeDateValue("assignDateTime", this.assignDateTime);
        writer.writeDateValue("assignedDateTime", this.assignedDateTime);
        writer.writeObjectValue("assignTo", this.assignTo);
        writer.writeCollectionOfObjectValues("categories", this.categories);
        writer.writeStringValue("classId", this.classId);
        writer.writeDateValue("closeDateTime", this.closeDateTime);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("dueDateTime", this.dueDateTime);
        writer.writeObjectValue("grading", this.grading);
        writer.writeObjectValue("instructions", this.instructions);
        writer.writeObjectValue("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("notificationChannelUrl", this.notificationChannelUrl);
        writer.writeCollectionOfObjectValues("resources", this.resources);
        writer.writeStringValue("resourcesFolderUrl", this.resourcesFolderUrl);
        writer.writeObjectValue("rubric", this.rubric);
        writer.writeObjectValue("status", this.status);
        writer.writeCollectionOfObjectValues("submissions", this.submissions);
        writer.writeStringValue("webUrl", this.webUrl);
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
    return EducationAssignment;
}(entity_1.Entity));
exports.EducationAssignment = EducationAssignment;

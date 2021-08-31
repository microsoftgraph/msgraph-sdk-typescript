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
exports.EducationSubmission = void 0;
var entity_1 = require("../../entity");
var identitySet_1 = require("../../identitySet");
var educationOutcome_1 = require("./assignments/educationOutcome");
var educationSubmissionResource_1 = require("./assignments/educationSubmissionResource");
var EducationSubmission = /** @class */ (function (_super) {
    __extends(EducationSubmission, _super);
    /**
     * Instantiates a new educationSubmission and sets the default values.
     */
    function EducationSubmission() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EducationSubmission.prototype, "outcomes", {
        /**
         * Gets the outcomes property value. Read-Write. Nullable.
         * @returns a educationOutcome
         */
        get: function () {
            return this._outcomes;
        },
        /**
         * Sets the outcomes property value. Read-Write. Nullable.
         * @param value Value to set for the outcomes property.
         */
        set: function (value) {
            this._outcomes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "recipient", {
        /**
         * Gets the recipient property value. Who this submission is assigned to.
         * @returns a educationSubmissionRecipient
         */
        get: function () {
            return this._recipient;
        },
        /**
         * Sets the recipient property value. Who this submission is assigned to.
         * @param value Value to set for the recipient property.
         */
        set: function (value) {
            this._recipient = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "resources", {
        /**
         * Gets the resources property value. Nullable.
         * @returns a educationSubmissionResource
         */
        get: function () {
            return this._resources;
        },
        /**
         * Sets the resources property value. Nullable.
         * @param value Value to set for the resources property.
         */
        set: function (value) {
            this._resources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "resourcesFolderUrl", {
        /**
         * Gets the resourcesFolderUrl property value. Folder where all file resources for this submission need to be stored.
         * @returns a string
         */
        get: function () {
            return this._resourcesFolderUrl;
        },
        /**
         * Sets the resourcesFolderUrl property value. Folder where all file resources for this submission need to be stored.
         * @param value Value to set for the resourcesFolderUrl property.
         */
        set: function (value) {
            this._resourcesFolderUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "returnedBy", {
        /**
         * Gets the returnedBy property value. User who moved the status of this submission to returned.
         * @returns a identitySet
         */
        get: function () {
            return this._returnedBy;
        },
        /**
         * Sets the returnedBy property value. User who moved the status of this submission to returned.
         * @param value Value to set for the returnedBy property.
         */
        set: function (value) {
            this._returnedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "returnedDateTime", {
        /**
         * Gets the returnedDateTime property value. Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._returnedDateTime;
        },
        /**
         * Sets the returnedDateTime property value. Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the returnedDateTime property.
         */
        set: function (value) {
            this._returnedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "status", {
        /**
         * Gets the status property value. Read-Only. Possible values are: working, submitted, released, returned.
         * @returns a educationSubmissionStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Read-Only. Possible values are: working, submitted, released, returned.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "submittedBy", {
        /**
         * Gets the submittedBy property value. User who moved the resource into the submitted state.
         * @returns a identitySet
         */
        get: function () {
            return this._submittedBy;
        },
        /**
         * Sets the submittedBy property value. User who moved the resource into the submitted state.
         * @param value Value to set for the submittedBy property.
         */
        set: function (value) {
            this._submittedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "submittedDateTime", {
        /**
         * Gets the submittedDateTime property value. Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._submittedDateTime;
        },
        /**
         * Sets the submittedDateTime property value. Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the submittedDateTime property.
         */
        set: function (value) {
            this._submittedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "submittedResources", {
        /**
         * Gets the submittedResources property value. Read-only. Nullable.
         * @returns a educationSubmissionResource
         */
        get: function () {
            return this._submittedResources;
        },
        /**
         * Sets the submittedResources property value. Read-only. Nullable.
         * @param value Value to set for the submittedResources property.
         */
        set: function (value) {
            this._submittedResources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "unsubmittedBy", {
        /**
         * Gets the unsubmittedBy property value. User who moved the resource from submitted into the working state.
         * @returns a identitySet
         */
        get: function () {
            return this._unsubmittedBy;
        },
        /**
         * Sets the unsubmittedBy property value. User who moved the resource from submitted into the working state.
         * @param value Value to set for the unsubmittedBy property.
         */
        set: function (value) {
            this._unsubmittedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSubmission.prototype, "unsubmittedDateTime", {
        /**
         * Gets the unsubmittedDateTime property value. Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._unsubmittedDateTime;
        },
        /**
         * Sets the unsubmittedDateTime property value. Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the unsubmittedDateTime property.
         */
        set: function (value) {
            this._unsubmittedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationSubmission.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["outcomes", function (o, n) { o.outcomes = n.getCollectionOfObjectValues(educationOutcome_1.EducationOutcome); }],
            ["recipient", function (o, n) { o.recipient = n.getObjectValue(EducationSubmissionRecipient); }],
            ["resources", function (o, n) { o.resources = n.getCollectionOfObjectValues(educationSubmissionResource_1.EducationSubmissionResource); }],
            ["resourcesFolderUrl", function (o, n) { o.resourcesFolderUrl = n.getStringValue(); }],
            ["returnedBy", function (o, n) { o.returnedBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["returnedDateTime", function (o, n) { o.returnedDateTime = n.getDateValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(EducationSubmissionStatus); }],
            ["submittedBy", function (o, n) { o.submittedBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["submittedDateTime", function (o, n) { o.submittedDateTime = n.getDateValue(); }],
            ["submittedResources", function (o, n) { o.submittedResources = n.getCollectionOfObjectValues(educationSubmissionResource_1.EducationSubmissionResource); }],
            ["unsubmittedBy", function (o, n) { o.unsubmittedBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["unsubmittedDateTime", function (o, n) { o.unsubmittedDateTime = n.getDateValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationSubmission.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("outcomes", this.outcomes);
        writer.writeObjectValue("recipient", this.recipient);
        writer.writeCollectionOfObjectValues("resources", this.resources);
        writer.writeStringValue("resourcesFolderUrl", this.resourcesFolderUrl);
        writer.writeObjectValue("returnedBy", this.returnedBy);
        writer.writeDateValue("returnedDateTime", this.returnedDateTime);
        writer.writeObjectValue("status", this.status);
        writer.writeObjectValue("submittedBy", this.submittedBy);
        writer.writeDateValue("submittedDateTime", this.submittedDateTime);
        writer.writeCollectionOfObjectValues("submittedResources", this.submittedResources);
        writer.writeObjectValue("unsubmittedBy", this.unsubmittedBy);
        writer.writeDateValue("unsubmittedDateTime", this.unsubmittedDateTime);
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
    return EducationSubmission;
}(entity_1.Entity));
exports.EducationSubmission = EducationSubmission;

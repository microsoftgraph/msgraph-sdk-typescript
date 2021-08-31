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
exports.EducationClass = void 0;
var entity_1 = require("../entity");
var group_1 = require("../group");
var identitySet_1 = require("../identitySet");
var educationAssignmentDefaults_1 = require("./classes/assignmentDefaults/educationAssignmentDefaults");
var educationAssignmentSettings_1 = require("./classes/assignmentSettings/educationAssignmentSettings");
var educationAssignment_1 = require("./educationAssignment");
var educationCategory_1 = require("./educationCategory");
var educationSchool_1 = require("./educationSchool");
var educationUser_1 = require("./educationUser");
var EducationClass = /** @class */ (function (_super) {
    __extends(EducationClass, _super);
    /**
     * Instantiates a new educationClass and sets the default values.
     */
    function EducationClass() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EducationClass.prototype, "assignmentCategories", {
        /**
         * Gets the assignmentCategories property value.
         * @returns a educationCategory
         */
        get: function () {
            return this._assignmentCategories;
        },
        /**
         * Sets the assignmentCategories property value.
         * @param value Value to set for the assignmentCategories property.
         */
        set: function (value) {
            this._assignmentCategories = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "assignmentDefaults", {
        /**
         * Gets the assignmentDefaults property value.
         * @returns a educationAssignmentDefaults
         */
        get: function () {
            return this._assignmentDefaults;
        },
        /**
         * Sets the assignmentDefaults property value.
         * @param value Value to set for the assignmentDefaults property.
         */
        set: function (value) {
            this._assignmentDefaults = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "assignments", {
        /**
         * Gets the assignments property value. All assignments associated with this class. Nullable.
         * @returns a educationAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. All assignments associated with this class. Nullable.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "assignmentSettings", {
        /**
         * Gets the assignmentSettings property value.
         * @returns a educationAssignmentSettings
         */
        get: function () {
            return this._assignmentSettings;
        },
        /**
         * Sets the assignmentSettings property value.
         * @param value Value to set for the assignmentSettings property.
         */
        set: function (value) {
            this._assignmentSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "classCode", {
        /**
         * Gets the classCode property value. Class code used by the school to identify the class.
         * @returns a string
         */
        get: function () {
            return this._classCode;
        },
        /**
         * Sets the classCode property value. Class code used by the school to identify the class.
         * @param value Value to set for the classCode property.
         */
        set: function (value) {
            this._classCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "course", {
        /**
         * Gets the course property value. Course information for the class
         * @returns a educationCourse
         */
        get: function () {
            return this._course;
        },
        /**
         * Sets the course property value. Course information for the class
         * @param value Value to set for the course property.
         */
        set: function (value) {
            this._course = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. Entity who created the class
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. Entity who created the class
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "description", {
        /**
         * Gets the description property value. Description of the class.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Description of the class.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "displayName", {
        /**
         * Gets the displayName property value. Name of the class.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Name of the class.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "externalId", {
        /**
         * Gets the externalId property value. ID of the class from the syncing system.
         * @returns a string
         */
        get: function () {
            return this._externalId;
        },
        /**
         * Sets the externalId property value. ID of the class from the syncing system.
         * @param value Value to set for the externalId property.
         */
        set: function (value) {
            this._externalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "externalName", {
        /**
         * Gets the externalName property value. Name of the class in the syncing system.
         * @returns a string
         */
        get: function () {
            return this._externalName;
        },
        /**
         * Sets the externalName property value. Name of the class in the syncing system.
         * @param value Value to set for the externalName property.
         */
        set: function (value) {
            this._externalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "externalSource", {
        /**
         * Gets the externalSource property value. The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual.
         * @returns a educationExternalSource
         */
        get: function () {
            return this._externalSource;
        },
        /**
         * Sets the externalSource property value. The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual.
         * @param value Value to set for the externalSource property.
         */
        set: function (value) {
            this._externalSource = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "externalSourceDetail", {
        /**
         * Gets the externalSourceDetail property value. The name of the external source this resources was generated from.
         * @returns a string
         */
        get: function () {
            return this._externalSourceDetail;
        },
        /**
         * Sets the externalSourceDetail property value. The name of the external source this resources was generated from.
         * @param value Value to set for the externalSourceDetail property.
         */
        set: function (value) {
            this._externalSourceDetail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "grade", {
        /**
         * Gets the grade property value. Grade level of the class.
         * @returns a string
         */
        get: function () {
            return this._grade;
        },
        /**
         * Sets the grade property value. Grade level of the class.
         * @param value Value to set for the grade property.
         */
        set: function (value) {
            this._grade = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "group", {
        /**
         * Gets the group property value. The underlying Microsoft 365 group object.
         * @returns a group
         */
        get: function () {
            return this._group;
        },
        /**
         * Sets the group property value. The underlying Microsoft 365 group object.
         * @param value Value to set for the group property.
         */
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "mailNickname", {
        /**
         * Gets the mailNickname property value. Mail name for sending email to all members, if this is enabled.
         * @returns a string
         */
        get: function () {
            return this._mailNickname;
        },
        /**
         * Sets the mailNickname property value. Mail name for sending email to all members, if this is enabled.
         * @param value Value to set for the mailNickname property.
         */
        set: function (value) {
            this._mailNickname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "members", {
        /**
         * Gets the members property value. All users in the class. Nullable.
         * @returns a educationUser
         */
        get: function () {
            return this._members;
        },
        /**
         * Sets the members property value. All users in the class. Nullable.
         * @param value Value to set for the members property.
         */
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "schools", {
        /**
         * Gets the schools property value. All schools that this class is associated with. Nullable.
         * @returns a educationSchool
         */
        get: function () {
            return this._schools;
        },
        /**
         * Sets the schools property value. All schools that this class is associated with. Nullable.
         * @param value Value to set for the schools property.
         */
        set: function (value) {
            this._schools = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "teachers", {
        /**
         * Gets the teachers property value. All teachers in the class. Nullable.
         * @returns a educationUser
         */
        get: function () {
            return this._teachers;
        },
        /**
         * Sets the teachers property value. All teachers in the class. Nullable.
         * @param value Value to set for the teachers property.
         */
        set: function (value) {
            this._teachers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationClass.prototype, "term", {
        /**
         * Gets the term property value. Term for the class.
         * @returns a educationTerm
         */
        get: function () {
            return this._term;
        },
        /**
         * Sets the term property value. Term for the class.
         * @param value Value to set for the term property.
         */
        set: function (value) {
            this._term = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationClass.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignmentCategories", function (o, n) { o.assignmentCategories = n.getCollectionOfObjectValues(educationCategory_1.EducationCategory); }],
            ["assignmentDefaults", function (o, n) { o.assignmentDefaults = n.getObjectValue(educationAssignmentDefaults_1.EducationAssignmentDefaults); }],
            ["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(educationAssignment_1.EducationAssignment); }],
            ["assignmentSettings", function (o, n) { o.assignmentSettings = n.getObjectValue(educationAssignmentSettings_1.EducationAssignmentSettings); }],
            ["classCode", function (o, n) { o.classCode = n.getStringValue(); }],
            ["course", function (o, n) { o.course = n.getObjectValue(EducationCourse); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["externalId", function (o, n) { o.externalId = n.getStringValue(); }],
            ["externalName", function (o, n) { o.externalName = n.getStringValue(); }],
            ["externalSource", function (o, n) { o.externalSource = n.getObjectValue(EducationExternalSource); }],
            ["externalSourceDetail", function (o, n) { o.externalSourceDetail = n.getStringValue(); }],
            ["grade", function (o, n) { o.grade = n.getStringValue(); }],
            ["group", function (o, n) { o.group = n.getObjectValue(group_1.Group); }],
            ["mailNickname", function (o, n) { o.mailNickname = n.getStringValue(); }],
            ["members", function (o, n) { o.members = n.getCollectionOfObjectValues(educationUser_1.EducationUser); }],
            ["schools", function (o, n) { o.schools = n.getCollectionOfObjectValues(educationSchool_1.EducationSchool); }],
            ["teachers", function (o, n) { o.teachers = n.getCollectionOfObjectValues(educationUser_1.EducationUser); }],
            ["term", function (o, n) { o.term = n.getObjectValue(EducationTerm); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationClass.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("assignmentCategories", this.assignmentCategories);
        writer.writeObjectValue("assignmentDefaults", this.assignmentDefaults);
        writer.writeCollectionOfObjectValues("assignments", this.assignments);
        writer.writeObjectValue("assignmentSettings", this.assignmentSettings);
        writer.writeStringValue("classCode", this.classCode);
        writer.writeObjectValue("course", this.course);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("externalName", this.externalName);
        writer.writeObjectValue("externalSource", this.externalSource);
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        writer.writeStringValue("grade", this.grade);
        writer.writeObjectValue("group", this.group);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeCollectionOfObjectValues("members", this.members);
        writer.writeCollectionOfObjectValues("schools", this.schools);
        writer.writeCollectionOfObjectValues("teachers", this.teachers);
        writer.writeObjectValue("term", this.term);
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
    return EducationClass;
}(entity_1.Entity));
exports.EducationClass = EducationClass;

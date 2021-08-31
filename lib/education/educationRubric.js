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
exports.EducationRubric = void 0;
var entity_1 = require("../entity");
var identitySet_1 = require("../identitySet");
var EducationRubric = /** @class */ (function (_super) {
    __extends(EducationRubric, _super);
    /**
     * Instantiates a new educationRubric and sets the default values.
     */
    function EducationRubric() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EducationRubric.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. The user who created this resource.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. The user who created this resource.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRubric.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRubric.prototype, "description", {
        /**
         * Gets the description property value. The description of this rubric.
         * @returns a educationItemBody
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. The description of this rubric.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRubric.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of this rubric.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of this rubric.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRubric.prototype, "grading", {
        /**
         * Gets the grading property value. The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric.
         * @returns a educationAssignmentGradeType
         */
        get: function () {
            return this._grading;
        },
        /**
         * Sets the grading property value. The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric.
         * @param value Value to set for the grading property.
         */
        set: function (value) {
            this._grading = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRubric.prototype, "lastModifiedBy", {
        /**
         * Gets the lastModifiedBy property value. The last user to modify the resource.
         * @returns a identitySet
         */
        get: function () {
            return this._lastModifiedBy;
        },
        /**
         * Sets the lastModifiedBy property value. The last user to modify the resource.
         * @param value Value to set for the lastModifiedBy property.
         */
        set: function (value) {
            this._lastModifiedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRubric.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Moment in time when the resource was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Moment in time when the resource was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRubric.prototype, "levels", {
        /**
         * Gets the levels property value. The collection of levels making up this rubric.
         * @returns a rubricLevel
         */
        get: function () {
            return this._levels;
        },
        /**
         * Sets the levels property value. The collection of levels making up this rubric.
         * @param value Value to set for the levels property.
         */
        set: function (value) {
            this._levels = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRubric.prototype, "qualities", {
        /**
         * Gets the qualities property value. The collection of qualities making up this rubric.
         * @returns a rubricQuality
         */
        get: function () {
            return this._qualities;
        },
        /**
         * Sets the qualities property value. The collection of qualities making up this rubric.
         * @param value Value to set for the qualities property.
         */
        set: function (value) {
            this._qualities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationRubric.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getObjectValue(EducationItemBody); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["grading", function (o, n) { o.grading = n.getObjectValue(EducationAssignmentGradeType); }],
            ["lastModifiedBy", function (o, n) { o.lastModifiedBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["levels", function (o, n) { o.levels = n.getCollectionOfPrimitiveValues(); }],
            ["qualities", function (o, n) { o.qualities = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationRubric.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("grading", this.grading);
        writer.writeObjectValue("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfPrimitiveValues("levels", this.levels);
        writer.writeCollectionOfPrimitiveValues("qualities", this.qualities);
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
    return EducationRubric;
}(entity_1.Entity));
exports.EducationRubric = EducationRubric;

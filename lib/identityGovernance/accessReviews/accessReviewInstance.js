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
exports.AccessReviewInstance = void 0;
var entity_1 = require("../../entity");
var accessReviewInstanceDecisionItem_1 = require("./definitions/accessReviewInstanceDecisionItem");
var AccessReviewInstance = /** @class */ (function (_super) {
    __extends(AccessReviewInstance, _super);
    /**
     * Instantiates a new accessReviewInstance and sets the default values.
     */
    function AccessReviewInstance() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AccessReviewInstance.prototype, "decisions", {
        /**
         * Gets the decisions property value. Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
         * @returns a accessReviewInstanceDecisionItem
         */
        get: function () {
            return this._decisions;
        },
        /**
         * Sets the decisions property value. Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
         * @param value Value to set for the decisions property.
         */
        set: function (value) {
            this._decisions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstance.prototype, "endDateTime", {
        /**
         * Gets the endDateTime property value. DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._endDateTime;
        },
        /**
         * Sets the endDateTime property value. DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
         * @param value Value to set for the endDateTime property.
         */
        set: function (value) {
            this._endDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstance.prototype, "fallbackReviewers", {
        /**
         * Gets the fallbackReviewers property value.
         * @returns a accessReviewReviewerScope
         */
        get: function () {
            return this._fallbackReviewers;
        },
        /**
         * Sets the fallbackReviewers property value.
         * @param value Value to set for the fallbackReviewers property.
         */
        set: function (value) {
            this._fallbackReviewers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstance.prototype, "reviewers", {
        /**
         * Gets the reviewers property value.
         * @returns a accessReviewReviewerScope
         */
        get: function () {
            return this._reviewers;
        },
        /**
         * Sets the reviewers property value.
         * @param value Value to set for the reviewers property.
         */
        set: function (value) {
            this._reviewers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstance.prototype, "scope", {
        /**
         * Gets the scope property value. Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only.
         * @returns a accessReviewScope
         */
        get: function () {
            return this._scope;
        },
        /**
         * Sets the scope property value. Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of users reviewed in a group. Supports $select and $filter (contains only). Read-only.
         * @param value Value to set for the scope property.
         */
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstance.prototype, "startDateTime", {
        /**
         * Gets the startDateTime property value. DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._startDateTime;
        },
        /**
         * Sets the startDateTime property value. DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $select. Read-only.
         * @param value Value to set for the startDateTime property.
         */
        set: function (value) {
            this._startDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstance.prototype, "status", {
        /**
         * Gets the status property value. Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only.
         * @returns a string
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Specifies the status of an accessReview. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter (eq only). Read-only.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AccessReviewInstance.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["decisions", function (o, n) { o.decisions = n.getCollectionOfObjectValues(accessReviewInstanceDecisionItem_1.AccessReviewInstanceDecisionItem); }],
            ["endDateTime", function (o, n) { o.endDateTime = n.getDateValue(); }],
            ["fallbackReviewers", function (o, n) { o.fallbackReviewers = n.getCollectionOfPrimitiveValues(); }],
            ["reviewers", function (o, n) { o.reviewers = n.getCollectionOfPrimitiveValues(); }],
            ["scope", function (o, n) { o.scope = n.getObjectValue(AccessReviewScope); }],
            ["startDateTime", function (o, n) { o.startDateTime = n.getDateValue(); }],
            ["status", function (o, n) { o.status = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AccessReviewInstance.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("decisions", this.decisions);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeCollectionOfPrimitiveValues("fallbackReviewers", this.fallbackReviewers);
        writer.writeCollectionOfPrimitiveValues("reviewers", this.reviewers);
        writer.writeObjectValue("scope", this.scope);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("status", this.status);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return AccessReviewInstance;
}(entity_1.Entity));
exports.AccessReviewInstance = AccessReviewInstance;

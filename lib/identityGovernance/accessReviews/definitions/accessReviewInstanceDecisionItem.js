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
exports.AccessReviewInstanceDecisionItem = void 0;
var entity_1 = require("../../../entity");
var identity_1 = require("../../../identity");
var AccessReviewInstanceDecisionItem = /** @class */ (function (_super) {
    __extends(AccessReviewInstanceDecisionItem, _super);
    /**
     * Instantiates a new accessReviewInstanceDecisionItem and sets the default values.
     */
    function AccessReviewInstanceDecisionItem() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "accessReviewId", {
        /**
         * Gets the accessReviewId property value. The identifier of the accessReviewInstance parent. Supports $select. Read-only.
         * @returns a string
         */
        get: function () {
            return this._accessReviewId;
        },
        /**
         * Sets the accessReviewId property value. The identifier of the accessReviewInstance parent. Supports $select. Read-only.
         * @param value Value to set for the accessReviewId property.
         */
        set: function (value) {
            this._accessReviewId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "appliedBy", {
        /**
         * Gets the appliedBy property value. The identifier of the user who applied the decision. Read-only.
         * @returns a userIdentity
         */
        get: function () {
            return this._appliedBy;
        },
        /**
         * Sets the appliedBy property value. The identifier of the user who applied the decision. Read-only.
         * @param value Value to set for the appliedBy property.
         */
        set: function (value) {
            this._appliedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "appliedDateTime", {
        /**
         * Gets the appliedDateTime property value. The timestamp when the approval decision was applied. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Supports $select. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._appliedDateTime;
        },
        /**
         * Sets the appliedDateTime property value. The timestamp when the approval decision was applied. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Supports $select. Read-only.
         * @param value Value to set for the appliedDateTime property.
         */
        set: function (value) {
            this._appliedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "applyResult", {
        /**
         * Gets the applyResult property value. The result of applying the decision. Possible values: New, AppliedSuccessfully, AppliedWithUnknownFailure, AppliedSuccessfullyButObjectNotFound and ApplyNotSupported. Supports $select, $orderby, and $filter (eq only). Read-only.
         * @returns a string
         */
        get: function () {
            return this._applyResult;
        },
        /**
         * Sets the applyResult property value. The result of applying the decision. Possible values: New, AppliedSuccessfully, AppliedWithUnknownFailure, AppliedSuccessfullyButObjectNotFound and ApplyNotSupported. Supports $select, $orderby, and $filter (eq only). Read-only.
         * @param value Value to set for the applyResult property.
         */
        set: function (value) {
            this._applyResult = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "decision", {
        /**
         * Gets the decision property value. Result of the review. Possible values: Approve, Deny, NotReviewed, or DontKnow. Supports $select, $orderby, and $filter (eq only).
         * @returns a string
         */
        get: function () {
            return this._decision;
        },
        /**
         * Sets the decision property value. Result of the review. Possible values: Approve, Deny, NotReviewed, or DontKnow. Supports $select, $orderby, and $filter (eq only).
         * @param value Value to set for the decision property.
         */
        set: function (value) {
            this._decision = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "justification", {
        /**
         * Gets the justification property value. Justification left by the reviewer when they made the decision.
         * @returns a string
         */
        get: function () {
            return this._justification;
        },
        /**
         * Sets the justification property value. Justification left by the reviewer when they made the decision.
         * @param value Value to set for the justification property.
         */
        set: function (value) {
            this._justification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "principal", {
        /**
         * Gets the principal property value. Every decision item in an access review represents a principal's access to a resource. This property represents details of the principal. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is 'Bob' and the resource is 'Sales'. Principals can be of two types - userIdentity and servicePrincipalIdentity. Supports $select. Read-only.
         * @returns a identity
         */
        get: function () {
            return this._principal;
        },
        /**
         * Sets the principal property value. Every decision item in an access review represents a principal's access to a resource. This property represents details of the principal. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is 'Bob' and the resource is 'Sales'. Principals can be of two types - userIdentity and servicePrincipalIdentity. Supports $select. Read-only.
         * @param value Value to set for the principal property.
         */
        set: function (value) {
            this._principal = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "principalLink", {
        /**
         * Gets the principalLink property value. Link to the principal object. For example: https://graph.microsoft.com/v1.0/users/a6c7aecb-cbfd-4763-87ef-e91b4bd509d9. Read-only.
         * @returns a string
         */
        get: function () {
            return this._principalLink;
        },
        /**
         * Sets the principalLink property value. Link to the principal object. For example: https://graph.microsoft.com/v1.0/users/a6c7aecb-cbfd-4763-87ef-e91b4bd509d9. Read-only.
         * @param value Value to set for the principalLink property.
         */
        set: function (value) {
            this._principalLink = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "recommendation", {
        /**
         * Gets the recommendation property value. A system-generated recommendation for the approval decision based off last interactive sign-in to tenant. Recommend approve if sign-in is within thirty days of start of review. Recommend deny if sign-in is greater than thirty days of start of review. Recommendation not available otherwise. Possible values: Approve, Deny, or NoInfoAvailable. Supports $select, $orderby, and $filter (eq only). Read-only.
         * @returns a string
         */
        get: function () {
            return this._recommendation;
        },
        /**
         * Sets the recommendation property value. A system-generated recommendation for the approval decision based off last interactive sign-in to tenant. Recommend approve if sign-in is within thirty days of start of review. Recommend deny if sign-in is greater than thirty days of start of review. Recommendation not available otherwise. Possible values: Approve, Deny, or NoInfoAvailable. Supports $select, $orderby, and $filter (eq only). Read-only.
         * @param value Value to set for the recommendation property.
         */
        set: function (value) {
            this._recommendation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "resource", {
        /**
         * Gets the resource property value. Every decision item in an access review represents a principal's access to a resource. This property represents details of the resource. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is Bob and the resource is 'Sales'. Resources can be of multiple types. See accessReviewInstanceDecisionItemResource. Read-only.
         * @returns a accessReviewInstanceDecisionItemResource
         */
        get: function () {
            return this._resource;
        },
        /**
         * Sets the resource property value. Every decision item in an access review represents a principal's access to a resource. This property represents details of the resource. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is Bob and the resource is 'Sales'. Resources can be of multiple types. See accessReviewInstanceDecisionItemResource. Read-only.
         * @param value Value to set for the resource property.
         */
        set: function (value) {
            this._resource = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "resourceLink", {
        /**
         * Gets the resourceLink property value. A link to the resource. For example, https://graph.microsoft.com/v1.0/servicePrincipals/c86300f3-8695-4320-9f6e-32a2555f5ff8. Supports $select. Read-only.
         * @returns a string
         */
        get: function () {
            return this._resourceLink;
        },
        /**
         * Sets the resourceLink property value. A link to the resource. For example, https://graph.microsoft.com/v1.0/servicePrincipals/c86300f3-8695-4320-9f6e-32a2555f5ff8. Supports $select. Read-only.
         * @param value Value to set for the resourceLink property.
         */
        set: function (value) {
            this._resourceLink = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "reviewedBy", {
        /**
         * Gets the reviewedBy property value. The identifier of the reviewer. Supports $select. Read-only.
         * @returns a userIdentity
         */
        get: function () {
            return this._reviewedBy;
        },
        /**
         * Sets the reviewedBy property value. The identifier of the reviewer. Supports $select. Read-only.
         * @param value Value to set for the reviewedBy property.
         */
        set: function (value) {
            this._reviewedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewInstanceDecisionItem.prototype, "reviewedDateTime", {
        /**
         * Gets the reviewedDateTime property value. The timestamp when the review decision occurred. Supports $select. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._reviewedDateTime;
        },
        /**
         * Sets the reviewedDateTime property value. The timestamp when the review decision occurred. Supports $select. Read-only.
         * @param value Value to set for the reviewedDateTime property.
         */
        set: function (value) {
            this._reviewedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AccessReviewInstanceDecisionItem.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["accessReviewId", function (o, n) { o.accessReviewId = n.getStringValue(); }],
            ["appliedBy", function (o, n) { o.appliedBy = n.getObjectValue(UserIdentity); }],
            ["appliedDateTime", function (o, n) { o.appliedDateTime = n.getDateValue(); }],
            ["applyResult", function (o, n) { o.applyResult = n.getStringValue(); }],
            ["decision", function (o, n) { o.decision = n.getStringValue(); }],
            ["justification", function (o, n) { o.justification = n.getStringValue(); }],
            ["principal", function (o, n) { o.principal = n.getObjectValue(identity_1.Identity); }],
            ["principalLink", function (o, n) { o.principalLink = n.getStringValue(); }],
            ["recommendation", function (o, n) { o.recommendation = n.getStringValue(); }],
            ["resource", function (o, n) { o.resource = n.getObjectValue(AccessReviewInstanceDecisionItemResource); }],
            ["resourceLink", function (o, n) { o.resourceLink = n.getStringValue(); }],
            ["reviewedBy", function (o, n) { o.reviewedBy = n.getObjectValue(UserIdentity); }],
            ["reviewedDateTime", function (o, n) { o.reviewedDateTime = n.getDateValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AccessReviewInstanceDecisionItem.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("accessReviewId", this.accessReviewId);
        writer.writeObjectValue("appliedBy", this.appliedBy);
        writer.writeDateValue("appliedDateTime", this.appliedDateTime);
        writer.writeStringValue("applyResult", this.applyResult);
        writer.writeStringValue("decision", this.decision);
        writer.writeStringValue("justification", this.justification);
        writer.writeObjectValue("principal", this.principal);
        writer.writeStringValue("principalLink", this.principalLink);
        writer.writeStringValue("recommendation", this.recommendation);
        writer.writeObjectValue("resource", this.resource);
        writer.writeStringValue("resourceLink", this.resourceLink);
        writer.writeObjectValue("reviewedBy", this.reviewedBy);
        writer.writeDateValue("reviewedDateTime", this.reviewedDateTime);
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
    return AccessReviewInstanceDecisionItem;
}(entity_1.Entity));
exports.AccessReviewInstanceDecisionItem = AccessReviewInstanceDecisionItem;

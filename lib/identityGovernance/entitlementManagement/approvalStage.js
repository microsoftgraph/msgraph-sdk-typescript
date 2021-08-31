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
exports.ApprovalStage = void 0;
var entity_1 = require("../../entity");
var identity_1 = require("../../identity");
var ApprovalStage = /** @class */ (function (_super) {
    __extends(ApprovalStage, _super);
    /**
     * Instantiates a new approvalStage and sets the default values.
     */
    function ApprovalStage() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ApprovalStage.prototype, "assignedToMe", {
        /**
         * Gets the assignedToMe property value. Indicates whether the stage is assigned to the calling user to review. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._assignedToMe;
        },
        /**
         * Sets the assignedToMe property value. Indicates whether the stage is assigned to the calling user to review. Read-only.
         * @param value Value to set for the assignedToMe property.
         */
        set: function (value) {
            this._assignedToMe = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApprovalStage.prototype, "displayName", {
        /**
         * Gets the displayName property value. The label provided by the policy creator to identify an approval stage. Read-only.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The label provided by the policy creator to identify an approval stage. Read-only.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApprovalStage.prototype, "justification", {
        /**
         * Gets the justification property value. The justification associated with the approval stage decision.
         * @returns a string
         */
        get: function () {
            return this._justification;
        },
        /**
         * Sets the justification property value. The justification associated with the approval stage decision.
         * @param value Value to set for the justification property.
         */
        set: function (value) {
            this._justification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApprovalStage.prototype, "reviewedBy", {
        /**
         * Gets the reviewedBy property value. The identifier of the reviewer. Read-only.
         * @returns a identity
         */
        get: function () {
            return this._reviewedBy;
        },
        /**
         * Sets the reviewedBy property value. The identifier of the reviewer. Read-only.
         * @param value Value to set for the reviewedBy property.
         */
        set: function (value) {
            this._reviewedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApprovalStage.prototype, "reviewedDateTime", {
        /**
         * Gets the reviewedDateTime property value. The date and time when a decision was recorded. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._reviewedDateTime;
        },
        /**
         * Sets the reviewedDateTime property value. The date and time when a decision was recorded. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @param value Value to set for the reviewedDateTime property.
         */
        set: function (value) {
            this._reviewedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApprovalStage.prototype, "reviewResult", {
        /**
         * Gets the reviewResult property value. The result of this approval record. Possible values include: NotReviewed, Approved, Denied.
         * @returns a string
         */
        get: function () {
            return this._reviewResult;
        },
        /**
         * Sets the reviewResult property value. The result of this approval record. Possible values include: NotReviewed, Approved, Denied.
         * @param value Value to set for the reviewResult property.
         */
        set: function (value) {
            this._reviewResult = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApprovalStage.prototype, "status", {
        /**
         * Gets the status property value. The stage status. Possible values: InProgress, Initializing, Completed, Expired. Read-only.
         * @returns a string
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. The stage status. Possible values: InProgress, Initializing, Completed, Expired. Read-only.
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
    ApprovalStage.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignedToMe", function (o, n) { o.assignedToMe = n.getBooleanValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["justification", function (o, n) { o.justification = n.getStringValue(); }],
            ["reviewedBy", function (o, n) { o.reviewedBy = n.getObjectValue(identity_1.Identity); }],
            ["reviewedDateTime", function (o, n) { o.reviewedDateTime = n.getDateValue(); }],
            ["reviewResult", function (o, n) { o.reviewResult = n.getStringValue(); }],
            ["status", function (o, n) { o.status = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ApprovalStage.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("assignedToMe", this.assignedToMe);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("justification", this.justification);
        writer.writeObjectValue("reviewedBy", this.reviewedBy);
        writer.writeDateValue("reviewedDateTime", this.reviewedDateTime);
        writer.writeStringValue("reviewResult", this.reviewResult);
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
    return ApprovalStage;
}(entity_1.Entity));
exports.ApprovalStage = ApprovalStage;

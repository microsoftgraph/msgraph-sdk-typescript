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
exports.AccessReviewScheduleDefinition = void 0;
var entity_1 = require("../entity");
var accessReviewInstance_1 = require("./accessReviews/accessReviewInstance");
var AccessReviewScheduleDefinition = /** @class */ (function (_super) {
    __extends(AccessReviewScheduleDefinition, _super);
    /**
     * Instantiates a new accessReviewScheduleDefinition and sets the default values.
     */
    function AccessReviewScheduleDefinition() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. User who created this review. Read-only.
         * @returns a userIdentity
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. User who created this review. Read-only.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Timestamp when the access review series was created. Supports $select. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Timestamp when the access review series was created. Supports $select. Read-only.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "descriptionForAdmins", {
        /**
         * Gets the descriptionForAdmins property value. Description provided by review creators to provide more context of the review to admins. Supports $select.
         * @returns a string
         */
        get: function () {
            return this._descriptionForAdmins;
        },
        /**
         * Sets the descriptionForAdmins property value. Description provided by review creators to provide more context of the review to admins. Supports $select.
         * @param value Value to set for the descriptionForAdmins property.
         */
        set: function (value) {
            this._descriptionForAdmins = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "descriptionForReviewers", {
        /**
         * Gets the descriptionForReviewers property value. Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Supports $select.
         * @returns a string
         */
        get: function () {
            return this._descriptionForReviewers;
        },
        /**
         * Sets the descriptionForReviewers property value. Description provided  by review creators to provide more context of the review to reviewers. Reviewers will see this description in the email sent to them requesting their review. Supports $select.
         * @param value Value to set for the descriptionForReviewers property.
         */
        set: function (value) {
            this._descriptionForReviewers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "displayName", {
        /**
         * Gets the displayName property value. Name of the access review series. Supports $select and $orderBy. Required on create.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Name of the access review series. Supports $select and $orderBy. Required on create.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "fallbackReviewers", {
        /**
         * Gets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select.
         * @returns a accessReviewReviewerScope
         */
        get: function () {
            return this._fallbackReviewers;
        },
        /**
         * Sets the fallbackReviewers property value. This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. See accessReviewReviewerScope. Replaces backupReviewers. Supports $select.
         * @param value Value to set for the fallbackReviewers property.
         */
        set: function (value) {
            this._fallbackReviewers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "instanceEnumerationScope", {
        /**
         * Gets the instanceEnumerationScope property value. This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
         * @returns a accessReviewScope
         */
        get: function () {
            return this._instanceEnumerationScope;
        },
        /**
         * Sets the instanceEnumerationScope property value. This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review series.  For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
         * @param value Value to set for the instanceEnumerationScope property.
         */
        set: function (value) {
            this._instanceEnumerationScope = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "instances", {
        /**
         * Gets the instances property value. Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
         * @returns a accessReviewInstance
         */
        get: function () {
            return this._instances;
        },
        /**
         * Sets the instances property value. Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
         * @param value Value to set for the instances property.
         */
        set: function (value) {
            this._instances = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Timestamp when the access review series was last modified. Supports $select. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Timestamp when the access review series was last modified. Supports $select. Read-only.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "reviewers", {
        /**
         * Gets the reviewers property value. This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
         * @returns a accessReviewReviewerScope
         */
        get: function () {
            return this._reviewers;
        },
        /**
         * Sets the reviewers property value. This collection of access review scopes is used to define who are the reviewers. The reviewers property is only updatable if individual users are assigned as reviewers. Required on create. Supports $select. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API.
         * @param value Value to set for the reviewers property.
         */
        set: function (value) {
            this._reviewers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "scope", {
        /**
         * Gets the scope property value. Defines scope of resources to review. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.
         * @returns a accessReviewScope
         */
        get: function () {
            return this._scope;
        },
        /**
         * Sets the scope property value. Defines scope of resources to review. For supported scopes, see accessReviewScope. Required on create. Supports $select and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access review definition using the Microsoft Graph API.
         * @param value Value to set for the scope property.
         */
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "settings", {
        /**
         * Gets the settings property value. The settings for an access review series, see type definition below. Supports $select. Required on create.
         * @returns a accessReviewScheduleSettings
         */
        get: function () {
            return this._settings;
        },
        /**
         * Sets the settings property value. The settings for an access review series, see type definition below. Supports $select. Required on create.
         * @param value Value to set for the settings property.
         */
        set: function (value) {
            this._settings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AccessReviewScheduleDefinition.prototype, "status", {
        /**
         * Gets the status property value. This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only.
         * @returns a string
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed.  Supports $select, $orderby, and $filter (eq only). Read-only.
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
    AccessReviewScheduleDefinition.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["createdBy", function (o, n) { o.createdBy = n.getObjectValue(UserIdentity); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["descriptionForAdmins", function (o, n) { o.descriptionForAdmins = n.getStringValue(); }],
            ["descriptionForReviewers", function (o, n) { o.descriptionForReviewers = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["fallbackReviewers", function (o, n) { o.fallbackReviewers = n.getCollectionOfPrimitiveValues(); }],
            ["instanceEnumerationScope", function (o, n) { o.instanceEnumerationScope = n.getObjectValue(AccessReviewScope); }],
            ["instances", function (o, n) { o.instances = n.getCollectionOfObjectValues(accessReviewInstance_1.AccessReviewInstance); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["reviewers", function (o, n) { o.reviewers = n.getCollectionOfPrimitiveValues(); }],
            ["scope", function (o, n) { o.scope = n.getObjectValue(AccessReviewScope); }],
            ["settings", function (o, n) { o.settings = n.getObjectValue(AccessReviewScheduleSettings); }],
            ["status", function (o, n) { o.status = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AccessReviewScheduleDefinition.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("descriptionForAdmins", this.descriptionForAdmins);
        writer.writeStringValue("descriptionForReviewers", this.descriptionForReviewers);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfPrimitiveValues("fallbackReviewers", this.fallbackReviewers);
        writer.writeObjectValue("instanceEnumerationScope", this.instanceEnumerationScope);
        writer.writeCollectionOfObjectValues("instances", this.instances);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfPrimitiveValues("reviewers", this.reviewers);
        writer.writeObjectValue("scope", this.scope);
        writer.writeObjectValue("settings", this.settings);
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
    ;
    ;
    ;
    ;
    ;
    ;
    return AccessReviewScheduleDefinition;
}(entity_1.Entity));
exports.AccessReviewScheduleDefinition = AccessReviewScheduleDefinition;

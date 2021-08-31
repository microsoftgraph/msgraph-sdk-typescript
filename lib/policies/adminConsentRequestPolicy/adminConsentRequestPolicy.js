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
exports.AdminConsentRequestPolicy = void 0;
var entity_1 = require("../../entity");
var AdminConsentRequestPolicy = /** @class */ (function (_super) {
    __extends(AdminConsentRequestPolicy, _super);
    /**
     * Instantiates a new AdminConsentRequestPolicy and sets the default values.
     */
    function AdminConsentRequestPolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AdminConsentRequestPolicy.prototype, "isEnabled", {
        /**
         * Gets the isEnabled property value. Specifies whether the admin consent request feature is enabled or disabled. Required.
         * @returns a boolean
         */
        get: function () {
            return this._isEnabled;
        },
        /**
         * Sets the isEnabled property value. Specifies whether the admin consent request feature is enabled or disabled. Required.
         * @param value Value to set for the isEnabled property.
         */
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdminConsentRequestPolicy.prototype, "notifyReviewers", {
        /**
         * Gets the notifyReviewers property value. Specifies whether reviewers will receive notifications. Required.
         * @returns a boolean
         */
        get: function () {
            return this._notifyReviewers;
        },
        /**
         * Sets the notifyReviewers property value. Specifies whether reviewers will receive notifications. Required.
         * @param value Value to set for the notifyReviewers property.
         */
        set: function (value) {
            this._notifyReviewers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdminConsentRequestPolicy.prototype, "remindersEnabled", {
        /**
         * Gets the remindersEnabled property value. Specifies whether reviewers will receive reminder emails. Required.
         * @returns a boolean
         */
        get: function () {
            return this._remindersEnabled;
        },
        /**
         * Sets the remindersEnabled property value. Specifies whether reviewers will receive reminder emails. Required.
         * @param value Value to set for the remindersEnabled property.
         */
        set: function (value) {
            this._remindersEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdminConsentRequestPolicy.prototype, "requestDurationInDays", {
        /**
         * Gets the requestDurationInDays property value. Specifies the duration the request is active before it automatically expires if no decision is applied.
         * @returns a integer
         */
        get: function () {
            return this._requestDurationInDays;
        },
        /**
         * Sets the requestDurationInDays property value. Specifies the duration the request is active before it automatically expires if no decision is applied.
         * @param value Value to set for the requestDurationInDays property.
         */
        set: function (value) {
            this._requestDurationInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdminConsentRequestPolicy.prototype, "reviewers", {
        /**
         * Gets the reviewers property value. Required.
         * @returns a accessReviewReviewerScope
         */
        get: function () {
            return this._reviewers;
        },
        /**
         * Sets the reviewers property value. Required.
         * @param value Value to set for the reviewers property.
         */
        set: function (value) {
            this._reviewers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AdminConsentRequestPolicy.prototype, "version", {
        /**
         * Gets the version property value. Specifies the version of this policy. When the policy is updated, this version is updated. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. Specifies the version of this policy. When the policy is updated, this version is updated. Read-only.
         * @param value Value to set for the version property.
         */
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AdminConsentRequestPolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["isEnabled", function (o, n) { o.isEnabled = n.getBooleanValue(); }],
            ["notifyReviewers", function (o, n) { o.notifyReviewers = n.getBooleanValue(); }],
            ["remindersEnabled", function (o, n) { o.remindersEnabled = n.getBooleanValue(); }],
            ["requestDurationInDays", function (o, n) { o.requestDurationInDays = n.getNumberValue(); }],
            ["reviewers", function (o, n) { o.reviewers = n.getCollectionOfPrimitiveValues(); }],
            ["version", function (o, n) { o.version = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AdminConsentRequestPolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeBooleanValue("notifyReviewers", this.notifyReviewers);
        writer.writeBooleanValue("remindersEnabled", this.remindersEnabled);
        writer.writeNumberValue("requestDurationInDays", this.requestDurationInDays);
        writer.writeCollectionOfPrimitiveValues("reviewers", this.reviewers);
        writer.writeNumberValue("version", this.version);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return AdminConsentRequestPolicy;
}(entity_1.Entity));
exports.AdminConsentRequestPolicy = AdminConsentRequestPolicy;

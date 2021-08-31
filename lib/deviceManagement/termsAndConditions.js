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
exports.TermsAndConditions = void 0;
var entity_1 = require("../entity");
var termsAndConditionsAcceptanceStatus_1 = require("./termsAndConditionsAcceptanceStatus");
var termsAndConditionsAssignment_1 = require("./termsAndConditionsAssignment");
var TermsAndConditions = /** @class */ (function (_super) {
    __extends(TermsAndConditions, _super);
    /**
     * Instantiates a new termsAndConditions and sets the default values.
     */
    function TermsAndConditions() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TermsAndConditions.prototype, "acceptanceStatement", {
        /**
         * Gets the acceptanceStatement property value. Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms and conditions set out in the T&C policy. This is shown to the user on prompts to accept the T&C policy.
         * @returns a string
         */
        get: function () {
            return this._acceptanceStatement;
        },
        /**
         * Sets the acceptanceStatement property value. Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms and conditions set out in the T&C policy. This is shown to the user on prompts to accept the T&C policy.
         * @param value Value to set for the acceptanceStatement property.
         */
        set: function (value) {
            this._acceptanceStatement = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditions.prototype, "acceptanceStatuses", {
        /**
         * Gets the acceptanceStatuses property value. The list of acceptance statuses for this T&C policy.
         * @returns a termsAndConditionsAcceptanceStatus
         */
        get: function () {
            return this._acceptanceStatuses;
        },
        /**
         * Sets the acceptanceStatuses property value. The list of acceptance statuses for this T&C policy.
         * @param value Value to set for the acceptanceStatuses property.
         */
        set: function (value) {
            this._acceptanceStatuses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditions.prototype, "assignments", {
        /**
         * Gets the assignments property value. The list of assignments for this T&C policy.
         * @returns a termsAndConditionsAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. The list of assignments for this T&C policy.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditions.prototype, "bodyText", {
        /**
         * Gets the bodyText property value. Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user on prompts to accept the T&C policy.
         * @returns a string
         */
        get: function () {
            return this._bodyText;
        },
        /**
         * Sets the bodyText property value. Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user on prompts to accept the T&C policy.
         * @param value Value to set for the bodyText property.
         */
        set: function (value) {
            this._bodyText = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditions.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. DateTime the object was created.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. DateTime the object was created.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditions.prototype, "description", {
        /**
         * Gets the description property value. Administrator-supplied description of the T&C policy.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Administrator-supplied description of the T&C policy.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditions.prototype, "displayName", {
        /**
         * Gets the displayName property value. Administrator-supplied name for the T&C policy.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Administrator-supplied name for the T&C policy.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditions.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditions.prototype, "title", {
        /**
         * Gets the title property value. Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&C policy.
         * @returns a string
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&C policy.
         * @param value Value to set for the title property.
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TermsAndConditions.prototype, "version", {
        /**
         * Gets the version property value. Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and wishes to require users to re-accept the modified T&C policy.
         * @returns a integer
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and wishes to require users to re-accept the modified T&C policy.
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
    TermsAndConditions.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["acceptanceStatement", function (o, n) { o.acceptanceStatement = n.getStringValue(); }],
            ["acceptanceStatuses", function (o, n) { o.acceptanceStatuses = n.getCollectionOfObjectValues(termsAndConditionsAcceptanceStatus_1.TermsAndConditionsAcceptanceStatus); }],
            ["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(termsAndConditionsAssignment_1.TermsAndConditionsAssignment); }],
            ["bodyText", function (o, n) { o.bodyText = n.getStringValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["title", function (o, n) { o.title = n.getStringValue(); }],
            ["version", function (o, n) { o.version = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TermsAndConditions.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("acceptanceStatement", this.acceptanceStatement);
        writer.writeCollectionOfObjectValues("acceptanceStatuses", this.acceptanceStatuses);
        writer.writeCollectionOfObjectValues("assignments", this.assignments);
        writer.writeStringValue("bodyText", this.bodyText);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("version", this.version);
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
    return TermsAndConditions;
}(entity_1.Entity));
exports.TermsAndConditions = TermsAndConditions;

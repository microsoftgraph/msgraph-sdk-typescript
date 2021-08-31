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
exports.ConditionalAccessPolicy = void 0;
var entity_1 = require("./entity");
var conditionalAccessConditionSet_1 = require("./policies/conditionalAccessConditionSet");
var ConditionalAccessPolicy = /** @class */ (function (_super) {
    __extends(ConditionalAccessPolicy, _super);
    /**
     * Instantiates a new conditionalAccessPolicy and sets the default values.
     */
    function ConditionalAccessPolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ConditionalAccessPolicy.prototype, "conditions", {
        /**
         * Gets the conditions property value.
         * @returns a conditionalAccessConditionSet
         */
        get: function () {
            return this._conditions;
        },
        /**
         * Sets the conditions property value.
         * @param value Value to set for the conditions property.
         */
        set: function (value) {
            this._conditions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessPolicy.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessPolicy.prototype, "description", {
        /**
         * Gets the description property value. Not used.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Not used.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessPolicy.prototype, "displayName", {
        /**
         * Gets the displayName property value. Specifies a display name for the conditionalAccessPolicy object.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Specifies a display name for the conditionalAccessPolicy object.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessPolicy.prototype, "grantControls", {
        /**
         * Gets the grantControls property value. Specifies the grant controls that must be fulfilled to pass the policy.
         * @returns a conditionalAccessGrantControls
         */
        get: function () {
            return this._grantControls;
        },
        /**
         * Sets the grantControls property value. Specifies the grant controls that must be fulfilled to pass the policy.
         * @param value Value to set for the grantControls property.
         */
        set: function (value) {
            this._grantControls = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessPolicy.prototype, "modifiedDateTime", {
        /**
         * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
         * @returns a Date
         */
        get: function () {
            return this._modifiedDateTime;
        },
        /**
         * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
         * @param value Value to set for the modifiedDateTime property.
         */
        set: function (value) {
            this._modifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessPolicy.prototype, "sessionControls", {
        /**
         * Gets the sessionControls property value. Specifies the session controls that are enforced after sign-in.
         * @returns a conditionalAccessSessionControls
         */
        get: function () {
            return this._sessionControls;
        },
        /**
         * Sets the sessionControls property value. Specifies the session controls that are enforced after sign-in.
         * @param value Value to set for the sessionControls property.
         */
        set: function (value) {
            this._sessionControls = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessPolicy.prototype, "state", {
        /**
         * Gets the state property value. Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required.
         * @returns a conditionalAccessPolicyState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ConditionalAccessPolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["conditions", function (o, n) { o.conditions = n.getObjectValue(conditionalAccessConditionSet_1.ConditionalAccessConditionSet); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["grantControls", function (o, n) { o.grantControls = n.getObjectValue(ConditionalAccessGrantControls); }],
            ["modifiedDateTime", function (o, n) { o.modifiedDateTime = n.getDateValue(); }],
            ["sessionControls", function (o, n) { o.sessionControls = n.getObjectValue(ConditionalAccessSessionControls); }],
            ["state", function (o, n) { o.state = n.getObjectValue(ConditionalAccessPolicyState); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ConditionalAccessPolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("conditions", this.conditions);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("grantControls", this.grantControls);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        writer.writeObjectValue("sessionControls", this.sessionControls);
        writer.writeObjectValue("state", this.state);
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
    return ConditionalAccessPolicy;
}(entity_1.Entity));
exports.ConditionalAccessPolicy = ConditionalAccessPolicy;

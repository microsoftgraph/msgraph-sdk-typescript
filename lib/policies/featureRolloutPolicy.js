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
exports.FeatureRolloutPolicy = void 0;
var directoryObject_1 = require("../directoryObject");
var entity_1 = require("../entity");
var FeatureRolloutPolicy = /** @class */ (function (_super) {
    __extends(FeatureRolloutPolicy, _super);
    /**
     * Instantiates a new featureRolloutPolicy and sets the default values.
     */
    function FeatureRolloutPolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(FeatureRolloutPolicy.prototype, "appliesTo", {
        /**
         * Gets the appliesTo property value. Nullable. Specifies a list of directoryObjects that feature is enabled for.
         * @returns a directoryObject
         */
        get: function () {
            return this._appliesTo;
        },
        /**
         * Sets the appliesTo property value. Nullable. Specifies a list of directoryObjects that feature is enabled for.
         * @param value Value to set for the appliesTo property.
         */
        set: function (value) {
            this._appliesTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FeatureRolloutPolicy.prototype, "description", {
        /**
         * Gets the description property value. A description for this feature rollout policy.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. A description for this feature rollout policy.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FeatureRolloutPolicy.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name for this  feature rollout policy.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name for this  feature rollout policy.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FeatureRolloutPolicy.prototype, "feature", {
        /**
         * Gets the feature property value. Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue.
         * @returns a stagedFeatureName
         */
        get: function () {
            return this._feature;
        },
        /**
         * Sets the feature property value. Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue.
         * @param value Value to set for the feature property.
         */
        set: function (value) {
            this._feature = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FeatureRolloutPolicy.prototype, "isAppliedToOrganization", {
        /**
         * Gets the isAppliedToOrganization property value. Indicates whether this feature rollout policy should be applied to the entire organization.
         * @returns a boolean
         */
        get: function () {
            return this._isAppliedToOrganization;
        },
        /**
         * Sets the isAppliedToOrganization property value. Indicates whether this feature rollout policy should be applied to the entire organization.
         * @param value Value to set for the isAppliedToOrganization property.
         */
        set: function (value) {
            this._isAppliedToOrganization = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FeatureRolloutPolicy.prototype, "isEnabled", {
        /**
         * Gets the isEnabled property value. Indicates whether the feature rollout is enabled.
         * @returns a boolean
         */
        get: function () {
            return this._isEnabled;
        },
        /**
         * Sets the isEnabled property value. Indicates whether the feature rollout is enabled.
         * @param value Value to set for the isEnabled property.
         */
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    FeatureRolloutPolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appliesTo", function (o, n) { o.appliesTo = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["feature", function (o, n) { o.feature = n.getObjectValue(StagedFeatureName); }],
            ["isAppliedToOrganization", function (o, n) { o.isAppliedToOrganization = n.getBooleanValue(); }],
            ["isEnabled", function (o, n) { o.isEnabled = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    FeatureRolloutPolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("appliesTo", this.appliesTo);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("feature", this.feature);
        writer.writeBooleanValue("isAppliedToOrganization", this.isAppliedToOrganization);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return FeatureRolloutPolicy;
}(entity_1.Entity));
exports.FeatureRolloutPolicy = FeatureRolloutPolicy;

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
exports.PlannerPlanDetails = void 0;
var entity_1 = require("../../../entity");
var PlannerPlanDetails = /** @class */ (function (_super) {
    __extends(PlannerPlanDetails, _super);
    /**
     * Instantiates a new PlannerPlanDetails and sets the default values.
     */
    function PlannerPlanDetails() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PlannerPlanDetails.prototype, "categoryDescriptions", {
        /**
         * Gets the categoryDescriptions property value. An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan
         * @returns a plannerCategoryDescriptions
         */
        get: function () {
            return this._categoryDescriptions;
        },
        /**
         * Sets the categoryDescriptions property value. An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan
         * @param value Value to set for the categoryDescriptions property.
         */
        set: function (value) {
            this._categoryDescriptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerPlanDetails.prototype, "sharedWith", {
        /**
         * Gets the sharedWith property value. The set of user IDs that this plan is shared with. If you are using Microsoft 365 groups, use the groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection, although it is not required in order for them to access the plan owned by the group.
         * @returns a plannerUserIds
         */
        get: function () {
            return this._sharedWith;
        },
        /**
         * Sets the sharedWith property value. The set of user IDs that this plan is shared with. If you are using Microsoft 365 groups, use the groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection, although it is not required in order for them to access the plan owned by the group.
         * @param value Value to set for the sharedWith property.
         */
        set: function (value) {
            this._sharedWith = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PlannerPlanDetails.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["categoryDescriptions", function (o, n) { o.categoryDescriptions = n.getObjectValue(PlannerCategoryDescriptions); }],
            ["sharedWith", function (o, n) { o.sharedWith = n.getObjectValue(PlannerUserIds); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PlannerPlanDetails.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("categoryDescriptions", this.categoryDescriptions);
        writer.writeObjectValue("sharedWith", this.sharedWith);
    };
    ;
    ;
    ;
    return PlannerPlanDetails;
}(entity_1.Entity));
exports.PlannerPlanDetails = PlannerPlanDetails;

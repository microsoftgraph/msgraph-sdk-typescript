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
exports.PlannerUser = void 0;
var entity_1 = require("../../entity");
var plannerPlan_1 = require("../../plannerPlan");
var plannerTask_1 = require("../../plannerTask");
var PlannerUser = /** @class */ (function (_super) {
    __extends(PlannerUser, _super);
    /**
     * Instantiates a new PlannerUser and sets the default values.
     */
    function PlannerUser() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PlannerUser.prototype, "plans", {
        /**
         * Gets the plans property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
         * @returns a plannerPlan
         */
        get: function () {
            return this._plans;
        },
        /**
         * Sets the plans property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
         * @param value Value to set for the plans property.
         */
        set: function (value) {
            this._plans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PlannerUser.prototype, "tasks", {
        /**
         * Gets the tasks property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
         * @returns a plannerTask
         */
        get: function () {
            return this._tasks;
        },
        /**
         * Sets the tasks property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
         * @param value Value to set for the tasks property.
         */
        set: function (value) {
            this._tasks = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PlannerUser.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["plans", function (o, n) { o.plans = n.getCollectionOfObjectValues(plannerPlan_1.PlannerPlan); }],
            ["tasks", function (o, n) { o.tasks = n.getCollectionOfObjectValues(plannerTask_1.PlannerTask); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PlannerUser.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("plans", this.plans);
        writer.writeCollectionOfObjectValues("tasks", this.tasks);
    };
    ;
    ;
    ;
    return PlannerUser;
}(entity_1.Entity));
exports.PlannerUser = PlannerUser;

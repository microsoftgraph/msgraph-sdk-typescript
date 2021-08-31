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
exports.AssignedToTaskBoardFormat = void 0;
var entity_1 = require("../../../../entity");
var AssignedToTaskBoardFormat = /** @class */ (function (_super) {
    __extends(AssignedToTaskBoardFormat, _super);
    /**
     * Instantiates a new AssignedToTaskBoardFormat and sets the default values.
     */
    function AssignedToTaskBoardFormat() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AssignedToTaskBoardFormat.prototype, "orderHintsByAssignee", {
        /**
         * Gets the orderHintsByAssignee property value. Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here.
         * @returns a plannerOrderHintsByAssignee
         */
        get: function () {
            return this._orderHintsByAssignee;
        },
        /**
         * Sets the orderHintsByAssignee property value. Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here.
         * @param value Value to set for the orderHintsByAssignee property.
         */
        set: function (value) {
            this._orderHintsByAssignee = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AssignedToTaskBoardFormat.prototype, "unassignedOrderHint", {
        /**
         * Gets the unassignedOrderHint property value. Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format is defined as outlined here.
         * @returns a string
         */
        get: function () {
            return this._unassignedOrderHint;
        },
        /**
         * Sets the unassignedOrderHint property value. Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format is defined as outlined here.
         * @param value Value to set for the unassignedOrderHint property.
         */
        set: function (value) {
            this._unassignedOrderHint = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AssignedToTaskBoardFormat.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["orderHintsByAssignee", function (o, n) { o.orderHintsByAssignee = n.getObjectValue(PlannerOrderHintsByAssignee); }],
            ["unassignedOrderHint", function (o, n) { o.unassignedOrderHint = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AssignedToTaskBoardFormat.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("orderHintsByAssignee", this.orderHintsByAssignee);
        writer.writeStringValue("unassignedOrderHint", this.unassignedOrderHint);
    };
    ;
    ;
    ;
    return AssignedToTaskBoardFormat;
}(entity_1.Entity));
exports.AssignedToTaskBoardFormat = AssignedToTaskBoardFormat;

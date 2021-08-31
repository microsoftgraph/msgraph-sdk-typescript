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
exports.PrintTaskDefinition = void 0;
var appIdentity_1 = require("../auditLogs/appIdentity");
var entity_1 = require("../entity");
var printTask_1 = require("./printTask");
var PrintTaskDefinition = /** @class */ (function (_super) {
    __extends(PrintTaskDefinition, _super);
    /**
     * Instantiates a new printTaskDefinition and sets the default values.
     */
    function PrintTaskDefinition() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PrintTaskDefinition.prototype, "createdBy", {
        /**
         * Gets the createdBy property value.
         * @returns a appIdentity
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintTaskDefinition.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the printTaskDefinition.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the printTaskDefinition.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintTaskDefinition.prototype, "tasks", {
        /**
         * Gets the tasks property value. A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.
         * @returns a printTask
         */
        get: function () {
            return this._tasks;
        },
        /**
         * Sets the tasks property value. A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.
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
    PrintTaskDefinition.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["createdBy", function (o, n) { o.createdBy = n.getObjectValue(appIdentity_1.AppIdentity); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["tasks", function (o, n) { o.tasks = n.getCollectionOfObjectValues(printTask_1.PrintTask); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintTaskDefinition.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("tasks", this.tasks);
    };
    ;
    ;
    ;
    ;
    return PrintTaskDefinition;
}(entity_1.Entity));
exports.PrintTaskDefinition = PrintTaskDefinition;

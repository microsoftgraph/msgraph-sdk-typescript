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
exports.PrintTask = void 0;
var entity_1 = require("../entity");
var printTaskDefinition_1 = require("./printTaskDefinition");
var printTaskTrigger_1 = require("./printTaskTrigger");
var printTaskStatus_1 = require("./taskDefinitions/printTaskStatus");
var PrintTask = /** @class */ (function (_super) {
    __extends(PrintTask, _super);
    /**
     * Instantiates a new printTask and sets the default values.
     */
    function PrintTask() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PrintTask.prototype, "definition", {
        /**
         * Gets the definition property value.
         * @returns a printTaskDefinition
         */
        get: function () {
            return this._definition;
        },
        /**
         * Sets the definition property value.
         * @param value Value to set for the definition property.
         */
        set: function (value) {
            this._definition = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintTask.prototype, "parentUrl", {
        /**
         * Gets the parentUrl property value. The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/beta/print/printers/{printerId}/jobs/{jobId}. Read-only.
         * @returns a string
         */
        get: function () {
            return this._parentUrl;
        },
        /**
         * Sets the parentUrl property value. The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/beta/print/printers/{printerId}/jobs/{jobId}. Read-only.
         * @param value Value to set for the parentUrl property.
         */
        set: function (value) {
            this._parentUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintTask.prototype, "status", {
        /**
         * Gets the status property value.
         * @returns a printTaskStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintTask.prototype, "trigger", {
        /**
         * Gets the trigger property value.
         * @returns a printTaskTrigger
         */
        get: function () {
            return this._trigger;
        },
        /**
         * Sets the trigger property value.
         * @param value Value to set for the trigger property.
         */
        set: function (value) {
            this._trigger = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PrintTask.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["definition", function (o, n) { o.definition = n.getObjectValue(printTaskDefinition_1.PrintTaskDefinition); }],
            ["parentUrl", function (o, n) { o.parentUrl = n.getStringValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(printTaskStatus_1.PrintTaskStatus); }],
            ["trigger", function (o, n) { o.trigger = n.getObjectValue(printTaskTrigger_1.PrintTaskTrigger); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintTask.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("definition", this.definition);
        writer.writeStringValue("parentUrl", this.parentUrl);
        writer.writeObjectValue("status", this.status);
        writer.writeObjectValue("trigger", this.trigger);
    };
    ;
    ;
    ;
    ;
    ;
    return PrintTask;
}(entity_1.Entity));
exports.PrintTask = PrintTask;

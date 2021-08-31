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
exports.PrintJob = void 0;
var entity_1 = require("../entity");
var printDocument_1 = require("../me/insights/shared/lastSharedMethod/microsoft/graph/printJob/microsoft/graph/printDocument");
var printJobConfiguration_1 = require("../me/insights/shared/lastSharedMethod/microsoft/graph/printJob/microsoft/graph/printJobConfiguration");
var printJobStatus_1 = require("../me/insights/shared/lastSharedMethod/microsoft/graph/printJob/microsoft/graph/printJobStatus");
var printTask_1 = require("./printTask");
var PrintJob = /** @class */ (function (_super) {
    __extends(PrintJob, _super);
    /**
     * Instantiates a new printJob and sets the default values.
     */
    function PrintJob() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PrintJob.prototype, "configuration", {
        /**
         * Gets the configuration property value.
         * @returns a printJobConfiguration
         */
        get: function () {
            return this._configuration;
        },
        /**
         * Sets the configuration property value.
         * @param value Value to set for the configuration property.
         */
        set: function (value) {
            this._configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJob.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. Read-only. Nullable.
         * @returns a userIdentity
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. Read-only. Nullable.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJob.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The DateTimeOffset when the job was created. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The DateTimeOffset when the job was created. Read-only.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJob.prototype, "documents", {
        /**
         * Gets the documents property value. Read-only.
         * @returns a printDocument
         */
        get: function () {
            return this._documents;
        },
        /**
         * Sets the documents property value. Read-only.
         * @param value Value to set for the documents property.
         */
        set: function (value) {
            this._documents = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJob.prototype, "isFetchable", {
        /**
         * Gets the isFetchable property value. If true, document can be fetched by printer.
         * @returns a boolean
         */
        get: function () {
            return this._isFetchable;
        },
        /**
         * Sets the isFetchable property value. If true, document can be fetched by printer.
         * @param value Value to set for the isFetchable property.
         */
        set: function (value) {
            this._isFetchable = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJob.prototype, "redirectedFrom", {
        /**
         * Gets the redirectedFrom property value. Contains the source job URL, if the job has been redirected from another printer.
         * @returns a string
         */
        get: function () {
            return this._redirectedFrom;
        },
        /**
         * Sets the redirectedFrom property value. Contains the source job URL, if the job has been redirected from another printer.
         * @param value Value to set for the redirectedFrom property.
         */
        set: function (value) {
            this._redirectedFrom = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJob.prototype, "redirectedTo", {
        /**
         * Gets the redirectedTo property value. Contains the destination job URL, if the job has been redirected to another printer.
         * @returns a string
         */
        get: function () {
            return this._redirectedTo;
        },
        /**
         * Sets the redirectedTo property value. Contains the destination job URL, if the job has been redirected to another printer.
         * @param value Value to set for the redirectedTo property.
         */
        set: function (value) {
            this._redirectedTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJob.prototype, "status", {
        /**
         * Gets the status property value.
         * @returns a printJobStatus
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
    Object.defineProperty(PrintJob.prototype, "tasks", {
        /**
         * Gets the tasks property value. A list of printTasks that were triggered by this print job.
         * @returns a printTask
         */
        get: function () {
            return this._tasks;
        },
        /**
         * Sets the tasks property value. A list of printTasks that were triggered by this print job.
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
    PrintJob.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["configuration", function (o, n) { o.configuration = n.getObjectValue(printJobConfiguration_1.PrintJobConfiguration); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(UserIdentity); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["documents", function (o, n) { o.documents = n.getCollectionOfObjectValues(printDocument_1.PrintDocument); }],
            ["isFetchable", function (o, n) { o.isFetchable = n.getBooleanValue(); }],
            ["redirectedFrom", function (o, n) { o.redirectedFrom = n.getStringValue(); }],
            ["redirectedTo", function (o, n) { o.redirectedTo = n.getStringValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(printJobStatus_1.PrintJobStatus); }],
            ["tasks", function (o, n) { o.tasks = n.getCollectionOfObjectValues(printTask_1.PrintTask); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintJob.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("configuration", this.configuration);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfObjectValues("documents", this.documents);
        writer.writeBooleanValue("isFetchable", this.isFetchable);
        writer.writeStringValue("redirectedFrom", this.redirectedFrom);
        writer.writeStringValue("redirectedTo", this.redirectedTo);
        writer.writeObjectValue("status", this.status);
        writer.writeCollectionOfObjectValues("tasks", this.tasks);
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
    return PrintJob;
}(entity_1.Entity));
exports.PrintJob = PrintJob;

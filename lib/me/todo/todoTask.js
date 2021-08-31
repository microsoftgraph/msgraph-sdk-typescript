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
exports.TodoTask = void 0;
var itemBody_1 = require("../../chats/itemBody");
var dateTimeTimeZone_1 = require("../../dateTimeTimeZone");
var entity_1 = require("../../entity");
var extension_1 = require("../../extension");
var linkedResource_1 = require("./lists/linkedResource");
var TodoTask = /** @class */ (function (_super) {
    __extends(TodoTask, _super);
    /**
     * Instantiates a new todoTask and sets the default values.
     */
    function TodoTask() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TodoTask.prototype, "body", {
        /**
         * Gets the body property value. The task body that typically contains information about the task.
         * @returns a itemBody
         */
        get: function () {
            return this._body;
        },
        /**
         * Sets the body property value. The task body that typically contains information about the task.
         * @param value Value to set for the body property.
         */
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "bodyLastModifiedDateTime", {
        /**
         * Gets the bodyLastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
         * @returns a Date
         */
        get: function () {
            return this._bodyLastModifiedDateTime;
        },
        /**
         * Sets the bodyLastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
         * @param value Value to set for the bodyLastModifiedDateTime property.
         */
        set: function (value) {
            this._bodyLastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "completedDateTime", {
        /**
         * Gets the completedDateTime property value. The date in the specified time zone that the task was finished.
         * @returns a dateTimeTimeZone
         */
        get: function () {
            return this._completedDateTime;
        },
        /**
         * Sets the completedDateTime property value. The date in the specified time zone that the task was finished.
         * @param value Value to set for the completedDateTime property.
         */
        set: function (value) {
            this._completedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "dueDateTime", {
        /**
         * Gets the dueDateTime property value. The date in the specified time zone that the task is to be finished.
         * @returns a dateTimeTimeZone
         */
        get: function () {
            return this._dueDateTime;
        },
        /**
         * Sets the dueDateTime property value. The date in the specified time zone that the task is to be finished.
         * @param value Value to set for the dueDateTime property.
         */
        set: function (value) {
            this._dueDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the task. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the task. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "importance", {
        /**
         * Gets the importance property value. The importance of the task. Possible values are: low, normal, high.
         * @returns a importance
         */
        get: function () {
            return this._importance;
        },
        /**
         * Sets the importance property value. The importance of the task. Possible values are: low, normal, high.
         * @param value Value to set for the importance property.
         */
        set: function (value) {
            this._importance = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "isReminderOn", {
        /**
         * Gets the isReminderOn property value. Set to true if an alert is set to remind the user of the task.
         * @returns a boolean
         */
        get: function () {
            return this._isReminderOn;
        },
        /**
         * Sets the isReminderOn property value. Set to true if an alert is set to remind the user of the task.
         * @param value Value to set for the isReminderOn property.
         */
        set: function (value) {
            this._isReminderOn = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "linkedResources", {
        /**
         * Gets the linkedResources property value. A collection of resources linked to the task.
         * @returns a linkedResource
         */
        get: function () {
            return this._linkedResources;
        },
        /**
         * Sets the linkedResources property value. A collection of resources linked to the task.
         * @param value Value to set for the linkedResources property.
         */
        set: function (value) {
            this._linkedResources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "recurrence", {
        /**
         * Gets the recurrence property value. The recurrence pattern for the task.
         * @returns a patternedRecurrence
         */
        get: function () {
            return this._recurrence;
        },
        /**
         * Sets the recurrence property value. The recurrence pattern for the task.
         * @param value Value to set for the recurrence property.
         */
        set: function (value) {
            this._recurrence = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "reminderDateTime", {
        /**
         * Gets the reminderDateTime property value. The date and time for a reminder alert of the task to occur.
         * @returns a dateTimeTimeZone
         */
        get: function () {
            return this._reminderDateTime;
        },
        /**
         * Sets the reminderDateTime property value. The date and time for a reminder alert of the task to occur.
         * @param value Value to set for the reminderDateTime property.
         */
        set: function (value) {
            this._reminderDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "status", {
        /**
         * Gets the status property value. Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred.
         * @returns a taskStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTask.prototype, "title", {
        /**
         * Gets the title property value. A brief description of the task.
         * @returns a string
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. A brief description of the task.
         * @param value Value to set for the title property.
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TodoTask.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["body", function (o, n) { o.body = n.getObjectValue(itemBody_1.ItemBody); }],
            ["bodyLastModifiedDateTime", function (o, n) { o.bodyLastModifiedDateTime = n.getDateValue(); }],
            ["completedDateTime", function (o, n) { o.completedDateTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["dueDateTime", function (o, n) { o.dueDateTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["importance", function (o, n) { o.importance = n.getObjectValue(Importance); }],
            ["isReminderOn", function (o, n) { o.isReminderOn = n.getBooleanValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["linkedResources", function (o, n) { o.linkedResources = n.getCollectionOfObjectValues(linkedResource_1.LinkedResource); }],
            ["recurrence", function (o, n) { o.recurrence = n.getObjectValue(PatternedRecurrence); }],
            ["reminderDateTime", function (o, n) { o.reminderDateTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["status", function (o, n) { o.status = n.getObjectValue(TaskStatus); }],
            ["title", function (o, n) { o.title = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TodoTask.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("body", this.body);
        writer.writeDateValue("bodyLastModifiedDateTime", this.bodyLastModifiedDateTime);
        writer.writeObjectValue("completedDateTime", this.completedDateTime);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("dueDateTime", this.dueDateTime);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeObjectValue("importance", this.importance);
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues("linkedResources", this.linkedResources);
        writer.writeObjectValue("recurrence", this.recurrence);
        writer.writeObjectValue("reminderDateTime", this.reminderDateTime);
        writer.writeObjectValue("status", this.status);
        writer.writeStringValue("title", this.title);
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
    ;
    ;
    ;
    ;
    return TodoTask;
}(entity_1.Entity));
exports.TodoTask = TodoTask;

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
exports.TodoTaskList = void 0;
var entity_1 = require("./entity");
var extension_1 = require("./extension");
var todoTask_1 = require("./me/todo/todoTask");
var TodoTaskList = /** @class */ (function (_super) {
    __extends(TodoTaskList, _super);
    /**
     * Instantiates a new todoTaskList and sets the default values.
     */
    function TodoTaskList() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TodoTaskList.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the task list.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the task list.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTaskList.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the task list. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the task list. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTaskList.prototype, "isOwner", {
        /**
         * Gets the isOwner property value. True if the user is owner of the given task list.
         * @returns a boolean
         */
        get: function () {
            return this._isOwner;
        },
        /**
         * Sets the isOwner property value. True if the user is owner of the given task list.
         * @param value Value to set for the isOwner property.
         */
        set: function (value) {
            this._isOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTaskList.prototype, "isShared", {
        /**
         * Gets the isShared property value. True if the task list is shared with other users
         * @returns a boolean
         */
        get: function () {
            return this._isShared;
        },
        /**
         * Sets the isShared property value. True if the task list is shared with other users
         * @param value Value to set for the isShared property.
         */
        set: function (value) {
            this._isShared = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTaskList.prototype, "tasks", {
        /**
         * Gets the tasks property value. The tasks in this task list. Read-only. Nullable.
         * @returns a todoTask
         */
        get: function () {
            return this._tasks;
        },
        /**
         * Sets the tasks property value. The tasks in this task list. Read-only. Nullable.
         * @param value Value to set for the tasks property.
         */
        set: function (value) {
            this._tasks = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TodoTaskList.prototype, "wellknownListName", {
        /**
         * Gets the wellknownListName property value. Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue.
         * @returns a wellknownListName
         */
        get: function () {
            return this._wellknownListName;
        },
        /**
         * Sets the wellknownListName property value. Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue.
         * @param value Value to set for the wellknownListName property.
         */
        set: function (value) {
            this._wellknownListName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TodoTaskList.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["isOwner", function (o, n) { o.isOwner = n.getBooleanValue(); }],
            ["isShared", function (o, n) { o.isShared = n.getBooleanValue(); }],
            ["tasks", function (o, n) { o.tasks = n.getCollectionOfObjectValues(todoTask_1.TodoTask); }],
            ["wellknownListName", function (o, n) { o.wellknownListName = n.getObjectValue(WellknownListName); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TodoTaskList.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeBooleanValue("isOwner", this.isOwner);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeCollectionOfObjectValues("tasks", this.tasks);
        writer.writeObjectValue("wellknownListName", this.wellknownListName);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return TodoTaskList;
}(entity_1.Entity));
exports.TodoTaskList = TodoTaskList;

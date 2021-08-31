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
exports.EducationAssignmentDefaults = void 0;
var entity_1 = require("../../../entity");
var EducationAssignmentDefaults = /** @class */ (function (_super) {
    __extends(EducationAssignmentDefaults, _super);
    /**
     * Instantiates a new EducationAssignmentDefaults and sets the default values.
     */
    function EducationAssignmentDefaults() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EducationAssignmentDefaults.prototype, "addedStudentAction", {
        /**
         * Gets the addedStudentAction property value. Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen.
         * @returns a educationAddedStudentAction
         */
        get: function () {
            return this._addedStudentAction;
        },
        /**
         * Sets the addedStudentAction property value. Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen.
         * @param value Value to set for the addedStudentAction property.
         */
        set: function (value) {
            this._addedStudentAction = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignmentDefaults.prototype, "dueTime", {
        /**
         * Gets the dueTime property value. Class-level default value for due time field. Default value is 23:59:00.
         * @returns a string
         */
        get: function () {
            return this._dueTime;
        },
        /**
         * Sets the dueTime property value. Class-level default value for due time field. Default value is 23:59:00.
         * @param value Value to set for the dueTime property.
         */
        set: function (value) {
            this._dueTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationAssignmentDefaults.prototype, "notificationChannelUrl", {
        /**
         * Gets the notificationChannelUrl property value. Default Teams channel to which notifications will be sent. Default value is null.
         * @returns a string
         */
        get: function () {
            return this._notificationChannelUrl;
        },
        /**
         * Sets the notificationChannelUrl property value. Default Teams channel to which notifications will be sent. Default value is null.
         * @param value Value to set for the notificationChannelUrl property.
         */
        set: function (value) {
            this._notificationChannelUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationAssignmentDefaults.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["addedStudentAction", function (o, n) { o.addedStudentAction = n.getObjectValue(EducationAddedStudentAction); }],
            ["dueTime", function (o, n) { o.dueTime = n.getStringValue(); }],
            ["notificationChannelUrl", function (o, n) { o.notificationChannelUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationAssignmentDefaults.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("addedStudentAction", this.addedStudentAction);
        writer.writeStringValue("dueTime", this.dueTime);
        writer.writeStringValue("notificationChannelUrl", this.notificationChannelUrl);
    };
    ;
    ;
    ;
    ;
    return EducationAssignmentDefaults;
}(entity_1.Entity));
exports.EducationAssignmentDefaults = EducationAssignmentDefaults;

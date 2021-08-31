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
exports.CalendarGroup = void 0;
var calendar_1 = require("./calendar");
var entity_1 = require("./entity");
var CalendarGroup = /** @class */ (function (_super) {
    __extends(CalendarGroup, _super);
    /**
     * Instantiates a new calendarGroup and sets the default values.
     */
    function CalendarGroup() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(CalendarGroup.prototype, "calendars", {
        /**
         * Gets the calendars property value. The calendars in the calendar group. Navigation property. Read-only. Nullable.
         * @returns a calendar
         */
        get: function () {
            return this._calendars;
        },
        /**
         * Sets the calendars property value. The calendars in the calendar group. Navigation property. Read-only. Nullable.
         * @param value Value to set for the calendars property.
         */
        set: function (value) {
            this._calendars = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CalendarGroup.prototype, "changeKey", {
        /**
         * Gets the changeKey property value. Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
         * @returns a string
         */
        get: function () {
            return this._changeKey;
        },
        /**
         * Sets the changeKey property value. Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
         * @param value Value to set for the changeKey property.
         */
        set: function (value) {
            this._changeKey = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CalendarGroup.prototype, "classId", {
        /**
         * Gets the classId property value. The class identifier. Read-only.
         * @returns a string
         */
        get: function () {
            return this._classId;
        },
        /**
         * Sets the classId property value. The class identifier. Read-only.
         * @param value Value to set for the classId property.
         */
        set: function (value) {
            this._classId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CalendarGroup.prototype, "name", {
        /**
         * Gets the name property value. The group name.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The group name.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    CalendarGroup.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["calendars", function (o, n) { o.calendars = n.getCollectionOfObjectValues(calendar_1.Calendar); }],
            ["changeKey", function (o, n) { o.changeKey = n.getStringValue(); }],
            ["classId", function (o, n) { o.classId = n.getStringValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    CalendarGroup.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("calendars", this.calendars);
        writer.writeStringValue("changeKey", this.changeKey);
        writer.writeStringValue("classId", this.classId);
        writer.writeStringValue("name", this.name);
    };
    ;
    ;
    ;
    ;
    ;
    return CalendarGroup;
}(entity_1.Entity));
exports.CalendarGroup = CalendarGroup;

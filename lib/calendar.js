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
exports.Calendar = void 0;
var calendarPermission_1 = require("./calendarPermission");
var entity_1 = require("./entity");
var event_1 = require("./event");
var multiValueLegacyExtendedProperty_1 = require("./multiValueLegacyExtendedProperty");
var singleValueLegacyExtendedProperty_1 = require("./singleValueLegacyExtendedProperty");
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    /**
     * Instantiates a new calendar and sets the default values.
     */
    function Calendar() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Calendar.prototype, "allowedOnlineMeetingProviders", {
        /**
         * Gets the allowedOnlineMeetingProviders property value. Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
         * @returns a onlineMeetingProviderType
         */
        get: function () {
            return this._allowedOnlineMeetingProviders;
        },
        /**
         * Sets the allowedOnlineMeetingProviders property value. Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
         * @param value Value to set for the allowedOnlineMeetingProviders property.
         */
        set: function (value) {
            this._allowedOnlineMeetingProviders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "calendarPermissions", {
        /**
         * Gets the calendarPermissions property value. The permissions of the users with whom the calendar is shared.
         * @returns a calendarPermission
         */
        get: function () {
            return this._calendarPermissions;
        },
        /**
         * Sets the calendarPermissions property value. The permissions of the users with whom the calendar is shared.
         * @param value Value to set for the calendarPermissions property.
         */
        set: function (value) {
            this._calendarPermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "calendarView", {
        /**
         * Gets the calendarView property value. The calendar view for the calendar. Navigation property. Read-only.
         * @returns a event
         */
        get: function () {
            return this._calendarView;
        },
        /**
         * Sets the calendarView property value. The calendar view for the calendar. Navigation property. Read-only.
         * @param value Value to set for the calendarView property.
         */
        set: function (value) {
            this._calendarView = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "canEdit", {
        /**
         * Gets the canEdit property value. true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._canEdit;
        },
        /**
         * Sets the canEdit property value. true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only.
         * @param value Value to set for the canEdit property.
         */
        set: function (value) {
            this._canEdit = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "canShare", {
        /**
         * Gets the canShare property value. true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._canShare;
        },
        /**
         * Sets the canShare property value. true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only.
         * @param value Value to set for the canShare property.
         */
        set: function (value) {
            this._canShare = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "canViewPrivateItems", {
        /**
         * Gets the canViewPrivateItems property value. true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._canViewPrivateItems;
        },
        /**
         * Sets the canViewPrivateItems property value. true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only.
         * @param value Value to set for the canViewPrivateItems property.
         */
        set: function (value) {
            this._canViewPrivateItems = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "changeKey", {
        /**
         * Gets the changeKey property value. Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
         * @returns a string
         */
        get: function () {
            return this._changeKey;
        },
        /**
         * Sets the changeKey property value. Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
         * @param value Value to set for the changeKey property.
         */
        set: function (value) {
            this._changeKey = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "color", {
        /**
         * Gets the color property value. Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor.
         * @returns a calendarColor
         */
        get: function () {
            return this._color;
        },
        /**
         * Sets the color property value. Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor.
         * @param value Value to set for the color property.
         */
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "defaultOnlineMeetingProvider", {
        /**
         * Gets the defaultOnlineMeetingProvider property value. The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
         * @returns a onlineMeetingProviderType
         */
        get: function () {
            return this._defaultOnlineMeetingProvider;
        },
        /**
         * Sets the defaultOnlineMeetingProvider property value. The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
         * @param value Value to set for the defaultOnlineMeetingProvider property.
         */
        set: function (value) {
            this._defaultOnlineMeetingProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "events", {
        /**
         * Gets the events property value. The events in the calendar. Navigation property. Read-only.
         * @returns a event
         */
        get: function () {
            return this._events;
        },
        /**
         * Sets the events property value. The events in the calendar. Navigation property. Read-only.
         * @param value Value to set for the events property.
         */
        set: function (value) {
            this._events = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "hexColor", {
        /**
         * Gets the hexColor property value. The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty.
         * @returns a string
         */
        get: function () {
            return this._hexColor;
        },
        /**
         * Sets the hexColor property value. The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty.
         * @param value Value to set for the hexColor property.
         */
        set: function (value) {
            this._hexColor = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "isDefaultCalendar", {
        /**
         * Gets the isDefaultCalendar property value. true if this is the default calendar where new events are created by default, false otherwise.
         * @returns a boolean
         */
        get: function () {
            return this._isDefaultCalendar;
        },
        /**
         * Sets the isDefaultCalendar property value. true if this is the default calendar where new events are created by default, false otherwise.
         * @param value Value to set for the isDefaultCalendar property.
         */
        set: function (value) {
            this._isDefaultCalendar = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "isRemovable", {
        /**
         * Gets the isRemovable property value. Indicates whether this user calendar can be deleted from the user mailbox.
         * @returns a boolean
         */
        get: function () {
            return this._isRemovable;
        },
        /**
         * Sets the isRemovable property value. Indicates whether this user calendar can be deleted from the user mailbox.
         * @param value Value to set for the isRemovable property.
         */
        set: function (value) {
            this._isRemovable = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "isTallyingResponses", {
        /**
         * Gets the isTallyingResponses property value. Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.
         * @returns a boolean
         */
        get: function () {
            return this._isTallyingResponses;
        },
        /**
         * Sets the isTallyingResponses property value. Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.
         * @param value Value to set for the isTallyingResponses property.
         */
        set: function (value) {
            this._isTallyingResponses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "multiValueExtendedProperties", {
        /**
         * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
         * @returns a multiValueLegacyExtendedProperty
         */
        get: function () {
            return this._multiValueExtendedProperties;
        },
        /**
         * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
         * @param value Value to set for the multiValueExtendedProperties property.
         */
        set: function (value) {
            this._multiValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "name", {
        /**
         * Gets the name property value. The calendar name.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The calendar name.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "owner", {
        /**
         * Gets the owner property value. If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user. Read-only.
         * @returns a emailAddress
         */
        get: function () {
            return this._owner;
        },
        /**
         * Sets the owner property value. If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user. Read-only.
         * @param value Value to set for the owner property.
         */
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "singleValueExtendedProperties", {
        /**
         * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
         * @returns a singleValueLegacyExtendedProperty
         */
        get: function () {
            return this._singleValueExtendedProperties;
        },
        /**
         * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
         * @param value Value to set for the singleValueExtendedProperties property.
         */
        set: function (value) {
            this._singleValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Calendar.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["allowedOnlineMeetingProviders", function (o, n) { o.allowedOnlineMeetingProviders = n.getCollectionOfPrimitiveValues(); }],
            ["calendarPermissions", function (o, n) { o.calendarPermissions = n.getCollectionOfObjectValues(calendarPermission_1.CalendarPermission); }],
            ["calendarView", function (o, n) { o.calendarView = n.getCollectionOfObjectValues(event_1.Event); }],
            ["canEdit", function (o, n) { o.canEdit = n.getBooleanValue(); }],
            ["canShare", function (o, n) { o.canShare = n.getBooleanValue(); }],
            ["canViewPrivateItems", function (o, n) { o.canViewPrivateItems = n.getBooleanValue(); }],
            ["changeKey", function (o, n) { o.changeKey = n.getStringValue(); }],
            ["color", function (o, n) { o.color = n.getObjectValue(CalendarColor); }],
            ["defaultOnlineMeetingProvider", function (o, n) { o.defaultOnlineMeetingProvider = n.getObjectValue(OnlineMeetingProviderType); }],
            ["events", function (o, n) { o.events = n.getCollectionOfObjectValues(event_1.Event); }],
            ["hexColor", function (o, n) { o.hexColor = n.getStringValue(); }],
            ["isDefaultCalendar", function (o, n) { o.isDefaultCalendar = n.getBooleanValue(); }],
            ["isRemovable", function (o, n) { o.isRemovable = n.getBooleanValue(); }],
            ["isTallyingResponses", function (o, n) { o.isTallyingResponses = n.getBooleanValue(); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["owner", function (o, n) { o.owner = n.getObjectValue(EmailAddress); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Calendar.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfPrimitiveValues("allowedOnlineMeetingProviders", this.allowedOnlineMeetingProviders);
        writer.writeCollectionOfObjectValues("calendarPermissions", this.calendarPermissions);
        writer.writeCollectionOfObjectValues("calendarView", this.calendarView);
        writer.writeBooleanValue("canEdit", this.canEdit);
        writer.writeBooleanValue("canShare", this.canShare);
        writer.writeBooleanValue("canViewPrivateItems", this.canViewPrivateItems);
        writer.writeStringValue("changeKey", this.changeKey);
        writer.writeObjectValue("color", this.color);
        writer.writeObjectValue("defaultOnlineMeetingProvider", this.defaultOnlineMeetingProvider);
        writer.writeCollectionOfObjectValues("events", this.events);
        writer.writeStringValue("hexColor", this.hexColor);
        writer.writeBooleanValue("isDefaultCalendar", this.isDefaultCalendar);
        writer.writeBooleanValue("isRemovable", this.isRemovable);
        writer.writeBooleanValue("isTallyingResponses", this.isTallyingResponses);
        writer.writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue("owner", this.owner);
        writer.writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties);
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
    ;
    ;
    ;
    ;
    return Calendar;
}(entity_1.Entity));
exports.Calendar = Calendar;

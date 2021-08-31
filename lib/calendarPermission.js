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
exports.CalendarPermission = void 0;
var entity_1 = require("./entity");
var CalendarPermission = /** @class */ (function (_super) {
    __extends(CalendarPermission, _super);
    /**
     * Instantiates a new calendarPermission and sets the default values.
     */
    function CalendarPermission() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(CalendarPermission.prototype, "allowedRoles", {
        /**
         * Gets the allowedRoles property value. List of allowed sharing or delegating permission levels for the calendar. Possible values are: none, freeBusyRead, limitedRead, read, write, delegateWithoutPrivateEventAccess, delegateWithPrivateEventAccess, custom.
         * @returns a calendarRoleType
         */
        get: function () {
            return this._allowedRoles;
        },
        /**
         * Sets the allowedRoles property value. List of allowed sharing or delegating permission levels for the calendar. Possible values are: none, freeBusyRead, limitedRead, read, write, delegateWithoutPrivateEventAccess, delegateWithPrivateEventAccess, custom.
         * @param value Value to set for the allowedRoles property.
         */
        set: function (value) {
            this._allowedRoles = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CalendarPermission.prototype, "emailAddress", {
        /**
         * Gets the emailAddress property value. Represents a sharee or delegate who has access to the calendar. For the 'My Organization' sharee, the address property is null. Read-only.
         * @returns a emailAddress
         */
        get: function () {
            return this._emailAddress;
        },
        /**
         * Sets the emailAddress property value. Represents a sharee or delegate who has access to the calendar. For the 'My Organization' sharee, the address property is null. Read-only.
         * @param value Value to set for the emailAddress property.
         */
        set: function (value) {
            this._emailAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CalendarPermission.prototype, "isInsideOrganization", {
        /**
         * Gets the isInsideOrganization property value. True if the user in context (sharee or delegate) is inside the same organization as the calendar owner.
         * @returns a boolean
         */
        get: function () {
            return this._isInsideOrganization;
        },
        /**
         * Sets the isInsideOrganization property value. True if the user in context (sharee or delegate) is inside the same organization as the calendar owner.
         * @param value Value to set for the isInsideOrganization property.
         */
        set: function (value) {
            this._isInsideOrganization = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CalendarPermission.prototype, "isRemovable", {
        /**
         * Gets the isRemovable property value. True if the user can be removed from the list of sharees or delegates for the specified calendar, false otherwise. The 'My organization' user determines the permissions other people within your organization have to the given calendar. You cannot remove 'My organization' as a sharee to a calendar.
         * @returns a boolean
         */
        get: function () {
            return this._isRemovable;
        },
        /**
         * Sets the isRemovable property value. True if the user can be removed from the list of sharees or delegates for the specified calendar, false otherwise. The 'My organization' user determines the permissions other people within your organization have to the given calendar. You cannot remove 'My organization' as a sharee to a calendar.
         * @param value Value to set for the isRemovable property.
         */
        set: function (value) {
            this._isRemovable = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CalendarPermission.prototype, "role", {
        /**
         * Gets the role property value. Current permission level of the calendar sharee or delegate.
         * @returns a calendarRoleType
         */
        get: function () {
            return this._role;
        },
        /**
         * Sets the role property value. Current permission level of the calendar sharee or delegate.
         * @param value Value to set for the role property.
         */
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    CalendarPermission.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["allowedRoles", function (o, n) { o.allowedRoles = n.getCollectionOfPrimitiveValues(); }],
            ["emailAddress", function (o, n) { o.emailAddress = n.getObjectValue(EmailAddress); }],
            ["isInsideOrganization", function (o, n) { o.isInsideOrganization = n.getBooleanValue(); }],
            ["isRemovable", function (o, n) { o.isRemovable = n.getBooleanValue(); }],
            ["role", function (o, n) { o.role = n.getObjectValue(CalendarRoleType); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    CalendarPermission.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfPrimitiveValues("allowedRoles", this.allowedRoles);
        writer.writeObjectValue("emailAddress", this.emailAddress);
        writer.writeBooleanValue("isInsideOrganization", this.isInsideOrganization);
        writer.writeBooleanValue("isRemovable", this.isRemovable);
        writer.writeObjectValue("role", this.role);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return CalendarPermission;
}(entity_1.Entity));
exports.CalendarPermission = CalendarPermission;

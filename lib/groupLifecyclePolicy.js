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
exports.GroupLifecyclePolicy = void 0;
var entity_1 = require("./entity");
var GroupLifecyclePolicy = /** @class */ (function (_super) {
    __extends(GroupLifecyclePolicy, _super);
    /**
     * Instantiates a new groupLifecyclePolicy and sets the default values.
     */
    function GroupLifecyclePolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(GroupLifecyclePolicy.prototype, "alternateNotificationEmails", {
        /**
         * Gets the alternateNotificationEmails property value. List of email address to send notifications for groups without owners. Multiple email address can be defined by separating email address with a semicolon.
         * @returns a string
         */
        get: function () {
            return this._alternateNotificationEmails;
        },
        /**
         * Sets the alternateNotificationEmails property value. List of email address to send notifications for groups without owners. Multiple email address can be defined by separating email address with a semicolon.
         * @param value Value to set for the alternateNotificationEmails property.
         */
        set: function (value) {
            this._alternateNotificationEmails = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(GroupLifecyclePolicy.prototype, "groupLifetimeInDays", {
        /**
         * Gets the groupLifetimeInDays property value. Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the number of days defined.
         * @returns a integer
         */
        get: function () {
            return this._groupLifetimeInDays;
        },
        /**
         * Sets the groupLifetimeInDays property value. Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the number of days defined.
         * @param value Value to set for the groupLifetimeInDays property.
         */
        set: function (value) {
            this._groupLifetimeInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(GroupLifecyclePolicy.prototype, "managedGroupTypes", {
        /**
         * Gets the managedGroupTypes property value. The group type for which the expiration policy applies. Possible values are All, Selected or None.
         * @returns a string
         */
        get: function () {
            return this._managedGroupTypes;
        },
        /**
         * Sets the managedGroupTypes property value. The group type for which the expiration policy applies. Possible values are All, Selected or None.
         * @param value Value to set for the managedGroupTypes property.
         */
        set: function (value) {
            this._managedGroupTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    GroupLifecyclePolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["alternateNotificationEmails", function (o, n) { o.alternateNotificationEmails = n.getStringValue(); }],
            ["groupLifetimeInDays", function (o, n) { o.groupLifetimeInDays = n.getNumberValue(); }],
            ["managedGroupTypes", function (o, n) { o.managedGroupTypes = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    GroupLifecyclePolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("alternateNotificationEmails", this.alternateNotificationEmails);
        writer.writeNumberValue("groupLifetimeInDays", this.groupLifetimeInDays);
        writer.writeStringValue("managedGroupTypes", this.managedGroupTypes);
    };
    ;
    ;
    ;
    ;
    return GroupLifecyclePolicy;
}(entity_1.Entity));
exports.GroupLifecyclePolicy = GroupLifecyclePolicy;

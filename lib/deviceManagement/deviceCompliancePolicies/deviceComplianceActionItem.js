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
exports.DeviceComplianceActionItem = void 0;
var entity_1 = require("../../entity");
var DeviceComplianceActionItem = /** @class */ (function (_super) {
    __extends(DeviceComplianceActionItem, _super);
    /**
     * Instantiates a new deviceComplianceActionItem and sets the default values.
     */
    function DeviceComplianceActionItem() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceComplianceActionItem.prototype, "actionType", {
        /**
         * Gets the actionType property value. What action to take. Possible values are: noAction, notification, block, retire, wipe, removeResourceAccessProfiles, pushNotification, remoteLock.
         * @returns a deviceComplianceActionType
         */
        get: function () {
            return this._actionType;
        },
        /**
         * Sets the actionType property value. What action to take. Possible values are: noAction, notification, block, retire, wipe, removeResourceAccessProfiles, pushNotification, remoteLock.
         * @param value Value to set for the actionType property.
         */
        set: function (value) {
            this._actionType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceActionItem.prototype, "gracePeriodHours", {
        /**
         * Gets the gracePeriodHours property value. Number of hours to wait till the action will be enforced. Valid values 0 to 8760
         * @returns a integer
         */
        get: function () {
            return this._gracePeriodHours;
        },
        /**
         * Sets the gracePeriodHours property value. Number of hours to wait till the action will be enforced. Valid values 0 to 8760
         * @param value Value to set for the gracePeriodHours property.
         */
        set: function (value) {
            this._gracePeriodHours = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceActionItem.prototype, "notificationMessageCCList", {
        /**
         * Gets the notificationMessageCCList property value. A list of group IDs to speicify who to CC this notification message to.
         * @returns a string
         */
        get: function () {
            return this._notificationMessageCCList;
        },
        /**
         * Sets the notificationMessageCCList property value. A list of group IDs to speicify who to CC this notification message to.
         * @param value Value to set for the notificationMessageCCList property.
         */
        set: function (value) {
            this._notificationMessageCCList = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceActionItem.prototype, "notificationTemplateId", {
        /**
         * Gets the notificationTemplateId property value. What notification Message template to use
         * @returns a string
         */
        get: function () {
            return this._notificationTemplateId;
        },
        /**
         * Sets the notificationTemplateId property value. What notification Message template to use
         * @param value Value to set for the notificationTemplateId property.
         */
        set: function (value) {
            this._notificationTemplateId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceComplianceActionItem.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["actionType", function (o, n) { o.actionType = n.getObjectValue(DeviceComplianceActionType); }],
            ["gracePeriodHours", function (o, n) { o.gracePeriodHours = n.getNumberValue(); }],
            ["notificationMessageCCList", function (o, n) { o.notificationMessageCCList = n.getCollectionOfPrimitiveValues(); }],
            ["notificationTemplateId", function (o, n) { o.notificationTemplateId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceComplianceActionItem.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("actionType", this.actionType);
        writer.writeNumberValue("gracePeriodHours", this.gracePeriodHours);
        writer.writeCollectionOfPrimitiveValues("notificationMessageCCList", this.notificationMessageCCList);
        writer.writeStringValue("notificationTemplateId", this.notificationTemplateId);
    };
    ;
    ;
    ;
    ;
    ;
    return DeviceComplianceActionItem;
}(entity_1.Entity));
exports.DeviceComplianceActionItem = DeviceComplianceActionItem;

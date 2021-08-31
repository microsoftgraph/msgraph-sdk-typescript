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
exports.ScheduleChangeRequest = void 0;
var changeTrackedEntity_1 = require("./teamwork/changeTrackedEntity");
var ScheduleChangeRequest = /** @class */ (function (_super) {
    __extends(ScheduleChangeRequest, _super);
    /**
     * Instantiates a new scheduleChangeRequest and sets the default values.
     */
    function ScheduleChangeRequest() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ScheduleChangeRequest.prototype, "assignedTo", {
        /**
         * Gets the assignedTo property value.
         * @returns a scheduleChangeRequestActor
         */
        get: function () {
            return this._assignedTo;
        },
        /**
         * Sets the assignedTo property value.
         * @param value Value to set for the assignedTo property.
         */
        set: function (value) {
            this._assignedTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ScheduleChangeRequest.prototype, "managerActionDateTime", {
        /**
         * Gets the managerActionDateTime property value.
         * @returns a Date
         */
        get: function () {
            return this._managerActionDateTime;
        },
        /**
         * Sets the managerActionDateTime property value.
         * @param value Value to set for the managerActionDateTime property.
         */
        set: function (value) {
            this._managerActionDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ScheduleChangeRequest.prototype, "managerActionMessage", {
        /**
         * Gets the managerActionMessage property value.
         * @returns a string
         */
        get: function () {
            return this._managerActionMessage;
        },
        /**
         * Sets the managerActionMessage property value.
         * @param value Value to set for the managerActionMessage property.
         */
        set: function (value) {
            this._managerActionMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ScheduleChangeRequest.prototype, "managerUserId", {
        /**
         * Gets the managerUserId property value.
         * @returns a string
         */
        get: function () {
            return this._managerUserId;
        },
        /**
         * Sets the managerUserId property value.
         * @param value Value to set for the managerUserId property.
         */
        set: function (value) {
            this._managerUserId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ScheduleChangeRequest.prototype, "senderDateTime", {
        /**
         * Gets the senderDateTime property value.
         * @returns a Date
         */
        get: function () {
            return this._senderDateTime;
        },
        /**
         * Sets the senderDateTime property value.
         * @param value Value to set for the senderDateTime property.
         */
        set: function (value) {
            this._senderDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ScheduleChangeRequest.prototype, "senderMessage", {
        /**
         * Gets the senderMessage property value.
         * @returns a string
         */
        get: function () {
            return this._senderMessage;
        },
        /**
         * Sets the senderMessage property value.
         * @param value Value to set for the senderMessage property.
         */
        set: function (value) {
            this._senderMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ScheduleChangeRequest.prototype, "senderUserId", {
        /**
         * Gets the senderUserId property value.
         * @returns a string
         */
        get: function () {
            return this._senderUserId;
        },
        /**
         * Sets the senderUserId property value.
         * @param value Value to set for the senderUserId property.
         */
        set: function (value) {
            this._senderUserId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ScheduleChangeRequest.prototype, "state", {
        /**
         * Gets the state property value.
         * @returns a scheduleChangeState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ScheduleChangeRequest.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignedTo", function (o, n) { o.assignedTo = n.getObjectValue(ScheduleChangeRequestActor); }],
            ["managerActionDateTime", function (o, n) { o.managerActionDateTime = n.getDateValue(); }],
            ["managerActionMessage", function (o, n) { o.managerActionMessage = n.getStringValue(); }],
            ["managerUserId", function (o, n) { o.managerUserId = n.getStringValue(); }],
            ["senderDateTime", function (o, n) { o.senderDateTime = n.getDateValue(); }],
            ["senderMessage", function (o, n) { o.senderMessage = n.getStringValue(); }],
            ["senderUserId", function (o, n) { o.senderUserId = n.getStringValue(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(ScheduleChangeState); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ScheduleChangeRequest.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("assignedTo", this.assignedTo);
        writer.writeDateValue("managerActionDateTime", this.managerActionDateTime);
        writer.writeStringValue("managerActionMessage", this.managerActionMessage);
        writer.writeStringValue("managerUserId", this.managerUserId);
        writer.writeDateValue("senderDateTime", this.senderDateTime);
        writer.writeStringValue("senderMessage", this.senderMessage);
        writer.writeStringValue("senderUserId", this.senderUserId);
        writer.writeObjectValue("state", this.state);
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
    return ScheduleChangeRequest;
}(changeTrackedEntity_1.ChangeTrackedEntity));
exports.ScheduleChangeRequest = ScheduleChangeRequest;

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
exports.DeviceManagementTroubleshootingEvent = void 0;
var entity_1 = require("./entity");
var DeviceManagementTroubleshootingEvent = /** @class */ (function (_super) {
    __extends(DeviceManagementTroubleshootingEvent, _super);
    /**
     * Instantiates a new deviceManagementTroubleshootingEvent and sets the default values.
     */
    function DeviceManagementTroubleshootingEvent() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceManagementTroubleshootingEvent.prototype, "correlationId", {
        /**
         * Gets the correlationId property value. Id used for tracing the failure in the service.
         * @returns a string
         */
        get: function () {
            return this._correlationId;
        },
        /**
         * Sets the correlationId property value. Id used for tracing the failure in the service.
         * @param value Value to set for the correlationId property.
         */
        set: function (value) {
            this._correlationId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementTroubleshootingEvent.prototype, "eventDateTime", {
        /**
         * Gets the eventDateTime property value. Time when the event occurred .
         * @returns a Date
         */
        get: function () {
            return this._eventDateTime;
        },
        /**
         * Sets the eventDateTime property value. Time when the event occurred .
         * @param value Value to set for the eventDateTime property.
         */
        set: function (value) {
            this._eventDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceManagementTroubleshootingEvent.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["correlationId", function (o, n) { o.correlationId = n.getStringValue(); }],
            ["eventDateTime", function (o, n) { o.eventDateTime = n.getDateValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceManagementTroubleshootingEvent.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("eventDateTime", this.eventDateTime);
    };
    ;
    ;
    ;
    return DeviceManagementTroubleshootingEvent;
}(entity_1.Entity));
exports.DeviceManagementTroubleshootingEvent = DeviceManagementTroubleshootingEvent;

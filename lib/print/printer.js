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
exports.Printer = void 0;
var printConnector_1 = require("./printConnector");
var printerBase_1 = require("./printerBase");
var printerShare_1 = require("./printerShare");
var printTaskTrigger_1 = require("./printTaskTrigger");
var Printer = /** @class */ (function (_super) {
    __extends(Printer, _super);
    /**
     * Instantiates a new printer and sets the default values.
     */
    function Printer() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Printer.prototype, "connectors", {
        /**
         * Gets the connectors property value. The connectors that are associated with the printer.
         * @returns a printConnector
         */
        get: function () {
            return this._connectors;
        },
        /**
         * Sets the connectors property value. The connectors that are associated with the printer.
         * @param value Value to set for the connectors property.
         */
        set: function (value) {
            this._connectors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Printer.prototype, "hasPhysicalDevice", {
        /**
         * Gets the hasPhysicalDevice property value. True if the printer has a physical device for printing. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._hasPhysicalDevice;
        },
        /**
         * Sets the hasPhysicalDevice property value. True if the printer has a physical device for printing. Read-only.
         * @param value Value to set for the hasPhysicalDevice property.
         */
        set: function (value) {
            this._hasPhysicalDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Printer.prototype, "isShared", {
        /**
         * Gets the isShared property value. True if the printer is shared; false otherwise. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._isShared;
        },
        /**
         * Sets the isShared property value. True if the printer is shared; false otherwise. Read-only.
         * @param value Value to set for the isShared property.
         */
        set: function (value) {
            this._isShared = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Printer.prototype, "lastSeenDateTime", {
        /**
         * Gets the lastSeenDateTime property value. The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._lastSeenDateTime;
        },
        /**
         * Sets the lastSeenDateTime property value. The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
         * @param value Value to set for the lastSeenDateTime property.
         */
        set: function (value) {
            this._lastSeenDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Printer.prototype, "registeredDateTime", {
        /**
         * Gets the registeredDateTime property value. The DateTimeOffset when the printer was registered. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._registeredDateTime;
        },
        /**
         * Sets the registeredDateTime property value. The DateTimeOffset when the printer was registered. Read-only.
         * @param value Value to set for the registeredDateTime property.
         */
        set: function (value) {
            this._registeredDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Printer.prototype, "shares", {
        /**
         * Gets the shares property value. The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
         * @returns a printerShare
         */
        get: function () {
            return this._shares;
        },
        /**
         * Sets the shares property value. The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
         * @param value Value to set for the shares property.
         */
        set: function (value) {
            this._shares = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Printer.prototype, "taskTriggers", {
        /**
         * Gets the taskTriggers property value. A list of task triggers that are associated with the printer.
         * @returns a printTaskTrigger
         */
        get: function () {
            return this._taskTriggers;
        },
        /**
         * Sets the taskTriggers property value. A list of task triggers that are associated with the printer.
         * @param value Value to set for the taskTriggers property.
         */
        set: function (value) {
            this._taskTriggers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Printer.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["connectors", function (o, n) { o.connectors = n.getCollectionOfObjectValues(printConnector_1.PrintConnector); }],
            ["hasPhysicalDevice", function (o, n) { o.hasPhysicalDevice = n.getBooleanValue(); }],
            ["isShared", function (o, n) { o.isShared = n.getBooleanValue(); }],
            ["lastSeenDateTime", function (o, n) { o.lastSeenDateTime = n.getDateValue(); }],
            ["registeredDateTime", function (o, n) { o.registeredDateTime = n.getDateValue(); }],
            ["shares", function (o, n) { o.shares = n.getCollectionOfObjectValues(printerShare_1.PrinterShare); }],
            ["taskTriggers", function (o, n) { o.taskTriggers = n.getCollectionOfObjectValues(printTaskTrigger_1.PrintTaskTrigger); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Printer.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("connectors", this.connectors);
        writer.writeBooleanValue("hasPhysicalDevice", this.hasPhysicalDevice);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeDateValue("lastSeenDateTime", this.lastSeenDateTime);
        writer.writeDateValue("registeredDateTime", this.registeredDateTime);
        writer.writeCollectionOfObjectValues("shares", this.shares);
        writer.writeCollectionOfObjectValues("taskTriggers", this.taskTriggers);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return Printer;
}(printerBase_1.PrinterBase));
exports.Printer = Printer;

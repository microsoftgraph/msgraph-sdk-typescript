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
exports.PrinterBase = void 0;
var entity_1 = require("../entity");
var printerStatus_1 = require("./printerStatus");
var printJob_1 = require("./printJob");
var PrinterBase = /** @class */ (function (_super) {
    __extends(PrinterBase, _super);
    /**
     * Instantiates a new printerBase and sets the default values.
     */
    function PrinterBase() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PrinterBase.prototype, "capabilities", {
        /**
         * Gets the capabilities property value. The capabilities of the printer/printerShare.
         * @returns a printerCapabilities
         */
        get: function () {
            return this._capabilities;
        },
        /**
         * Sets the capabilities property value. The capabilities of the printer/printerShare.
         * @param value Value to set for the capabilities property.
         */
        set: function (value) {
            this._capabilities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterBase.prototype, "defaults", {
        /**
         * Gets the defaults property value. The default print settings of printer/printerShare.
         * @returns a printerDefaults
         */
        get: function () {
            return this._defaults;
        },
        /**
         * Sets the defaults property value. The default print settings of printer/printerShare.
         * @param value Value to set for the defaults property.
         */
        set: function (value) {
            this._defaults = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterBase.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the printer/printerShare.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the printer/printerShare.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterBase.prototype, "isAcceptingJobs", {
        /**
         * Gets the isAcceptingJobs property value. Whether the printer/printerShare is currently accepting new print jobs.
         * @returns a boolean
         */
        get: function () {
            return this._isAcceptingJobs;
        },
        /**
         * Sets the isAcceptingJobs property value. Whether the printer/printerShare is currently accepting new print jobs.
         * @param value Value to set for the isAcceptingJobs property.
         */
        set: function (value) {
            this._isAcceptingJobs = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterBase.prototype, "jobs", {
        /**
         * Gets the jobs property value. The list of jobs that are queued for printing by the printer/printerShare.
         * @returns a printJob
         */
        get: function () {
            return this._jobs;
        },
        /**
         * Sets the jobs property value. The list of jobs that are queued for printing by the printer/printerShare.
         * @param value Value to set for the jobs property.
         */
        set: function (value) {
            this._jobs = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterBase.prototype, "location", {
        /**
         * Gets the location property value. The physical and/or organizational location of the printer/printerShare.
         * @returns a printerLocation
         */
        get: function () {
            return this._location;
        },
        /**
         * Sets the location property value. The physical and/or organizational location of the printer/printerShare.
         * @param value Value to set for the location property.
         */
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterBase.prototype, "manufacturer", {
        /**
         * Gets the manufacturer property value. The manufacturer of the printer/printerShare.
         * @returns a string
         */
        get: function () {
            return this._manufacturer;
        },
        /**
         * Sets the manufacturer property value. The manufacturer of the printer/printerShare.
         * @param value Value to set for the manufacturer property.
         */
        set: function (value) {
            this._manufacturer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterBase.prototype, "model", {
        /**
         * Gets the model property value. The model name of the printer/printerShare.
         * @returns a string
         */
        get: function () {
            return this._model;
        },
        /**
         * Sets the model property value. The model name of the printer/printerShare.
         * @param value Value to set for the model property.
         */
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterBase.prototype, "status", {
        /**
         * Gets the status property value.
         * @returns a printerStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PrinterBase.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["capabilities", function (o, n) { o.capabilities = n.getObjectValue(PrinterCapabilities); }],
            ["defaults", function (o, n) { o.defaults = n.getObjectValue(PrinterDefaults); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["isAcceptingJobs", function (o, n) { o.isAcceptingJobs = n.getBooleanValue(); }],
            ["jobs", function (o, n) { o.jobs = n.getCollectionOfObjectValues(printJob_1.PrintJob); }],
            ["location", function (o, n) { o.location = n.getObjectValue(PrinterLocation); }],
            ["manufacturer", function (o, n) { o.manufacturer = n.getStringValue(); }],
            ["model", function (o, n) { o.model = n.getStringValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(printerStatus_1.PrinterStatus); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrinterBase.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("capabilities", this.capabilities);
        writer.writeObjectValue("defaults", this.defaults);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isAcceptingJobs", this.isAcceptingJobs);
        writer.writeCollectionOfObjectValues("jobs", this.jobs);
        writer.writeObjectValue("location", this.location);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("model", this.model);
        writer.writeObjectValue("status", this.status);
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
    return PrinterBase;
}(entity_1.Entity));
exports.PrinterBase = PrinterBase;

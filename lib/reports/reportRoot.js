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
exports.ReportRoot = void 0;
var entity_1 = require("../entity");
var printUsageByPrinter_1 = require("./printUsageByPrinter");
var printUsageByUser_1 = require("./printUsageByUser");
var ReportRoot = /** @class */ (function (_super) {
    __extends(ReportRoot, _super);
    /**
     * Instantiates a new ReportRoot and sets the default values.
     */
    function ReportRoot() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ReportRoot.prototype, "dailyPrintUsageByPrinter", {
        /**
         * Gets the dailyPrintUsageByPrinter property value.
         * @returns a printUsageByPrinter
         */
        get: function () {
            return this._dailyPrintUsageByPrinter;
        },
        /**
         * Sets the dailyPrintUsageByPrinter property value.
         * @param value Value to set for the dailyPrintUsageByPrinter property.
         */
        set: function (value) {
            this._dailyPrintUsageByPrinter = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ReportRoot.prototype, "dailyPrintUsageByUser", {
        /**
         * Gets the dailyPrintUsageByUser property value.
         * @returns a printUsageByUser
         */
        get: function () {
            return this._dailyPrintUsageByUser;
        },
        /**
         * Sets the dailyPrintUsageByUser property value.
         * @param value Value to set for the dailyPrintUsageByUser property.
         */
        set: function (value) {
            this._dailyPrintUsageByUser = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ReportRoot.prototype, "monthlyPrintUsageByPrinter", {
        /**
         * Gets the monthlyPrintUsageByPrinter property value.
         * @returns a printUsageByPrinter
         */
        get: function () {
            return this._monthlyPrintUsageByPrinter;
        },
        /**
         * Sets the monthlyPrintUsageByPrinter property value.
         * @param value Value to set for the monthlyPrintUsageByPrinter property.
         */
        set: function (value) {
            this._monthlyPrintUsageByPrinter = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ReportRoot.prototype, "monthlyPrintUsageByUser", {
        /**
         * Gets the monthlyPrintUsageByUser property value.
         * @returns a printUsageByUser
         */
        get: function () {
            return this._monthlyPrintUsageByUser;
        },
        /**
         * Sets the monthlyPrintUsageByUser property value.
         * @param value Value to set for the monthlyPrintUsageByUser property.
         */
        set: function (value) {
            this._monthlyPrintUsageByUser = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ReportRoot.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["dailyPrintUsageByPrinter", function (o, n) { o.dailyPrintUsageByPrinter = n.getCollectionOfObjectValues(printUsageByPrinter_1.PrintUsageByPrinter); }],
            ["dailyPrintUsageByUser", function (o, n) { o.dailyPrintUsageByUser = n.getCollectionOfObjectValues(printUsageByUser_1.PrintUsageByUser); }],
            ["monthlyPrintUsageByPrinter", function (o, n) { o.monthlyPrintUsageByPrinter = n.getCollectionOfObjectValues(printUsageByPrinter_1.PrintUsageByPrinter); }],
            ["monthlyPrintUsageByUser", function (o, n) { o.monthlyPrintUsageByUser = n.getCollectionOfObjectValues(printUsageByUser_1.PrintUsageByUser); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ReportRoot.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("dailyPrintUsageByPrinter", this.dailyPrintUsageByPrinter);
        writer.writeCollectionOfObjectValues("dailyPrintUsageByUser", this.dailyPrintUsageByUser);
        writer.writeCollectionOfObjectValues("monthlyPrintUsageByPrinter", this.monthlyPrintUsageByPrinter);
        writer.writeCollectionOfObjectValues("monthlyPrintUsageByUser", this.monthlyPrintUsageByUser);
    };
    ;
    ;
    ;
    ;
    ;
    return ReportRoot;
}(entity_1.Entity));
exports.ReportRoot = ReportRoot;

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
exports.PrintUsage = void 0;
var entity_1 = require("../entity");
var PrintUsage = /** @class */ (function (_super) {
    __extends(PrintUsage, _super);
    /**
     * Instantiates a new printUsage and sets the default values.
     */
    function PrintUsage() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PrintUsage.prototype, "completedBlackAndWhiteJobCount", {
        /**
         * Gets the completedBlackAndWhiteJobCount property value.
         * @returns a int64
         */
        get: function () {
            return this._completedBlackAndWhiteJobCount;
        },
        /**
         * Sets the completedBlackAndWhiteJobCount property value.
         * @param value Value to set for the completedBlackAndWhiteJobCount property.
         */
        set: function (value) {
            this._completedBlackAndWhiteJobCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintUsage.prototype, "completedColorJobCount", {
        /**
         * Gets the completedColorJobCount property value.
         * @returns a int64
         */
        get: function () {
            return this._completedColorJobCount;
        },
        /**
         * Sets the completedColorJobCount property value.
         * @param value Value to set for the completedColorJobCount property.
         */
        set: function (value) {
            this._completedColorJobCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintUsage.prototype, "incompleteJobCount", {
        /**
         * Gets the incompleteJobCount property value.
         * @returns a int64
         */
        get: function () {
            return this._incompleteJobCount;
        },
        /**
         * Sets the incompleteJobCount property value.
         * @param value Value to set for the incompleteJobCount property.
         */
        set: function (value) {
            this._incompleteJobCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintUsage.prototype, "usageDate", {
        /**
         * Gets the usageDate property value.
         * @returns a string
         */
        get: function () {
            return this._usageDate;
        },
        /**
         * Sets the usageDate property value.
         * @param value Value to set for the usageDate property.
         */
        set: function (value) {
            this._usageDate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PrintUsage.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["completedBlackAndWhiteJobCount", function (o, n) { o.completedBlackAndWhiteJobCount = n.getObjectValue(Int64); }],
            ["completedColorJobCount", function (o, n) { o.completedColorJobCount = n.getObjectValue(Int64); }],
            ["incompleteJobCount", function (o, n) { o.incompleteJobCount = n.getObjectValue(Int64); }],
            ["usageDate", function (o, n) { o.usageDate = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintUsage.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("completedBlackAndWhiteJobCount", this.completedBlackAndWhiteJobCount);
        writer.writeObjectValue("completedColorJobCount", this.completedColorJobCount);
        writer.writeObjectValue("incompleteJobCount", this.incompleteJobCount);
        writer.writeStringValue("usageDate", this.usageDate);
    };
    ;
    ;
    ;
    ;
    ;
    return PrintUsage;
}(entity_1.Entity));
exports.PrintUsage = PrintUsage;

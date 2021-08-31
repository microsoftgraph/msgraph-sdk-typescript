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
exports.PrintConnector = void 0;
var entity_1 = require("../entity");
var PrintConnector = /** @class */ (function (_super) {
    __extends(PrintConnector, _super);
    /**
     * Instantiates a new printConnector and sets the default values.
     */
    function PrintConnector() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PrintConnector.prototype, "appVersion", {
        /**
         * Gets the appVersion property value. The connector's version.
         * @returns a string
         */
        get: function () {
            return this._appVersion;
        },
        /**
         * Sets the appVersion property value. The connector's version.
         * @param value Value to set for the appVersion property.
         */
        set: function (value) {
            this._appVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintConnector.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the connector.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the connector.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintConnector.prototype, "fullyQualifiedDomainName", {
        /**
         * Gets the fullyQualifiedDomainName property value. The connector machine's hostname.
         * @returns a string
         */
        get: function () {
            return this._fullyQualifiedDomainName;
        },
        /**
         * Sets the fullyQualifiedDomainName property value. The connector machine's hostname.
         * @param value Value to set for the fullyQualifiedDomainName property.
         */
        set: function (value) {
            this._fullyQualifiedDomainName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintConnector.prototype, "location", {
        /**
         * Gets the location property value. The physical and/or organizational location of the connector.
         * @returns a printerLocation
         */
        get: function () {
            return this._location;
        },
        /**
         * Sets the location property value. The physical and/or organizational location of the connector.
         * @param value Value to set for the location property.
         */
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintConnector.prototype, "operatingSystem", {
        /**
         * Gets the operatingSystem property value. The connector machine's operating system version.
         * @returns a string
         */
        get: function () {
            return this._operatingSystem;
        },
        /**
         * Sets the operatingSystem property value. The connector machine's operating system version.
         * @param value Value to set for the operatingSystem property.
         */
        set: function (value) {
            this._operatingSystem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintConnector.prototype, "registeredDateTime", {
        /**
         * Gets the registeredDateTime property value. The DateTimeOffset when the connector was registered.
         * @returns a Date
         */
        get: function () {
            return this._registeredDateTime;
        },
        /**
         * Sets the registeredDateTime property value. The DateTimeOffset when the connector was registered.
         * @param value Value to set for the registeredDateTime property.
         */
        set: function (value) {
            this._registeredDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PrintConnector.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appVersion", function (o, n) { o.appVersion = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["fullyQualifiedDomainName", function (o, n) { o.fullyQualifiedDomainName = n.getStringValue(); }],
            ["location", function (o, n) { o.location = n.getObjectValue(PrinterLocation); }],
            ["operatingSystem", function (o, n) { o.operatingSystem = n.getStringValue(); }],
            ["registeredDateTime", function (o, n) { o.registeredDateTime = n.getDateValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintConnector.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("appVersion", this.appVersion);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("fullyQualifiedDomainName", this.fullyQualifiedDomainName);
        writer.writeObjectValue("location", this.location);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeDateValue("registeredDateTime", this.registeredDateTime);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return PrintConnector;
}(entity_1.Entity));
exports.PrintConnector = PrintConnector;

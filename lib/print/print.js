"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
var printConnector_1 = require("./printConnector");
var printer_1 = require("./printer");
var printerShare_1 = require("./printerShare");
var printOperation_1 = require("./printOperation");
var printService_1 = require("./printService");
var printTaskDefinition_1 = require("./printTaskDefinition");
var Print = /** @class */ (function () {
    /**
     * Instantiates a new Print and sets the default values.
     */
    function Print() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(Print.prototype, "additionalData", {
        /**
         * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @returns a Map<string, unknown>
         */
        get: function () {
            return this._additionalData;
        },
        /**
         * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @param value Value to set for the AdditionalData property.
         */
        set: function (value) {
            this._additionalData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Print.prototype, "connectors", {
        /**
         * Gets the connectors property value. The list of available print connectors.
         * @returns a printConnector
         */
        get: function () {
            return this._connectors;
        },
        /**
         * Sets the connectors property value. The list of available print connectors.
         * @param value Value to set for the connectors property.
         */
        set: function (value) {
            this._connectors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Print.prototype, "operations", {
        /**
         * Gets the operations property value. The list of print long running operations.
         * @returns a printOperation
         */
        get: function () {
            return this._operations;
        },
        /**
         * Sets the operations property value. The list of print long running operations.
         * @param value Value to set for the operations property.
         */
        set: function (value) {
            this._operations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Print.prototype, "printers", {
        /**
         * Gets the printers property value. The list of printers registered in the tenant.
         * @returns a printer
         */
        get: function () {
            return this._printers;
        },
        /**
         * Sets the printers property value. The list of printers registered in the tenant.
         * @param value Value to set for the printers property.
         */
        set: function (value) {
            this._printers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Print.prototype, "services", {
        /**
         * Gets the services property value. The list of available Universal Print service endpoints.
         * @returns a printService
         */
        get: function () {
            return this._services;
        },
        /**
         * Sets the services property value. The list of available Universal Print service endpoints.
         * @param value Value to set for the services property.
         */
        set: function (value) {
            this._services = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Print.prototype, "settings", {
        /**
         * Gets the settings property value. Tenant-wide settings for the Universal Print service.
         * @returns a printSettings
         */
        get: function () {
            return this._settings;
        },
        /**
         * Sets the settings property value. Tenant-wide settings for the Universal Print service.
         * @param value Value to set for the settings property.
         */
        set: function (value) {
            this._settings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Print.prototype, "shares", {
        /**
         * Gets the shares property value. The list of printer shares registered in the tenant.
         * @returns a printerShare
         */
        get: function () {
            return this._shares;
        },
        /**
         * Sets the shares property value. The list of printer shares registered in the tenant.
         * @param value Value to set for the shares property.
         */
        set: function (value) {
            this._shares = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Print.prototype, "taskDefinitions", {
        /**
         * Gets the taskDefinitions property value. List of abstract definition for a task that can be triggered when various events occur within Universal Print.
         * @returns a printTaskDefinition
         */
        get: function () {
            return this._taskDefinitions;
        },
        /**
         * Sets the taskDefinitions property value. List of abstract definition for a task that can be triggered when various events occur within Universal Print.
         * @param value Value to set for the taskDefinitions property.
         */
        set: function (value) {
            this._taskDefinitions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Print.prototype.getFieldDeserializers = function () {
        return new Map([
            ["connectors", function (o, n) { o.connectors = n.getCollectionOfObjectValues(printConnector_1.PrintConnector); }],
            ["operations", function (o, n) { o.operations = n.getCollectionOfObjectValues(printOperation_1.PrintOperation); }],
            ["printers", function (o, n) { o.printers = n.getCollectionOfObjectValues(printer_1.Printer); }],
            ["services", function (o, n) { o.services = n.getCollectionOfObjectValues(printService_1.PrintService); }],
            ["settings", function (o, n) { o.settings = n.getObjectValue(PrintSettings); }],
            ["shares", function (o, n) { o.shares = n.getCollectionOfObjectValues(printerShare_1.PrinterShare); }],
            ["taskDefinitions", function (o, n) { o.taskDefinitions = n.getCollectionOfObjectValues(printTaskDefinition_1.PrintTaskDefinition); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Print.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues("connectors", this.connectors);
        writer.writeCollectionOfObjectValues("operations", this.operations);
        writer.writeCollectionOfObjectValues("printers", this.printers);
        writer.writeCollectionOfObjectValues("services", this.services);
        writer.writeObjectValue("settings", this.settings);
        writer.writeCollectionOfObjectValues("shares", this.shares);
        writer.writeCollectionOfObjectValues("taskDefinitions", this.taskDefinitions);
        writer.writeAdditionalData(this.additionalData);
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
    return Print;
}());
exports.Print = Print;

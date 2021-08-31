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
exports.DeviceManagementExchangeConnector = void 0;
var entity_1 = require("../entity");
var DeviceManagementExchangeConnector = /** @class */ (function (_super) {
    __extends(DeviceManagementExchangeConnector, _super);
    /**
     * Instantiates a new deviceManagementExchangeConnector and sets the default values.
     */
    function DeviceManagementExchangeConnector() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceManagementExchangeConnector.prototype, "connectorServerName", {
        /**
         * Gets the connectorServerName property value. The name of the server hosting the Exchange Connector.
         * @returns a string
         */
        get: function () {
            return this._connectorServerName;
        },
        /**
         * Sets the connectorServerName property value. The name of the server hosting the Exchange Connector.
         * @param value Value to set for the connectorServerName property.
         */
        set: function (value) {
            this._connectorServerName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementExchangeConnector.prototype, "exchangeAlias", {
        /**
         * Gets the exchangeAlias property value. An alias assigned to the Exchange server
         * @returns a string
         */
        get: function () {
            return this._exchangeAlias;
        },
        /**
         * Sets the exchangeAlias property value. An alias assigned to the Exchange server
         * @param value Value to set for the exchangeAlias property.
         */
        set: function (value) {
            this._exchangeAlias = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementExchangeConnector.prototype, "exchangeConnectorType", {
        /**
         * Gets the exchangeConnectorType property value. The type of Exchange Connector Configured. Possible values are: onPremises, hosted, serviceToService, dedicated.
         * @returns a deviceManagementExchangeConnectorType
         */
        get: function () {
            return this._exchangeConnectorType;
        },
        /**
         * Sets the exchangeConnectorType property value. The type of Exchange Connector Configured. Possible values are: onPremises, hosted, serviceToService, dedicated.
         * @param value Value to set for the exchangeConnectorType property.
         */
        set: function (value) {
            this._exchangeConnectorType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementExchangeConnector.prototype, "exchangeOrganization", {
        /**
         * Gets the exchangeOrganization property value. Exchange Organization to the Exchange server
         * @returns a string
         */
        get: function () {
            return this._exchangeOrganization;
        },
        /**
         * Sets the exchangeOrganization property value. Exchange Organization to the Exchange server
         * @param value Value to set for the exchangeOrganization property.
         */
        set: function (value) {
            this._exchangeOrganization = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementExchangeConnector.prototype, "lastSyncDateTime", {
        /**
         * Gets the lastSyncDateTime property value. Last sync time for the Exchange Connector
         * @returns a Date
         */
        get: function () {
            return this._lastSyncDateTime;
        },
        /**
         * Sets the lastSyncDateTime property value. Last sync time for the Exchange Connector
         * @param value Value to set for the lastSyncDateTime property.
         */
        set: function (value) {
            this._lastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementExchangeConnector.prototype, "primarySmtpAddress", {
        /**
         * Gets the primarySmtpAddress property value. Email address used to configure the Service To Service Exchange Connector.
         * @returns a string
         */
        get: function () {
            return this._primarySmtpAddress;
        },
        /**
         * Sets the primarySmtpAddress property value. Email address used to configure the Service To Service Exchange Connector.
         * @param value Value to set for the primarySmtpAddress property.
         */
        set: function (value) {
            this._primarySmtpAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementExchangeConnector.prototype, "serverName", {
        /**
         * Gets the serverName property value. The name of the Exchange server.
         * @returns a string
         */
        get: function () {
            return this._serverName;
        },
        /**
         * Sets the serverName property value. The name of the Exchange server.
         * @param value Value to set for the serverName property.
         */
        set: function (value) {
            this._serverName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementExchangeConnector.prototype, "status", {
        /**
         * Gets the status property value. Exchange Connector Status. Possible values are: none, connectionPending, connected, disconnected.
         * @returns a deviceManagementExchangeConnectorStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Exchange Connector Status. Possible values are: none, connectionPending, connected, disconnected.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementExchangeConnector.prototype, "version", {
        /**
         * Gets the version property value. The version of the ExchangeConnectorAgent
         * @returns a string
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. The version of the ExchangeConnectorAgent
         * @param value Value to set for the version property.
         */
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceManagementExchangeConnector.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["connectorServerName", function (o, n) { o.connectorServerName = n.getStringValue(); }],
            ["exchangeAlias", function (o, n) { o.exchangeAlias = n.getStringValue(); }],
            ["exchangeConnectorType", function (o, n) { o.exchangeConnectorType = n.getObjectValue(DeviceManagementExchangeConnectorType); }],
            ["exchangeOrganization", function (o, n) { o.exchangeOrganization = n.getStringValue(); }],
            ["lastSyncDateTime", function (o, n) { o.lastSyncDateTime = n.getDateValue(); }],
            ["primarySmtpAddress", function (o, n) { o.primarySmtpAddress = n.getStringValue(); }],
            ["serverName", function (o, n) { o.serverName = n.getStringValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(DeviceManagementExchangeConnectorStatus); }],
            ["version", function (o, n) { o.version = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceManagementExchangeConnector.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("connectorServerName", this.connectorServerName);
        writer.writeStringValue("exchangeAlias", this.exchangeAlias);
        writer.writeObjectValue("exchangeConnectorType", this.exchangeConnectorType);
        writer.writeStringValue("exchangeOrganization", this.exchangeOrganization);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("primarySmtpAddress", this.primarySmtpAddress);
        writer.writeStringValue("serverName", this.serverName);
        writer.writeObjectValue("status", this.status);
        writer.writeStringValue("version", this.version);
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
    return DeviceManagementExchangeConnector;
}(entity_1.Entity));
exports.DeviceManagementExchangeConnector = DeviceManagementExchangeConnector;

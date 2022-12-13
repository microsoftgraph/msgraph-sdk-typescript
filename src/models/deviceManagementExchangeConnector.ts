import {DeviceManagementExchangeConnectorStatus} from './deviceManagementExchangeConnectorStatus';
import {DeviceManagementExchangeConnectorType} from './deviceManagementExchangeConnectorType';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Entity which represents a connection to an Exchange environment.
 */
export class DeviceManagementExchangeConnector extends Entity implements Parsable {
    /** The name of the server hosting the Exchange Connector. */
    private _connectorServerName?: string | undefined;
    /** An alias assigned to the Exchange server */
    private _exchangeAlias?: string | undefined;
    /** The type of Exchange Connector. */
    private _exchangeConnectorType?: DeviceManagementExchangeConnectorType | undefined;
    /** Exchange Organization to the Exchange server */
    private _exchangeOrganization?: string | undefined;
    /** Last sync time for the Exchange Connector */
    private _lastSyncDateTime?: Date | undefined;
    /** Email address used to configure the Service To Service Exchange Connector. */
    private _primarySmtpAddress?: string | undefined;
    /** The name of the Exchange server. */
    private _serverName?: string | undefined;
    /** The current status of the Exchange Connector. */
    private _status?: DeviceManagementExchangeConnectorStatus | undefined;
    /** The version of the ExchangeConnectorAgent */
    private _version?: string | undefined;
    /**
     * Gets the connectorServerName property value. The name of the server hosting the Exchange Connector.
     * @returns a string
     */
    public get connectorServerName() {
        return this._connectorServerName;
    };
    /**
     * Sets the connectorServerName property value. The name of the server hosting the Exchange Connector.
     * @param value Value to set for the connectorServerName property.
     */
    public set connectorServerName(value: string | undefined) {
        this._connectorServerName = value;
    };
    /**
     * Instantiates a new deviceManagementExchangeConnector and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the exchangeAlias property value. An alias assigned to the Exchange server
     * @returns a string
     */
    public get exchangeAlias() {
        return this._exchangeAlias;
    };
    /**
     * Sets the exchangeAlias property value. An alias assigned to the Exchange server
     * @param value Value to set for the exchangeAlias property.
     */
    public set exchangeAlias(value: string | undefined) {
        this._exchangeAlias = value;
    };
    /**
     * Gets the exchangeConnectorType property value. The type of Exchange Connector.
     * @returns a deviceManagementExchangeConnectorType
     */
    public get exchangeConnectorType() {
        return this._exchangeConnectorType;
    };
    /**
     * Sets the exchangeConnectorType property value. The type of Exchange Connector.
     * @param value Value to set for the exchangeConnectorType property.
     */
    public set exchangeConnectorType(value: DeviceManagementExchangeConnectorType | undefined) {
        this._exchangeConnectorType = value;
    };
    /**
     * Gets the exchangeOrganization property value. Exchange Organization to the Exchange server
     * @returns a string
     */
    public get exchangeOrganization() {
        return this._exchangeOrganization;
    };
    /**
     * Sets the exchangeOrganization property value. Exchange Organization to the Exchange server
     * @param value Value to set for the exchangeOrganization property.
     */
    public set exchangeOrganization(value: string | undefined) {
        this._exchangeOrganization = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "connectorServerName": n => { this.connectorServerName = n.getStringValue(); },
            "exchangeAlias": n => { this.exchangeAlias = n.getStringValue(); },
            "exchangeConnectorType": n => { this.exchangeConnectorType = n.getEnumValue<DeviceManagementExchangeConnectorType>(DeviceManagementExchangeConnectorType); },
            "exchangeOrganization": n => { this.exchangeOrganization = n.getStringValue(); },
            "lastSyncDateTime": n => { this.lastSyncDateTime = n.getDateValue(); },
            "primarySmtpAddress": n => { this.primarySmtpAddress = n.getStringValue(); },
            "serverName": n => { this.serverName = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<DeviceManagementExchangeConnectorStatus>(DeviceManagementExchangeConnectorStatus); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastSyncDateTime property value. Last sync time for the Exchange Connector
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Sets the lastSyncDateTime property value. Last sync time for the Exchange Connector
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Gets the primarySmtpAddress property value. Email address used to configure the Service To Service Exchange Connector.
     * @returns a string
     */
    public get primarySmtpAddress() {
        return this._primarySmtpAddress;
    };
    /**
     * Sets the primarySmtpAddress property value. Email address used to configure the Service To Service Exchange Connector.
     * @param value Value to set for the primarySmtpAddress property.
     */
    public set primarySmtpAddress(value: string | undefined) {
        this._primarySmtpAddress = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("connectorServerName", this.connectorServerName);
        writer.writeStringValue("exchangeAlias", this.exchangeAlias);
        writer.writeEnumValue<DeviceManagementExchangeConnectorType>("exchangeConnectorType", this.exchangeConnectorType);
        writer.writeStringValue("exchangeOrganization", this.exchangeOrganization);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("primarySmtpAddress", this.primarySmtpAddress);
        writer.writeStringValue("serverName", this.serverName);
        writer.writeEnumValue<DeviceManagementExchangeConnectorStatus>("status", this.status);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the serverName property value. The name of the Exchange server.
     * @returns a string
     */
    public get serverName() {
        return this._serverName;
    };
    /**
     * Sets the serverName property value. The name of the Exchange server.
     * @param value Value to set for the serverName property.
     */
    public set serverName(value: string | undefined) {
        this._serverName = value;
    };
    /**
     * Gets the status property value. The current status of the Exchange Connector.
     * @returns a deviceManagementExchangeConnectorStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The current status of the Exchange Connector.
     * @param value Value to set for the status property.
     */
    public set status(value: DeviceManagementExchangeConnectorStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the version property value. The version of the ExchangeConnectorAgent
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version of the ExchangeConnectorAgent
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}

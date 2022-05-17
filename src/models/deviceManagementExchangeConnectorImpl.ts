import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {DeviceManagementExchangeConnectorStatus} from './deviceManagementExchangeConnectorStatus';
import {DeviceManagementExchangeConnectorType} from './deviceManagementExchangeConnectorType';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementExchangeConnectorImpl extends EntityImpl implements DeviceManagementExchangeConnector, Parsable {
    /** The name of the server hosting the Exchange Connector. */
    connectorServerName?: string | undefined;
    /** An alias assigned to the Exchange server */
    exchangeAlias?: string | undefined;
    /** The type of Exchange Connector Configured. Possible values are: onPremises, hosted, serviceToService, dedicated. */
    exchangeConnectorType?: DeviceManagementExchangeConnectorType | undefined;
    /** Exchange Organization to the Exchange server */
    exchangeOrganization?: string | undefined;
    /** Last sync time for the Exchange Connector */
    lastSyncDateTime?: Date | undefined;
    /** Email address used to configure the Service To Service Exchange Connector. */
    primarySmtpAddress?: string | undefined;
    /** The name of the Exchange server. */
    serverName?: string | undefined;
    /** Exchange Connector Status. Possible values are: none, connectionPending, connected, disconnected. */
    status?: DeviceManagementExchangeConnectorStatus | undefined;
    /** The version of the ExchangeConnectorAgent */
    version?: string | undefined;
    /**
     * Instantiates a new deviceManagementExchangeConnector and sets the default values.
     * @param deviceManagementExchangeConnectorParameterValue 
     */
    public constructor(deviceManagementExchangeConnectorParameterValue?: DeviceManagementExchangeConnector | undefined) {
        super();
        this.connectorServerName = deviceManagementExchangeConnectorParameterValue?.connectorServerName ;
        this.exchangeAlias = deviceManagementExchangeConnectorParameterValue?.exchangeAlias ;
        this.exchangeConnectorType = deviceManagementExchangeConnectorParameterValue?.exchangeConnectorType ;
        this.exchangeOrganization = deviceManagementExchangeConnectorParameterValue?.exchangeOrganization ;
        this.lastSyncDateTime = deviceManagementExchangeConnectorParameterValue?.lastSyncDateTime ;
        this.primarySmtpAddress = deviceManagementExchangeConnectorParameterValue?.primarySmtpAddress ;
        this.serverName = deviceManagementExchangeConnectorParameterValue?.serverName ;
        this.status = deviceManagementExchangeConnectorParameterValue?.status ;
        this.version = deviceManagementExchangeConnectorParameterValue?.version ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.connectorServerName){
        if(this.connectorServerName)
        writer.writeStringValue("connectorServerName", this.connectorServerName);
        }
        if(this.exchangeAlias){
        if(this.exchangeAlias)
        writer.writeStringValue("exchangeAlias", this.exchangeAlias);
        }
        if(this.exchangeConnectorType){
        if(this.exchangeConnectorType)
        writer.writeEnumValue<DeviceManagementExchangeConnectorType>("exchangeConnectorType", this.exchangeConnectorType);
        }
        if(this.exchangeOrganization){
        if(this.exchangeOrganization)
        writer.writeStringValue("exchangeOrganization", this.exchangeOrganization);
        }
        if(this.lastSyncDateTime){
        if(this.lastSyncDateTime)
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        }
        if(this.primarySmtpAddress){
        if(this.primarySmtpAddress)
        writer.writeStringValue("primarySmtpAddress", this.primarySmtpAddress);
        }
        if(this.serverName){
        if(this.serverName)
        writer.writeStringValue("serverName", this.serverName);
        }
        if(this.status){
        if(this.status)
        writer.writeEnumValue<DeviceManagementExchangeConnectorStatus>("status", this.status);
        }
        if(this.version){
        if(this.version)
        writer.writeStringValue("version", this.version);
        }
    };
}

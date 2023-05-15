import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {DeviceManagementExchangeConnectorStatus} from './deviceManagementExchangeConnectorStatus';
import {DeviceManagementExchangeConnectorType} from './deviceManagementExchangeConnectorType';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementExchangeConnector(writer: SerializationWriter, deviceManagementExchangeConnector: DeviceManagementExchangeConnector | undefined = {} as DeviceManagementExchangeConnector) : void {
        serializeEntity(writer, deviceManagementExchangeConnector)
        writer.writeStringValue("connectorServerName", deviceManagementExchangeConnector.connectorServerName);
        writer.writeStringValue("exchangeAlias", deviceManagementExchangeConnector.exchangeAlias);
        writer.writeEnumValue<DeviceManagementExchangeConnectorType>("exchangeConnectorType", deviceManagementExchangeConnector.exchangeConnectorType);
        writer.writeStringValue("exchangeOrganization", deviceManagementExchangeConnector.exchangeOrganization);
        writer.writeDateValue("lastSyncDateTime", deviceManagementExchangeConnector.lastSyncDateTime);
        writer.writeStringValue("primarySmtpAddress", deviceManagementExchangeConnector.primarySmtpAddress);
        writer.writeStringValue("serverName", deviceManagementExchangeConnector.serverName);
        writer.writeEnumValue<DeviceManagementExchangeConnectorStatus>("status", deviceManagementExchangeConnector.status);
        writer.writeStringValue("version", deviceManagementExchangeConnector.version);
}

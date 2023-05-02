import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {DeviceManagementExchangeConnectorStatus} from './deviceManagementExchangeConnectorStatus';
import {DeviceManagementExchangeConnectorType} from './deviceManagementExchangeConnectorType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExchangeConnector(deviceManagementExchangeConnector: DeviceManagementExchangeConnector | undefined = {} as DeviceManagementExchangeConnector) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementExchangeConnector),
        "connectorServerName": n => { deviceManagementExchangeConnector.connectorServerName = n.getStringValue(); },
        "exchangeAlias": n => { deviceManagementExchangeConnector.exchangeAlias = n.getStringValue(); },
        "exchangeConnectorType": n => { deviceManagementExchangeConnector.exchangeConnectorType = n.getEnumValue<DeviceManagementExchangeConnectorType>(DeviceManagementExchangeConnectorType); },
        "exchangeOrganization": n => { deviceManagementExchangeConnector.exchangeOrganization = n.getStringValue(); },
        "lastSyncDateTime": n => { deviceManagementExchangeConnector.lastSyncDateTime = n.getDateValue(); },
        "primarySmtpAddress": n => { deviceManagementExchangeConnector.primarySmtpAddress = n.getStringValue(); },
        "serverName": n => { deviceManagementExchangeConnector.serverName = n.getStringValue(); },
        "status": n => { deviceManagementExchangeConnector.status = n.getEnumValue<DeviceManagementExchangeConnectorStatus>(DeviceManagementExchangeConnectorStatus); },
        "version": n => { deviceManagementExchangeConnector.version = n.getStringValue(); },
    }
}

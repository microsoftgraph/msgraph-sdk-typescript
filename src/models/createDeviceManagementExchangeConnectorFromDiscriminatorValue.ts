import { deserializeIntoDeviceManagementExchangeConnector } from './deserializeIntoDeviceManagementExchangeConnector';
import { type DeviceManagementExchangeConnector } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceManagementExchangeConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementExchangeConnector;
}

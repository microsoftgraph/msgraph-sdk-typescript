import {deserializeIntoDeviceManagementExchangeConnector} from './deserializeIntoDeviceManagementExchangeConnector';
import {DeviceManagementExchangeConnector} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementExchangeConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementExchangeConnector;
}

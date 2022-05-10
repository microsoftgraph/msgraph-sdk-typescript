import {DeviceManagementExchangeConnectorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementExchangeConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementExchangeConnectorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementExchangeConnectorImpl();
}

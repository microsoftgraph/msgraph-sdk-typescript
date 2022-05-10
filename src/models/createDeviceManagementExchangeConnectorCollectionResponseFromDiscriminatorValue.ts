import {DeviceManagementExchangeConnectorCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementExchangeConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementExchangeConnectorCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementExchangeConnectorCollectionResponseImpl();
}

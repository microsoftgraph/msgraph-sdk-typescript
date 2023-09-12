import { deserializeIntoDeviceManagementExchangeConnectorCollectionResponse } from './deserializeIntoDeviceManagementExchangeConnectorCollectionResponse';
import { type DeviceManagementExchangeConnectorCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceManagementExchangeConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementExchangeConnectorCollectionResponse;
}

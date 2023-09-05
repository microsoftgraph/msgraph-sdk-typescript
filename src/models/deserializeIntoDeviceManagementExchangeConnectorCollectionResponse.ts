import { createDeviceManagementExchangeConnectorFromDiscriminatorValue } from './createDeviceManagementExchangeConnectorFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DeviceManagementExchangeConnector } from './deviceManagementExchangeConnector';
import { type DeviceManagementExchangeConnectorCollectionResponse } from './deviceManagementExchangeConnectorCollectionResponse';
import { serializeDeviceManagementExchangeConnector } from './serializeDeviceManagementExchangeConnector';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExchangeConnectorCollectionResponse(deviceManagementExchangeConnectorCollectionResponse: DeviceManagementExchangeConnectorCollectionResponse | undefined = {} as DeviceManagementExchangeConnectorCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementExchangeConnectorCollectionResponse),
        "value": n => { deviceManagementExchangeConnectorCollectionResponse.value = n.getCollectionOfObjectValues<DeviceManagementExchangeConnector>(createDeviceManagementExchangeConnectorFromDiscriminatorValue); },
    }
}

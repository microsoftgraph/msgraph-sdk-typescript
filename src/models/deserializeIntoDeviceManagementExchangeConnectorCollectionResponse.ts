import {createDeviceManagementExchangeConnectorFromDiscriminatorValue} from './createDeviceManagementExchangeConnectorFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {DeviceManagementExchangeConnectorCollectionResponse} from './deviceManagementExchangeConnectorCollectionResponse';
import {serializeDeviceManagementExchangeConnector} from './serializeDeviceManagementExchangeConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExchangeConnectorCollectionResponse(deviceManagementExchangeConnectorCollectionResponse: DeviceManagementExchangeConnectorCollectionResponse | undefined = {} as DeviceManagementExchangeConnectorCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementExchangeConnectorCollectionResponse),
        "value": n => { deviceManagementExchangeConnectorCollectionResponse.value = n.getCollectionOfObjectValues<DeviceManagementExchangeConnector>(createDeviceManagementExchangeConnectorFromDiscriminatorValue); },
    }
}

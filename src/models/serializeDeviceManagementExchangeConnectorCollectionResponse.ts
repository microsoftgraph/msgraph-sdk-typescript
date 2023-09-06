import { type DeviceManagementExchangeConnector } from './deviceManagementExchangeConnector';
import { type DeviceManagementExchangeConnectorCollectionResponse } from './deviceManagementExchangeConnectorCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceManagementExchangeConnector } from './serializeDeviceManagementExchangeConnector';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementExchangeConnectorCollectionResponse(writer: SerializationWriter, deviceManagementExchangeConnectorCollectionResponse: DeviceManagementExchangeConnectorCollectionResponse | undefined = {} as DeviceManagementExchangeConnectorCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementExchangeConnectorCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceManagementExchangeConnector>("value", deviceManagementExchangeConnectorCollectionResponse.value, serializeDeviceManagementExchangeConnector);
}

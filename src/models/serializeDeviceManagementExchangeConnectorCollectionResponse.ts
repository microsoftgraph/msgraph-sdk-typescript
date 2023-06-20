import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {DeviceManagementExchangeConnectorCollectionResponse} from './deviceManagementExchangeConnectorCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceManagementExchangeConnector} from './serializeDeviceManagementExchangeConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementExchangeConnectorCollectionResponse(deviceManagementExchangeConnectorCollectionResponse: DeviceManagementExchangeConnectorCollectionResponse | undefined = {} as DeviceManagementExchangeConnectorCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementExchangeConnectorCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceManagementExchangeConnector>("value", deviceManagementExchangeConnectorCollectionResponse.value, serializeDeviceManagementExchangeConnector);
}

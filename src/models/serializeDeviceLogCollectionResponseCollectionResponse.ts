import { type DeviceLogCollectionResponse } from './deviceLogCollectionResponse';
import { type DeviceLogCollectionResponseCollectionResponse } from './deviceLogCollectionResponseCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceLogCollectionResponse } from './serializeDeviceLogCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceLogCollectionResponseCollectionResponse(writer: SerializationWriter, deviceLogCollectionResponseCollectionResponse: DeviceLogCollectionResponseCollectionResponse | undefined = {} as DeviceLogCollectionResponseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceLogCollectionResponseCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceLogCollectionResponse>("value", deviceLogCollectionResponseCollectionResponse.value, serializeDeviceLogCollectionResponse);
}

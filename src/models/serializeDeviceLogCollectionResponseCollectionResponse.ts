import {DeviceLogCollectionResponse} from './deviceLogCollectionResponse';
import {DeviceLogCollectionResponseCollectionResponse} from './deviceLogCollectionResponseCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceLogCollectionResponse} from './serializeDeviceLogCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceLogCollectionResponseCollectionResponse(writer: SerializationWriter, deviceLogCollectionResponseCollectionResponse: DeviceLogCollectionResponseCollectionResponse | undefined = {} as DeviceLogCollectionResponseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceLogCollectionResponseCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceLogCollectionResponse>("value", deviceLogCollectionResponseCollectionResponse.value, serializeDeviceLogCollectionResponse);
}

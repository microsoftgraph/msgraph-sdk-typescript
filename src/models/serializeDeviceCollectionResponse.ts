import {Device} from './device';
import {DeviceCollectionResponse} from './deviceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDevice} from './serializeDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCollectionResponse(writer: SerializationWriter, deviceCollectionResponse: DeviceCollectionResponse | undefined = {} as DeviceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCollectionResponse)
        writer.writeCollectionOfObjectValues<Device>("value", deviceCollectionResponse.value, serializeDevice);
}

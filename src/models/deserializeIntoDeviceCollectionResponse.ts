import {createDeviceFromDiscriminatorValue} from './createDeviceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {Device} from './device';
import {DeviceCollectionResponse} from './deviceCollectionResponse';
import {serializeDevice} from './serializeDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCollectionResponse(deviceCollectionResponse: DeviceCollectionResponse | undefined = {} as DeviceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCollectionResponse),
        "value": n => { deviceCollectionResponse.value = n.getCollectionOfObjectValues<Device>(createDeviceFromDiscriminatorValue); },
    }
}

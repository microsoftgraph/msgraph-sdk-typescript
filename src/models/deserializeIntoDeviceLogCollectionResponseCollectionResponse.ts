import {createDeviceLogCollectionResponseFromDiscriminatorValue} from './createDeviceLogCollectionResponseFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceLogCollectionResponse} from './deviceLogCollectionResponse';
import {DeviceLogCollectionResponseCollectionResponse} from './deviceLogCollectionResponseCollectionResponse';
import {serializeDeviceLogCollectionResponse} from './serializeDeviceLogCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceLogCollectionResponseCollectionResponse(deviceLogCollectionResponseCollectionResponse: DeviceLogCollectionResponseCollectionResponse | undefined = {} as DeviceLogCollectionResponseCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceLogCollectionResponseCollectionResponse),
        "value": n => { deviceLogCollectionResponseCollectionResponse.value = n.getCollectionOfObjectValues<DeviceLogCollectionResponse>(createDeviceLogCollectionResponseFromDiscriminatorValue); },
    }
}

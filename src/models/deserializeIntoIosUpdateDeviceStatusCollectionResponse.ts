import { createIosUpdateDeviceStatusFromDiscriminatorValue } from './createIosUpdateDeviceStatusFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IosUpdateDeviceStatus } from './iosUpdateDeviceStatus';
import { type IosUpdateDeviceStatusCollectionResponse } from './iosUpdateDeviceStatusCollectionResponse';
import { serializeIosUpdateDeviceStatus } from './serializeIosUpdateDeviceStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosUpdateDeviceStatusCollectionResponse(iosUpdateDeviceStatusCollectionResponse: IosUpdateDeviceStatusCollectionResponse | undefined = {} as IosUpdateDeviceStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosUpdateDeviceStatusCollectionResponse),
        "value": n => { iosUpdateDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValues<IosUpdateDeviceStatus>(createIosUpdateDeviceStatusFromDiscriminatorValue); },
    }
}

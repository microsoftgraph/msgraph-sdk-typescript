import { createDeviceConfigurationDeviceStatusFromDiscriminatorValue } from './createDeviceConfigurationDeviceStatusFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DeviceConfigurationDeviceStatus } from './deviceConfigurationDeviceStatus';
import { type DeviceConfigurationDeviceStatusCollectionResponse } from './deviceConfigurationDeviceStatusCollectionResponse';
import { serializeDeviceConfigurationDeviceStatus } from './serializeDeviceConfigurationDeviceStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationDeviceStatusCollectionResponse(deviceConfigurationDeviceStatusCollectionResponse: DeviceConfigurationDeviceStatusCollectionResponse | undefined = {} as DeviceConfigurationDeviceStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationDeviceStatusCollectionResponse),
        "value": n => { deviceConfigurationDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValues<DeviceConfigurationDeviceStatus>(createDeviceConfigurationDeviceStatusFromDiscriminatorValue); },
    }
}

import { createDeviceConfigurationUserStatusFromDiscriminatorValue } from './createDeviceConfigurationUserStatusFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DeviceConfigurationUserStatus } from './deviceConfigurationUserStatus';
import { type DeviceConfigurationUserStatusCollectionResponse } from './deviceConfigurationUserStatusCollectionResponse';
import { serializeDeviceConfigurationUserStatus } from './serializeDeviceConfigurationUserStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationUserStatusCollectionResponse(deviceConfigurationUserStatusCollectionResponse: DeviceConfigurationUserStatusCollectionResponse | undefined = {} as DeviceConfigurationUserStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationUserStatusCollectionResponse),
        "value": n => { deviceConfigurationUserStatusCollectionResponse.value = n.getCollectionOfObjectValues<DeviceConfigurationUserStatus>(createDeviceConfigurationUserStatusFromDiscriminatorValue); },
    }
}

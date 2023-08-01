import {createDeviceConfigurationStateFromDiscriminatorValue} from './createDeviceConfigurationStateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DeviceConfigurationState} from './deviceConfigurationState';
import type {DeviceConfigurationStateCollectionResponse} from './deviceConfigurationStateCollectionResponse';
import {serializeDeviceConfigurationState} from './serializeDeviceConfigurationState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationStateCollectionResponse(deviceConfigurationStateCollectionResponse: DeviceConfigurationStateCollectionResponse | undefined = {} as DeviceConfigurationStateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationStateCollectionResponse),
        "value": n => { deviceConfigurationStateCollectionResponse.value = n.getCollectionOfObjectValues<DeviceConfigurationState>(createDeviceConfigurationStateFromDiscriminatorValue); },
    }
}

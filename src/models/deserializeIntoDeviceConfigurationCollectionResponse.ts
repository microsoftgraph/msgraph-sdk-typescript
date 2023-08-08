import {createDeviceConfigurationFromDiscriminatorValue} from './createDeviceConfigurationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DeviceConfiguration} from './deviceConfiguration';
import type {DeviceConfigurationCollectionResponse} from './deviceConfigurationCollectionResponse';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationCollectionResponse(deviceConfigurationCollectionResponse: DeviceConfigurationCollectionResponse | undefined = {} as DeviceConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationCollectionResponse),
        "value": n => { deviceConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<DeviceConfiguration>(createDeviceConfigurationFromDiscriminatorValue); },
    }
}

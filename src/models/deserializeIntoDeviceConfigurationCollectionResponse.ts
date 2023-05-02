import {createDeviceConfigurationFromDiscriminatorValue} from './createDeviceConfigurationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceConfiguration} from './deviceConfiguration';
import {DeviceConfigurationCollectionResponse} from './deviceConfigurationCollectionResponse';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationCollectionResponse(deviceConfigurationCollectionResponse: DeviceConfigurationCollectionResponse | undefined = {} as DeviceConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceConfigurationCollectionResponse),
        "value": n => { deviceConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<DeviceConfiguration>(createDeviceConfigurationFromDiscriminatorValue); },
    }
}

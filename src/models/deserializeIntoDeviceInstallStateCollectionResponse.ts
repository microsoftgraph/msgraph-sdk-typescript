import {createDeviceInstallStateFromDiscriminatorValue} from './createDeviceInstallStateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DeviceInstallState} from './deviceInstallState';
import type {DeviceInstallStateCollectionResponse} from './deviceInstallStateCollectionResponse';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceInstallStateCollectionResponse(deviceInstallStateCollectionResponse: DeviceInstallStateCollectionResponse | undefined = {} as DeviceInstallStateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceInstallStateCollectionResponse),
        "value": n => { deviceInstallStateCollectionResponse.value = n.getCollectionOfObjectValues<DeviceInstallState>(createDeviceInstallStateFromDiscriminatorValue); },
    }
}

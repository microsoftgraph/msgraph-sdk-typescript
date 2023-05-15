import {createDeviceInstallStateFromDiscriminatorValue} from './createDeviceInstallStateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceInstallState} from './deviceInstallState';
import {DeviceInstallStateCollectionResponse} from './deviceInstallStateCollectionResponse';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceInstallStateCollectionResponse(deviceInstallStateCollectionResponse: DeviceInstallStateCollectionResponse | undefined = {} as DeviceInstallStateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceInstallStateCollectionResponse),
        "value": n => { deviceInstallStateCollectionResponse.value = n.getCollectionOfObjectValues<DeviceInstallState>(createDeviceInstallStateFromDiscriminatorValue); },
    }
}

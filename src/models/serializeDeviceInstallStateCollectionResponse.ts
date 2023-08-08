import type {DeviceInstallState} from './deviceInstallState';
import type {DeviceInstallStateCollectionResponse} from './deviceInstallStateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceInstallStateCollectionResponse(writer: SerializationWriter, deviceInstallStateCollectionResponse: DeviceInstallStateCollectionResponse | undefined = {} as DeviceInstallStateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceInstallStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceInstallState>("value", deviceInstallStateCollectionResponse.value, serializeDeviceInstallState);
}

import {DeviceInstallState} from './deviceInstallState';
import {DeviceInstallStateCollectionResponse} from './deviceInstallStateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceInstallStateCollectionResponse(writer: SerializationWriter, deviceInstallStateCollectionResponse: DeviceInstallStateCollectionResponse | undefined = {} as DeviceInstallStateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceInstallStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceInstallState>("value", deviceInstallStateCollectionResponse.value, serializeDeviceInstallState);
}

import { type DeviceConfigurationState } from './deviceConfigurationState';
import { type DeviceConfigurationStateCollectionResponse } from './deviceConfigurationStateCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceConfigurationState } from './serializeDeviceConfigurationState';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationStateCollectionResponse(writer: SerializationWriter, deviceConfigurationStateCollectionResponse: DeviceConfigurationStateCollectionResponse | undefined = {} as DeviceConfigurationStateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceConfigurationState>("value", deviceConfigurationStateCollectionResponse.value, serializeDeviceConfigurationState);
}

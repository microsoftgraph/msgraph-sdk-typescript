import {DeviceConfigurationState} from './deviceConfigurationState';
import {DeviceConfigurationStateCollectionResponse} from './deviceConfigurationStateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationState} from './serializeDeviceConfigurationState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationStateCollectionResponse(deviceConfigurationStateCollectionResponse: DeviceConfigurationStateCollectionResponse | undefined = {} as DeviceConfigurationStateCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceConfigurationState>("value", deviceConfigurationStateCollectionResponse.value, serializeDeviceConfigurationState);
}

import type {DeviceConfigurationDeviceStatus} from './deviceConfigurationDeviceStatus';
import type {DeviceConfigurationDeviceStatusCollectionResponse} from './deviceConfigurationDeviceStatusCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationDeviceStatus} from './serializeDeviceConfigurationDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationDeviceStatusCollectionResponse(writer: SerializationWriter, deviceConfigurationDeviceStatusCollectionResponse: DeviceConfigurationDeviceStatusCollectionResponse | undefined = {} as DeviceConfigurationDeviceStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationDeviceStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceConfigurationDeviceStatus>("value", deviceConfigurationDeviceStatusCollectionResponse.value, serializeDeviceConfigurationDeviceStatus);
}

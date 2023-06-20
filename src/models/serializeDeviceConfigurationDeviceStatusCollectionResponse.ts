import {DeviceConfigurationDeviceStatus} from './deviceConfigurationDeviceStatus';
import {DeviceConfigurationDeviceStatusCollectionResponse} from './deviceConfigurationDeviceStatusCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationDeviceStatus} from './serializeDeviceConfigurationDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationDeviceStatusCollectionResponse(deviceConfigurationDeviceStatusCollectionResponse: DeviceConfigurationDeviceStatusCollectionResponse | undefined = {} as DeviceConfigurationDeviceStatusCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationDeviceStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceConfigurationDeviceStatus>("value", deviceConfigurationDeviceStatusCollectionResponse.value, serializeDeviceConfigurationDeviceStatus);
}

import {DeviceConfigurationUserStatus} from './deviceConfigurationUserStatus';
import {DeviceConfigurationUserStatusCollectionResponse} from './deviceConfigurationUserStatusCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationUserStatus} from './serializeDeviceConfigurationUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationUserStatusCollectionResponse(deviceConfigurationUserStatusCollectionResponse: DeviceConfigurationUserStatusCollectionResponse | undefined = {} as DeviceConfigurationUserStatusCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationUserStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceConfigurationUserStatus>("value", deviceConfigurationUserStatusCollectionResponse.value, serializeDeviceConfigurationUserStatus);
}

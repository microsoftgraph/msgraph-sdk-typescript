import { type DeviceConfigurationUserStatus } from './deviceConfigurationUserStatus';
import { type DeviceConfigurationUserStatusCollectionResponse } from './deviceConfigurationUserStatusCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceConfigurationUserStatus } from './serializeDeviceConfigurationUserStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationUserStatusCollectionResponse(writer: SerializationWriter, deviceConfigurationUserStatusCollectionResponse: DeviceConfigurationUserStatusCollectionResponse | undefined = {} as DeviceConfigurationUserStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationUserStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceConfigurationUserStatus>("value", deviceConfigurationUserStatusCollectionResponse.value, serializeDeviceConfigurationUserStatus);
}

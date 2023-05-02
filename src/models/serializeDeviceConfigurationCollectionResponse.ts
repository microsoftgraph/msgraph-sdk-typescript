import {DeviceConfiguration} from './deviceConfiguration';
import {DeviceConfigurationCollectionResponse} from './deviceConfigurationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationCollectionResponse(writer: SerializationWriter, deviceConfigurationCollectionResponse: DeviceConfigurationCollectionResponse | undefined = {} as DeviceConfigurationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceConfiguration>("value", deviceConfigurationCollectionResponse.value, serializeDeviceConfiguration);
}

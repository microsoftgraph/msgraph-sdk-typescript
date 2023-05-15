import {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import {DeviceConfigurationAssignmentCollectionResponse} from './deviceConfigurationAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationAssignment} from './serializeDeviceConfigurationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationAssignmentCollectionResponse(writer: SerializationWriter, deviceConfigurationAssignmentCollectionResponse: DeviceConfigurationAssignmentCollectionResponse | undefined = {} as DeviceConfigurationAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("value", deviceConfigurationAssignmentCollectionResponse.value, serializeDeviceConfigurationAssignment);
}

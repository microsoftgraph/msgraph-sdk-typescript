import {DeviceConfigurationAssignment} from '../../../../models/deviceConfigurationAssignment';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationAssignment} from '../../../../models/serializeDeviceConfigurationAssignment';
import {AssignResponse} from './assignResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignResponse(assignResponse: AssignResponse | undefined = {} as AssignResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, assignResponse)
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("value", assignResponse.value, serializeDeviceConfigurationAssignment);
}

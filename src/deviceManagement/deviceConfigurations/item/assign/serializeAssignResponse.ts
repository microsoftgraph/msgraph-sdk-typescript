import { type DeviceConfigurationAssignment } from '../../../../models/deviceConfigurationAssignment';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceConfigurationAssignment } from '../../../../models/serializeDeviceConfigurationAssignment';
import { type AssignResponse } from './assignResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAssignResponse(writer: SerializationWriter, assignResponse: AssignResponse | undefined = {} as AssignResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, assignResponse)
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("value", assignResponse.value, serializeDeviceConfigurationAssignment);
}

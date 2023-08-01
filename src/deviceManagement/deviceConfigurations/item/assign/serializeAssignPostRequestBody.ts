import type {DeviceConfigurationAssignment} from '../../../../models/deviceConfigurationAssignment';
import {serializeDeviceConfigurationAssignment} from '../../../../models/serializeDeviceConfigurationAssignment';
import type {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("assignments", assignPostRequestBody.assignments, serializeDeviceConfigurationAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}

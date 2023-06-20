import {DeviceConfigurationAssignment} from '../../../../models/deviceConfigurationAssignment';
import {serializeDeviceConfigurationAssignment} from '../../../../models/serializeDeviceConfigurationAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("assignments", assignPostRequestBody.assignments, serializeDeviceConfigurationAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}

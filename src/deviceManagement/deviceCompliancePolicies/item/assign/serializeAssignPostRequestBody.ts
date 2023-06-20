import {DeviceCompliancePolicyAssignment} from '../../../../models/deviceCompliancePolicyAssignment';
import {serializeDeviceCompliancePolicyAssignment} from '../../../../models/serializeDeviceCompliancePolicyAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignment>("assignments", assignPostRequestBody.assignments, serializeDeviceCompliancePolicyAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}

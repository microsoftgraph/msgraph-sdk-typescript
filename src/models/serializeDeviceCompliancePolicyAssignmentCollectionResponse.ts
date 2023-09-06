import { type DeviceCompliancePolicyAssignment } from './deviceCompliancePolicyAssignment';
import { type DeviceCompliancePolicyAssignmentCollectionResponse } from './deviceCompliancePolicyAssignmentCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceCompliancePolicyAssignment } from './serializeDeviceCompliancePolicyAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyAssignmentCollectionResponse(writer: SerializationWriter, deviceCompliancePolicyAssignmentCollectionResponse: DeviceCompliancePolicyAssignmentCollectionResponse | undefined = {} as DeviceCompliancePolicyAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignment>("value", deviceCompliancePolicyAssignmentCollectionResponse.value, serializeDeviceCompliancePolicyAssignment);
}

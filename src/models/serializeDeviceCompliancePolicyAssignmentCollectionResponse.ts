import {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {DeviceCompliancePolicyAssignmentCollectionResponse} from './deviceCompliancePolicyAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicyAssignment} from './serializeDeviceCompliancePolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyAssignmentCollectionResponse(writer: SerializationWriter, deviceCompliancePolicyAssignmentCollectionResponse: DeviceCompliancePolicyAssignmentCollectionResponse | undefined = {} as DeviceCompliancePolicyAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignment>("value", deviceCompliancePolicyAssignmentCollectionResponse.value, serializeDeviceCompliancePolicyAssignment);
}

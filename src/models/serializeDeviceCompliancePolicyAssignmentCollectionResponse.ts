import {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {DeviceCompliancePolicyAssignmentCollectionResponse} from './deviceCompliancePolicyAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicyAssignment} from './serializeDeviceCompliancePolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyAssignmentCollectionResponse(deviceCompliancePolicyAssignmentCollectionResponse: DeviceCompliancePolicyAssignmentCollectionResponse | undefined = {} as DeviceCompliancePolicyAssignmentCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignment>("value", deviceCompliancePolicyAssignmentCollectionResponse.value, serializeDeviceCompliancePolicyAssignment);
}

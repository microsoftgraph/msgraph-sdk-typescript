import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyAssignment(writer: SerializationWriter, deviceCompliancePolicyAssignment: DeviceCompliancePolicyAssignment | undefined = {} as DeviceCompliancePolicyAssignment) : void {
        serializeEntity(writer, deviceCompliancePolicyAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", deviceCompliancePolicyAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}

import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyAssignment(writer: SerializationWriter, deviceCompliancePolicyAssignment: DeviceCompliancePolicyAssignment | undefined = {} as DeviceCompliancePolicyAssignment) : void {
        serializeEntity(writer, deviceCompliancePolicyAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", deviceCompliancePolicyAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}

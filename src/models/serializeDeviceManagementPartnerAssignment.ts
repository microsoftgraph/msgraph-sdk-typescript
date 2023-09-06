import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type DeviceManagementPartnerAssignment } from './deviceManagementPartnerAssignment';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementPartnerAssignment(writer: SerializationWriter, deviceManagementPartnerAssignment: DeviceManagementPartnerAssignment | undefined = {} as DeviceManagementPartnerAssignment) : void {
        writer.writeStringValue("@odata.type", deviceManagementPartnerAssignment.odataType);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", deviceManagementPartnerAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
        writer.writeAdditionalData(deviceManagementPartnerAssignment.additionalData);
}

import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceManagementPartnerAssignment} from './deviceManagementPartnerAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementPartnerAssignment(writer: SerializationWriter, deviceManagementPartnerAssignment: DeviceManagementPartnerAssignment | undefined = {} as DeviceManagementPartnerAssignment) : void {
        writer.writeStringValue("@odata.type", deviceManagementPartnerAssignment.odataType);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", deviceManagementPartnerAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
        writer.writeAdditionalData(deviceManagementPartnerAssignment.additionalData);
}

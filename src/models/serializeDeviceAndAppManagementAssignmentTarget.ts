import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementAssignmentTarget(writer: SerializationWriter, deviceAndAppManagementAssignmentTarget: DeviceAndAppManagementAssignmentTarget | undefined = {} as DeviceAndAppManagementAssignmentTarget) : void {
        writer.writeStringValue("@odata.type", deviceAndAppManagementAssignmentTarget.odataType);
        writer.writeAdditionalData(deviceAndAppManagementAssignmentTarget.additionalData);
}

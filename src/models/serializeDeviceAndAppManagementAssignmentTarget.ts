import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementAssignmentTarget(deviceAndAppManagementAssignmentTarget: DeviceAndAppManagementAssignmentTarget | undefined = {} as DeviceAndAppManagementAssignmentTarget, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", deviceAndAppManagementAssignmentTarget.odataType);
        writer.writeAdditionalData(deviceAndAppManagementAssignmentTarget.additionalData);
}

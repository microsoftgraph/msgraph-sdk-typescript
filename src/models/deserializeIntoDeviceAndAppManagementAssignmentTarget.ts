import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementAssignmentTarget(deviceAndAppManagementAssignmentTarget: DeviceAndAppManagementAssignmentTarget | undefined = {} as DeviceAndAppManagementAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { deviceAndAppManagementAssignmentTarget.odataType = n.getStringValue(); },
    }
}

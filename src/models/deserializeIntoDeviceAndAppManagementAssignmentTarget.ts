import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementAssignmentTarget(deviceAndAppManagementAssignmentTarget: DeviceAndAppManagementAssignmentTarget | undefined = {} as DeviceAndAppManagementAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { deviceAndAppManagementAssignmentTarget.odataType = n.getStringValue(); },
    }
}

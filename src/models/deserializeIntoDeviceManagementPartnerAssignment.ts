import { createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue } from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type DeviceManagementPartnerAssignment } from './deviceManagementPartnerAssignment';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementPartnerAssignment(deviceManagementPartnerAssignment: DeviceManagementPartnerAssignment | undefined = {} as DeviceManagementPartnerAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { deviceManagementPartnerAssignment.odataType = n.getStringValue(); },
        "target": n => { deviceManagementPartnerAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}

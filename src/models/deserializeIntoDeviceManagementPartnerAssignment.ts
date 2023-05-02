import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceManagementPartnerAssignment} from './deviceManagementPartnerAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementPartnerAssignment(deviceManagementPartnerAssignment: DeviceManagementPartnerAssignment | undefined = {} as DeviceManagementPartnerAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { deviceManagementPartnerAssignment.odataType = n.getStringValue(); },
        "target": n => { deviceManagementPartnerAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}

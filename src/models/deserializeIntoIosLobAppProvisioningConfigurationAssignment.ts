import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {IosLobAppProvisioningConfigurationAssignment} from './iosLobAppProvisioningConfigurationAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosLobAppProvisioningConfigurationAssignment(iosLobAppProvisioningConfigurationAssignment: IosLobAppProvisioningConfigurationAssignment | undefined = {} as IosLobAppProvisioningConfigurationAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(iosLobAppProvisioningConfigurationAssignment),
        "target": n => { iosLobAppProvisioningConfigurationAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}

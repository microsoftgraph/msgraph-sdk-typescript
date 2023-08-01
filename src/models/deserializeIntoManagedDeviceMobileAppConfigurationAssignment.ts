import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationAssignment(managedDeviceMobileAppConfigurationAssignment: ManagedDeviceMobileAppConfigurationAssignment | undefined = {} as ManagedDeviceMobileAppConfigurationAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationAssignment),
        "target": n => { managedDeviceMobileAppConfigurationAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}

import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type ManagedDeviceMobileAppConfigurationAssignment } from './managedDeviceMobileAppConfigurationAssignment';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationAssignment(writer: SerializationWriter, managedDeviceMobileAppConfigurationAssignment: ManagedDeviceMobileAppConfigurationAssignment | undefined = {} as ManagedDeviceMobileAppConfigurationAssignment) : void {
        serializeEntity(writer, managedDeviceMobileAppConfigurationAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", managedDeviceMobileAppConfigurationAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}

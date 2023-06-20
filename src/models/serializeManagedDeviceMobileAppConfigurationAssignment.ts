import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationAssignment(managedDeviceMobileAppConfigurationAssignment: ManagedDeviceMobileAppConfigurationAssignment | undefined = {} as ManagedDeviceMobileAppConfigurationAssignment, writer: SerializationWriter) : void {
        serializeEntity(writer, managedDeviceMobileAppConfigurationAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", managedDeviceMobileAppConfigurationAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}

import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { InstallIntent } from './installIntent';
import { type ManagedEBookAssignment } from './managedEBookAssignment';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedEBookAssignment(writer: SerializationWriter, managedEBookAssignment: ManagedEBookAssignment | undefined = {} as ManagedEBookAssignment) : void {
        serializeEntity(writer, managedEBookAssignment)
        writer.writeEnumValue<InstallIntent>("installIntent", managedEBookAssignment.installIntent);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", managedEBookAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}

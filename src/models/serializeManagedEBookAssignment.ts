import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {InstallIntent} from './installIntent';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedEBookAssignment(managedEBookAssignment: ManagedEBookAssignment | undefined = {} as ManagedEBookAssignment, writer: SerializationWriter) : void {
        serializeEntity(writer, managedEBookAssignment)
        writer.writeEnumValue<InstallIntent>("installIntent", managedEBookAssignment.installIntent);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", managedEBookAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}

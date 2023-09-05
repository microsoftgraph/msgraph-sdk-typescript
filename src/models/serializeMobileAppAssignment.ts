import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { InstallIntent } from './installIntent';
import { type MobileAppAssignment } from './mobileAppAssignment';
import { type MobileAppAssignmentSettings } from './mobileAppAssignmentSettings';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { serializeEntity } from './serializeEntity';
import { serializeMobileAppAssignmentSettings } from './serializeMobileAppAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMobileAppAssignment(writer: SerializationWriter, mobileAppAssignment: MobileAppAssignment | undefined = {} as MobileAppAssignment) : void {
        serializeEntity(writer, mobileAppAssignment)
        writer.writeEnumValue<InstallIntent>("intent", mobileAppAssignment.intent);
        writer.writeObjectValue<MobileAppAssignmentSettings>("settings", mobileAppAssignment.settings, serializeMobileAppAssignmentSettings);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", mobileAppAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}

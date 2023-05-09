import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {InstallIntent} from './installIntent';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppAssignment(writer: SerializationWriter, mobileAppAssignment: MobileAppAssignment | undefined = {} as MobileAppAssignment) : void {
        serializeEntity(writer, mobileAppAssignment)
        writer.writeEnumValue<InstallIntent>("intent", mobileAppAssignment.intent);
        writer.writeObjectValue<MobileAppAssignmentSettings>("settings", mobileAppAssignment.settings, serializeMobileAppAssignmentSettings);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", mobileAppAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}

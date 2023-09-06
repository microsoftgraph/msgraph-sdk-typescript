import { serializeMobileAppAssignmentSettings } from './serializeMobileAppAssignmentSettings';
import { type WindowsAppXAppAssignmentSettings } from './windowsAppXAppAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsAppXAppAssignmentSettings(writer: SerializationWriter, windowsAppXAppAssignmentSettings: WindowsAppXAppAssignmentSettings | undefined = {} as WindowsAppXAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, windowsAppXAppAssignmentSettings)
        writer.writeBooleanValue("useDeviceContext", windowsAppXAppAssignmentSettings.useDeviceContext);
}

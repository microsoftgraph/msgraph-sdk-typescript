import { serializeMobileAppAssignmentSettings } from './serializeMobileAppAssignmentSettings';
import { type WindowsUniversalAppXAppAssignmentSettings } from './windowsUniversalAppXAppAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsUniversalAppXAppAssignmentSettings(writer: SerializationWriter, windowsUniversalAppXAppAssignmentSettings: WindowsUniversalAppXAppAssignmentSettings | undefined = {} as WindowsUniversalAppXAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, windowsUniversalAppXAppAssignmentSettings)
        writer.writeBooleanValue("useDeviceContext", windowsUniversalAppXAppAssignmentSettings.useDeviceContext);
}

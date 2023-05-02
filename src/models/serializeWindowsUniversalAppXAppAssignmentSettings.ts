import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {WindowsUniversalAppXAppAssignmentSettings} from './windowsUniversalAppXAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsUniversalAppXAppAssignmentSettings(writer: SerializationWriter, windowsUniversalAppXAppAssignmentSettings: WindowsUniversalAppXAppAssignmentSettings | undefined = {} as WindowsUniversalAppXAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, windowsUniversalAppXAppAssignmentSettings)
        writer.writeBooleanValue("useDeviceContext", windowsUniversalAppXAppAssignmentSettings.useDeviceContext);
}

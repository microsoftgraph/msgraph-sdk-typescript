import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {WindowsAppXAppAssignmentSettings} from './windowsAppXAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsAppXAppAssignmentSettings(writer: SerializationWriter, windowsAppXAppAssignmentSettings: WindowsAppXAppAssignmentSettings | undefined = {} as WindowsAppXAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, windowsAppXAppAssignmentSettings)
        writer.writeBooleanValue("useDeviceContext", windowsAppXAppAssignmentSettings.useDeviceContext);
}

import {serializeWindowsInformationProtectionApp} from './serializeWindowsInformationProtectionApp';
import {WindowsInformationProtectionDesktopApp} from './windowsInformationProtectionDesktopApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionDesktopApp(writer: SerializationWriter, windowsInformationProtectionDesktopApp: WindowsInformationProtectionDesktopApp | undefined = {} as WindowsInformationProtectionDesktopApp) : void {
        serializeWindowsInformationProtectionApp(writer, windowsInformationProtectionDesktopApp)
        writer.writeStringValue("binaryName", windowsInformationProtectionDesktopApp.binaryName);
        writer.writeStringValue("binaryVersionHigh", windowsInformationProtectionDesktopApp.binaryVersionHigh);
        writer.writeStringValue("binaryVersionLow", windowsInformationProtectionDesktopApp.binaryVersionLow);
}

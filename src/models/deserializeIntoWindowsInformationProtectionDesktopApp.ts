import {deserializeIntoWindowsInformationProtectionApp} from './deserializeIntoWindowsInformationProtectionApp';
import {WindowsInformationProtectionDesktopApp} from './windowsInformationProtectionDesktopApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionDesktopApp(windowsInformationProtectionDesktopApp: WindowsInformationProtectionDesktopApp | undefined = {} as WindowsInformationProtectionDesktopApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtectionApp(windowsInformationProtectionDesktopApp),
        "binaryName": n => { windowsInformationProtectionDesktopApp.binaryName = n.getStringValue(); },
        "binaryVersionHigh": n => { windowsInformationProtectionDesktopApp.binaryVersionHigh = n.getStringValue(); },
        "binaryVersionLow": n => { windowsInformationProtectionDesktopApp.binaryVersionLow = n.getStringValue(); },
    }
}

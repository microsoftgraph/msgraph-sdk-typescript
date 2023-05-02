import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {WindowsUniversalAppXAppAssignmentSettings} from './windowsUniversalAppXAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUniversalAppXAppAssignmentSettings(windowsUniversalAppXAppAssignmentSettings: WindowsUniversalAppXAppAssignmentSettings | undefined = {} as WindowsUniversalAppXAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(windowsUniversalAppXAppAssignmentSettings),
        "useDeviceContext": n => { windowsUniversalAppXAppAssignmentSettings.useDeviceContext = n.getBooleanValue(); },
    }
}

import { deserializeIntoMobileAppAssignmentSettings } from './deserializeIntoMobileAppAssignmentSettings';
import { type WindowsUniversalAppXAppAssignmentSettings } from './windowsUniversalAppXAppAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUniversalAppXAppAssignmentSettings(windowsUniversalAppXAppAssignmentSettings: WindowsUniversalAppXAppAssignmentSettings | undefined = {} as WindowsUniversalAppXAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(windowsUniversalAppXAppAssignmentSettings),
        "useDeviceContext": n => { windowsUniversalAppXAppAssignmentSettings.useDeviceContext = n.getBooleanValue(); },
    }
}

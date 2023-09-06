import { deserializeIntoMobileAppAssignmentSettings } from './deserializeIntoMobileAppAssignmentSettings';
import { type WindowsAppXAppAssignmentSettings } from './windowsAppXAppAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsAppXAppAssignmentSettings(windowsAppXAppAssignmentSettings: WindowsAppXAppAssignmentSettings | undefined = {} as WindowsAppXAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(windowsAppXAppAssignmentSettings),
        "useDeviceContext": n => { windowsAppXAppAssignmentSettings.useDeviceContext = n.getBooleanValue(); },
    }
}

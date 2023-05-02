import {deserializeIntoWindowsUniversalAppXAppAssignmentSettings} from './deserializeIntoWindowsUniversalAppXAppAssignmentSettings';
import {WindowsUniversalAppXAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUniversalAppXAppAssignmentSettings;
}

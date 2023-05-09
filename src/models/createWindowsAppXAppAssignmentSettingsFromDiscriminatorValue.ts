import {deserializeIntoWindowsAppXAppAssignmentSettings} from './deserializeIntoWindowsAppXAppAssignmentSettings';
import {WindowsAppXAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsAppXAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsAppXAppAssignmentSettings;
}

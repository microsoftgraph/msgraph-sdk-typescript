import {WindowsAppXAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsAppXAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsAppXAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsAppXAppAssignmentSettings();
}

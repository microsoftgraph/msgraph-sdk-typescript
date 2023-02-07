import {WindowsUniversalAppXAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUniversalAppXAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUniversalAppXAppAssignmentSettings();
}

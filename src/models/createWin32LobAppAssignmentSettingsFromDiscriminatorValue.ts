import {Win32LobAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppAssignmentSettings();
}

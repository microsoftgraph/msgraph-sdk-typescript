import {Win32LobAppAssignmentSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppAssignmentSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppAssignmentSettingsImpl();
}

import {deserializeIntoWin32LobAppAssignmentSettings} from './deserializeIntoWin32LobAppAssignmentSettings';
import {Win32LobAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppAssignmentSettings;
}

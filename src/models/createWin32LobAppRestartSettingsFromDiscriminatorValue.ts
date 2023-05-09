import {deserializeIntoWin32LobAppRestartSettings} from './deserializeIntoWin32LobAppRestartSettings';
import {Win32LobAppRestartSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRestartSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppRestartSettings;
}

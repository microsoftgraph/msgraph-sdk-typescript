import {Win32LobAppRestartSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRestartSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppRestartSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppRestartSettings();
}

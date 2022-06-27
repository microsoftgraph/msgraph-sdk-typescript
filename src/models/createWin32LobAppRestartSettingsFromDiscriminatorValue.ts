import {Win32LobAppRestartSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppRestartSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppRestartSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppRestartSettingsImpl();
}

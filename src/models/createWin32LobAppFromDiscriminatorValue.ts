import {Win32LobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobApp();
}

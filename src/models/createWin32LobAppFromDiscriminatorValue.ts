import {Win32LobAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppImpl();
}

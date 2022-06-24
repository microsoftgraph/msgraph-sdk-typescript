import {Win32LobAppReturnCodeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppReturnCodeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppReturnCodeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppReturnCodeImpl();
}
